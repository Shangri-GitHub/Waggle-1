import Backbone from 'backbone';
import $ from 'jQuery';

import CheckinModel from '../Models/CheckinModel';

export default Backbone.Collection.extend({
  model: CheckinModel,
  url: `https://baas.kinvey.com/appdata/kid_SkBnla5Y/CheckinCollection`,
  toggleCheckin: function(session, userModel, placeId, checkout) {

    //ect entity creation time _kmd.ect on kinvey response
      //use this to find when they checked in
      //run a query on the ect date/time so that if it's been x-number of hours/days, DESTROY this model from the collection
      //var aweekago = new Date()
      // aweekago.getDate()
      //aweekago.setDate(aweekago.getDate() -7)
        //compare Date objects any time you manipulate a date, you need to make a new date
    let username = session.get('username');
    let alreadyCheckedin = this.where({userCheckedin: username, place: placeId});

    if (!alreadyCheckedin[0]) {
      this.create(
        {place: placeId, userCheckedin: username},
        {success: (model, response) => {
          console.log('YOU CHECKED IN!');
          console.log('model', model);

          let oldPlaces = session.get('recentPlaces');
          session.set('recentPlaces', oldPlaces.concat(model.toJSON()));
          userModel.set('recentPlaces', oldPlaces.concat(model.toJSON()));

          // console.log('userModel recentPlaces', userModel.get('recentPlaces'));

        }, error: function(model, response) {
          throw new Error('FAILED TO CHECKIN');
        }
      });
    } else {
      console.log('checkedinModel', alreadyCheckedin[0].attributes._kmd.ect);
      // let currTime = new Date();
      // let currHour = currTime.getHours();
      // let currMins = currTime.getMinutes();
      // let thisTime = currHour + ':' + currMins;
      // console.log(thisTime);
      // if ()
      //get most recent checkin Date
      let checkedinModel = this.get(alreadyCheckedin[0].attributes._id)
      console.log(userModel.get('recentPlaces'));
      // session.unset('recentPlaces', alreadyCheckedin);
      // userModel.unset('recentPlaces', alreadyCheckedin);
      checkedinModel.destroy();
      console.log('USER CHECKEDOUT');
    }
  },
});

import Backbone from 'backbone';
import $ from 'jquery';

import UserModel from '../Models/UserModel';

const UserCollection = Backbone.Collection.extend({
  model: UserModel,
  url: `https://baas.kinvey.com/user/kid_SkBnla5Y/`,
  findMe: function(username) {
    return new Promise((resolve, reject) => {
      this.fetch({
      data: {query: JSON.stringify({username: username})},
      success: (models, response) => {
        resolve(response);
      }, error: function (response) {
          console.error('FAILED TO FETCH MY MESSAGES ', response);
          reject(response);
      }});
    });
  },
  findUser: function(username) {
    return new Promise((resolve, reject) => {
      this.fetch({
      data: {query: JSON.stringify({username: username})},
      success: (models, response) => {
        resolve(this.get(response[0]._id));
      }, error: function (response) {
          console.error('FAILED TO FETCH MY MESSAGES ', response);
          reject(models);
      }});
    });
  },
});

export default UserCollection;

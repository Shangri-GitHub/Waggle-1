import React from 'react';

import store from '../../store';

export default React.createClass({
  // getInitialState: function() {
  //   return {
  //     firstName: undefined,
  //     lastName: undefined,
  //     age: undefined,
  //   }
  // },
  // updateRefs: function() {
  //   let firstName = this.refs.firstName.value;
  //   let lastName = this.refs.lastName.value;
  //   let age = this.refs.age.value;
  //
  //   this.setState({
  //     firstName: firstName,
  //     lastName: lastName,
  //     age: age,
  //   });
  // },
  signup1(e) {
    e.preventDefault();

    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let age = this.refs.age.value;

    store.session.set('firstName', firstName);
    store.session.set('lastName', lastName);
    store.session.set('age', age);

    this.props.signup1(firstName, lastName, age);
  },
  componentDidMount: function() {
    this.refs.firstName.value = store.session.get('firstName');
    this.refs.lastName.value = store.session.get('lastName');
    this.refs.age.value = store.session.get('age');
  },
  render() {
    return (
      <div>
        <form className="modal-body signup1" onSubmit={this.signup1}>
          <h3>Tell us a little about you</h3>

          <label htmlFor="input-username">First name</label>
          <input className="user-info-input signup-input" onChange={this.updateRefs} type="text" placeholder="First name" ref="firstName" role="textbox" tabIndex="1" />

          <label htmlFor="input-username">Last name</label>
          <input className="user-info-input signup-input" onChange={this.updateRefs} type="text" placeholder="Last name" ref="lastName" role="textbox" tabIndex="2" />

          <label htmlFor="input-username">Age</label>
          <input className="user-info-input signup-input" onChange={this.updateRefs} type="text"  placeholder="Age" ref="age" role="textbox" tabIndex="3" />

          <input className="submit-btn" type="submit" />
        </form>

        <footer className="modal-footer signup-footer">
          <button className="modal-btn" role="button" tabIndex="5" onClick={this.signup1}>Next</button>
          <button className="modal-btn cancel-btn" role="button" tabIndex="5" onClick={this.props.hideModal}>Cancel</button>
        </footer>
      </div>
    );
  }
});

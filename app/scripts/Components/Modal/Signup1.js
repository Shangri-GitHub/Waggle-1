import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      firstName: undefined,
      lastName: undefined,
      age: undefined,
    }
  },
  signup1(e) {
    e.preventDefault();

    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let age = this.refs.age.value;
    this.props.signup1(firstName, lastName, age);
    this.setState({firstName: firstName, lastName: lastName, age: age});
  },
  render() {
    return (
      <form className="modal-body signup1" onSubmit={this.signup1}>
        <h3>Tell us a little about you</h3>

        <label htmlFor="input-username">First name</label>
        <input className="user-info-input" type="text" value={this.state.firstName} placeholder="First name" ref="firstName" role="textbox" tabIndex="1" />

        <label htmlFor="input-username">Last name</label>
        <input className="user-info-input" type="text" value={this.state.lastName} placeholder="Last name" ref="lastName" role="textbox" tabIndex="2" />

        <label htmlFor="input-username">Age</label>
        <input className="user-info-input" type="text" value={this.state.age} placeholder="Age" ref="age" role="textbox" tabIndex="3" />

        <input className="submit-btn" type="submit" value="submit" role="button" onSubmit={this.signup1}/>
      </form>
    );
  }
});

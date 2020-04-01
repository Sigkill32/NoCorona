import React, { Component } from "react";

class Comments extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="comments">
        <h2>Leave a Reply</h2>
        <div className="form">
          <div className="guest-details">
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
              placeholder="Your Name"
            />
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={email}
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={message}
            placeholder="Your Message"
            className="message"
          />
          <button onClick={this.handleSubmit} className="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;

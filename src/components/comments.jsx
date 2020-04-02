import React, { Component } from "react";
import { db } from "../config/firebaseConf";

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

  writeData = async (name, email, message) => {
    try {
      await db.collection("Comments").add({
        name: name,
        email: email,
        message: message
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async () => {
    const data = localStorage.getItem("isSent");
    const { name, email, message } = this.state;
    if (!data) {
      localStorage.setItem("isSent", true);
      await this.writeData(name, email, message);
      this.setState({ name: "", email: "", message: "" });
      alert("Your response has been recorded");
    } else {
      alert(
        "Can't submit current response. You've already submitted a response"
      );
      this.setState({ name: "", email: "", message: "" });
    }
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
              required
            />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={email}
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={message}
            placeholder="Your Message"
            className="message"
            required
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

import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;

    const res = await fetch(
      "https://contactfrom-5c4cd-default-rtdb.firebaseio.com/contactform.json",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
    };
    
  return (
    <div>
      <head />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>contact form</title>
      <head />

      <body>
        <link href="contact-form.css" rel="stylesheet" />

        <div className="fcf-body">
          <div id="fcf-form">
            <h3 className="fcf-h3">Contact us</h3>

            <form id="fcf-form-id" className="fcf-form-class" method="POST">
              <div className="fcf-form-group">
                <label for="name" className="fcf-label">
                  Your name
                </label>
                <div className="fcf-input-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={getUserData}
                    className="fcf-form-control"
                    required
                  />
                </div>
              </div>

              <div className="fcf-form-group">
                <label for="email" className="fcf-label">
                  Your email address
                </label>
                <div className="fcf-input-group">
                  <input
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={getUserData}
                    name="email"
                    className="fcf-form-control"
                    required
                  />
                </div>
              </div>

              <div className="fcf-form-group">
                <label for="Message" className="fcf-label">
                  Your message
                </label>
                <div className="fcf-input-group">
                  <textarea
                    id="message"
                    name="message"
                    value={user.message}
                    onChange={getUserData}
                    className="fcf-form-control"
                    rows="6"
                    maxlength="3000"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="fcf-form-group">
                <button
                  type="submit"
                                  id="fcf-button"
                                  onClick={postData}
                  className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
                >
                  Send Message
                </button>
              </div>

              <div className="fcf-credit" id="fcf-credit">
                Simple HTML email form provided by{" "}
                <a href="https://www.majesticform.com" target="_blank">
                  MajesticForm
                </a>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Contact;

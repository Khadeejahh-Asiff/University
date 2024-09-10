import React from "react";
import "../styles/Contact.css";
import MsgIcon from "../assests/msg-icon.png";
import MailIcon from "../assests/mail-icon.png";
import PhoneIcon from "../assests/phone-icon.png";
import LocationIcon from "../assests/location-icon.png";
import WhiteArrow from "../assests/white-arrow.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending . . . .");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5518379-71eb-4a17-bfff-2a0113ea8b88");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }

    // Clear the result message after 2 seconds
    setTimeout(() => {
      setResult("");
    }, 2000); // 2000ms = 2 seconds
  };

  return (
    <div className="contact" id="ContactUs">
      <div className="contact-col">
        <h2>
          Send Us a Message <img src={MsgIcon} alt="Message Icon" />{" "}
        </h2>
        <p>
          Feel Free to reach out through contact form or find our contact
          information below. Your Feedback, suggestions, and Questions are
          important to us. Share your creative thoughts and hard queries with us
          because we are here to serve our university community.
        </p>
        <ul>
          <li>
            <img src={MailIcon} alt="Mail Icon" />
            khadeejaasif333@gmail.com
          </li>
          <li>
            <img src={PhoneIcon} alt="Phone Icon" /> +1 510-642-6000
          </li>
          <li>
            <img src={LocationIcon} alt="Location Icon" />
            University Avenue and, Oxford St, Berkeley, CA 94720, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="Name">Phone Number: </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label htmlFor="Message">Write your message here</label>
          <textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Enter your message here"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={WhiteArrow} alt="Arrow Icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;

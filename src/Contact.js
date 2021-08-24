import emailjs from "emailjs-com";
import "./css/Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "contact_form", e.target, "user_KRiPK8QzXTso72xXZehAU")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact__header">
        <h1>Contact</h1>
      </div>
      <div className="contact__form">
        <form onSubmit={Contact}>
          <div className="input__container">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="input__container">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="input__container">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="input__container">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            />
          </div>
          <div className="input__container">
            <input type="submit" className="input-btn" value="Send Message" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

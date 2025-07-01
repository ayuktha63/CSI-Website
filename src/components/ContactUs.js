import "../styles/ContactUs.css";
import ModelViewer from "./ModelViewer";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">CONTACT US</h2>

      <div className="contact-box">
        <div className="contact-left">
          <h3>Get in Touch with Us</h3>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send it to us</button>
          </form>
        </div>

        <div className="contact-right">
          <div className="model-container">
            <img src="./assets/phone.png" alt="Phone Mockup" className="phone-mockup" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;

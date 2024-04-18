import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <div className="container mx-auto mt-12 mb-12">
        <h2 className="text-2xl text-black text-center mb-5">
          Feel Free To Contact
        </h2>
        <section className="contact-form-section mt-12 mb-12">
          <div className="contact-img">
            <h1>Talk with our team</h1>
            <h2>
              Any Question? <br /> Feel Free to Contact
            </h2>
            <div className="flex gap-3">
              <div className="search-container">
                <div className="search-box">
                  <i class="fa-brands fa-facebook"></i>
                </div>
              </div>
              <div className="search-container">
                <div className="search-box">
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </div>
              <div className="search-container">
                <div className="search-box">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div className="search-container">
                <div className="search-box">
                  <i class="fab fa-dribbble"></i>
                </div>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xwkdndpq"
            method="POST"
            className="contact-form w-[100%]"
          >
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="Email" name="Email" />
            <textarea
              name="message"
              id=""
              cols="20"
              rows="7"
              placeholder="Place your comment here"
            ></textarea>
            <button className="btn bg-indigo-400">Submit</button>
          </form>
        </section>
        <section className="location-section">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235373.9083414654!2d89.27794933319095!3d22.812936138465016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff91780094f875%3A0x17bf6cf5c0e7b50b!2sDak%20bangla%20more%20Boro%20Bazar%20khulna%20Bangladesh!5e0!3m2!1sen!2sbd!4v1695062048906!5m2!1sen!2sbd"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

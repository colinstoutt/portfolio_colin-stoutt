import React from "react";

const contact = () => {
  return (
    <main className="contact container">
      <h1 className="heading">
        Contact me<div className="line"></div>
      </h1>
      <form
        className="contact__form"
        target="_blank"
        action="https://formsubmit.co/colin.stoutt22@gmail.com"
        method="POST"
      >
        {/* honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />
        {/* disable captcha */}
        <input type="hidden" name="_captcha" value={"false"} />
        {/* success page */}
        <input
          type="hidden"
          name="_next"
          value={"https://portfolio-nextjs-silk.vercel.app/success"}
        />
        <div>
          <div>
            <input type="text" name="name" placeholder="Full Name" required />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <div>
              <input
                type="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </main>
  );
};

export default contact;

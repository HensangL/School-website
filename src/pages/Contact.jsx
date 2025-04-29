import React from 'react';
import bg from '../image/bg.jpeg';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 w-full max-w-3xl text-white space-y-6">
        <h1 className="text-4xl font-bold text-center text-yellow-200">Contact Us</h1>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 text-white/90">
          <div className="space-y-3">
            <p className="text-lg"><strong>📍 Address:</strong> 123 School Street, Kathmandu, Nepal</p>
            <p className="text-lg"><strong>📞 Phone:</strong> +977-9800000000</p>
            <p className="text-lg"><strong>✉️ Email:</strong> info@ourschool.edu.np</p>
            <p className="text-lg"><strong>🕘 Open:</strong> Sunday – Friday | 9:00 AM – 4:00 PM</p>
          </div>

          {/* Contact Form (optional/non-functional placeholder) */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Optional map or social links */}
        <div className="mt-6 text-center">
          <p className="text-white/70 text-sm italic">Visit us or follow us on social media for updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      // ✅ EmailJS send
      await emailjs.send(
        "service_d50sbna",     // ✅ Replace
        "template_tbndzv5",    // ✅ Replace
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "srivastavaansh1408@gmail.com", // ✅ Your email
        },
        "dUd4bh6JV8vlrekyw" // ✅ Replace
      );

      setStatusMsg("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setStatusMsg("❌ Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#0b0f19] py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let’s <span className="text-blue-500">Connect</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about technology? I’d love to hear from you.
            Let’s build something amazing together!
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT: CONTACT FORM */}
          <div className="bg-white/5 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <MdEmail className="text-blue-500" size={22} /> Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* name + email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0b0f19] border border-gray-700 text-white
                               focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0b0f19] border border-gray-700 text-white
                               focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              {/* subject */}
              <div>
                <label className="text-gray-400 text-sm">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0b0f19] border border-gray-700 text-white
                             focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* message */}
              <div>
                <label className="text-gray-400 text-sm">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  required
                  rows={5}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0b0f19] border border-gray-700 text-white
                             focus:border-blue-500 outline-none transition resize-none"
                />
              </div>

              {/* status message */}
              {statusMsg && (
                <p className="text-sm text-center text-gray-300">{statusMsg}</p>
              )}

              {/* submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600
                           font-semibold text-white transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="space-y-6">

            {/* GET IN TOUCH */}
            <div className="bg-white/5 border border-gray-700 rounded-2xl p-8 space-y-5">
              <h3 className="text-white font-bold text-xl">Get in Touch</h3>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                <MdEmail size={22} className="text-blue-500" />
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <p className="text-white text-sm">srivastavaansh1408@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                <MdPhone size={22} className="text-blue-500" />
                <div>
                  <p className="text-gray-400 text-xs">Phone</p>
                  <p className="text-white text-sm">+91 7275805078</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                <MdLocationOn size={22} className="text-blue-500" />
                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-white text-sm">Ghaziabad , India</p>
                </div>
              </div>
            </div>

            {/* CONNECT WITH ME */}
            <div className="bg-white/5 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-5">Connect with Me</h3>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/Ansh-1401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-gray-700
                             hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub size={22} className="text-white" />
                  <span className="text-gray-400 text-sm">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ansh-srivastava-b8b057292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-gray-700
                             hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedinIn size={22} className="text-white" />
                  <span className="text-gray-400 text-sm">LinkedIn</span>
                </a>

                <a
                  href="mailto:srivastavaansh1408@gmail.com"
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-gray-700
                             hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <MdEmail size={22} className="text-white" />
                  <span className="text-gray-400 text-sm">Email</span>
                </a>
              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-white/5 border border-gray-700 rounded-2xl p-8 text-center">
              <h3 className="text-white font-bold text-lg">
                Ready to Start a Project?
              </h3>
              <p className="mt-3 text-gray-400 text-sm">
                I’m always excited to work on new and challenging projects. Let’s discuss how we can bring your ideas to life!
              </p>

              <a
                href="mailto:srivastavaansh1408@gmail.com"
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600
                           text-white font-semibold transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Start a Conversation
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: "success" | "error", message: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const { name, email, message } = form;

    if (!name || !email || !message) {
      setFeedback({ type: "error", message: "Please fill in all fields." });
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Efrat Bdil",
          from_email: email,
          to_email: "efrat.developer@gmail.com",
          message: message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setFeedback({ type: "success", message: "Thank you. I will get back to you as soon as possible." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setFeedback({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <div className="text-center">
          <p className={`${styles.sectionSubText} text-[#915eff]`}>Connection Protocol</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor='name' className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-center'>Your Name</span>
            <input
              id='name'
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-center'
            />
          </label>

          <label htmlFor='email' className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-center'>Your Email</span>
            <input
              id='email'
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email address'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-center'
            />
          </label>

          <label htmlFor='message' className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-center'>Your Message</span>
            <textarea
              id='message'
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-center'
            />
          </label>

          {feedback && (
            <p
              className={`text-sm text-center ${
                feedback.type === "success" ? "text-green-400" : "text-red-500"
              }`}
            >
              {feedback.message}
            </p>
          )}

          <div className="flex justify-center">
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
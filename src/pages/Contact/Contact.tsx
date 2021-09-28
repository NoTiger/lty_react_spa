import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ArrowBack } from "components/icons/common";
import SocialMediaMenu from "components/SocialMediaMenu";
import { motion } from "framer-motion";

const arrow = {
  rest: { scale: 1 },
  hover: { scale: 1.2 },
  pressed: { scale: 0.8 },
};

export default function ContactForm() {
  const history = useHistory();

  function onClick() {
    history.push("/");
  }

  return (
    <div className="contact flex flex-col items-center">
      <motion.div
        className="relative arrow-back mt-3"
        variants={arrow}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        onClick={onClick}
      >
        <ArrowBack className="text-2xl" />
      </motion.div>
      <div className="text-orange text-4xl poppins my-20">CONTACT</div>
      <Form />
      <a
        className="mt-15 text-grey-font text-xl font-semibold"
        href="mailto:ltygrazsilver@gmail.com"
      >
        ltygrazsilver@gmail.com
      </a>
      <div className="w-2/5 mt-5 mb-20">
        <SocialMediaMenu className="flex w-full justify-between" />
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onNameChange(event: any) {
    return setName(event.target.value);
  }

  function onEmailChange(event: any) {
    return setEmail(event.target.value);
  }

  function onMessageChange(event: any) {
    return setMessage(event.target.value);
  }

  return (
    <form
      className="w-4/5"
      target="_blank"
      action="https://formsubmit.co/c6301752d4c9578f87e34e92d48be872"
      method="POST"
    >
      <input
        className="w-full outline-none mb-4"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <input
        className="w-full outline-none mb-4"
        type="text"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={onEmailChange}
        required
      />
      <textarea
        className="w-full outline-none mb-4"
        name="message"
        rows={6}
        cols={40}
        placeholder="Message"
        value={message}
        onChange={onMessageChange}
      />
      <button
        className="btn block text-white text-center ml-auto mr-auto mb-4"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

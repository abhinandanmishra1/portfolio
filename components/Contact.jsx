"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useT } from "../i18n";
import { Button, Section } from "./common";

export const Contact = ({ showTitle = true }) => {
  const { t } = useT();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="py-16 lg:section w-full overflow-hidden" useBase={false}>
      <div className="flex flex-col lg:flex-row">
        {showTitle && (
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                {t('contact.getInTouch')}
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                {t('contact.letsWork')} <br /> {t('contact.together')}
              </h2>
            </div>
          </motion.div>
        )}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
        >
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t('contact.namePlaceholder')}
          />
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t('contact.emailPlaceholder')}
          />
          <textarea
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            name="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t('contact.messagePlaceholder')}
          ></textarea>
          <Button size="lg" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : t('contact.sendMessage')}
          </Button>
          {status === "success" && <p className="text-accent mt-4">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 mt-4">Failed to send message. Please try again.</p>}
        </motion.form>
      </div>
    </Section>
  );
};

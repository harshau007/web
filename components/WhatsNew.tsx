"use client";

import { useScroll } from "@/context/scrollContext";
import { motion, useInView } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

export default function WhatIsALGSection() {
  const { whatsNewRef } = useScroll();
  const isInView = useInView(whatsNewRef, { once: true, amount: 0.2 });

  const features = [
    {
      title: "Offline-Centric Installation",
      description:
        "Install your system entirely without an internet connection.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Minimalist & Clean System",
      description: "Experience a bare-minimum, efficient Linux environment.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Custom Themed Environments",
      description:
        "Enjoy a beautifully themed interface without unnecessary extras.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Intuitive Welcome Application",
      description: "Get started quickly with our user-friendly welcome app.",
      link: "#",
      image: "/welcome.png",
    },
    {
      title: "GUI-Based Package Manager (Beta)",
      description:
        "Manage your software effortlessly with our beta GUI package manager.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Community-Driven Development",
      description:
        "Built and continuously improved by our passionate community.",
      link: "#",
      image: "/gnome.jpg",
    },
  ];

  return (
    <section
      ref={whatsNewRef}
      className="py-16 md:py-24 bg-orange-50 dark:bg-[#121215]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-center text-orange-600 dark:text-orange-400"
        >
          What is Arka Linux GUI?
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-center text-orange-600 dark:text-orange-400 opacity-50">
          Know more about ALG
        </motion.p>
        <div>
          <HoverEffect items={features} />
        </div>
      </div>
    </section>
  );
}

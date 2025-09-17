"use client";

import React, { useState } from "react";

import { SlideSvg1, SlideSvg2, SlideSvg3 } from "./Icons";

type WhyUsProps = {};

const slides = [
  {
    title: "A New Book Every Month",
    description:
      "Each month, we will pick the book, and trust us, it’s never the same.\nFrom fiction to psychology, world history to personal finance, you’ll find yourself reading stuff you’d never pick on your own.\nIt’s like a mini adventure outside your comfort zone, and honestly, those surprises are often the best part!",
    svg: SlideSvg1,
  },
  {
    title: "Deep, delightful and diverse conversations",
    description:
      "We come from all sorts of backgrounds — engineers, designers, teachers, finance folks, you name it.\nAnd when we read something topic-specific, we sometimes invite someone with real-life experience to join the conversation.\nThat’s what makes our book club both deep and fun at the same time!",
    svg: SlideSvg2,
  },
  {
    title: "Chill Vibes, No Pressure",
    description:
      "Think of it more like catching up with friends than a formal discussion. No need to prep a presentation, just bring the book you read (and your lovely self)! Everyone shares their favorite chapters or adds something extra the book didn’t cover. Come hang out and chat with us!",
    svg: SlideSvg3,
  },
];

export const WhyUs: React.FC<WhyUsProps> = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const nextSlide = () =>
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const SlideIcon = slides[current].svg;

  return (
    <section className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Us?</h2>
      <div className="relative flex flex-col md:flex-row items-center mb-12 p-6 h-96">
        <button
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 hover:bg-secondary rounded-full p-2"
          onClick={prevSlide}
        >
          <span className="sr-only">Previous</span>
          <svg
            fill="none"
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            width={24}
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <SlideIcon className="basis-1/3 mx-auto" />
        <div
          suppressHydrationWarning
          className="md:ml-6 mt-4 md:mt-0 text-center md:text-left basis-2/3"
        >
          <h3 className="text-2xl font-semibold mb-4">
            {slides[current].title}
          </h3>
          <p className="text-lg whitespace-pre-line">
            {slides[current].description}
          </p>
        </div>
        <button
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2  hover:bg-secondary rounded-full p-2"
          onClick={nextSlide}
        >
          <span className="sr-only">Next</span>
          <svg
            fill="none"
            height={24}
            stroke="currentColor"
            strokeWidth={2}
            width={24}
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2 h-6 items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-secondary" : "bg-white"}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

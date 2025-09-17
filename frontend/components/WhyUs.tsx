import { SlideSvg1, SlideSvg2, SlideSvg3 } from "./Icons";

type WhyUsProps = {};

export const WhyUs: React.FC<WhyUsProps> = () => {
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Us?</h2>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center mb-12"
        >
          <slide.svg className="basis-1/3" />
          <div
            suppressHydrationWarning
            className="md:ml-6 mt-4 md:mt-0 text-center md:text-left basis-2/3"
          >
            <h3 className="text-3xl font-semibold mb-4">{slide.title}</h3>
            <p className="text-lg whitespace-pre-line">{slide.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

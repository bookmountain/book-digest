import Image from "next/image";
import { Button } from "@heroui/button";

import BookList from "@/components/BookList";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="flex flex-col justify-center basis-1/3">
          <p className="font-bold text-5xl pb-4 text-center sm:text-start">
            A space to rest, read, and reconnect, one page at a time.
          </p>
          <span className="text-2xl text-center sm:text-start">
            Come join the conversation!
          </span>
          <div className="mt-8 flex gap-4 justify-center sm:justify-start">
            <Button className="rounded-3xl" color="secondary" variant="solid">
              <span className="text-lg">BOOK CLUB</span>
            </Button>
            <Button
              className="rounded-3xl"
              color="secondary"
              variant="bordered"
            >
              <span className="text-white text-lg">DIGITAL DETOX</span>
            </Button>
          </div>
        </div>
        <div className="basis-2/3">
          <Image
            alt="landing-page-picture"
            className="w-full h-auto"
            height={492}
            width={641}
            src={`https://${process.env.NEXT_PUBLIC_IMAGE_HOST}/static/notebook-03%201.png`}
          />
        </div>
      </section>
      <BookList />
      <WhyUs />
    </>
  );
}

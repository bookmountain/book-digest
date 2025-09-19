import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";

import { fetchBooks, fetchEvents } from "../api";

import CountUp from "@/components/CountUp";

export default async function Events() {
  const books = await fetchBooks();
  const events = await fetchEvents();
  const startDate = new Date("2021-01-05");
  const today = new Date();
  const totalReadingDays = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  const totalBookClubsHosted = books.count;

  const statics = [
    { title: "Reading Days", total: totalReadingDays },
    { title: "Book Clubs Hosted", total: totalBookClubsHosted },
    // TODO: Replace with real data
    { title: "Readers Joined", total: 254 },
  ];

  return (
    <section>
      <div className="flex flex-row justify-around items-center gap-16 mb-16">
        {statics.map((stat) => (
          <div
            key={stat.title}
            suppressHydrationWarning
            className="flex flex-col gap-4 text-center"
          >
            <p className="text-xl">{stat.title}</p>
            <CountUp
              className="text-8xl inline-block min-w-[4ch] text-center"
              duration={2}
              from={0}
              to={stat.total}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8 mb-16">
        {events.map((event) => (
          <div key={event.id} className="flex items-start">
            <div suppressHydrationWarning className="basis-2/5 mr-6">
              <Image
                alt={event.title}
                className="w-full h-auto rounded mr-6 flex-shrink-0"
                src={event.image}
                width={300}
                height={200}
              />
            </div>
            <div className="flex flex-col justify-center items-center basis-3/5">
              <div className="w-4/5">
                <h3 className="text-4xl font-semibold mb-2">{event.title}</h3>
                <p className="mb-2 text-xl">{event.description}</p>
                <p className="text-md  mb-1">{event.event_date}</p>
                <p className="text-md ">{event.region}</p>
                <Link passHref href="/join">
                  <Button className="self-start mt-4" color="secondary">
                    SIGN UP
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

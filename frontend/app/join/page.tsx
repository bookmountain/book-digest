import React from "react";
import Image from "next/image";

import { fetchEvents } from "../api";

import EventForm from "@/components/EventForm";

export default async function Join() {
  const events = await fetchEvents();

  return (
    <section className="mx-auto p-4">
      {events.map((event) => (
        <div key={event.id} className="flex gap-8 mb-8">
          <div className="basis-3/5">
            <Image
              alt={event.title}
              className="w-full h-auto rounded mb-4"
              src={event.image}
              width={400}
              height={300}
            />
          </div>
          <div className="basis-1/2">
            <EventForm eventId={event.id} />
          </div>
        </div>
      ))}
    </section>
  );
}

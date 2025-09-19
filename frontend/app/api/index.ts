import { BookReview, Event } from "@/types/data";
import { IPaginatedResponse } from "@/types/http";

export async function fetchEvents(): Promise<Event[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/`);

  if (!res.ok) throw new Error("Failed to fetch events");

  return res.json();
}

export async function fetchBooks(
  limit = 5,
  offset = 0,
): Promise<IPaginatedResponse<BookReview>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/books/?limit=${limit}&offset=${offset}`,
  );

  if (!res.ok) throw new Error("Failed to fetch books");

  return res.json();
}

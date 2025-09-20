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
    { next: { revalidate: 60 } },
  );

  if (!res.ok) throw new Error("Failed to fetch books");

  return res.json();
}

export async function fetchBook(id: number): Promise<BookReview> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${id}/`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) throw new Error("Failed to fetch book");

  return res.json();
}

export async function fetchOpenEvents(): Promise<Event[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/?is_open=true`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) throw new Error("Failed to fetch open events");

  return res.json();
}

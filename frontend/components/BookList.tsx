"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

import { BookReview } from "@/types/data";
import { fetchBooks } from "@/app/api";

type BookListProps = {
  limit?: number;
  showLoadMore?: boolean;
};

export default function BookList({ limit = 5, showLoadMore }: BookListProps) {
  const [books, setBooks] = useState<BookReview[]>([]);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (books.length === 0) {
      setLoading(true);
      fetchBooks(limit, 0)
        .then((data) => {
          setBooks(data.results);
          setNext(data.next);
          setOffset(data.results.length);
        })
        .finally(() => setLoading(false));
    }
  }, [limit]);

  const loadMore = async () => {
    if (!next) return;
    setLoading(true);
    const data = await fetchBooks(limit, offset);

    setBooks((prev) => [...prev, ...data.results]);
    setOffset((prev) => prev + data.results.length);
    setNext(data.next);
    setLoading(false);
  };

  return (
    <section className="flex flex-col justify-center max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="relative group rounded overflow-hidden shadow-lg"
            role="button"
            tabIndex={0}
            onClick={() => router.push(`/books/${book.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(`/books/${book.id}`);
              }
            }}
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                fill
                alt={book.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                src={book.cover_image}
              />
            </div>
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white font-semibold text-lg text-center px-2">
                {book.title}
              </h2>
              <p className="text-gray-200 text-sm">{book.author}</p>
            </div>
          </div>
        ))}
      </div>

      {showLoadMore && next && (
        <Button
          className="rounded-3xl mx-auto my-8"
          color="secondary"
          disabled={loading}
          variant="solid"
          onClick={loadMore}
        >
          <span className="text-white text-lg">
            {loading ? "Loading..." : "Load more"}
          </span>
        </Button>
      )}
    </section>
  );
}

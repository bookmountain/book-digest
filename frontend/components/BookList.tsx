import Image from "next/image";

import { BookReview } from "@/types/data";
import { fetchBooks } from "@/app/api";

type BookListProps = {
  limit?: number;
};

// Revalidate each page every 60s
export const revalidate = 60;

export default async function BookList({ limit = 5 }: BookListProps) {
  const data = await fetchBooks(limit, 0);
  const books: BookReview[] = data.results;

  return (
    <section className="flex flex-col justify-center max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <a
            key={book.id}
            className="relative group rounded overflow-hidden shadow-lg"
            href={`/books/${book.id}`}
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
          </a>
        ))}
      </div>
    </section>
  );
}

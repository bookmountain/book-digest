// app/books/page.tsx
import Image from "next/image";

type Book = {
  id: number;
  title: string;
  author: string;
  cover_image: string;
};

async function getBooks(): Promise<Book[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books/`, {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) throw new Error("Failed to fetch books");

  return res.json();
}

export default async function BookList() {
  const books = await getBooks();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="relative group rounded overflow-hidden shadow-lg"
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                fill
                alt={book.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw,
                       (max-width: 1200px) 25vw,
                       20vw"
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
    </section>
  );
}

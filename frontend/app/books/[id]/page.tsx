import Image from "next/image";

import { fetchBook } from "@/app/api";

type Params = Promise<{ id: string }>;

type BookPageProps = {
  params: Params;
};

// Revalidate each page every 60s
export const revalidate = 60;

export default async function BookPage(props: BookPageProps) {
  const params = await props.params;
  const book = await fetchBook(Number(params.id));
  const { title, author, review_content, cover_image, published_date } = book;

  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-end gap-4 mb-8">
        <div className="w-full">
          <Image alt={title} height={600} src={cover_image} width={400} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <h2 className="text-2xl">{author}</h2>
          <p className="text-md">{published_date}</p>
        </div>
      </div>
      <article
        dangerouslySetInnerHTML={{ __html: review_content }}
        className="prose"
      />
    </div>
  );
}

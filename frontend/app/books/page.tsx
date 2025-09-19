import BookList from "@/components/BookList";

export default function Books() {
  return (
    <>
      <BookList showLoadMore limit={4} />
    </>
  );
}

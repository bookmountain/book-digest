import Image from "next/image";

export default function Books() {
  return (
    <section className="flex flex-row">
      <div className="basis-1/3">
        <p className="font-bold text-5xl pb-4">
          A space to rest, read, and reconnect, one page at a time.
        </p>
        <span className="text-2xl">Come join the conversation!</span>
      </div>
      <div className="basis-2/3">
        <Image alt="landing-page-picture" src="" />
      </div>
    </section>
  );
}

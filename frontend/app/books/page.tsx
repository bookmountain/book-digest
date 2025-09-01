import Image from "next/image";

export default function Books() {
  return (
    <section className="flex flex-col sm:flex-row justify-center gap-4">
      <div className="basis-1/2">
        <p className="font-bold text-5xl pb-4">
          A space to rest, read, and reconnect, one page at a time.
        </p>
        <span className="text-2xl">Come join the conversation!</span>
      </div>
      <div className="basis-1/2">
        <Image
          alt="landing-page-picture"
          height="492"
          src={`https://${process.env.NEXT_PUBLIC_IMAGE_HOST}/static/notebook-03%201.png`}
          width="641"
        />
      </div>
    </section>
  );
}

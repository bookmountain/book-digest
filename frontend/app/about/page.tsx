import { WhyUs } from "@/components/WhyUs";

export default function About() {
  return (
    <section className="mx-auto p-4">
      <h1 className="text-4xl text-center">Our Story</h1>
      <div className="flex flex-col gap-8 mt-4 max-w-3xl mx-auto text-lg py-8">
        <p>
          It all started in a cozy little cafe in Taipei’s East District,a group
          of young people returning from abroad, looking to re-root themselves
          in the city,brought together by a shared love for books and movies.
          After coming back to Taiwan, our founder reunited with old colleagues
          from China,and casual catch-ups turned into something more.
        </p>
        <p>
          Strangers became reading buddies,and over time we figured out how we
          liked to read and talk together,not just about books, but about life,
          ideas, and everything in between.And that’s how BookDigest was born.
        </p>
        <p>
          Each month, we will pick the book.We read everything from novels and
          psychology to world history and personal finance.Sometimes it’s
          something we’d totally pick for ourselves,other times, it’s way
          outside our comfort zone (in the best way).There’s something magical
          about seeing the world through someone else’s bookshelf.
        </p>
        <p>
          We believe reading isn’t just about taking in information,it’s about
          chewing on ideas, reflecting, discussing, and slowly letting it all
          sink in.Knowledge only truly becomes yours when you’ve taken the time
          to digest it. We meet at a different cafe each month,so if you love a
          good book, meaningful conversations,and a really great cup of coffee,
          come hang out with us at BookDigest!
        </p>
      </div>
      <WhyUs />
    </section>
  );
}

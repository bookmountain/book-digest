export type BookReview = {
  id: number;
  title: string;
  author: string;
  published_date: string;
  review_content: string;
  cover_image: string;
  created_at: string;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  event_date: string;
  region: "Taipei" | "Netherlands" | string; // extendable
  image: string;
  created_at: string;
};

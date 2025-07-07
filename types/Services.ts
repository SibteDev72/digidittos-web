export type List = {
  id: number;
  hash: string;
  title: string;
  desc: string;
  points: { id: number; title: string; desc: string }[];
};

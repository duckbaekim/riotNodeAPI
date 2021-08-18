export interface CatType {
  id: string;
  name: string;
  age: number;
  friends: string[];
}

export const Cat: CatType[] = [
  {
    id: "1",
    name: "inqu",
    age: 8,
    friends: ["2"],
  },
  {
    id: "2",
    name: "inqu2",
    age: 9,
    friends: ["1"],
  },
  {
    id: "3",
    name: "inqu3",
    age: 10,
    friends: [],
  },
  {
    id: "4",
    name: "inqu4",
    age: 8,
    friends: ["2"],
  },
  {
    id: "1",
    name: "inqu",
    age: 8,
    friends: ["2"],
  },
];

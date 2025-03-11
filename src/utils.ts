export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
export const productList: Product[] = [
  {
    id: 1,
    name: "Product A",
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product B",
    price: 30,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product C",
    price: 75,
    quantity: 1,
  },
  {
    id: 4,
    name: "Product D",
    price: 60,
    quantity: 1,
  },
  {
    id: 5,
    name: "Product E",
    price: 45,
    quantity: 1,
  },
  {
    id: 6,
    name: "Product F",
    price: 80,
    quantity: 1,
  },
  {
    id: 7,
    name: "Product G",
    price: 55,
    quantity: 1,
  },
  {
    id: 8,
    name: "Product H",
    price: 90,
    quantity: 1,
  },
  {
    id: 9,
    name: "Product I",
    price: 35,
    quantity: 1,
  },
  {
    id: 10,
    name: "Product J",
    price: 100,
    quantity: 1,
  },
];

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

import { StaticImageData } from "next/image";

interface Item {
  id: number|string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  image: string | StaticImageData;
}

export type {Item}
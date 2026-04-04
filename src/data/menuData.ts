import { v4 as uuidv4 } from "uuid";

type MenuItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export const menuData: MenuItem[] = [
  {
    id: uuidv4(),
    title: "Pistacchio",
    description: "Sicilian pistachios roasted to perfection",
  },
  {
    id: uuidv4(),
    title: "Nocciola",
    description: "Creamy hazelnut gelato",
  },
];
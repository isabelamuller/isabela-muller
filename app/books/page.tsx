import { Metadata } from "next";
import Books from "./Books";

export const metadata: Metadata = {
  title: "my bookshelf",
  description: "Isabela Müller bookshelf",
};

export default function Page() {
  return <Books />;
}

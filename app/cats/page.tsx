import { Metadata } from "next";
import Cats from "./Cats";

export const metadata: Metadata = {
  title: "my beloved cats",
  description: "Isabela Müller cats",
};

export default function Page() {
  return <Cats />;
}

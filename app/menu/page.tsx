import { Metadata } from "next";
import Menu from "./Menu";

export const metadata: Metadata = {
  title: "Isabela Müller",
  description: "Isabela Müller menu",
};

export default function Page() {
  return <Menu />;
}

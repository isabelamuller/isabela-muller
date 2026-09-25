import { Metadata } from "next";
import LeaveANote from "./LeaveNote";

export const metadata: Metadata = {
  title: "leave a note!",
  description: "Isabela Müller leave a note",
};

export default function Page() {
  return <LeaveANote />;
}

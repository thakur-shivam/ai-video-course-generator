import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>AI Video Course Generator</h2>
      <Button>All Courses</Button>
      <UserButton />
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  const message = process.env["MESSAGE"] || "Hello!";
  return (
    <main className="content">
      Ciao da Page
    </main>
  );
}

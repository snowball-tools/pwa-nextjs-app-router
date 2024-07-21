import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-snowball">
      <Image
        src="/logo_with_text.svg"
        alt="Snowball Tools Logo"
        width={400}
        height={24}
        priority
      />
    </main>
  );
}

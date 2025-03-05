import Image from "next/image";

export default function Header() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-custom-green items-center text-white justify-items-center p-8 pt-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col pt-10">
        <Image
          className="dark:invert"
          src="/images/novari-logo.png"
          alt="Novari Logo"
          width={250}
          height={300}
        />

        <h2 className="text-2xl"> Welcome to Novari</h2>
      </main>
    </div>
  );
}

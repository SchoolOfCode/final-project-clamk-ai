import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-custom-green items-center text-white justify-items-center p-8 pt-30 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center w-full">
        {/* Container for logo and navbar with pill background */}
        <div className="relative flex flex-col items-center max-w-md mx-auto">
          {/* Pill-shaped background */}
          <div className="absolute h-56 w-180 mt-8 bg-white/15 rounded-full"></div>

          {/* Logo */}
          <div className="flex justify-center w-full pt-7 z-10">
            <Image
              className="dark:invert"
              src="/images/novari-logo.png"
              alt="Novari Logo"
              width={180}
              height={216}
            />
          </div>

          {/* Navbar */}
          <div className="py-4 z-10">
            <Navbar />
          </div>
        </div>

        {/* Positive Quotation outside the pill */}
        <h2 className="text-2xl text-custom-white text-center mt-4">
          Positive Quotation
        </h2>
      </main>
    </div>
  );
}

import Image from "next/image";
import Navbar from "./Navbar";
import StreakCounter from "./StreakCounter";

export default function Header() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-custom-green items-center text-white justify-items-center p-8 pt-30 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-0 right-0 mt-8 mr-8">
        <StreakCounter />
      </div>
      <main className="flex flex-col items-center w-full">
        {/* Container for logo and navbar with pill background */}
        <div className="relative flex flex-col items-center max-w-md mx-auto">
          {/* Pill-shaped background */}
          <div className="absolute h-64 w-300 mt-3 bg-custom-white/20 rounded-full"></div>

          {/* Logo */}
          <div className="flex justify-center scale-120 w-full pt-7 z-10">
            <Image
              className="dark:invert"
              src="/images/novari-logo.png"
              alt="Novari Logo"
              width={180}
              height={216}
              priority
            />
          </div>

          {/* Navbar */}
          <div className="py-4 z-10">
            <Navbar />
          </div>
        </div>
      </main>
    </div>
  );
}

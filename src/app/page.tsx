import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-custom-green items-center text-white justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" >
        <Image
          className="dark:invert"
          src="/images/novari-logo.png"
          alt="Novari Logo"
          width={250}
          height={300}
        />
        
        <h2 className= "text-2xl justify-center"> Welcome to Our App</h2>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Created by Random Acts</p>
      </footer>
    </div>
  );
}

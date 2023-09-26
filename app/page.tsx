import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Home() {
  return (
    <main className="max-w-screen-lg p-6 flex flex-col gap-12 md:gap-24">
      <Image src={Logo} alt="Zion Design Logo" className="w-24"></Image>
      <div className="md:text-5xl pl-4 md:pl-8 border-l text-3xl text-white ">
        <h1 className="inline underline underline-offset-2 italic hover:opacity-50">
          <a href="/">Zion Design</a>
        </h1>
        <p className="inline">
          {" "}
          is a design and code studio investing in innovative software through
          design and code. <span className="italic">Zion</span> was created by{" "}
          <a
            href="https://bridger.to"
            className="underline underline-offset-2 italic hover:opacity-50"
          >
            Bridger Tower
          </a>{" "}
          in 2018 and has since worked with over one hundred brands.
        </p>
      </div>
      <h2 className="text-gray-400 font-sans">
        You can contact zion design at bridger__@__zion.surf.
      </h2>
    </main>
  );
}

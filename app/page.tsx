import Image from "next/image";
import Logo from "@/public/logo.svg";
import Bg from "@/public/bg.jpg";

export default function Home() {
  return (
    <main className="no-scrollbar w-full fade-in">
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <section className="flex w-fit flex-col gap-12 p-6 md:gap-24">
          <Image src={Logo} alt="Zion Design Logo" className="w-24"></Image>
          <div className="max-w-screen-md border-l pl-4 text-3xl text-white md:pl-8 md:text-5xl ">
            <h1 className="inline italic underline underline-offset-2 hover:opacity-50">
              <a href="/">Zion Design</a>
            </h1>
            <p className="inline">
              {" "}
              is a design and development venture investing in innovative
              software through design and code.{" "}
              <span className="italic">Zion</span>
              &nbsp; was created by{" "}
              <a
                href="https://bridger.to"
                className="italic underline underline-offset-2 hover:opacity-50"
              >
                Bridger Tower
              </a>
              &nbsp; in 2018 and has since worked with over one hundred brands.
            </p>
          </div>
          <div className="font-light">
            <h2 className="font-sans text-neutral-200">
              You can contact zion design at bridger__@__zion.surf.
            </h2>
          </div>
        </section>
      </div>

      <Image
        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen opacity-60 grayscale"
        src={Bg}
        width={1280}
        height={1280}
        placeholder="blur"
        alt="background of zion.surf"
      ></Image>
    </main>
  );
}

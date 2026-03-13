import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  return (
    <header>
      <div className="layout-container flex-between p-4 mx-auto">
        <Link href="/">
          <div className="logo">
            <div className="img-container relative">
              <Image
                src="/printforge-logo.png"
                alt="Print Froge logo"
                width={150}
                height={150}
              />
            </div>
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  );
}

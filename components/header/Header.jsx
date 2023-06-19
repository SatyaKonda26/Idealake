import Image from "next/image";
import logo from "/public/assets/images/Logo.png";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const screenSize = useWindowSize();
  const matches = screenSize.width <= 991;
  const links = [
    { name: "Home", href: "/", title: "Home" },
    { name: "Service", href: "/services", title: "Service" },
    { name: "Teams", href: "/team", title: "Portfolio" },
    { name: "Careers", href: "/#fixme", title: "Join" },
    { name: "About us", href: "#fixme", title: "About us" },
  ];

  function toggleClass() {
    setIsActive(!isActive);
  }

  function handleMenuClick() {
    if (matches) {
      setIsActive(false);
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="flex flex_sb nav_flex">
          <Link href={"/"} className={`flex logo`} title="Idealake">
            <div className="header_logo_container">
              <Image src={logo} priority={true} alt="Idealake" />
            </div>
            <span>Idealake</span>
          </Link>

          <nav className={`flex flex_sb nav ${isActive ? "active" : ""}`}>
            <ul className={`flex menu`}>
              {links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} onClick={handleMenuClick}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="btn_burger_container">
            <Link
              href={"/contact"}
              title="Contact us"
              className="btn type1 header_butn"
            >
              Contact us
            </Link>
            <div
              id="bar"
              className={`burger ${isActive ? "active" : ""}`}
              onClick={toggleClass}
            >
              <span className="burger_icon">bar</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



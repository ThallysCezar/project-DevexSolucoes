import React from "react";
import Image from "next/image";

const navbarBlue = {
    background: "#1E2235"
}

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3" style={navbarBlue}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Image src="./../../public/assets/img/logo.svg" alt="imagem logo" layout='fill'/>
          </div>
        </div>
      </nav>
    </>
  );
}
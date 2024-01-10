"use client";

import Link from "next/link";
import { Logo } from "../Logo/Logo";

const TheHeader = () => {
  return (
    <header>
      <Logo />
      <>
        <Link href="/">Home</Link>
        <Link href="/dictionary">Dictionary</Link>
        <Link href="/recommend">Recommend</Link>
        <Link href="/training">Training</Link>
      </>
    </header>
  );
};

export { TheHeader };

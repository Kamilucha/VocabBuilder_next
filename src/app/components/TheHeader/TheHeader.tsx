"use client";

import Link from "next/link";
import { Logo } from "../Logo/Logo";
import UserDesc from "../UserDesc/UserDesc";
import styles from "./styles.module.scss";

const TheHeader = () => {
  return (
    <header>
      <Logo />
      <div className={styles.navigation}>
        <Link href="/">Home</Link>
        <Link href="/dictionary">Dictionary</Link>
        <Link href="/recommend">Recommend</Link>
        <Link href="/training">Training</Link>
      </div>
      <UserDesc />
    </header>
  );
};

export { TheHeader };

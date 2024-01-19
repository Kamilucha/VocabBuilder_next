"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {Logo} from "../Logo/Logo";
import UserDesc from "../UserDesc/UserDesc";
import styles from "./styles.module.scss";

const navLinks = [
    {name: "Dictionary", href: "/dictionary"},
    {name: "Recommend", href: "/recommend"},
    {name: "Training", href: "/training"},
]


const TheHeader = () => {
    const pathname = usePathname();

    return (
        <header>
            <Logo/>
            <div className={styles.navigation}>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);

                    return (
                        <Link
                            className={`${styles.link} ${isActive ? styles.active : ""}`}
                            href={link.href}
                            key={link.name}>
                            {link.name}
                        </Link>
                    );
                })}
            </div>
            <UserDesc/>
        </header>
    );
};

export {TheHeader};

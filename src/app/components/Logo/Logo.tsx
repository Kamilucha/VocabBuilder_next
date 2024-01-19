import LogoSvg from "../TheHeader/svg/LogoSvg";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Logo = () => {
    return (
        <>
            <Link href="/" key="Home">
                <div className={styles.logo_wrapper}>
                    <LogoSvg/>
                    <p className={styles.logo_text}>VocabBuilder</p>
                </div>
            </Link>

        </>
    );
};

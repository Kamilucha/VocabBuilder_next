import LogoSvg from "../TheHeader/svg/LogoSvg";
import styles from "./styles.module.css";

export const Logo = () => {
  return (
    <>
      <div className={styles.logo_wrapper}>
        <LogoSvg />
        <p className={styles.logo_text}>VocabBuilder</p>
      </div>
    </>
  );
};

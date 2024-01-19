import LogoSvg from "../TheHeader/svg/LogoSvg";
import styles from "./styles.module.scss";

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

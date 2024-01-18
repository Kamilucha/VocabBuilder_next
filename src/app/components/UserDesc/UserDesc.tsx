import UserSvg from "./svg/UserSvg";
import styles from "./styles.module.css";

export default function UserDesc() {
  return (
    <div className={styles.user_desc_wrap}>
      <p className={styles.user_name}>ірка</p>
      <div className={styles.user_icon_wrap}>
        <UserSvg></UserSvg>
      </div>
    </div>
  );
}

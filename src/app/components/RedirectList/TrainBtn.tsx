import styles from "./styles.module.css";
import ArrowIcon from "./svg/ArrowSvg";

export const TrainBt = () => {
  return (
    <>
      <div className={styles.add_word_btn_wrap}>
        <button className={styles.add_btn}>Train oneself</button>
        <ArrowIcon></ArrowIcon>
      </div>
    </>
  );
};

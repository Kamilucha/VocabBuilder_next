import styles from "./styles.module.css";

export const StatBt = () => {
  return (
    <>
      <div className={styles.add_word_btn_wrap}>
        <h3 className={styles.stat_word}>To study:</h3>
        <p className={styles.number_word}>20</p>
      </div>
    </>
  );
};

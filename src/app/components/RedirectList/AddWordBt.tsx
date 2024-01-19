import AddIcon from "./svg/AddIcon";
import styles from "./styles.module.css";

export const AddWordBt = () => {
  return (
    <>
      <div className={styles.add_word_btn_wrap}>
        <button className={styles.add_btn}>Add word</button>
        <AddIcon></AddIcon>
      </div>
    </>
  );
};

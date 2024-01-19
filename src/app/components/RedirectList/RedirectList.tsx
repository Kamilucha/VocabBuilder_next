import { AddWordBt } from "./AddWordBt";
import { TrainBt } from "./TrainBtn";
import { StatBt } from "./StatBtn";

import styles from "./styles.module.css";

export const RedirectList = () => {
  return (
    <>
      <div className={styles.redirect_list_wrap}>
        <StatBt></StatBt>
        <AddWordBt></AddWordBt>
        <TrainBt></TrainBt>
      </div>
    </>
  );
};

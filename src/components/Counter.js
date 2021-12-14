import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, set } from "../actions/actions";
import styles from "./comp.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <div className={styles.wrapper}>
      <p>count: {count}</p>
      <div className={styles.buttonWrapper}>
        <button onClick={() => actions.increment()} className={styles.button}>
          INCREMENT
        </button>
        <button onClick={() => actions.decrement()} className={styles.button}>
          DECREMENT
        </button>
        <button onClick={() => actions.set(0)} className={styles.button}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;

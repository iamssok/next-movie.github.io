import styles from "../styles/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <svg className={styles.loadingCircle}>
        <circle cx="50%" cy="50%" r="25"></circle>
      </svg>
    </div>
  )
}
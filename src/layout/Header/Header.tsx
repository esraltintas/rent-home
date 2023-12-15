import styles from "./header.module.css";

export function Header() {
  return (
    <div className={`${styles.headerWrapper}`}>
      <h5 className="text-sm">Home is now Buena</h5>
    </div>
  );
}

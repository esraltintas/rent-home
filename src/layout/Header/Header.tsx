import styles from "./header.module.css";
import Image from "next/image";
import logo from "@/logo.svg";
import Link from "next/link";

export function Header() {
  return (
    <div className={`${styles.headerWrapper}`}>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          className="h-[4vmin] pointer-events-none"
        />
      </Link>

      <h5 className="text-sm">Home is now Buena</h5>
    </div>
  );
}

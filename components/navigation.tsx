"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={ path === "/" ? styles.on : styles.off }><Link href="/">HOME</Link></li>
        <li className={ path ==="/about" ? styles.on : styles.off}><Link href="/about">ABOUT</Link></li>
      </ul>
    </nav>
  )
}
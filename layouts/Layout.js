import Head from "next/head";
import React from "react";

import styles from "../styles/Home.module.scss";
import { Header } from "../components/Header";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Header />
        <div className={styles.main}>
          <div className={styles.layout}>{children}</div>
        </div>
      </main>
    </>
  );
}

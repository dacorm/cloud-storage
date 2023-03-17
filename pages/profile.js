import React, {useEffect, useState} from "react";

import styles from "../styles/Profile.module.scss";
import { Layout } from "../layouts/Layout";
import { Button } from "antd";
import { checkAuth } from "../utils/checkAuth";
import {getMe} from "../api/auth";

export default function ProfilePage() {
  const [name, setName] = useState();

  useEffect(() => {
      const getUserName = async () => {
          try {
              const res = await getMe();
              setName(res.fullName);
          } catch (e) {
              console.warn(e);
          }
      }
      getUserName();
  }, [])

  return (
    <div className={styles.root}>
      <h1>Мой профиль</h1>
      <br />
      <p>
        Полное имя: <b>{name ?? 'Загрузка...'}</b>
      </p>
      <br />
      <Button type="primary" danger>
        Выйти
      </Button>
    </div>
  );
}

ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (ctx) => checkAuth(ctx);

import React from "react";
import { CloudOutlined } from "@ant-design/icons";
import { Layout as AntLayout, Avatar, Menu, Popover, Button } from "antd";

import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import { Api } from "../../api";

export const Header = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      router.replace("/auth");
    }
  };

  return (
    <AntLayout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Cloud Storage
          </h2>
          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/", label: "Главная" },
              { key: "/profile", label: "Профиль" },
            ]}
          />
        </div>
        <div className={styles.headerRight}>
          <Popover
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Выйти
              </Button>
            }
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </AntLayout.Header>
  );
};

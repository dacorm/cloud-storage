import React from "react";
import {
  FileOutlined,
  FileImageOutlined,
  DeleteOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";

import { useRouter } from "next/router";
import { Layout } from "./Layout";
import styles from "../styles/Home.module.scss";
import { Button, Menu, Upload } from "antd";
import {upload} from "../api/files";

export function HomeLayout({ children }) {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const handleFileUpload = async (file) => {
      try {
          const res = await upload(file);
          console.log(res);
      } catch (e) {
          console.warn(e);
      }
  }

  return (
    <Layout>
      <div className={styles.sidebar}>
        <Upload className={styles.upload} onChange={(val) => {
            handleFileUpload(val.file.originFileObj);
        }}>
          <Button type="primary" icon={<CloudUploadOutlined />} size="large">
            Загрузить
          </Button>
        </Upload>
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[selectedMenu]}
          items={[
            {
              key: `/`,
              icon: <FileOutlined />,
              label: `Файлы`,
              onClick: () => router.push("/"),
              selected: true,
            },
            {
              key: `/photos`,
              icon: <FileImageOutlined />,
              label: `Фото`,
              onClick: () => router.push("/photos"),
            },
            {
              key: `/trash`,
              icon: <DeleteOutlined />,
              label: `Корзина`,
              onClick: () => router.push("/trash"),
            },
          ]}
        />
      </div>
      <div className="container">{children}</div>
    </Layout>
  );
}

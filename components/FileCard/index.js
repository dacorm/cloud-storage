import React from "react";
import { FileTextOutlined } from "@ant-design/icons";
import { isImage } from "../../utils/isImage";
import { getExtensionFromFileName } from "../../utils/getExtensionFromFileName";

import styles from "./FileCard.module.scss";

const extColor = {
  pdf: "purple",
  xls: "green",
  doc: "blue",
  txt: "blue",
  png: "orange",
  jpg: "orange",
  jpeg: "orange",
  zip: "red",
};

export const FileCard = ({ originalName, filename }) => {
  const ext = getExtensionFromFileName(filename);
  const url = isImage(ext) ? "http://localhost:5555/uploads/" + filename : "";
  const classColor = styles[extColor[ext]];

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          <img className={styles.image} src={url} />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};

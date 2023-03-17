import React from "react";

import styles from "./FileList.module.scss";
import { FileCard } from "../FileCard";
import Selecto from "react-selecto";

export const FileList = ({ items, onFileSelect }) => {
  return (
    <div className={styles.root}>
      {items.map((file) => (
        <div data-id={file.id} className="file">
          <FileCard
            key={file.id}
            originalName={file.originalName}
            filename={file.filename}
          />
        </div>
      ))}
      <Selecto
        container=".files"
        selectableTargets={[".file"]}
        selectByClick={true}
        hitRate={10}
        selectFromInside={true}
        toggleContinueSelect={["shift"]}
        continueSelect={false}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("active");
            onFileSelect(el.dataset["id"], "add");
          });
          e.removed.forEach((el) => {
            el.classList.remove("active");
            onFileSelect(el.dataset["id"], "remove");
          });
        }}
      />
    </div>
  );
};

import React from "react";

import { FileActions } from "../../components/FileActions";
import { FileList } from "../../components/FileList";
import { Empty } from "antd";
import { Api } from "../../api";

export const Files = ({ items, withActions = true }) => {
  const [selectedIds, setSelectedIds] = React.useState([]);
  const [files, setFiles] = React.useState(items || []);

  const onFileSelect = (id, type) => {
    if (type === "add") {
      setSelectedIds((prev) => [...prev, +id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => +_id !== +id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    console.log(selectedIds);
    Api.files.remove(selectedIds);
  };

  return (
    <>
      {withActions && files.length > 0 && (
        <FileActions
          onClickRemove={onClickRemove}
          isActive={selectedIds.length > 0}
        />
      )}
      {files.length ? (
        <FileList items={files} onFileSelect={onFileSelect} />
      ) : (
        <Empty className="empty-block" description="Список файлов пуст" />
      )}
    </>
  );
};

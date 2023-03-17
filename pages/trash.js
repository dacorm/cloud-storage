import React from "react";

import { HomeLayout } from "../layouts/HomeLayout";
import { Files } from "../modules/Files";
import { checkAuth } from "../utils/checkAuth";
import { Api } from "../api";

export default function TrashPage({ files }) {
  return <Files withActions={false} items={files} />;
}

TrashPage.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export const getServerSideProps = async (ctx) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const files = await Api.files.getAll("trash");

    return { props: { files } };
  } catch (err) {
    return {
      props: { files: [] },
    };
  }
};

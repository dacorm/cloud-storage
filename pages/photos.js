import React from "react";

import { HomeLayout } from "../layouts/HomeLayout";
import { Files } from "../modules/Files";
import { checkAuth } from "../utils/checkAuth";
import { Api } from "../api";

export default function PhotosPage({ files }) {
  return <Files items={files} />;
}

PhotosPage.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export const getServerSideProps = async (ctx) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const files = await Api.files.getAll("photos");

    return { props: { files } };
  } catch (err) {
    return {
      props: { files: [] },
    };
  }
};

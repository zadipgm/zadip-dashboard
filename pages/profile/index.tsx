import HeadTagComponent from "components/HeadTagComponent";
import type { ReactElement } from "react";
import Layout from "components/Layouts/PageLayout/index";

import type { NextPageWithLayout } from "../_app";
import ProfileComponent from "components/ProfileComponent";
const Page: NextPageWithLayout = () => {
  return <ProfileComponent />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

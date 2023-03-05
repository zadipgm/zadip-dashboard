import type { ReactElement } from "react";
import Layout from "components/Layouts/PageLayout/index";

import type { NextPageWithLayout } from "../_app";
import AllUsersScreen from "components/AllUsersScreen";
const Page: NextPageWithLayout = () => {
  return <AllUsersScreen />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

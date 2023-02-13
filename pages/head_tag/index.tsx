import HeadTagComponent from "@/components/HeadTagComponent";
import type { ReactElement } from "react";
import Layout from "../../components/Layouts/PageLayout/index";

import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return <HeadTagComponent />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

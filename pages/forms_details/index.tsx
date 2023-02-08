import FormsDetails from "@/components/FormsDetails";
import type { ReactElement } from "react";
import Layout from "../../components/Layouts/PageLayout/index";

import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return <FormsDetails />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

import {Layout} from "antd";
import React from "react";
import {Outlet} from "react-router-dom";
import SpinLoading from "../Spinner";
const LayoutPage = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <div style={{overflow: "auto", height: "100%"}}>
        <React.Suspense fallback={<SpinLoading/>}>
          <Outlet/>
        </React.Suspense>
      </div>
    </Layout>
  );
};
// 可以加一些主页面的header和footer在期间
export default LayoutPage;
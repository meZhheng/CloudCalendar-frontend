import {Layout} from "antd";
import React from "react";
import {Outlet} from "react-router-dom";
import SpinLoading from "../Spinner";

const {Content} = Layout;
const LayoutPage = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <div style={{overflow: "auto", height: "100%", paddingBottom: 40}}>
        <Content className="layout_content">
          <div className="content_left">
            <React.Suspense fallback={<SpinLoading/>}>
              <Outlet/>
            </React.Suspense>
          </div>
        </Content>
      </div>
    </Layout>
  );
};
export default LayoutPage;
import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeFilled,
  BankFilled,
  StarFilled,
} from "@ant-design/icons";
import BankDetailComponent from "../Banking/BankDetailComponent";
import Notfound from "../StaticPages/NotFound";
import { useHistory } from "react-router";
import { Switch, Route } from "react-router-dom";
import BankListComponent from "../Banking/BankListComponent";
import HomePage from "../StaticPages/HomePage";
const { Header, Sider, Content } = Layout;

const LayoutComponent = ({ path }) => {
  const history = useHistory();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["HOME"]}
          selectedKeys={[path]}
        >
          <Menu.Item
            key="HOME"
            onClick={() => history.push(`/fetch-bank-list`)}
          >
            <HomeFilled />
            <span>HOME</span>
          </Menu.Item>
          <Menu.Item key="BANKS" onClick={() => history.push(`/banks`)}>
            <BankFilled />
            <span>BANKS</span>
          </Menu.Item>
          <Menu.Item key="FAVOURITE" onClick={() => history.push(`/favourite`)}>
            <StarFilled />
            <span>FAVOURITE</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-wrapper">
            {React.createElement(
              isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            <div className="header-background" />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <Switch>
            <Route exact path={["/fetch-bank-list"]}>
              <HomePage />
            </Route>
            <Route exact path={["/favourite/:bankID", "/banks/:bankID"]}>
              <BankDetailComponent />
            </Route>
            <Route exact path={"/banks"}>
              <BankListComponent />
            </Route>
            <Route exact path={"/favourite"}>
              <BankListComponent isOnlyFavourites />
            </Route>
            <Route>
              <Notfound />
            </Route>
          </Switch>

          {/* <PostComponent/> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;

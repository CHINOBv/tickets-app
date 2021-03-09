import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Access from "./Access";
import Dashboard from "./Dashboard";
import Queue from "./Queue";
import CreateTicket from "./CreateTicket";
import { useContext } from "react";
import { UiContext } from "../context/UiContext";

const { Content, Footer, Sider } = Layout;

const RouterPages = () => {
  const { hideMenu } = useContext(UiContext);
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={hideMenu}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/access">Access</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/queue">Queue</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              <Link to="/create">Create</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}
            className="site-layout-background"
          >
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/access" component={Access} />
              <Route exact path="/queue" component={Queue} />
              <Route exact path="/create" component={CreateTicket} />
              <Redirect to="/access" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPages;

import React, { Fragment, useState } from "react";
import "./App.css";
import { Button, Layout, Table, Menu } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";
import { connect } from "react-redux";
import { addContact } from "./redux/contacts/actions";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = ({ contacts, addContact }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  // const [values, setValues] = useState([]);
  const [error, setError] = useState({});
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    console.log(isCollapsed);
    setCollapsed(isCollapsed);
  };

  console.log(contacts);

  const handleAddFormOnFinish = (inputValues) => {
    addContact({
      key: contacts.length + 1,
      ...inputValues
    })
    setError({});
    setShowDrawer(false);
  };

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setError(errorInfo);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'></Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}
          >
            <Fragment>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <div></div>
                <div>
                  <Button
                    type='primary'
                    icon={<PlusCircleOutlined />}
                    data-testid='add-contact-button'
                    onClick={() => setShowDrawer(true)}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <Layout.Content>
                <Table dataSource={contacts} columns={columns} />;
              </Layout.Content>
              <AddDrawer
                show={showDrawer}
                handleOnClose={() => setShowDrawer(false)}
                handleOnFinish={handleAddFormOnFinish}
                handleOnFinishFailed={handleAddFormOnFinishFailed}
              />
            </Fragment>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.allContacts,
  };
};

export default connect(mapStateToProps, { addContact })(App);

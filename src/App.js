import React from 'react';
import './styles/App.scss'
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <h1 className="app-header">React Redux - demo application</h1>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            style={{  borderRight: 0 }}
          >
            <Menu.Item key="1">users</Menu.Item>
            <Menu.Item key="2">todos</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
            }}
          >
            Content
        </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;

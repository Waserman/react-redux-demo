import React from 'react';
import './styles/App.scss'
import { Layout, Menu } from 'antd';
import UsersTable from './components/tables/UsersTable';
import ToDosTable from './components/tables/ToDosTable';

const { Header, Content, Sider } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItemKey: 'users'
    }
  }

  onMenuItemSelected = (selectedMenuItemKey) => {
    const { key } = selectedMenuItemKey;
    this.setState({selectedMenuItemKey: key})
  }
  render() {

    return (
      <Layout>
        <Header className="header">
          <h1 className="app-header">React Redux - demo application</h1>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['users']}
              defaultOpenKeys={['users']}
              style={{ borderRight: 0 }}
              onSelect={this.onMenuItemSelected}
            >
              <Menu.Item key="users">users</Menu.Item>
              <Menu.Item key="todos">todos</Menu.Item>
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
              {this.state.selectedMenuItemKey === 'users' ? <UsersTable /> : <ToDosTable/>}
        </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  };
}

export default App;

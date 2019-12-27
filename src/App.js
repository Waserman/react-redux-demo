import React from 'react';
import { connect } from 'react-redux';
import { fetchToDosApi, fetchUsersApi } from './store/actions'
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

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  onMenuItemSelected = (selectedMenuItemKey) => {
    const { key } = selectedMenuItemKey;
    if (key === 'users') {
      console.log('this.props.fetchUsers()');
      this.props.fetchUsers()
    } else {
      console.log('this.props.fetchToDos()');
      this.props.fetchToDos()
    }
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

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: todo => {
      dispatch(fetchUsersApi());
    },
    fetchToDos: todo => {
      dispatch(fetchToDosApi());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);

import React from 'react';
import TableWrapper from './TableWrapper';
import { connect } from 'react-redux';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }
  ];

const mapStateToProps = state => ({
    data: state.users
});

const UserTable = TableWrapper(columns);


export default connect(mapStateToProps)(UserTable);
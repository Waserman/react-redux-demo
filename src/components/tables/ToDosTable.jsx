import React from 'react';
import TableWrapper from './TableWrapper';
import { Tag } from 'antd';
import { connect } from 'react-redux';

const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      render: isCompleted => (
        <Tag color={isCompleted ? 'green' : 'red'}>{isCompleted ? 'yes' : 'no'}</Tag>
      )
    }
  ];

const mapStateToProps = state => ({
    data: state.todos
});

const ToDosTable = TableWrapper(columns);


export default connect(mapStateToProps)(ToDosTable);
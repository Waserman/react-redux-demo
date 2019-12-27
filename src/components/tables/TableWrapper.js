import React, { Component } from 'react';
import { Spin, Table } from 'antd';

const TableWrapper = (columns) => {
    return class TableBase extends Component {
        render() {
            const { data } = this.props;
            console.log(data)
            return (
                !data ? 
                <Spin size="large" /> :
                <Table dataSource={data} columns={columns}>
                </Table>
            );
        }
    }
}


export default TableWrapper;
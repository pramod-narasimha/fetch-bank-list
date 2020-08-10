import React from "react";
import "./styles.css";
import { Table } from "antd";
import { useHistory, useLocation } from "react-router";

const BankTable = ({ loading, rowSelection, tableData }) => {
  const history = useHistory();
  const location = useLocation();
  const columns = [
    {
      title: "Bank Name",
      dataIndex: "bank_name",
      render: (bank_name, row) => (
        <span
          onClick={() => {
            history.push(`${location.pathname}/${row.key}`);
          }}
        >
          {bank_name}
        </span>
      )
    },
    {
      title: "IFSC",
      dataIndex: "ifsc",
      render: (ifsc, row) => (
        <span
          onClick={() => {
            history.push(`${location.pathname}/${row.key}`);
          }}
        >
          {ifsc}
        </span>
      )
    },
    {
      title: "Branch",
      dataIndex: "branch",
      render: (branch, row) => (
        <span
          onClick={() => {
            history.push(`${location.pathname}/${row.key}`);
          }}
        >
          {branch}
        </span>
      )
    },
    {
      title: "Bank ID",
      dataIndex: "bank_id",
      render: (bank_id, row) => (
        <span
          onClick={() => {
            history.push(`${location.pathname}/${row.key}`);
          }}
        >
          {bank_id}
        </span>
      )
    },

    {
      title: "Address",
      dataIndex: "address",
      render: (address, row) => (
        <span
          onClick={() => {
            history.push(`${location.pathname}/${row.key}`);
          }}
        >
          {address}
        </span>
      )
    }
  ];
  return (
    <Table
      loading={loading}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={tableData}
      pagination={{ showSizeChanger: true }}
    />
  );
};

export default BankTable;

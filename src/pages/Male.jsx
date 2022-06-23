import React, { useEffect, useState } from "react";
import { Tag, Table, Image } from 'antd';
import axios from "axios";

const Male = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var api = "/elephants/sex/male";
    axios.defaults.baseURL = "/api";
    axios.get(api).then((res) => {
      console.log(res.data);
      setData(res.data || []);
    });
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text,record) => <a target="_blank" href={record.wikilink}>{text}</a>,
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      key: 'sex',
      render: (value) => <Tag color="black">
        {value}
      </Tag>
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text,record) => <Image
      width={200}
      height={200}
      src={text}
    />,
    }]
  return (
    <>
      <h1>Male Elephant</h1>
      <Table bordered columns={columns} dataSource={data} />
    </>
  );
};

export default Male;

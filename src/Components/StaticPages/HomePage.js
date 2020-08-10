import React from "react";
import { Row, Result, Button } from "antd";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
const HomePage = props => {
  return (
    <Row justify={"center"}>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have landed to the home page!"
        extra={
          <Link to="/banks">
            <Button type="primary">Lets go to Bank-Lists</Button>
          </Link>
        }
      />
      ,
    </Row>
  );
};

export default HomePage;

import React from "react";
import { Row, Result, Button } from "antd";
import { Link } from "react-router-dom";

const Notfound = props => {
  return (
    <Row justify={"center"}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Go to home</Button>
          </Link>
        }
      />
      ,
    </Row>
  );
};

export default Notfound;

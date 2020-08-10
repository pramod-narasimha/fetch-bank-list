import React from "react";
import { Card, Descriptions } from "antd";
import { ArrowLeftOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  fetchApiData,
  setFavourite,
  clearSearch
} from "../../actions/FetchApiDataActions";

const BankDetailComponent = props => {
const history = useHistory();
  const match1 = useRouteMatch("/banks/:name");
  const match2 = useRouteMatch("/favourite/:name");
  const match = match1?.params.name || match2?.params.name;

  React.useEffect(() => {
    props.fetchApiData();
    props.clearSearch();
  }, []);
  return (
    <Card
      title={
        <>
          <div style={{ paddingRight: "10px", display: "inline" }}>
            <ArrowLeftOutlined onClick={() => history.goBack()} />
          </div>

          <span>Bank Details</span>
        </>
      }
      bordered={false}
      style={{ width: "100%" }}
    >
      <Descriptions>
        <Descriptions.Item
          label={
            <>
              {props.bankList?.[match] && (
                <div style={{ paddingRight: "10px", display: "inline" }}>
                  {props.bankList?.[match]?.isFavourite ? (
                    <StarFilled
                      onClick={() =>
                        props.setFavourite(match, props.bankList, false)
                      }
                      style={{ color: "#FFB75D" }}
                    />
                  ) : (
                    <StarOutlined
                      onClick={() =>
                        props.setFavourite(match, props.bankList, true)
                      }
                      style={{ color: "#FFB75D" }}
                    />
                  )}
                </div>
              )}
              <span>Bank Name</span>
            </>
          }
          span={3}
        >
          {props.bankList?.[match]?.bank_name}
        </Descriptions.Item>
        <Descriptions.Item label="IFSC" span={3}>
          {props.bankList?.[match]?.ifsc}
        </Descriptions.Item>
        <Descriptions.Item label="Branch" span={3}>
          {props.bankList?.[match]?.branch}
        </Descriptions.Item>
        <Descriptions.Item label="Bank ID" span={3}>
          {props.bankList?.[match]?.bank_id}
        </Descriptions.Item>
        <Descriptions.Item label="Address" span={3}>
          {props.bankList?.[match]?.address}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

const mapStateToProps = statef => {
  return {
    isLoading: statef.apiData.isLoading,
    favList: statef.apiData.favList,
    bankList: statef.apiData.bankList
  };
};

const mapDispatchToProps = dispatch => ({
  fetchApiData: () => dispatch(fetchApiData()),
  setFavourite: (id, bankList, type) =>
    dispatch(setFavourite(id, bankList, type)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankDetailComponent);

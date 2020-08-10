import React from "react";
import { Select, Input } from "antd";
import { connect } from "react-redux";
import {
  fetchApiData,
  setFavourite,
  setSearchKey
} from "../../actions/FetchApiDataActions";
import BankTable from "./CommonComponents/BankTableComponent/BankTable";
const { Option } = Select;

class PostComponent extends React.Component {
  state = {
    timerId: 0
  };

  componentDidMount() {
    this.props.fetchApiData();
  }

  onSelectChange = selectedRowKeys => {
    selectedRowKeys.map(key => {
      if (typeof key === "number") {
        this.props.setFavourite(key, this.props.bankList, true);
      }
      return null;
    });
    if (this.props.favList.length) {
      this.props.favList.map(key => {
        if (!selectedRowKeys.includes(key)) {
          this.props.setFavourite(key, this.props.bankList, false);
        }
        return null;
      });
    }
    this.setState({ selectedRowKeys });
  };


  onFieldSearch = value => {
    clearTimeout(this.state.timerId);
    this.setState({
      timerId: setTimeout(() => {
        this.props.setSearchKey(value, this.props.bankList);
      }, 1000)
    });
  };

  displayData = () => {
    if (this.props.isOnlyFavourites) {
      if (this.props.searchKey.length > 0) {
        return this.props.filteredData?.filter(data => data.isFavourite);
      } else {
        return this.props.bankList?.filter(data => data.isFavourite);
      }
    } else {
      if (this.props.searchKey.length > 0) {
        return this.props.filteredData;
      } else {
        return this.props.bankList;
      }
    }
  };

  render() {
    const rowSelection = {
      selectedRowKeys: this.props.favList,
      hideDefaultSelections: "true",
      onChange: this.onSelectChange
    };
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Select
              bordered={false}
              showSearch
              style={{ width: 200 }}
              placeholder="Select city"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {this.props.cityList.map(data => (
                <Option key={data} value={data}>
                  {data}
                </Option>
              ))}
            </Select>
            <div style={{ width: "25%" }}>
              <Input.Search onChange={(e) => this.onFieldSearch(e.target.value)} placeholder="Search for key words you remember" size="small" />
            </div>
          </div>
        </div>
        <BankTable
          loading={this.props.loading}
          tableData={this.displayData()}
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

const mapStateToProps = statef => {
  return {
    isLoading: statef.apiData.isLoading,
    favList: statef.apiData.favList,
    bankList: statef.apiData.bankList,
    cityList: statef.apiData.cityList,
    searchKey: statef.apiData.searchKey,
    filteredData: statef.apiData.filteredData
  };
};

const mapDispatchToProps = dispatch => ({
  fetchApiData: () => dispatch(fetchApiData()),
  setFavourite: (id, bankList, type) =>
    dispatch(setFavourite(id, bankList, type)),
  setSearchKey: (searchKey, bankListData) =>
    dispatch(setSearchKey(searchKey, bankListData))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);

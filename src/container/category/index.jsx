import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
// 滚动条
import BScroll from 'better-scroll'
// 样式
import "./index.less";

// 数据
import tabs from "../../datas/indexCateModule.json";

export default class index extends Component {
  state = {
    categoryItem: tabs[0] // 显示的列表数据 初始化显示第一组数据
  };
  componentDidMount() {
    // 创建滚动条
    if (!this.scroll) {
      this.scroll = new BScroll('.wrap', {
        scrollY: true,
        click: true
      })
    }
    // console.log(this.state.categoryItem);
  }
  // 点击切换回调 data -->点击项的数据
  handleToggle = data => {
    // 修改数据
    this.setState({
      categoryItem: data
    });
    // 点击时滚动条回到的位置元素
    const node = this.node
    if(node){
      this.scroll.scrollToElement(node,300)
    }
  };
  render() {
    // 获取展示列表数据
    const { categoryItem } = this.state;

    return (
      <div className="category">
        {/* 头部搜索 */}
        <div className="header_search">
          <div className="search" onClick={() => this.props.history.push("search")}>
            <i className="iconfont  icon-sousuo"></i>
            <span>搜索商品，共24027款好物</span>
          </div>
        </div>
        <div className="cateCenter">
          <div style={{ height: 300, width:76}} className="sidebar">
            <WhiteSpace />
            <Tabs
              tabs={tabs}
              tabBarPosition="left"
              tabDirection="vertical"
              onTabClick={this.handleToggle}
            ></Tabs>
            <WhiteSpace />
          </div>
          <div className="wrap">
            <div className="cate_center">
              <div className="banner" ref={node => {this.node = node}}>
                <img src={categoryItem.imgUrl} alt={categoryItem.name} />
              </div>
              <ul className="cateItem">
                {categoryItem.subCateList.map((item, index) => (
                  <li key={index}>
                    <img src={item.wapBannerUrl} alt={item.name} />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

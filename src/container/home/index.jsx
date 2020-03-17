import React, { Component } from "react";
// 引入样式;
import "./index.less";
import { Button, WhiteSpace, WingBlank, Icon, Tabs } from "antd-mobile";

// 引入swiper
import Swiper from "swiper/js/swiper.js";
// 引入swiper样式
import "swiper/css/swiper.min.css";

export default class index extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      autoplay: true,//可选选项，自动滑动
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
    });
  }

  render() {
    const tabs = [
      { title: "推荐" },
      { title: "居家生活" },
      { title: "服饰鞋包" },
      { title: "美食酒水" },
      { title: "个护清洁" },
      { title: "母婴亲子" },
      { title: "运动旅行" },
      { title: "数码家电" },
      { title: "全球特色" }
    ];

    return (
      <div className="homeContainer">
        {/*  头部  */}
        <div className="home_headers">
          {/* 头部搜索 */}
          <div className="home_header">
            <h1>
              {/*  在react中图片必须要引入 */}
              <img src={require("../../assets/images/logo.png")} alt="logo" />
            </h1>
            <div className="home_header_search" click="$router.push('/search')">
              <Icon type="search" size="xxs" />
              <span>搜索商品，共24027款好物</span>
            </div>
            {/* <div > */}
            {/* <WingBlank> */}
            <Button
              className="home_header_login"
              click="$router.replace('/login')"
            >
              登录
            </Button>
            {/* <WhiteSpace /> */}
            {/* </WingBlank> */}
            {/* </div> */}
          </div>

          <div className="home_nav">
            {/* 头部导航 */}
            <div className="home_nav_tab">
              {/* <WhiteSpace /> */}
              <Tabs
                tabs={tabs}
                tabBarActiveTextColor="red"
                tabBarUnderlineStyle={{ color: "red" }}
                renderTabBar={props => (
                  <Tabs.DefaultTabBar {...props} page={4} />
                )}
                className="tab"
                // tabBarUnderlineStyle={{color:'red' }}
              >
                {/* 渲染这个里面得内容 */}
                {/* {this.renderContent}    */}
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '35px', backgroundColor: '#fff' }}>
        
                  </div> */}
              </Tabs>
              {/* <WhiteSpace /> */}
            </div>
          </div>
        </div>
        {/*  轮播图 */}
        <div className="home_swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require("./imgs/1.webp")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("./imgs/2.webp")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("./imgs/3.webp")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("./imgs/4.webp")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("./imgs/5.webp")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("./imgs/6.webp")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("./imgs/7.webp")} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={require("./imgs/8.webp")} alt="" />
            </div>
          </div>
          {/* <!-- 如果需要分页器 --> */}
          <div className="swiper-pagination"></div>

        </div>
        {/* 三大保证 */}
        <div className="home_indexServicePolicy">
          <ul className="grow">
            <li className="item">
              {/* <img src={require("../../assets/images/zdm.png")} size="15px" alt="" /> */}
              <span>网易自营品牌</span>
            </li>
            <li className="item">
              {/* <img src={require("../../assets/images/zdm.png")} size="15px" alt="" /> */}
              <span>30天无忧退货</span>
            </li>
            <li className="item">
              {/* <img src={require("../../assets/images/zdm.png")} size="15px" alt="" /> */}
              <span>48小时快速退款</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

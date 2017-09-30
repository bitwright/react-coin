import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions";
import CoinCard from "./CoinCard";
import Loader from "./Loader";
import homer from "../img/homer.png";

const baseUrl = "https://api.coinmarketcap.com/v1";

class Home extends Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  renderCoins() {
    const firstFiveCoins = this.props.coins.slice(0, 5);
    const secondFiveCoins = this.props.coins.slice(5);
    return (
      <div>
        <div className="columns" style={{ margin: "0 10px" }}>
          {firstFiveCoins.map(coin => {
            return <CoinCard coin={coin} key={coin.name} />;
          })}
        </div>
        <div className="columns" style={{ margin: "0 10px" }}>
          {secondFiveCoins.map(coin => {
            return <CoinCard coin={coin} key={coin.name} />;
          })}
        </div>
      </div>
    );
  }

  renderFail() {
    return (
      <div className="hero-body is-paddingless">
        <div className="container">
          <h2 className="title has-text-1 has-text-centered has-text-warning">
            Doh! We couldn't load the information from CoinMarketCap...
          </h2>
          <img
            className="image"
            src={homer}
            alt="Homer Simpson"
            style={{ margin: "0 auto" }}
          />
        </div>
      </div>
    );
  }

  render() {
    const { coins, global } = this.props;
    return (
      <div className="hero-body">
        <div className="container">
          {coins.loading && <Loader />}
          {Array.isArray(coins) && this.renderCoins()}
          {coins.failed && this.renderFail()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ coins, global }) {
  return { coins, global };
}
export default connect(mapStateToProps, actions)(Home);

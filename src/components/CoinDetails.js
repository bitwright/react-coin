import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Doughnut } from "react-chartjs-2";
import coinData from "../coin-data.json";
import "./CoinDetails.css";

class CoinDetails extends Component {
  componentDidMount() {
    this.props.fetchCoins();
    this.props.fetchGlobal();
  }

  renderDetails() {
    let selectedCoin;
    this.props.coins.forEach(coin => {
      if (coin.id === this.props.match.params.id) selectedCoin = coin;
    });
    this.addMeta(selectedCoin);
    const {
      id,
      name,
      rank,
      description,
      imgUrl,
      website,
      paper,
      github,
      price_usd,
      positivePercentChange,
      percentChange24h,
      marketCap,
      supply,
      symbol,
      percentMarketCap,
      chartMeta
    } = selectedCoin;

    return (
      <div className="columns selected-section">
        <Link to="/" className="nav-item">
          <div className="return-action">
            <i className="fa fa-arrow-left" />
            <p className="return-text">Return</p>
          </div>
        </Link>
        <div className="column is-7 image-section">
          <img src={imgUrl} className="coin-image" />
          <h1 className="coin-title">{name}</h1>
          <span className="tag is-primary">Rank {rank}</span>
          <p className="coin-description">{description}</p>
          <div className="icons-section">
            <span className="icon">
              <a href={website} target="_blank">
                <i className="fa fa-link" />
              </a>
            </span>
            <span className="icon">
              <a href={paper} target="_blank">
                <i className="fa fa-file-text" />
              </a>
            </span>
            <span className="icon">
              <a href={github} target="_blank">
                <i className="fa fa-github" />
              </a>
            </span>
          </div>
        </div>
        <div className="column information-section">
          <div className="price-section price-select-section">
            <p className="price-tag price-select-tag">Current Price</p>
            <p className="price-amount">
              ${price_usd}
              <span
                className={
                  positivePercentChange ? (
                    "positive-percent-change"
                  ) : (
                    "negative-percent-change"
                  )
                }
              >
                ({percentChange24h}%)
                <sub>
                  <a className="is-primary percent-tooltip tooltip">
                    <i className="fa fa-info-circle" />
                    <span className="tooltiptext">24h percent change</span>
                  </a>
                </sub>
              </span>
            </p>
          </div>
          <div className="price-section">
            <p className="price-tag">Circulating Supply</p>
            <p className="price-amount">
              {supply} {symbol}
            </p>
          </div>
          <div className="price-section">
            <p className="price-tag">Market Cap</p>
            <div className="price-amount market-cap-price-amount">
              ${marketCap}
              <Doughnut data={chartMeta} width={125} height={60} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { coins, global } = this.props;
    return (
      <div className="hero-body">
        <div className="container">
          {Array.isArray(coins) && this.renderDetails()}
        </div>
      </div>
    );
  }

  addMeta(coin) {
    coin.id = coin.id in coinData ? coin.id : undefined;
    coin.image = `${coin.id}_image`;
    coin.description = coinData[coin.id].description;
    coin.website = coinData[coin.id].website;
    coin.paper = coinData[coin.id].paper;
    coin.github = coinData[coin.id].github;
    coin.positivePercentChange = !(coin.percent_change_24h.indexOf("-") > -1);
    coin.percentChange24h = coin.percent_change_24h.replace(/^-/, "");
    coin.imgUrl = `${process.env.PUBLIC_URL}/img/${coin.id}_large_logo.png`;
    coin.supply = Number(coin.available_supply).toLocaleString();
    coin.marketCap = Number(coin.market_cap_usd).toLocaleString();
    coin.percentMarketCap = Math.round(
      coin.market_cap_usd / this.props.global.total_market_cap_usd * 100
    );
    coin.chartMeta = {
      labels: ["Global Market Cap (USD)", `${coin.name} Market Cap`],
      datasets: [
        {
          data: [this.props.global.total_market_cap_usd, coin.market_cap_usd],
          backgroundColor: ["#03D2B3", "#008dff"],
          hoverBackgroundColor: ["#03D2B3", "#008dff"]
        }
      ]
    };
  }
}

function mapStateToProps({ coins, global }) {
  return { coins, global };
}

export default connect(mapStateToProps, actions)(CoinDetails);

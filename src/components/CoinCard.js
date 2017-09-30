import React from "react";
import { Link } from "react-router-dom";
import "./CoinCard.css";

const CoinCard = props => {
  addMeta(props.coin);
  const {
    name,
    id,
    positivePercentChange,
    percentChange24h,
    rank,
    price_usd,
    imageUrl
  } = props.coin;
  const percentClass = positivePercentChange
    ? "positive-percent-change"
    : "negative-percent-change";

  return (
    <div className="column">
      <Link to={`/coin/${id}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={imageUrl} alt={`${name} Logo`} />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-6">{name}</p>
            <p className="title price-title is-5">
              ${Number(price_usd).toFixed(2)}
              <span className={percentClass}>
                {percentChange24h}%
                <i className="fa fa-arrow-up" />
                <i className="fa fa-arrow-down" />
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

function addMeta(coin) {
  coin.positivePercentChange = !(coin.percent_change_24h.indexOf("-") > -1);
  coin.percentChange24h = coin.percent_change_24h.replace(/^-/, "");
  coin.imageUrl = `${process.env.PUBLIC_URL}/img/${coin.id}_logo.png`;
}

export default CoinCard;

import React from "react";

const Modal = props => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.toggleModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">What's this?</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.toggleModal}
          />
        </header>
        <section className="modal-card-body has-text-centered">
          <h1 className="has-text-info is-size-2">ReactCoin</h1>
          <p className="has-text-grey-darker">
            Cryptocurrencies are decentralized digital currencies that became
            popular with the release of
            <a
              className="has-text-primary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://butcoin.org/en/"
              style={{ margin: "0 5px" }}
            >
              Bitcoin
            </a>
            in 2009. Since then, many 'altcoins' have emerged utlizing the same
            proof-of-work system.
          </p>
          <hr />
          <p className="has-text-grey-darker">
            <span className="has-text-info">ReactCoin </span>
            is a dashboard that displays the top 10 cryptocurrencies based on
            currency price, market capitalization and overall circulating supply
            - obtained from
            <a
              className="has-text-primary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://coinmarketcap.com/"
              style={{ marginLeft: "5px" }}
            >
              CoinMarketCap
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Modal;

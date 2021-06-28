import React, { Fragment } from "react";

class SymbolCardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      front: true,
    };

    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({ front: !this.state.front });
  }

  render() {
    const { symbol } = this.props;

    return (
      <Fragment>
          <div
            onClick={this.flip}
            className={
              this.state.front ? "card-inner not-flipped" : "card-inner flipped"
            }
          >
            <div className="img-container front">
              <img src={symbol.image} alt={`${symbol.name} symbol`}></img>
            </div>
            <div className="back ">
              <h2>{symbol.name}</h2>
              <p>{symbol.description}</p>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default SymbolCardComponent;

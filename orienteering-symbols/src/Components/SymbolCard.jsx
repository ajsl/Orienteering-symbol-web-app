import React, { Fragment } from "react";

class SymbolCardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: true,
    };

    this.flip = this.flip.bind(this);
  }

  flip() {
      this.setState({flip: !this.state.flip})
  }

  render() {
    const { symbol } = this.props;

    return (
      <Fragment >
        <div className="card" onClick={this.flip}>
          {this.state.flip ? (
            <div className="img-container front"> 
              <img src={symbol.image} alt={`${symbol.name} symbol`}></img>
            </div>
          ) : (
            <div className="back">
              <h2>{symbol.name}</h2>
              <p>{symbol.description}</p>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default SymbolCardComponent;

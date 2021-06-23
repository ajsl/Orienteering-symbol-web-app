import React, { Fragment } from "react";
import SymbolCardComponent from "./SymbolCard";
import { symbolData } from "../symbols";

export class Symbols extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbols: symbolData.symbols,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <section className="wrapper">
          <div className="flex-wrap">
            {this.state.symbols.map((symbol) => {
              return (
                <SymbolCardComponent
                  symbol={symbol}
                  key={symbol.id}
                ></SymbolCardComponent>
              );
            })}
          </div>
        </section>
      </Fragment>
    );
  }
}

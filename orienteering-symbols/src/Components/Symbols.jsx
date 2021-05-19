import React, { Fragment } from 'react'
import SymbolCardComponent from './SymbolCard';
import { symbolData } from '../symbols';

export class Symbols extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            symbols : symbolData.symbols
        };
    };

    componentDidMount() {
    };

    render ()
    {
        return (
            <Fragment>
                {this.state.symbols.map(symbol => {
                  return <SymbolCardComponent symbol={symbol} key={symbol.id}></SymbolCardComponent>
                })
            }
                
            
                
            </Fragment>
        )
    }
}

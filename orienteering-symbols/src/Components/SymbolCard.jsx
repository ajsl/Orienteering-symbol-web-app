import React,{ Fragment } from 'react'

class SymbolCardComponent extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const {symbol} = this.props; 

        return (
            <Fragment>
                <div>
                    <img src={symbol.image} alt={`${symbol.name} symbol`}></img>
                    <p>{symbol.name}</p>
                    <p>{symbol.description}</p>
                </div>
            </Fragment>
        )
    }
    
}

export default SymbolCardComponent

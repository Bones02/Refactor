import React from 'react';
import slugify from 'slugify';
import CartTotal from './CartTotal';
import SummaryTotal from './SummaryTotal';


const MainSummary = props => {
    const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
    );
    
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartTotal 
              selected={props.selected}
              USCurrencyFormat={props.USCurrencyFormat}/>
            <SummaryTotal 
              USCurrencyFormat={props.USCurrencyFormat}
              selected={props.selected}/>
          </section>
    );
    
return MainSummary;
};

export default MainSummary;
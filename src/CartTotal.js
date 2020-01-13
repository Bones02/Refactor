import React from 'react';
import slugify from 'slugify';

const CartTotal = props => {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];

        return (
        <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
            {props.USCurrencyFormat.format(selectedOption.cost)}
            </div>
        </div>
        );
    });

    const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
    );
return summary;
};
 
 export default CartTotal;
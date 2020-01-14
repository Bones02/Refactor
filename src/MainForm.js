import React from 'react';
import slugify from 'slugify';
import CustomizerOptions from './CustomizerOptions';

const MainForm = props => {
    const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
    );

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomizerOptions 
            features={props.features} 
            updateFeature={props.updateFeature} 
            selected={props.selected}
            USCurrencyFormat={props.USCurrencyFormat}/>
            
        </form>
    );

return MainForm
};

export default MainForm;
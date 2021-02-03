import React from 'react';

export const Toggle = ({ togglePrice }) => {

    return (

        <div className="toggle__container">
            <div className="toggle__our-pricing">
                <p>Our Pricing</p>
            </div>
            <div className="toggle__slider">
                <p>Annually</p>
                <label class="switch">
                    <input 
                        type="checkbox"
                        onChange={ togglePrice }
                    />
                    <span class="slider round"></span>
                </label>
                <p>Monthly</p>
            </div>
        </div>

    );

};

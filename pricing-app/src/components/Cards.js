import React from 'react';

export const Cards = () => {

    return (

        <div className="cards__container">

            <div className="card basic">
                <p>Basic</p>
                <div className="price">
                    <p>$</p><span>19.99</span>
                </div>
                <div className="features">
                    <p>500 GB Storage</p>
                    <p>2 Users Allowed</p>
                    <p>Send up to 3 GB</p>
                </div>
                <button>LEARN MORE</button>
            </div>
            <div className="card professional">
                <p>Professional</p>
                <div className="price">
                    <p>$</p><span>24.99</span>
                </div>
                <div className="features">
                    <p>1 TB Storage</p>
                    <p>5 Users Allowed</p>
                    <p>Send up to 10 GB</p>
                </div>
                <button>LEARN MORE</button>
            </div>
            <div className="card master">
                <p>Master</p>
                <div className="price">
                    <p>$</p><span>39.99</span>
                </div>
                <div className="features">
                    <p>2 TB Storage</p>
                    <p>10 Users Allowed</p>
                    <p>Send up to 20 GB</p>
                </div>
                <button>LEARN MORE</button>
            </div>
            
        </div>

    );

};

import React from "react";
import './ProdBox.css'

import WatchFace from "./WatchFace";

const ProductBox = ({ prod, isAnimating}) => {
    return ( 
        <div className="prods">
            <div className="prod-box">
            {prod.type === "Analog" && <img className="wa-face" src={prod.image} alt={prod.name} />}
            <div className="wf-ele">
                {prod.type=="Analog" && prod.watch && <WatchFace isAnimating={isAnimating} radius={prod.rad} size={prod.size}/>}
            </div>
            {prod.type === "Analog" && <h2 className="title">{prod.name}</h2>}
            {prod.type === "Analog" && <div className="price">{prod.price}</div>}
        </div>
        </div>
    );
}

export default ProductBox;

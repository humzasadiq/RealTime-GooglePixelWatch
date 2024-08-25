import React from "react";
import './ProdBox1.css'

import DigitalFace from "./DigitalFace";

const ProductBox1 = ({ prod}) => {
    return ( 
        <div className="prods">
            <div className="prod-box">
            {prod.type === "Digital" && <img className="wa-face" src={prod.image} alt={prod.name} />}
            <div className="wf-ele">
                {prod.type=="Digital" && prod.watch && <DigitalFace wid={prod.wide}/>}
            </div>
            {prod.type === "Digital" && <h2 className="title">{prod.name}</h2>}
            {prod.type === "Digital" && <div className="price">{prod.price}</div>}
        </div>
        </div>
    );
}

export default ProductBox1;

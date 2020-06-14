import React from 'react'
import './mega.css'

export default props => {
    
    return (
        <div className="DivBolota">
            {                
                <span className="Bolota">{props.num < 10 ? '0'+props.num : props.num}</span>             
            }
        </div>
    );
}
import React from 'react';
import './Coefficient.scss'



export function Coefficient({ coefficient }) {
    return (
        <div className='coefficient'>
            {coefficient.map(elem => {
                const active = elem.coef < 3.82 ? 'coefficient__title--red' : 'coefficient__title--green'
                return (
                    <div className='coefficient__container'>
                        <div className={`coefficient__title ${active}`}>{elem.coef}</div>
                        <p className='coefficient__text'>{elem.text}</p>
                    </div>
                )
            })}
        </div >
    );
}
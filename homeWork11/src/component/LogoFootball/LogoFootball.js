import React from 'react';
import './LogoFootball.scss'


export function LogoFootball({ name, img, classLitell = '' }) {
    return (
        <div className='logo'>
            <img className='logo__img' src={img} alt="#" />
            <div className={`logo__title ${classLitell}`}>{name}</div>
        </div>
    );
}
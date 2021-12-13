import React from 'react';
import './CartMain.scss';
import { LogoFootball } from '../LogoFootball/LogoFootball';
import { Timer } from '../Timer/Timer';
import { Coefficient } from '../Coefficient/Coefficient';
import { LiveStream } from '../LiveStream/LiveStream';




export function CartMain({ props }) {
    const { title, leftName, leftLogo, rightName, rightLogo, ticket, score, scoreImg, newClass, coefficient } = props;
    return (
        <div className='cart-main'>
            <h2 className='cart-main__title'>{title}</h2>
            <div className='cart-flex-container mb'>
                <LogoFootball name={leftName} img={leftLogo} />
                <Timer />
                <LogoFootball name={rightName} img={rightLogo} />
            </div>
            <div className='cart-flex-container cart-flex-container--wrap mb' style={{ marginLeft: '10px', marginRight: '10px' }}>
                <div>
                    <h2 className='date-match'> 19 июля, 19:00</h2>
                    <p className='place-match'>Открытие Банк Арена</p>
                </div>
                <Coefficient coefficient={coefficient} />
                <button className='btn' onClick={() => alert('Вы нажали на кнопку купить билет')}>
                    <img className='btn__img' src={ticket} alt="" />
                    <span className='pading-left'>купить</span><span className='display-none' style={{ paddingLeft: '5px' }}>билет</span>
                </button>
            </div>
            <LiveStream />
        </div>
    );
}


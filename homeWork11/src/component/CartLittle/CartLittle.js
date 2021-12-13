import React from 'react';
import './CartLittle.scss'
import { LogoFootball } from '../LogoFootball/LogoFootball';



export function CartLittle({ props }) {
    const { title, leftName, leftLogo, rightName, rightLogo, ticket, score, scoreImg, newClass } = props;
    return (
        <div className='cart-little'>
            <h2 className='cart-main__title'>{title}</h2>
            <div className='cart-flex-container mb mt'>
                <LogoFootball name={leftName} img={leftLogo} classLitell='logo__title--little' />
                <div className='score'>
                    {score !== '' ? <div className='score__content'>{score}</div> : <img className='score__content score__content--img' src={scoreImg} alt="" />}
                </div>
                <LogoFootball name={rightName} img={rightLogo} classLitell='logo__title--little' />
            </div>
            <div className='cart-flex-container mb' style={{ marginLeft: '10px', marginRight: '10px' }}>
                <div>
                    <h2 className='date-match'> 19 июля, 19:00</h2>
                    <p className='place-match'>Открытие Банк Арена</p>
                </div>
                <button className={`btn ${newClass}`} onClick={() => alert('Вы нажали на кнопку')}>
                    <img className='btn__img' src={ticket} alt="" />
                </button>
            </div>
        </div>
    );
}

// export function CartLittle({ nameLeft, imgLeft, nameRight, imgRight, ticket, newClass, score, scoreImg }) {



//     return (
//         <div className='cart-little'>
//             <h2 className='cart-main__title'>1-й тур | Тинькофф РПЛ</h2>
//             <div className='cart-flex-container mb mt'>
//                 <LogoFootball name={nameLeft} img={imgLeft} classLitell='logo__title--little' />
//                 <div className='score'>
//                     {score !== '' ? <div className='score__content'>{score}</div> : <img className='score__content score__content--img' src={scoreImg} alt="" />}
//                 </div>
//                 <LogoFootball name={nameRight} img={imgRight} classLitell='logo__title--little' />
//             </div>
//             <div className='cart-flex-container mb' style={{ marginLeft: '10px', marginRight: '10px' }}>
//                 <div>
//                     <h2 className='date-match'> 19 июля, 19:00</h2>
//                     <p className='place-match'>Открытие Банк Арена</p>
//                 </div>
//                 <button className={`btn ${newClass}`} onClick={() => alert('Вы нажали на кнопку')}>
//                     <img className='btn__img' src={ticket} alt="" />
//                 </button>
//             </div>
//         </div>
//     );
// }

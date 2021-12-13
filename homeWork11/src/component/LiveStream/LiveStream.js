import React from 'react';
import './LiveStream.scss';


export function LiveStream() {
    return (
        <div className='live-stream'>
       <div className='live-stream__title'>смотреть трансляцию матча</div>
       <button className='live-stream__btn' onClick={() => alert('Вы нажали на кнопку play')}></button>
        </div>
    );
}
import React from 'react';
import { CartMain } from './component/CartMain/CartMain';
import { CartLittle } from './component/CartLittle/CartLittle';
import spartak from './images/spartak.png';
import lokomotiv from './images/lokomotiv.png';
import ural from './images/ural.png';
import sochi from './images/sochi.png';
import arrowRight from './images/ArrowRight.svg';
import cska from './images/cska.png';
import dinamo from './images/dinamo.png';
import ticket from './images/Ticket.svg'
import scoreIcon from './images/score.svg'

const matches = [{
  isFlag: false,
  title: '1-й тур | Тинькофф РПЛ',
  leftName: 'УРАЛ',
  leftLogo: ural,
  rightName: 'СОЧИ',
  rightLogo: sochi,
  ticket: arrowRight,
  score: '2 : 1',
  scoreImg: '',
  newClass: 'btn--arrowRight'
}, {
  isFlag: true,
  title: '1-й тур | Тинькофф РПЛ',
  leftName: 'СПАРТАК',
  leftLogo: spartak,
  rightName: 'ЛОКОМОТИВ',
  rightLogo: lokomotiv,
  ticket: ticket,
  score: '',
  scoreImg: '',
  newClass: '',
  coefficient: [{ coef: 3.82, text: 'П1' }, { coef: 3.69, text: 'ПХ' }, { coef: 3.81, text: 'П2' }]
},
{
  isFlag: false,
  title: '1-й тур | Тинькофф РПЛ',
  leftName: 'ЦСКА',
  leftLogo: cska,
  rightName: 'ДИНАМО',
  rightLogo: dinamo,
  ticket: ticket,
  score: '',
  scoreImg: scoreIcon,
  newClass: 'btn--ticket'
},
]

function App() {
  return (
    <div className='container'>
      {matches.map(elem => elem.isFlag ? <CartMain props={elem} /> : <CartLittle props={elem} />)}
    </div >
  );
}

export default App;

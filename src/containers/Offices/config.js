import React from 'react';
import IntlMessages from '../../components/utility/intlMessages';
import Img1 from '../../image/1.jpg';
import Img2 from '../../image/2.jpg';
import Img3 from '../../image/3.jpg';
import Img4 from '../../image/4.jpg';
import Img5 from '../../image/5.jpg';
import Img6 from '../../image/6.jpg';
import Img7 from '../../image/7.jpg';

const articles = [
  {
    id: 'a',
    quantC: <IntlMessages id="offices.quantityC1" />,
    quantP: <IntlMessages id="offices.quantityP1" />,
    desc: <IntlMessages id="offices.descriptionOne" />,
    img: Img1,
  },
  {
    id: 'b',
    quantC: <IntlMessages id="offices.quantityC2" />,
    quantP: <IntlMessages id="offices.quantityP2" />,
    desc: <IntlMessages id="offices.descriptionTwo" />,
    img: Img2,
  },
  { 
    id: 'c', 
    quantC: <IntlMessages id="offices.quantityC3" />,
    quantP: <IntlMessages id="offices.quantityP3" />, 
    desc: <IntlMessages id="offices.descriptionThree" />, 
    img: Img3 
  },
  {
    id: 'd',
    quantC: <IntlMessages id="offices.quantityC4" />,
    quantP: <IntlMessages id="offices.quantityP4" />,
    desc: <IntlMessages id="offices.descriptionFour" />,
    img: Img4,
  },
  {
    id: 'e',
    quantC: <IntlMessages id="offices.quantityC5" />,
    quantP: <IntlMessages id="offices.quantityP5" />,
    desc: <IntlMessages id="offices.descriptionFive" />,
    img: Img5,
  },

  {
    id: 'f',
    quantC: <IntlMessages id="offices.quantityC6" />,
    quantP: <IntlMessages id="offices.quantityP6" />,
    desc: <IntlMessages id="offices.descriptionSix" />,
    img: Img6,
  },
  {
    id: 'g',
    quantC: <IntlMessages id="offices.quantityC7" />,
    quantP: <IntlMessages id="offices.quantityP7" />,
    desc: <IntlMessages id="offices.descriptionSeven" />,
    img: Img7,
  },
];

export default articles;

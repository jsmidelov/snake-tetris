import * as React from 'react';
import sprite from './fruit.svg';

const Fruit = ({x,y,r}) => (
    <image
        x={x-r}
        y={y-r}
        height={r*2}
        width={r*2}
        xlinkHref={sprite}
    />
);

export default Fruit;
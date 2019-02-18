import * as React from 'react';

const Snake = ({segments}) => segments.map( ({x: cx, y: cy, side}, key) => (
    <rect
        x={cx}
        y={cy}
        width={side}
        height={side}
        fill='black'
        fillOpacity={key === 0 ? 1 : 0.5}
    />
))

export default Snake;
import * as React from 'react';

import Fruit from './fruit/fruit';
import Snake from './snake/snake';
import SnakeObject from './snake-object/snake-object';
import * as ruleset from './game-rules/';

const cellSize = 32;

export default class SnakeGame extends React.Component {
    static defaultProps = {
        width: cellSize * 20,
        height: cellSize * 15,
        backgroundColor: 'white',
        newFruitDelay: 200,
        newFruitProbability: 0.35,
        newFruitSize: 40,
        fruitExpirationDelay: 10 * 1000,
        snakeSpeed: 0.1,
        growthDelay: 150,
    };

    constructor(props){
        super(props);
        const direction = 90;
        this.state = {
            segments: [
                new SnakeObject({
                    x: cellSize * Math.round((this.props.width /2) / cellSize) ,
                    y: cellSize * Math.round((this.props.height/2) / cellSize) ,
                    side: cellSize,
                    offset: 0,
                    trailDirection: direction + 180
                }),
            ],
            direction,
            fruits: [
            ],
            trail: [],
            running: true,
            time: 0,
            deltaTime: 0,
            growth: 8,
            lastGrowthAt: 0,
            lastFruitAt: 0,
        };
    }

    componentDidMount(){
        document.addEventListener('keydown', this._onKeyDown);
        let scheduleNextTick;
        const tick = (time) => {
            const { noCrossing, ...rest } = ruleset;
            this.setState(
                (state, props) => [
                    ({ time: prevTime }) => ({
                        time,
                        deltaTime: time - prevTime,
                    }),
                    noCrossing,
                    ...Object.values(rest),
                ]
                .reduce(
                    (s, rule) => ({
                        ...s,
                        ...s(state.running & rule(s, props)),
                    }),
                    state,
                ),
                scheduleNextTick,
            );
            scheduleNextTick = () => {
                this._requestId = requestAnimationFrame(tick);
            };
            scheduleNextTick();
        };
    };

    componentWillUnmount() {
        cancelAnimationFrame(this._requestId);
        document.removeEventListener('keydown',this._onKeyDown);
    };

    
    _onKeyDown = ({ keyCode }) => this.setState( ({direction}) => {
        const keyCodes = {
            left: 37,
            up: 38,
            right: 39,
            down: 40
        }
        const dirAngle = {
            left: 270,
            up: 0,
            right: 90,
            down: 180
        }

        switch(keyCode){
            case keyCodes.left:
                return{
                    direction: dirAngle.left,
                };
            case keyCodes.up:
                return {
                    direction: dirAngle.up,
                }
            case keyCodes.right:
                return {
                    direction: dirAngle.right,
                }
            case keyCodes.down:
                return {
                    direction: dirAngle.down,
                }
            default:
            return;
        }
    });

    render(){
        const {
            props: { width, height, backgroundColor },
            state: { fruits, segments, time }
        } = this;
        const sec = (time / 1000).toFixed(2);
        return (
            <svg style={{width, height, backgroundColor}}>
            <text style={{ fontFamily: 'monospace'}} y={20}>
                Score: {sec}s and {segments.length} segments
            </text>
                {fruits.map(fruit => <Fruit {...fruit} />)}
                <Snake {...{segments}} />
            </svg>
        )
    };
}
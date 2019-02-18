const degreesToVector2 = (direction) => {
    const radian = direction * Math.PI / 180;
    return [Math.sin(radian), -Math.cos(radian)]
}

const vector2add = ([ax,ay],[bx,by]) => [ax + bx, ay + by];
const vector2scalar = ([dx, dy], scalar) => [dx * scalar, dy * scalar];

let count = 0;

export default class SnakeObject {
    constructor(props) {
        const { key = count++ } = props;
        Object.assign(this, props, {key});
    }
    collidesWith(b){
        const a = this;
        return (a.r + b.r) > Math.sqrt(
            Math.pow(a.x - b.x,2) + Math.pow(a.x - b.x,2)
        );
    }
    clone(props){
        return new this.constructor({...this, ...props});
    }
    cloneMovedBy({
        direction,
        distance,
        height: h,
        wight: w,
    }, props) {
        const [x,y] = vector2add(
            [this.x, this.y],
            vector2scalar(degreesToVector2(direction), distance)
        );
        return this.clone({
            x: ((x % w) + w) % w,
            y: ((y % h) + h) % h,
            ...props
        });
    };
}
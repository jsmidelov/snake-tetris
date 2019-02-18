export default (
    {fruits, time},
    {fruitExirationDelay: delay}) => ({
        fruits: fruits.filter(f => time - f.createdAt <= delay)
});
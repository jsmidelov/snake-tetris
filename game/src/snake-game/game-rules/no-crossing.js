export default ({segments}) => ({
    running: !segments.slice(5).some(s => s.collidesWith(segments[0]))
});
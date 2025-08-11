import { useRef, useEffect } from 'react';
import './Squares.css';

const Squares = ({
    direction = 'right',
    speed = 1,
    borderColor = '#999',
    squareSize = 40,
    hoverFillColor = '#222',
    className = ''
}) => {
    const canvasRef = useRef(null);
    const numSquaresX = useRef();
    const numSquaresY = useRef();
    const hoveredSquare = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
            drawGrid();
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX = 0;
            const startY = 0;

            for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
                for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
                    if (
                        hoveredSquare.current &&
                        Math.floor(x / squareSize) === hoveredSquare.current.x &&
                        Math.floor(y / squareSize) === hoveredSquare.current.y
                    ) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(x, y, squareSize, squareSize);
                    }

                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(x, y, squareSize, squareSize);
                }
            }

            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
            );
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const hoveredSquareX = Math.floor(mouseX / squareSize);
            const hoveredSquareY = Math.floor(mouseY / squareSize);

            if (
                !hoveredSquare.current ||
                hoveredSquare.current.x !== hoveredSquareX ||
                hoveredSquare.current.y !== hoveredSquareY
            ) {
                hoveredSquare.current = { x: hoveredSquareX, y: hoveredSquareY };
                drawGrid();
            }
        };

        const handleMouseLeave = () => {
            hoveredSquare.current = null;
            drawGrid();
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [borderColor, hoverFillColor, squareSize]);

    return <canvas ref={canvasRef} className={`squares-canvas ${className}`}></canvas>;
};

export default Squares;

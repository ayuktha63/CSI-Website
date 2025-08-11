import { useRef, useEffect, useState } from "react";
import "../styles/MagnetLines.css";


export default function MagnetLines({
    lineColor = "#0088ffff",
    lineWidth = "1vmin",
    lineHeight = "6vmin",
    baseAngle = -10,
    className = "",
    style = {}
}) {
    const containerRef = useRef(null);
    const [grid, setGrid] = useState({ rows: 0, columns: 0 });

    // Calculate grid based on viewport size
    useEffect(() => {
        const updateGrid = () => {
            const size = 50; // pixels between lines
            setGrid({
                rows: Math.ceil(window.innerHeight / size),
                columns: Math.ceil(window.innerWidth / size),
            });
        };
        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    // Mouse / touch magnetic effect
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const items = container.querySelectorAll("span");

        const onPointerMove = (pointer) => {
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.x + rect.width / 2;
                const centerY = rect.y + rect.height / 2;

                const dx = pointer.x - centerX;
                const dy = pointer.y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;

                const angleDeg =
                    ((Math.acos(dx / dist) * 180) / Math.PI) *
                    (pointer.y > centerY ? 1 : -1);

                item.style.setProperty("--rotate", `${angleDeg}deg`);
            });
        };

        window.addEventListener("pointermove", onPointerMove);

        // Centered initial rotation
        if (items.length) {
            const middleIndex = Math.floor(items.length / 2);
            const rect = items[middleIndex].getBoundingClientRect();
            onPointerMove({ x: rect.x, y: rect.y });
        }

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
        };
    }, [grid]);

    const total = grid.rows * grid.columns;
    const spans = Array.from({ length: total }, (_, i) => (
        <span
            key={i}
            style={{
                "--rotate": `${baseAngle}deg`,
                backgroundColor: lineColor,
                width: lineWidth,
                height: lineHeight
            }}
        />
    ));

    return (
        <div
            ref={containerRef}
            className={`magnetLines-container ${className}`}
            style={{
                gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
                gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
                ...style
            }}
        >
            {spans}
        </div>
    );
}

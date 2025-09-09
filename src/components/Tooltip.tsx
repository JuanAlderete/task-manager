import React, { useState, useRef, useEffect } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  delay?: number; // ms
}

const Tooltip = ({ children, text, delay = 500 }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<TooltipPosition>("top");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const spaces = {
          top: rect.top,
          bottom: windowHeight - rect.bottom,
          left: rect.left,
          right: windowWidth - rect.right,
        };

        const bestPosition = (Object.keys(spaces) as TooltipPosition[]).reduce(
          (a, b) => (spaces[a] > spaces[b] ? a : b),
          "top"
        );

        setPosition(bestPosition);
      }
      setVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  const arrowClasses: Record<TooltipPosition, string> = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-gray-800",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-800",
    left: "left-full top-1/2 -translate-y-1/2 border-l-gray-800",
    right: "right-full top-1/2 -translate-y-1/2 border-r-gray-800",
  };

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          className={`absolute px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg whitespace-nowrap z-50 transition-opacity duration-300 ${positionClasses[position]}`}
        >
          {text}
          {/* Flecha */}
          <div
            className={`absolute w-0 h-0 border-6 border-transparent ${arrowClasses[position]}`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;

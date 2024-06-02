"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";
type AnimatedPathProps = {
  id: string; //unique id
  path: string; //path d of svg
  width: number; //width
  height: number; //height
  viewBox: string; //viewBox of svg
  duration: number; //duration
  className?: string; //className
};
export type AnimatedPathHandles = {
  animate: () => void; //call ref.current.animate() to animate
};
const AnimatedPath = forwardRef<AnimatedPathHandles, AnimatedPathProps>(
  ({ id, path, width, height, viewBox, duration, className }, ref) => {
    const svgRef = useRef<null | SVGUseElement>(null);
    const pathsStyles = {
      strokeDasharray: "12 6",
      strokeWidth: "4",
    };

    const maskStyles = {
      strokeWidth: "4",
      strokeDasharray: "20000",
      strokeDashoffset: "20000",
    };

    const animate = () => {
      if (svgRef.current) {
        svgRef.current.style.transition = "0s";
        svgRef.current.style.strokeDashoffset = "20000";
        setTimeout(() => {
          if (svgRef.current) {
            svgRef.current.style.transition = `${duration}s`;
            svgRef.current.style.strokeDashoffset = "0";
          }
        }, 1);
      }
    };
    useImperativeHandle(ref, () => ({
      animate,
    }));
    return (
      <svg width={width} height={height} viewBox={viewBox} className={className}>
        <defs>
          <path 
          className="stroke-current shadow3"
          id={`${id}-path`} d={path} />
          <mask id={`${id}-mask`}>
            <use
              style={maskStyles}
              stroke="white"
              fill="none"
              ref={svgRef}
              xlinkHref={`#${id}-path`}
            />
          </mask>
        </defs>
        <use
          style={pathsStyles}
          className="stroke-current"
          xlinkHref={`#${id}-path`}
          mask={`url(#${id}-mask)`}
          fill="none"
        />
      </svg>
    );
  }
);

AnimatedPath.displayName = "AnimatedPath"
export default AnimatedPath;

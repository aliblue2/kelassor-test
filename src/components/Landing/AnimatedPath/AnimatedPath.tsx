"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";
type AnimatedPathProps = {
  id: string; //unique id
  path: string; //path d of svg
  width?: number | string; //width
  height?: number | string; //height
  viewBox: string; //viewBox of svg
  duration?: number; //duration
  className?: string; //className
  testing?: boolean;
};
export type AnimatedPathHandles = {
  animate: () => void; //call ref.current.animate() to animate
};
const AnimatedPath = forwardRef<AnimatedPathHandles, AnimatedPathProps>(
  (
    {
      id,
      path,
      width = "100%",
      height = "100%",
      viewBox,
      duration = 20,
      className,
      testing = false,
    },
    ref
  ) => {
    const svgRef = useRef<null | SVGUseElement>(null);
    const pathsStyles = {
      strokeDasharray: "6 6",
      strokeWidth: "4",
    };

    const maskStyles = {
      strokeWidth: "4",
      strokeDasharray: "20000",
      strokeDashoffset: testing ? "0" : "20000",
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
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        className={className}
      >
        <defs>
          <path id={`${id}-path`} d={path} />
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
          strokeLinecap="round"
          xlinkHref={`#${id}-path`}
          mask={`url(#${id}-mask)`}
          fill="none"
        />
      </svg>
    );
  }
);

AnimatedPath.displayName = "AnimatedPath";
export default AnimatedPath;

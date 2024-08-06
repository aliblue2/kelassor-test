"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const Player = ({ url }) => {
  return (
    <ReactPlayer width={"100%"} height={"100%"} controls={true} url={url} />
  );
};

export default Player;

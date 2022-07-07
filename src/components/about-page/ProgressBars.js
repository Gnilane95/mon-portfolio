import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBars({percentage, title}) {
  return (
    <div style={{ width: 200, height: 200, }}>
      <CircularProgressbar
        className="font-black text-md md:grid md:grid-cols-2 "
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#fff",
          opacity: 0.3,
          textColor: "#100f3a",
          pathColor: "#8583e1",
          trailColor: "#a5a5a5",
        })}
      />
      <p className="uppercase text-primary-dark font-bold text-center md:pt-4 pt-2 text-sm">
        {" "}
        {title}{" "}
      </p>
    </div>
  );
}

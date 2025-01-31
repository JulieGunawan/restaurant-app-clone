"use client";
import React from "react";
import dynamic from "next/dynamic";
// import Countdown from "react-countdown";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const endingDate = new Date("2025-02-28");

const CountDown = () => {
    return (
        <Countdown className="font-bold text-5xl text-yellow-200"
        date={endingDate}
        />
    )}

export default CountDown;
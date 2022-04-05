import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Grid } from "semantic-ui-react";
import Decor from "../assets/decor.svg";
import { Title } from "./Title";
import Map from "./Map";
import styled from "styled-components";
import {
	FlipUpTitleAnimation,
	ScaleUpImageDecorAnimation,
} from "../helpers/animation";
import { animated, useSpring } from "react-spring";

const StyledButtonCalendar = styled.a`
	background-color: #eb7b8b;
	border-color: #eb7b8b;
	color: #fff;
	border-radius: 20px;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	margin: 20px 0px;
`;

const WeddingTimer = ({ expiryTimestamp }) => {
	const { seconds, minutes, hours, days, start } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn("expired"),
	});

	useEffect(() => {
		start();
	}, []);
	return (
		<div id="timer">
			<div className="number-list">
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{days}</h3>
						<span className="separator">:</span>
					</div>
					<span className="unit">Hari</span>
				</div>
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{hours}</h3>
						<span className="separator">:</span>
					</div>
					<span className="unit">Jam</span>
				</div>
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{minutes}</h3>
						<span className="separator">:</span>
					</div>
					<span className="unit">Minute</span>
				</div>
				<div className="item">
					<div className="row-timer">
						<h3 className="count">{days}</h3>
					</div>
					<span className="unit">Detik</span>
				</div>
			</div>
		</div>
	);
};

const CountDownMap = () => {
	const time = new Date(2022, 6, 25, 11);
	time.setSeconds(time.getSeconds() + 600);

	const style_timer_animated = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "1000" },
		loop: false,
	});

	return (
		<div
			style={{
				marginBottom: "40px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
			}}
		>
			{/* <img src={Decor} height="30px" style={{ marginBottom: "-10px" }} /> */}
			<ScaleUpImageDecorAnimation src={Decor} />
			<FlipUpTitleAnimation text="Countdown" />
			<animated.div style={style_timer_animated}>
				<WeddingTimer expiryTimestamp={time} />
			</animated.div>
			<animated.div
				style={{
					...style_timer_animated,
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Map />
				<StyledButtonCalendar
					href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20230212T020000Z/20230212T050000Z&text=Juliet+%26+Romeo+Wedding&details=Praatfika+%26+Ratna+Wedding+on+Sunday,+05+May+2022&location=+Jl.+Depok,+Kdemangan,+Batang,+Jawa%20Tengah"
					target="_blank"
				>
					Add To Google Calendar
				</StyledButtonCalendar>
			</animated.div>
		</div>
	);
};

export default CountDownMap;

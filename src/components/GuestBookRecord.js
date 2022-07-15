import React from "react";
import styled from "styled-components";
import { Feed, Label } from "semantic-ui-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { animated, useSpring } from "react-spring";

dayjs.extend(relativeTime);

const BookWrapper = styled.div`
	width: 100%;
	border-radius: 0.28571429rem;
	border: 1px solid rgba(34, 36, 38, 0.15);
	padding: 30px 10px;
	margin-top: 50px;
	background: white;
	max-height: 400px;
	overflow-y: auto;
`;

const AnimatedBookWrapper = animated(BookWrapper);

const feed_data = [
	{
		name: "Naura Fajria",
		text: "Selamat mbak mega dan mas roni",
		status: "Hadir",
		date: "15-07-2022",
	},
];

const FeedEvent = ({ name, status, date_time, text }) => {
	return (
		<Feed.Event>
			<Feed.Content
				style={{ borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}
			>
				<Feed.Summary>
					<Feed.User>{name}</Feed.User>
					<Label
						color={
							status === "Hadir"
								? "green"
								: status === "Tidak Hadir"
								? "red"
								: "orange"
						}
					>
						{status}
					</Label>
					<Feed.Date>{dayjs(new Date()).to(dayjs(date_time))}</Feed.Date>
				</Feed.Summary>
				{text && <Feed.Extra text>{text}</Feed.Extra>}
			</Feed.Content>
		</Feed.Event>
	);
};

const GuestBookRecord = () => {
	const animated_style_book = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "1000" },
		loop: false,
	});
	return (
		<AnimatedBookWrapper>
			<Feed>
				{feed_data.map((data) => {
					return (
						<FeedEvent
							text={data?.text}
							name={data.name}
							date_time={data.date}
							status={data.status}
						/>
					);
				})}
			</Feed>
		</AnimatedBookWrapper>
	);
};

export default GuestBookRecord;

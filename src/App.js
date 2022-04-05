import _ from "lodash";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Container, Grid, Segment, Card, Loader } from "semantic-ui-react";
import styled from "styled-components";
import Logo from "./assets/logo.png";
import Decor from "./assets/decor.svg";
import Canvas from "./components/Canvas";

import CoverImg from "./assets/hero.png";
import { useSpring, animated } from "react-spring";
import {
	FlipUpTitleAnimation,
	ScaleUpImageDecorAnimation,
	DownUpAnimation,
	LeftRightAnimation,
	RightLeftAnimation,
} from "./helpers/animation";

import useWindowPosition from "./hooks/useWindowPosition";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import DayDate from "./components/DayDate";

import Deck from "./components/Deck";
import PhotoDeck from "./components/PhotoDeck";

import Map from "./components/Map";
import Penutup from "./components/Penutup";
import RSVP from "./components/RSVP";
import Amplop from "./components/Amplop";

// img
import FmImg from "./assets/asset_fm.png";
import MImg from "./assets/asset_m.png";
import FlowerF from "./assets/ff.png";
import FlowerFl from "./assets/ff_l.png";

import SplashScreen from "./components/SplashScreen";
import AttendersComponent from "./components/AttendersComponent";
import CovidProtocol from "./components/CovidProtocol";
import { Title } from "./components/Title";
import CountDownMap from "./components/CountDownMap";
import { GiftModal } from "./components/GiftModal";

const leftItems = [
	{ as: "a", content: "Kalender Kegiatan Juni 2021", key: "home" },
];
const rightItems = [
	{ as: "a", content: "Kontak", key: "kontak", href: "tel:081233033053" },
	// { SearchBar }
];

const StyledCard = styled(Card)`
	background-image: url(${CoverImg}) !important;
	background-repeat: no-repeat !important;
	background-size: cover !important;
	min-height: 100vh !important;
	min-width: 100% !important;
	background-position-x: center !important;
	background-position-y: -30px !important;
	box-shadow: none !important;
`;

const MainContent = styled(Container)`
	background: #f8fffb;
	padding: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0px !important;
`;
const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: bottom;
	padding-top: 30%;
`;

const FooterFlowerMain = styled.div`
	background: url(${FlowerF}), url(${FlowerFl});
	background-repeat: no-repeat, no-repeat;
	background-size: 180px, 180px;
	background-position-y: -100px, -100px;
	background-position-x: -50px, 180px;
	min-height: 20%;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 15px;
`;

const FotterWave = styled.div`
	display: block;
	width: 100%;
	height: 60px;
	max-height: 60px;
	margin: 0;
	z-index: 1;
	bottom: 0;
	position: absolute;

	&:before,
	&:after {
		content: "";
		position: absolute;
		// left: 50%;
		min-width: 100vw;
		min-height: 100vw;
		background-color: #fcfff5;
		animation-name: rotate;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	&:before {
		bottom: 15vh;
		border-radius: 45%;
		animation-duration: 10s;
	}

	&:after {
		bottom: 12vh;
		opacity: 0.5;
		border-radius: 47%;
		animation-duration: 10s;
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, 0) rotateZ(0deg);
		}
		50% {
			transform: translate(-50%, -2%) rotateZ(180deg);
		}
		100% {
			transform: translate(-50%, 0%) rotateZ(360deg);
		}
	}
`;

const Wrapper = styled.div`
	padding: 80px 20px;
	margin-top: 20px;
`;

const StyledContainerDayDate = styled.div`
	margin: 0px !important;
`;

const Loading = () => (
	<Segment
		style={{ background: "transparent", boxShadow: "none", border: "none" }}
	>
		<Loader size="large" active inline="centered" />
	</Segment>
);

function App() {
	const [renderSplashScreen, setRenderSplashScreen] = useState(true);
	const animated_deck_photo = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "500" },
		loop: false,
	});
	const [{ scroll, xy }, set] = useSpring(() => ({ scroll: 0, xy: [0, 0] }));
	const onScroll = useCallback(
		(e) => set({ scroll: e.target.scrollTop / 30 }),
		[]
	);

	useEffect(() => {
		setTimeout(() => setRenderSplashScreen(!renderSplashScreen), 2000);
	}, []);

	const pos_section = useWindowPosition();

	return (
		<div style={{ background: "#f8fffb" }} onScroll={onScroll}>
			<Navbar />
			<MainContent>
				<Grid columns="equal">
					<Grid.Column
						mobile={16}
						computer={16}
						tablet={16}
						style={{ margin: "0px", padding: "0px" }}
					>
						<StyledCard>
							<Card.Content
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<AttendersComponent />
							</Card.Content>
						</StyledCard>
					</Grid.Column>
				</Grid>
			</MainContent>
			{pos_section > 300 && <CovidProtocol />}
			<Wrapper
				offset={scroll}
				pos={0}
				start={0}
				end={0.5}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
				id="second-section"
			>
				{pos_section > 900 && (
					<>
						<ScaleUpImageDecorAnimation src={Decor} />
						<FlipUpTitleAnimation text="Groom & Bride" />
						<DownUpAnimation>
							<i style={{ marginBottom: "10px" }}>
								Assalamu’alaikum Warahmatullahi Wabarakatuh
							</i>
							<Grid columns="equal">
								<Grid.Column mobile={16} computer={16} tablet={16}>
									<p className="paragraph" style={{ textAlign: "center" }}>
										Maha Suci Allah yang telah menciptakan mahluk-Nya
										berpasang-pasangan. Ya Allah yang Maha Pengasih, dengan
										ridho-Mu Kau mempertemukan kami dalam suatu ikatan
										pernikahan suci.
									</p>
								</Grid.Column>
							</Grid>
						</DownUpAnimation>
					</>
				)}
				{pos_section > 1100 && (
					<LeftRightAnimation>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<img src={FmImg} width="100%" style={{ borderRadius: "10px" }} />
						</Grid.Column>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<h3 className="title">
								Ratnasari,{" "}
								<span style={{ fontSize: "16px", textTransform: "none" }}>
									S.Hut
								</span>
							</h3>
							<p className="paragraph">
								Putri Kedua dari Bapak <b>Nanang Ahmad</b> dan Ibu <b>Ibu</b>
							</p>
							<p className="subtitle">Jl. Balebak</p>
						</Grid.Column>
					</LeftRightAnimation>
				)}
				{pos_section > 1300 && (
					<RightLeftAnimation style={{ marginBottom: "20px" }}>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<h3 className="title" style={{ textAlign: "right" }}>
								Praatfika,{" "}
								<span style={{ fontSize: "16px", textTransform: "none" }}>
									S.Hut
								</span>
							</h3>
							<p className="subtitle" style={{ textAlign: "right" }}>
								Putra Kedua dari Bapak <b>Nanang Ahmad</b> dan Ibu <b>Ibu</b>
							</p>
							<p className="subtitle" style={{ textAlign: "right" }}>
								Jl. Balebak
							</p>
						</Grid.Column>
						<Grid.Column mobile={8} computer={8} tablet={8}>
							<img src={MImg} width="100%" style={{ borderRadius: "10px" }} />
						</Grid.Column>
					</RightLeftAnimation>
				)}
			</Wrapper>
			<Wrapper
				offset={scroll}
				pos={0.5}
				start={1}
				end={0.5}
				style={{ margin: "0px", padding: "0px" }}
			>
				<DayDate post_section={pos_section} />
			</Wrapper>
			<Container>
				<Wrapper offset={scroll} pos={1} start={0.5} end={1}>
					<CountDownMap />
				</Wrapper>
			</Container>
			<Container>
				<Wrapper offset={scroll} pos={1.5} start={1.5} end={2}>
					<RSVP />
				</Wrapper>
			</Container>
			<Container>
				<Wrapper offset={scroll} pos={2} start={2} end={2.5}>
					<Penutup />
				</Wrapper>
			</Container>
			<Container>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "80px",
					}}
				>
					<ScaleUpImageDecorAnimation src={Decor} />
					<FlipUpTitleAnimation text="Our Gallery" />
				</div>
				<animated.div id="pdeck" style={animated_deck_photo}>
					<PhotoDeck />
				</animated.div>
			</Container>
			<GiftModal />
			<BottomNav />
		</div>
	);
}

export default App;

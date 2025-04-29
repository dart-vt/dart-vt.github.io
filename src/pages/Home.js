import React from 'react';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import {About} from './About'
import {Land} from "./Land";
import data from './navigation.json'
import './Home.css'
import themes from './themes.json'
import {Team} from "./Team";
import {Robots} from "./Robots";

let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(themestr) { //TODO: Switch to enum
		const theme = themes[themestr];
		const keys = Object.keys(theme);
		const style = document.body.style;
		for (let key in keys) {
				style.setProperty('--' + keys[key], theme[keys[key]])
		}
		style.background = theme["bg"];
}

function swapTheme(button) {
		setTheme(dark ? 'light' : 'dark');
		button.target.src = dark ? "icons/lightmode.svg" : "icons/darkmode.svg"
		dark = !dark;
}

function Header() {
		if (dark) {
				setTheme('dark')
		}
		return (
				<div id="header">
						<img src='icons/menu.svg' id="hamburber" alt="hamburber"/>
						<Link to="/" id="logo_container">
								<img src='images/DART.svg' id="logo" alt="DART Logo"/>
						</Link>
						<nav id="navPanel">
								{
										Object.keys(data).map((key, index) => (
												<li key={index} className="navItem">
														<Link to={data[key]}>
																{key}
														</Link>
												</li>
										))
								}
						</nav>
						<button id="theme" onClick={swapTheme}>
								<img src={dark ? "icons/darkmode.svg" : "icons/lightmode.svg"} alt="Theme Button"/>
						</button>
				</div>
		)
}

function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1);
}

function Home() {
		return (
				<BrowserRouter>
						<Header />
						<div id='content'>
								<Routes>
										<Route index element={<Land/>}/>
										{/*{*/}
										{/*		Object.keys(data).map(*/}
										{/*				(key) => (*/}
										{/*						<Route path={data[key]} element={capitalize(key)} />*/}
										{/*				)*/}
										{/*		)*/}
										{/*}*/}
										<Route path="/about" element={<About/>}/>
										<Route path="/team" element={<Team/>}/>
										<Route path="/robots" element={<Robots/>}/>
								</Routes>
						</div>
				</BrowserRouter>
		)
}

export default Home;
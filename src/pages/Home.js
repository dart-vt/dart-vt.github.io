import React from 'react';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import {Blog} from './Blog'
import {About} from './About'
import {Land} from "./Land";
import data from './navigation.json'
import './Home.css'
import themes from './themes.json'
import {Team} from "./Team";
import {WhatWeDo} from "./WhatWeDo";

const theme = window.matchMedia('{prefers-color-scheme: dark}').matches;
function setTheme(themestr) { //TODO: Switch to enum
		const theme = themes[themestr];
		const keys = Object.keys(theme);
		const style = document.body.style;
		keys.map(
				(key) => {
						style.setProperty('--' + key, theme[key])
				}
		)
		style.background = theme["bg"];
}

function Header() {
		setTheme('light')
		return (
				<div id="header">
						<img src='icons/menu.svg' id="hamburber">
						</img>
						<Link to="/" id="logo_container"><img src='images/DART.svg' id="logo">
						</img></Link>
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
				</div>
		)
}

function Home() {
		return (
				<BrowserRouter>
						<Header />
						<div id='content'>
								<Routes>
										<Route index element={<Land/>}/>
										<Route path="/blog" element={<Blog/>}/>
										<Route path="/about" element={<About/>}/>
										<Route path="/team" element={<Team/>}/>
										<Route path="/what-we-do" element={<WhatWeDo/>}/>
								</Routes>
						</div>
				</BrowserRouter>
		)
}

export default Home;
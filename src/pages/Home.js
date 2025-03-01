import React from 'react';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import {Blog} from './Blog'
import {About} from './About'
import {Land} from "./Land";
import data from './navigation.json'
import './Home.css'
import {Team} from "./Team";
import {WhatWeDo} from "./WhatWeDo";
function Home() {
		return (
				<BrowserRouter>
						<div id="header">
								<Link to="/" id="logo_container"><img src='resources/DART.jpeg' id="logo">
								</img></Link>
								<ul id="navPanel">
										{
												Object.keys(data).map((key, index) => (
														<li key={index} className="navItem">
																<Link to={data[key]}>
																		{key}
																</Link>
														</li>
												))
										}
								</ul>
						</div>

						<div id='content'>
								<Routes>
										<Route index element={<Land />} />
										<Route path="/blog" element={<Blog />} />
										<Route path="/about" element={<About />} />
										<Route path="/team" element={<Team />} />
										<Route path="/what-we-do" element={<WhatWeDo />} />
								</Routes>
						</div>
				</BrowserRouter>
		)
}

export default Home;
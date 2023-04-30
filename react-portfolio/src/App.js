import React from 'react';
import './App.css';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import About from './components/pages/About/index';
import Portfolio from './components/pages/Portfolio/index';
import ContactMe from './components/pages/Contact/index';
import Resume from './components/pages/Resume/index';

function App() {
return (
	<Router>
	<HeaderComponent/>
	<Routes>
		<Route exact path='/' element={<About />} />
		<Route path='/about' element={<About/>} />
		<Route path='/portfolio' element={<Portfolio/>} />
		<Route path='/contact' element={<ContactMe/>} />
		<Route path='/resume' element={<Resume/>} />
	</Routes>
	<FooterComponent/>

	</Router>
);
}

export default App;

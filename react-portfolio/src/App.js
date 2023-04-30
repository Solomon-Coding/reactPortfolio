// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> 
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import BucketList from './components/BucketList';

// function App() {
//   return (
//     <div className="bucket-app">
//       <BucketList />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/About/index';
import Portfolio from './components/pages/portfolio';
import ContactMe from './components/pages/contact';
import Resume from './components/pages/resume';

function App() {
return (
	<Router>
	<HeaderComponent/>
	<Routes>
		<Route exact path='/' element={<Home />} />
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

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
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import ContactMe from './pages/contact';
import Resume from './pages/resume';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/portfolio' element={<Portfolio/>} />
		<Route path='/contact' element={<ContactMe/>} />
		<Route path='/resume' element={<Resume/>} />
	</Routes>
	</Router>
);
}

export default App;

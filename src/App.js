import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Bookings from './pages/Bookings';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/bookings" element={<Bookings />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

import React from 'react';
import './css/App.css';
import './css/queries.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Success from './components/Success';
import Footer from './components/Footer';
import NewCollection from './components/admin/NewCollection';
import ProtectedRoute from './pages/ProtectedRoute';
import AdminDashboard from './components/admin/AdminDashboard';
import CollectionProvider from './contextProviders/CollectionProvider';
import LandingPage from './pages/LandingPage';
import AppProvider from './contextProviders/AppProvider';
import CodeProtected from './pages/CodeProtected';
import TwitterOauth from './components/TwitterOauth';

const App = () => {
	return (
		<div className="app">
			<Router>
				<CollectionProvider>
					<AppProvider>
						<div className="app-wrapper">
							<Navbar />
						</div>
						<Routes>
							<Route path="/" element={<LandingPage />} />
							<Route path="/signup" element={<CodeProtected />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup/success" element={<Success />} />
							<Route path="/signup/twitter" element={<TwitterOauth />} />
							<Route element={<ProtectedRoute />}>
								<Route path="/admin/dashboard" element={<AdminDashboard />} />
								<Route path="/new-collection" element={<NewCollection />} />
							</Route>
						</Routes>
					</AppProvider>
				</CollectionProvider>
				<div className="app-wrapper">
					<Footer />
				</div>
			</Router>
			{/* <footer>{<span>&#169; {new Date().getFullYear()} MoonBots</span>}</footer> */}
		</div>
	);
};

export default App;

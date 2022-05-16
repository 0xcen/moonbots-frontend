import React from 'react';
import './css/App.css';
import './css/queries.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { SignUpForm } from './components/SignUpForm';
import Login from './components/auth/Login';
import Home from './components/Home';
import Success from './components/Success';
import Fail from './components/Fail';
import Footer from './components/Footer';
import QuickTwitterOauth from './components/QuickTwitterOauth';
import NewCollection from './components/admin/NewCollection';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/admin/AdminDashboard';
import CollectionProvider from './contextProviders/CollectionProvider';
import LandingPage from './components/landingPage/LandingPage';
import AppProvider from './contextProviders/AppProvider';
import CodeProtected from './components/CodeProtected';

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
							<Route path="/signup/fail" element={<Fail />} />
							<Route path="/twitter-auth" element={<QuickTwitterOauth />} />
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

import React from "react";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Account from "./Account.jsx";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<h1 className="text-center mt-3 fw-bold fs-1">
				Firebase Auth & Context
			</h1>

			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/account' element={
						<ProtectedRoute><Account /></ProtectedRoute>
					} />
				</Routes>
			</AuthContextProvider>

			
		</div>
	);
};

export default Home;

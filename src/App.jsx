import React,{ useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/home'
import Login from './components/login'
import ProtectedRoute from './components/protectedRoute'
import Header from './components/header'
import { useLogin } from './components/hook/useLogin'

function App() {
	const {isAuth} = useLogin()	

	return (
		<div className='app'>
			{
				isAuth && (
					<Header/>
				)				
			}
			<Routes>				
				<Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
				<Route path='/Login' element={<ProtectedRoute><Login/></ProtectedRoute>}></Route>
				<Route path='/Home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
			</Routes>
		</div>
	)
}

export default App

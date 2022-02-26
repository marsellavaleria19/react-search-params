import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ListVehicle from './pages/ListVehicle'
import Homepage from './pages/Homepage'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="vehicle" element={<ListVehicle/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}


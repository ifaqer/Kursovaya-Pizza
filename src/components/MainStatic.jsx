import React from 'react'
import { Outlet } from 'react-router-dom'

import '../scss/app.scss'
import Header from '../components/Header'

export default function MainStatic(){
  return (
    <>
    <div className="wrapper">
        <Header/>
        <div className="content">
            <div className="container"> 
                <Outlet />
            </div>
        </div>
    </div>
    </>
  )
}

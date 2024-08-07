import { Outlet } from 'react-router-dom'

import '../scss/app.scss'
import Header from './Header'

const MainStatic:React.FC = () => {
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

export default MainStatic

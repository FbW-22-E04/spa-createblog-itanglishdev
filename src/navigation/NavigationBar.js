import { Fragment} from "react"
import { Outlet,Link } from "react-router-dom"


const NavigationBar = () => {
  return (
    <Fragment>
        <div className="navigation-list">
            <Link className='nav-link' to='/'>
                HOME
            </Link>
            <Link className="nav-link" to='/create'>
                CREATE A POST
            </Link>
            <Link className='nav-link' to='/show'>
                SHOW CURRENT POST
            </Link>
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default NavigationBar
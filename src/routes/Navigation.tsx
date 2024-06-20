import { BrowserRouter, Navigate } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'

import logo from '../assets/react.svg'
import {
  LazyPageOne,
  LazyPageThree,
  LazyPageTwo,
} from '../01-lazy-load/pages/index'

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />

            <ul>
              <li>
                <NavLink
                  to='/lazy-one'
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Lazy One
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/lazy-two'
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Lazy Two
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/lazy-three'
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Lazy Three
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='container'>
            <Routes>
              <Route path='/lazy-one' element={<LazyPageOne />} />
              <Route path='/lazy-two' element={<LazyPageTwo />} />
              <Route path='/lazy-three' element={<LazyPageThree />} />
              <Route path='/*' element={<Navigate to='/lazy-one' replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
export default Navigation

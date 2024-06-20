import { BrowserRouter, Navigate } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'

import { Suspense } from 'react'

import logo from '../assets/react.svg'

import { routes, RouteType } from './routes'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />

          <ul>
            {routes.map((route: RouteType) => (
              <li key={route.path}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='container'>
          <Suspense fallback={<span>Loading...</span>}>
            <Routes>
              {routes.map((route: RouteType) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.Component />}
                />
              ))}
              <Route
                path='/*'
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default Navigation

import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../pages'

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>

      <ul>
        <li>
          <NavLink to='lazy-one'>Lazy One</NavLink>
        </li>
        <li>
          <NavLink to='lazy-two'>Lazy Two</NavLink>
        </li>
        <li>
          <NavLink to='lazy-three'>Lazy Three</NavLink>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path='lazy-one' element={<LazyPageOne />} />
          <Route path='lazy-two' element={<LazyPageTwo />} />
          <Route path='lazy-three' element={<LazyPageThree />} />
          <Route path='*' element={<Navigate to='lazy-one' replace />} />
        </Routes>
      </div>
    </div>
  )
}
export default LazyLayout

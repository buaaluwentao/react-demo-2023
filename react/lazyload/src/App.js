import logo from './logo.svg';
// import Home from './pages/Home'
import {Navigate, NavLink} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Fragment } from 'react';
import {lazy} from 'react'
import {Suspense} from 'react' // 这个组件在react中

const Home = lazy(() => import('./pages/Home'))
function App() {
  return (
    <Fragment>
      <div className="App">
        <NavLink to='/home'>Home</NavLink>
      </div>
      <h1>-------</h1>
      
      <Suspense>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          {/* <Route path="/" element={<Navigate to="/home" />}></Route> */}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;

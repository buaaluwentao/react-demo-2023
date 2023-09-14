import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import LeftNavi from './components/LeftNavi'
import HomeContent from './pages/HomeContent'
import AboutContent from './pages/AboutContent'
import './components/left-container.css'
import './components/right-container.css'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="leftContainer">
        {/*left-content*/}
        <div className="fix">
          <LeftNavi/>
        </div>
        {/*right-content*/}
        <div className="fix">
          <Route path="/home" component={HomeContent}/>
          <Route path="/about" component={AboutContent}/>
        </div>
      </div>
    </div>
  );
}

export default App;

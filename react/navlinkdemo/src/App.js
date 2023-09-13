import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import LeftNavi from './components/LeftNavi'
import HomeComponent from './components/HomeContent'
import AboutContent from './components/AboutContent'
import './components/left-container.css'
import './components/right-container.css'

function App() {
  return (
    <div>
      <Header/>
      <div>
        {/*left-content*/}
        <div>
          {/*<LeftNavi/>*/}
          yy
        </div>
        {/*right-content*/}
        <div style={{float: 'left'}}>
          {/*<HomeComponent/>*/}
          xx
        </div>
      </div>
    </div>
  );
}

export default App;

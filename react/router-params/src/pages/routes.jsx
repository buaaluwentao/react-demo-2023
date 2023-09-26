import Home from './Home'
import About from './About'
import {Navigate} from 'react-router-dom'
import News from './News'
import Message from './Message'
import Detail from './Detail'

const routes = [{
    path: '/',
    element: <Navigate to='/home'/>
}, {
    path: '/home',
    element: <Home/>,
    children:[{
        path: 'news',
        element: <News/>
    }, {
        path: 'message',
        element: <Message/>,
        children:[{
            // path: 'detail/:title/:name', // params
            path: 'detail', // search or location
            element: <Detail/>
        }]
    }]
}, {
    path: '/about',
    element: <About/>
}]

export default routes
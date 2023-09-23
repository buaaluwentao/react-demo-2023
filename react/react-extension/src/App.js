import Empty from "./components/Content"
import StateAndHook, {FunnctionHook} from './components/StateAndHook'
import DataTransmit from './components/DataTransmit'

function App() {
  return (
    <div className="App">
      <Empty/>
      <h1>-----</h1>
      <StateAndHook/>
      <h1>----</h1>
      <FunnctionHook id="xxxx"/>
      <h1>----</h1>
      <DataTransmit/>
    </div>
  );
}

export default App;

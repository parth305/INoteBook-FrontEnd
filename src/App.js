
import './App.css';
import Myexport from './Myexport';
import Notestate from './context/Notes/notestate';
import AlertState from './context/Alerts/alertState';
function App() {

  // let {alert}=useContext(alertcontext);
  return (
    <div className="App">
        <Notestate>
        <AlertState>

      <Myexport/>
        </AlertState>
        </Notestate>
    </div>
  );
}

export default App;

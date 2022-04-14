
import './App.css';
import Myexport from './Myexport';
import Notestate from './context/Notes/notestate';
import AlertState from './context/Alerts/alertState';
import ModelState from './context/Model/ModelState';
function App() {

  return (
    <div className="App">
          <ModelState>
      <Notestate >
        <AlertState>
          <Myexport />
        </AlertState>
      </Notestate>
          </ModelState>
    </div>
  );
}

export default App;

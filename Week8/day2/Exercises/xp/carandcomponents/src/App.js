import logo from './logo.svg';
import './App.css'; 
import Car from './Components/Car';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div>
    <Car model={carinfo.model}/>
    <Garge size = {"small"} />
    </div>
  );
}

export default App;

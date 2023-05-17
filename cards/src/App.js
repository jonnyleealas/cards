import Card from '../src/Components/Card/Card'
import './App.css';
import AppData from './AppData.js'

function App() {

  const Cards = AppData.map((data) => {
     return(
      <div>
        <Card
        key={data.id}
        data={data}
        />
      </div>
     )
  })

  return (
    <div className="App">
      {Cards}
    </div>
  );
}

export default App;

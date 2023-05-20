import './App.css';
import Card from '../src/Components/Card/Card'
import Header from '../src/Components/Header/Header'
import AppData from './AppData.js'

function App() {

  const Cards = AppData.map((data) => {
     return(
      <div>
       
        <Card
        key={data.id}
        data={data}
        />
        <hr></hr>
      </div>
     )
  })

  return (
    <div className="App">
       <Header />
      {Cards}
    </div>
  );
}

export default App;

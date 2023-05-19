import './App.css';
import Card from '../src/Components/Card/Card'
import Header from '../src/Components/Header/Header'
import AppData from './AppData.js'

function App() {

  const Cards = AppData.map((data) => {
     return(
      <div>
        <Header />
        {/* <Card
        key={data.id}
        data={data}
        /> */}
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

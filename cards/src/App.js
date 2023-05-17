
import './App.css';
import AppData from './AppData.js'

function App() {

  const Cards = AppData.map((data) => {
     return(
      <div>
        {data.id}
        {data.description}
        {data.endDate}
        {data.googleMapsUrl}
        {data.startDate}
        {data.title}
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

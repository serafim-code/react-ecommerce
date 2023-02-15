import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function Shop() {
  return (
    <h1>Shop successfully rendered</h1>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <Home/> }/>
        <Route path="shop" element={ <Shop/> }/>
      </Route>
    </Routes>
  );
}

export default App;

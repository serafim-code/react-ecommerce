import { Route, Routes } from 'react-router-dom';
import Shop from './components/shop/shop.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <Home/> }/>
        <Route path="shop" element={ <Shop/> }/>
        <Route path="sign-in" element={ <Authentication/> }/>
      </Route>
    </Routes>
  );
}

export default App;

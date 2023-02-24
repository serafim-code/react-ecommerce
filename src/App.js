import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sing-in.component';

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
        <Route path="sign-in" element={ <SignIn/> }/>
      </Route>
    </Routes>
  );
}

export default App;

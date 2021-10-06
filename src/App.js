import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route to="/" component={Home} />
        <Route tp="/products" component={Product} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    <Footer />  
    </>
  );
}

export default App;

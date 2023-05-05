import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <App />
      case "/home":
        Component = <Home />
  }
  return (
    <>
    <Nav />
    {Component}
    </>
    
  )
}

export default App;

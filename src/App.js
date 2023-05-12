
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Wiki from './components/Wiki';
import Poke from './components/Poke';
import Pbs from './components/Pbs';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break
    case "/home":
      Component = <Home />
      break
    case "/wiki":
      Component = <Wiki />
      break
    case "/poke":
      Component = <Poke />
      break
    case "/abcya":
      Component = <Pbs />
  }
  return (
    <>
      <Nav />
      {Component}
    </>

  )
}

export default App;

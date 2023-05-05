import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Wiki from './components/Wiki';

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
  }
  return (
    <>
      <Nav />
      {Component}
    </>

  )
}

export default App;


import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Wiki from './components/Wiki';
import Poke from './components/Poke';
import Yt from './components/Yt';
// import Prodigy from './components/Prodigy';

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
    case "/youtube":
      Component = <Yt />
      break
    // case "/prodigy":
    //   Component = <Prodigy />
    //   break
  }
  return (
    <>
      <Nav />
      {Component}
    </>

  )
}

export default App;


import './App.css';
import Hazel from './components/Hazel';
import HazelNav from './components/HazelNav';
import Wiki from './components/Wiki';
import Poke from './components/Poke';
import Yt from './components/Yt';
import TravNav from './components/TravNav';
// import Prodigy from './components/Prodigy';

function App() {
  let Component
  let Navigation
  switch (window.location.pathname) {
    case "/":
      Component = <Hazel />
      Navigation = <TravNav />
      break
    case "/hazel":
      Component = <Hazel />
      Navigation = <HazelNav />
      break
    case "/wiki":
      Component = <Wiki />
      Navigation = <HazelNav />
      break
    case "/poke":
      Component = <Poke />
      Navigation = <HazelNav />
      break
    case "/youtube":
      Component = <Yt />
      Navigation = <HazelNav />
      break
    // case "/prodigy":
    //   Component = <Prodigy />
    //   break
  }
  return (
    <>
     
      {Navigation}
      {Component}
    </>

  )
}

export default App;

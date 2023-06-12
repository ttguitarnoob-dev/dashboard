
import './App.css';
import React, { useEffect, useState } from "react"
import Hazel from './components/Hazel';
import HazelNav from './components/HazelNav';
import Wiki from './components/Wiki';
import Poke from './components/Poke';
import Yt from './components/Yt';
import TravNav from './components/TravNav';
import Trav from './components/Trav';
import Budget from './components/Budget';
import NoGame from './components/NoGame';
// import Prodigy from './components/Prodigy';

function App() {



  let Component
  let Navigation
  switch (window.location.pathname) {
    case "/":
      Component = <Trav />
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
    case "/no-game":
      Component = <NoGame />
      Navigation = <HazelNav />
      break
    case "/budget":
      Component = <Budget />
      Navigation= <TravNav />
      break
  }
  return (
    <>
     
      {Navigation}
      {Component}
    </>

  )
}

export default App;

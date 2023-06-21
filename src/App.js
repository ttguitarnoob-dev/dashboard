
import './App.css';
import React, { useEffect, useState } from "react"
import Hazel from './components/Hazel';
import HazelNav from './components/HazelNav';
import Wiki from './components/Wiki';
import Poke from './components/Poke';
import Yt from './components/Yt';
import TravNav from './components/TravNav';
import KiaraNav from './components/KiaraNav';
import Trav from './components/Trav';
import Budget from './components/Budget';
import NoGame from './components/NoGame';
import Kiara from './components/Kiara';
import TaskRandom from './components/TaskRandom';
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
    case "/kiara":
      Component = <Kiara />
      Navigation= <TravNav />
      break
    case "/task-random":
      Component = <TaskRandom />
      Navigation = <TravNav />
  }
  return (
    <>
     
      {Navigation}
      {Component}
    </>

  )
}

export default App;

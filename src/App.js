
import './App.css';
import React, { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom';
import Hazel from './components/Hazel';
import HazelNav from './components/HazelNav';
import Wiki from './components/Wiki';
import Poke from './components/Poke';
import Yt from './components/Yt';
import TravNav from './components/TravNav';
import Trav from './components/Trav';
import Budget from './components/Budget';
import NoGame from './components/NoGame';
import Kiara from './components/Kiara';
import TaskRandom from './components/TaskRandom';
import Academy from './components/Academy/Academy';
import SchoolJournal from './components/Academy/SchoolJournal';
import NewJournal from './components/Academy/NewJournal';
import JournalDetails from './components/Academy/JournalDetails';
import Countdown from './components/Countdown';
// import Prodigy from './components/Prodigy';

function App() {

  //getting timestamp of hardcoded date for countdown component props
  const toTimestamp = (strDate) => {
    const dt = new Date(strDate).getTime();
    return dt
  };
  
 






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
      Navigation = <TravNav />
      break
    case "/kiara":
      Component = <Kiara />
      Navigation = <TravNav />
      break
    case "/task-random":
      Component = <TaskRandom />
      Navigation = <TravNav />
      break
    case "/academy":
      Component = <Academy />
      Navigation = <HazelNav />
      break
    case "/academy/journal":
      Component = <SchoolJournal />
      Navigation = <HazelNav />
      break
    case "/academy/journal/new":
      Component = <NewJournal />
      Navigation = <HazelNav />
      break
    case "/academy/journal/:id":
      Component = <JournalDetails />
      Navigation = <HazelNav />
  }
  return (
    // <>

    //   {Navigation}
    //   {Component}
    // </>
    <div>
      <HazelNav />
      <Routes>
        <Route path='/academy/journal/:id' element={<JournalDetails />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
        <Route path='/academy/journal/new' element={<NewJournal />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/hazel' element={<Hazel />} />
        <Route path='/wiki' element={<Wiki />} />
        <Route path='/poke' element={<Poke />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
        <Route path='/countdown' element={<Countdown countdownTimestampMs ={toTimestamp("07/24/2023 23:31:30")}/>} />
        
      </Routes>
    </div>

  )
}

export default App;

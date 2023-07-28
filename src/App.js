
import './App.css';
import React from "react"
import { Route, Routes } from 'react-router-dom';
import TravNav from './components/TravNav';
import Trav from './components/Trav';
import Budget from './components/Budget';
import Kiara from './components/Kiara';
import TaskRandom from './components/TaskRandom';
import Academy from './components/Academy/Academy';
import SchoolJournal from './components/Academy/SchoolJournal';
import NewJournal from './components/Academy/NewJournal';
import JournalDetails from './components/Academy/JournalDetails';
import Countdown from './components/CountdownStuff/Countdown';
import NewCountdown from './components/CountdownStuff/NewCountdown';
import CountdownList from './components/CountdownStuff/CountdownList';
// import Prodigy from './components/Prodigy';

function App() {

  //getting timestamp of hardcoded date for countdown component props
  // const toTimestamp = (strDate) => {
  //   const dt = new Date(strDate).getTime();
  //   return dt
  // };

  async function HandleDelete(delURL) {
    
    console.log('deleting', delURL)
    try {
      const options = {
        method: "DELETE"
      }

      const response = await fetch(delURL, options)
      const results = await response.json()
      console.log('result?', results)


    } catch (err) {
      console.log('something badssss happened when fetching', err)
    }
  }








  // let Component
  // let Navigation
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = <Trav />
  //     Navigation = <TravNav />
  //     break
  //   case "/hazel":
  //     Component = <Hazel />
  //     Navigation = <HazelNav />
  //     break
  //   case "/wiki":
  //     Component = <Wiki />
  //     Navigation = <HazelNav />
  //     break
  //   case "/poke":
  //     Component = <Poke />
  //     Navigation = <HazelNav />
  //     break
  //   case "/youtube":
  //     Component = <Yt />
  //     Navigation = <HazelNav />
  //     break
  //   case "/no-game":
  //     Component = <NoGame />
  //     Navigation = <HazelNav />
  //     break
  //   case "/budget":
  //     Component = <Budget />
  //     Navigation = <TravNav />
  //     break
  //   case "/kiara":
  //     Component = <Kiara />
  //     Navigation = <TravNav />
  //     break
  //   case "/task-random":
  //     Component = <TaskRandom />
  //     Navigation = <TravNav />
  //     break
  //   case "/academy":
  //     Component = <Academy />
  //     Navigation = <HazelNav />
  //     break
  //   case "/academy/journal":
  //     Component = <SchoolJournal />
  //     Navigation = <HazelNav />
  //     break
  //   case "/academy/journal/new":
  //     Component = <NewJournal />
  //     Navigation = <HazelNav />
  //     break
  //   case "/academy/journal/:id":
  //     Component = <JournalDetails />
  //     Navigation = <HazelNav />
  // }
  return (
    // <>

    //   {Navigation}
    //   {Component}
    // </>
    <div>
      <TravNav />
      <Routes>
        <Route path='/academy/journal/:id' element={<JournalDetails />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
        <Route path='/academy/journal/new' element={<NewJournal />} />
        <Route path='/academy' element={<Academy />} />
        <Route path='/kiara' element={<Kiara />} />
        <Route path='/' element={<Trav />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/academy/journal/' element={<SchoolJournal />} />
        <Route path='/countdown/new' element={<NewCountdown />} />
        <Route path='/countdown/:id' element={<Countdown HandleDelete={HandleDelete} />} />
        <Route path='/countdown' element={<CountdownList />} />
        <Route path='/task-random' element={<TaskRandom />} />
      </Routes>
    </div>

  )
}

export default App;

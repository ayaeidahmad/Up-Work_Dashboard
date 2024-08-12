import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import JobCard from "./Components/JobCard/JobCard";
import AddJobs from "./Pages/AddJobs/AddJobs";
import EditCardJob from "./Pages/EditCardJob/EditCardJob";
import NavBar2 from "./Components/NavBar2/NavBar2";
import Articlecard from "./Components/Article/Articlecard";
import img from './assets/Images/article.jpg'
import Cvs from "./Components/Cvs/Cvs";
import AddArticle from "./Pages/AddArticle/AddArticle";
import EditArticle from "./Pages/EditArticle/EditArticle";
import Logein from "./Pages/Logein/Logein";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Logein />} />
      <Route path='/nav' element={<JobCard />} />
      <Route path='/addjob' element={<AddJobs />} />
      <Route path='/EditCardJob' element={<EditCardJob />} />
      <Route path='/articles' element={<Articlecard />} />
      <Route path='/AddArticle' element={<AddArticle />} />
      <Route path='/EditeArticle' element={<EditArticle />} />
      <Route path='/cvs' element={<Cvs />} />
      <Route path='/login' element={<Logein />} />
    </Routes>
  )
}

export default App

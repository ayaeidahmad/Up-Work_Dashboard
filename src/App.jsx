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

  const articles = [
    {
      "company-id": 1,
      "title": "You’re safe with us",
      "body": "Use it to securely send and receive files, give real-time feedback and make payments. And if you’re out and about a lot, you’ll want to download the app too.",
      "photo": img

    },
    {
      "company-id": 2,
      "title": "Post a job and hire a pro",
      "body": "Post your job on the world’s work marketplace and wait for the proposals to flood in from talented people around the world.",
      "photo": img
    },
    {
      "company-id": 3,
      "title": "Post a job and hire a pro",
      "body": "Post your job on the world’s work marketplace and wait for the proposals to flood in from talented people around the world.",
      "photo": img

    },
  ]
  
  return (
    <Routes>
      <Route path='/' element={<Logein />} />
      <Route path='/nav' element={<JobCard />} />
      <Route path='/addjob' element={<AddJobs />} />
      <Route path='/EditCardJob' element={<EditCardJob />} />
      <Route path='/articles' element={<Articlecard articles={articles} />} />
      <Route path='/AddArticle' element={<AddArticle />} />
      <Route path='/EditeArticle' element={<EditArticle />} />
      <Route path='/cvs' element={<Cvs />} />
    </Routes>
  )
}

export default App

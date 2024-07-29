import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import JobCard from "./Components/JobCard/JobCard";
import AddJobs from "./Pages/AddJobs/AddJobs";
import EditCardJob from "./Pages/EditCardJob/EditCardJob";
import NavBar2 from "./Components/NavBar2/NavBar2";
import Articlecard from "./Components/Article/Articlecard";
import img from './assets/Images/rejected.png'
import Cvs from "./Components/Cvs/Cvs";

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


  const Routing = createBrowserRouter([
    {
      path: "/", element: <NavBar2 />, children: [
        { index: true, element: <JobCard /> },
        { path: "/articles", element: <Articlecard articles={articles}/> },
        { path: "/cvs", element: <Cvs /> },
      ]
    },
    { path: "/addjob", element: <AddJobs /> },
    { path: "/EditCardJob", element: <EditCardJob /> }
  ])
  return (
    <RouterProvider router={Routing}>

    </RouterProvider>
  )
}

export default App

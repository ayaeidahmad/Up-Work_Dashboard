import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import JobCard from "./Components/JobCard/JobCard";
import AddJobs from "./Pages/AddJobs/AddJobs";
import EditCardJob from "./Pages/EditCardJob/EditCardJob";
import NavBar2 from "./Components/NavBar2/NavBar2";

function App() {
  const Routing = createBrowserRouter([ 
      {path: "/" , element: <NavBar2/> , children: [
        {index:true , element: <JobCard/> } , 
        // {path : "/articles" , element: }
        // {path : "/cvs" , element: }
      ] } ,
      {path: "/addjob" , element: <AddJobs/>} ,
      {path: "/EditCardJob" , element: <EditCardJob/>}
  ])
  return (
    <RouterProvider router={Routing}>
    
    </RouterProvider>
  )
}

export default App

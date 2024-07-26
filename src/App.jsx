import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import NavBar2 from "./Components/NavBar2/NavBar2";
import JobCard from "./Components/JobCard/JobCard";
import AddForm from "./Pages/AddForm/AddForm";

function App() {
  const Routing = createBrowserRouter([ 
      {path: "/" , element: <NavBar2/> , children: [
        {index:true , element: <JobCard/> } , 
        // {path : "/articles" , element: }
        // {path : "/cvs" , element: }
      ] } ,
      {path: "/addform" , element: <AddForm/>}
  ])
  return (
    <RouterProvider router={Routing}>
    
    </RouterProvider>
  )
}

export default App

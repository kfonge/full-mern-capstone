import "./App.css"
import { useEffect, useState } from "react"
import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import CorePoses from "./pages/CorePoses"
import ChestOpeningPoses from "./pages/ChestPoses"
import SeatedPoses from "./pages/SeatedPoses"
import StrengthPoses from "./pages/StrengthPoses"

const App = () => {
//   const navigate = useNavigate()
  const [Categories, setCategory] = useState()
//   const [Loading, setLoading] = useState(false)

  const getCategory = async () => {
    try {
      const response = await fetch(
        "https://lightning-yoga-api.herokuapp.com/yoga_categories"
      )
      const data = await response.json()
      console.log(data)
      setCategory(data)
    } catch (err) {
      console.error(err)
    }
  }
  // const getCategory = async () => {
  //   fetch("https://lightning-yoga-api.herokuapp.com/yoga_categories")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err))

  //     setCategories(data)
  // }
  //categories is a local variable initialized as null
  //when api call returns response, replace null with the response you get fr api
  //loading state captures the sate when informaiton is being fetched
  //

  useEffect(() => {
    // useEffect says, if state changes, "do this"
    getCategory()
    // setLoading(true)
    // // fetch("https://lightning-yoga-api.herokuapp.com/yoga_categories")
    // //   .then((response) => response.json())
    // //   .then((data) => console.log(data))
    // //   .catch((err) => console.error(err))

    // setLoading(false)
    // set loading false makes computer run fetch call once instead of the strictmode 2x
  }, [])
  //[] empty array tells computer to run the function once, on pageload and that's it
  return (
    <div>
      <div className="App">
        <div>
          <h2 className="header"> Re-Active Yoga</h2>
        </div>
        <div>
          {/* <h2> Choose a category of yoga poses below:</h2>
        </div>
        <div className="categoryContainer">
          <button onClick={() => navigate("/core_poses")}> Core Poses</button>
          <button onClick={() => navigate("/seated_poses")}> Seated Poses</button>
          <button onClick={() => navigate("/strength_poses")}> Strengthening Poses</button>
          
                  <button onClick={() => navigate("/chest_poses")}> Chest Opening Poses</button>
                  {/* <img className='buttonImg' src= 'https://www.thegoodbody.com/wp-content/uploads/2019/07/Yoga-Poses-for-Strength.png'
                  onClick={() => navigate("/chest_poses")}/> */}
        </div>
        <div>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/about"> About</Link>
        </div>
      </div>
      <Routes>
        {/* if the user types "this" into the url, this is the page we want them to see */}
        <Route path="/" element={<Home />} />
        {/* ELEMENT defines the page within pages folder that will be rendered at the listed path  */}

        <Route path="/about" element={<About />} />

        <Route
          path="/core_poses"
          element={<CorePoses Categories={Categories} />}
        />
        {/* this passes the Categories variable(prop) into the child component CorePoses */}

        <Route
          path="/chest_poses"
          element={<ChestOpeningPoses Categories={Categories} />}
        />

        <Route
          path="/seated_poses"
          element={<SeatedPoses Categories={Categories} />}
        />

        <Route
          path="/strength_poses"
          element={<StrengthPoses Categories={Categories} />}
        />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
// import CorePoses from ".//CorePoses"
// import ChestOpeningPoses from ".//ChestPoses"
// import SeatedPoses from ".//SeatedPoses"
// import StrengthPoses from ".//StrengthPoses"
import { useNavigate, } from "react-router-dom"



const Home = () => {
  const navigate = useNavigate()
    return (
      <div>
        <h2> Choose a category of yoga poses below:</h2>

        <div className="categoryContainer">
        <img width='400px' height='400px' src="https://m.media-amazon.com/images/I/71hGZVtidXL._AC_UF894,1000_QL80_.jpg" alt='lotus'/>  
        <div>  
        <ul list-style='none'>
            <li> <button onClick={() => navigate("/core_poses")}> Core Poses</button> </li>
            <li> <button onClick={() => navigate("/seated_poses")}> Seated Poses</button> </li>
            <li> <button onClick={() => navigate("/strength_poses")}> Strengthening Poses</button> </li>
            <li> <button onClick={() => navigate("/chest_poses")}> Chest Opening Poses</button></li>
          </ul>
        </div>
          
        </div>
      </div>
    )
}
  
export default Home;
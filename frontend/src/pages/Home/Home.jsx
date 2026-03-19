import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import AppaincesDisplay from '../../components/AppaincesDisplay/AppaincesDisplay'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <p></p>
           <ExploreMenu category={category} setCategory={setCategory}/>
           <AppaincesDisplay category={category}/>
           
    </div>
  )
}

export default Home
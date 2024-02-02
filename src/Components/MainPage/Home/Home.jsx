import React from "react"
import Categories from "../Categories/Categories"
import "./home.css"
import SliderHome from "../Slider/Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home

import React from 'react'
import "./App.css"
import {Header, Footer, Blog, Features, Possibility, Whatgpt} from "./Container"
import {CTA, Brand, Navbar} from "./Components"
const App = () => {
  return (
    <div className='App'>
      <div className="gradeint__bg">
      <Navbar />
      <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
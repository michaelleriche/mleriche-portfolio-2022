import React, { useState, useEffect } from 'react'
import Resume from './components/resume'
import Email from './components/email'
import Skills from './components/skills'
import City from './components/city'
import PDF from './assets/michael-leriche-2022.pdf'

import './App.scss';

function App() {
  const [stepViewer, setStepViewer] = useState(false)
  let [count, setCount] = useState(0)
  const [resume, setResume] = useState()
  const [skills, setSkills] = useState()
  const [email, setEmail] = useState()
  const [city, setCity] = useState()
  const [array, setArray] = useState([])

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  
  useEffect(() => {
    const resumeId = document.getElementById('resume')
    const skillsId = document.getElementById('skills')
    const emailId = document.getElementById('email')
    const cityId = document.getElementById('city')
    setResume(resumeId)
    setSkills(skillsId)
    setEmail(emailId)
    setCity(cityId)
    setArray({resumeId, skillsId, emailId, cityId})
  }, [])

  const countSteps = (e) => {
    e.preventDefault()
    let newArray;
    if (array) {
      newArray = Object.values(array)
    } else {
      return false;
    }

    function resetCount() {
      setCount(0)
      setStepViewer(false)
      newArray.map(item => {
        return item.classList.add('inactive')
      })
    }
    
    count += 1;
    if (count === 6) {
      count = 0;
    }
    if (count === 1) {
      newArray.map(item => {
        return item.classList.add('inactive')
      })
      skills?.classList.remove('inactive')
    } else if (count === 2) {
      newArray.map(item => {
        return item.classList.add('inactive')
      })
      city?.classList.remove('inactive')
    } else if (count === 3) {
      newArray.map(item => {
        return item.classList.add('inactive')
      })
      resume?.classList.remove('inactive')
    }  else if (count === 4) {
      newArray.map(item => {
        return item.classList.add('inactive')
      })
      email?.classList.remove('inactive')
    } else if (count === 5){
      newArray.map(item => {
        return item.classList.add('inactive')
      })
      setStepViewer(true)
      setTimeout(resetCount, 40000)
    }

    if (screenSize.dynamicWidth < 1100) {
      if (count === 1) {
        newArray.map(item => {
          return item.classList.add('inactive')
        })
        setStepViewer(true)
        setTimeout(resetCount, 40000)
      }
      if (count === 2) {
        count = 0;
      }
    }
  }




  
  return (
    <div className='wrapper'>
      <div className='names'>

        <div className="title">
          <h1 className='underline'>Michael le Riche </h1>
          <h2 className='underline'>Front End Web Developer</h2>
        </div> {/* <-- title --> */}

        <div className="secondary-title">

          <div className="skills">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-sass"></i>
            <i className="devicon-firebase-plain"></i>
            <i className="devicon-mongodb-plain"></i>
            <i className="devicon-github-original"></i>
            <i className="devicon-jquery-plain"></i>
            <i className="devicon-nextjs-original"></i>
            <i className="fab fa-git-alt"></i>
            <i className="devicon-visualstudio-plain"></i>
          </div> {/* <-- skills --> */}
          <h2 className='map'><a href="https://www.google.com/maps/place/Toronto,+ON/@43.7181557,-79.5181387,11z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843">43°65' N / -79°38' W</a></h2>

        </div> {/* <-- secondary-title --> */}
        <div className="top-split-bar">
          <City/>
          <Skills/>      
        </div>
      </div> {/* <-- names --> */}



      <div className="rectangle">
        <div className="viewer-object">
          { screenSize.dynamicWidth > 1100 ? !stepViewer ? <a href='/' className="blink" onClick={countSteps}> 👋 Hello, Click here.</a> : 
          <div className='end-paragraph'>
          <p className='end-line-top'>Who am I?</p>
          <p className='end-line'>I'm a professional musician turned web developer. If I'm not coding or playing music, I'm usually training for a marathon, eating tacos, or building a synthesizer in my home electronics lab. I strive to build well made, accessible, and responsive websites and applications.</p>
          <p className='end-line'>If you'd like to chat about working together or just have questions about a potential project, please don't hesitate to write me at my email below. 🙂 </p></div>   : '' }

          { (screenSize.dynamicWidth > 700 && screenSize.dynamicWidth < 1100) ? !stepViewer ? <a href='/' className="blink" onClick={countSteps}> 👋 Hello, Click here.</a> : 
          <div className='end-paragraph'>
            <p className='end-line-top'>Who am I?</p>
            <p className='end-line'>I'm a professional musician turned web developer. If I'm not coding or playing music, I'm usually training for a marathon, eating tacos, or building a synthesizer in my home electronics lab. I strive to build well made, accessible, and responsive websites and applications.</p>
            <p className='end-line'>If you'd like to chat about working together or just have questions about a potential project, please don't hesitate to write me at my email below. 🙂 </p></div>   : '' }

            { (screenSize.dynamicWidth < 700) ? 
          <div className='end-paragraph'>
            <p className='end-line-top'>Who am I?</p>
            <p className='end-line'>I'm a professional musician turned web developer. If I'm not coding or playing music, I'm usually training for a marathon, eating tacos, or building a synthesizer in my home electronics lab. I strive to build well made, accessible, and responsive websites and applications.</p>
            <p className='end-line'>If you'd like to chat about working together or just have questions about a potential project, please don't hesitate to write me at my email below. 🙂 </p></div>   : '' }
  
        </div>  {/* <-- viewer-object --> */}

        <div className="bottom-bar">
          <Email />

          <div className="anchored-cv-button">
            <a href={PDF} target="_blank" rel="noreferrer">cv</a>
          </div> {/* <-- anchored-cv-button --> */}
        </div> {/* <-- bottom-bar --> */}
      </div> {/* <-- rectangle --> */}

      <div className="email-bar">
        <p><span className='contact'>mikeleriche at gmail dot com</span></p>
        <Resume />
      </div>
    </div> 
  );
}

export default App;

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { callAboutPage } from './action';

const About = () => {
  const history = useHistory();


  

  useEffect(() => {
    callAboutPage(history);
  }, [history]);

  return (
    <div>
      <h1>Hellow People</h1>

    </div>
  )
}

export default About

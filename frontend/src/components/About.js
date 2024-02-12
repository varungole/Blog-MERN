import React from 'react';
import me from './me.jpeg';
function About() {
  return (
    <div className='about'>
        <h3 className='about-the-author'>About the author</h3>
        <img src={me} alt='me'></img>
        <p className='about-me-para'>Varun is a passionate and self-driven software engineer who enjoys to code and develop critical business logic. He is currently pursuing his master's degree at University of Maryland! In the free time, he loves reading about history and watching football!</p>
    </div>
  )
}

export default About
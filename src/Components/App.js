import React from 'react';
import Projects from './Projects';
import Social from './SocialProfile';
import profile from '../Assets/profile.png';
import Titles from './Title';
import Header from './Header';
// import './index.css'

function App() {
  return (
      <div>
        <Header />
        <img src={profile} className='profile' />
        <h1>Hello!</h1>
        <p>My name is Shuvankar.</p>
        <Titles/>
        <Projects/>
          <hr/>
        <Social /> 
      </div>  
  );
}

export default App;

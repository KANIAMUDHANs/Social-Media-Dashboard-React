// src/components/Home.js
import React from 'react';
import './Home.css';
import Nav from './Sidenav';
import Bar from './Sidebar';
import post from './Images/bg1.jpg';
import post1 from './Images/bg2.avif';
import post2 from './Images/bg3.avif';
import post3 from './Images/bg4.jpg';
import post4 from './Images/bg5.jpg';
import post5 from './Images/bg6.jpg';
import post6 from './Images/bg7.jpg';
import post7 from './Images/bg8.jpg';

const Home = () => {
  return (
    <div className='body' >
      <h1 className='ho text-center text-light' > - Facebook - </h1>
    <Nav/>
    <Bar/>
      <div className='boxes'>
      <div className='box1 '>
        <img src={post} className='bg1' />
        <p className='p1'>Artificial intelligence (AI) refers to computer systems capable of performing complex tasks that historically only a human could do, such as reasoning, making decisions, or solving problems.

          Today, the term “AI” describes a wide range of technologies that power many of the services and goods we use every day – from apps that recommend tv shows to chatbots that provide customer support in real time. But do all of these really constitute artificial intelligence as most of us envision it? And if not, then why do we use the term so often? </p>
      </div>

      <br /><br />
      <div className='box2'>
        <img src={post1} className='bg2' />
        <p className='p1'>As 30-year-old Uttar Pradesh athlete Ajeet Singh Yadav won the silver medal in men’s F46 javelin throw at the Paris Paralympics, friend Anshuman Singh was remembering what happened on a winter morning in 2017.

        </p>
      </div>
    
      <br /><br />
      <div className='box4'>
        <img src={post3} className='bg4' />
        <p className='p1'>
          Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon's rebellion
        </p>
      </div>


      <br /><br />
      <div className='box3'>
        <img src={post2} className='bg3' />
        <h4 className='h4'>The bold new Hyundai ALCAZAR- Intelligent. Versatile. Intense.
          6 and 7 seater SUV.</h4>
        <p className='p1'>An alcázar, from Arabic al-Qasr, is a type of Islamic castle or palace in Spain built during Muslim rule between the 8th and 15th centuries. They functioned as homes and regional capitals for governmental figures throughout the Umayyad caliphate and later for Christian rulers following the Iberian Reconquista.

        </p>
      </div>

      <br /><br />
      <div className='box5'>
        <img src={post4} className='bg5' />
        <h4 className='h4'>Fun Facts-(Chai Breaks !!)</h4>
        <p className='p1'>

          Tea culture is how tea is made and consumed, how people interact with tea, and the aesthetics surrounding tea drinking.
        </p>
      </div>

      <br /><br />
      <div className='box6'>
        <img src={post5} className='bg6' />
        <h4 className='h4'>JavaScript Fun Facts: Discovering the Quirky Side of Code</h4>
        <p className='p1'>
          The Naming Conundrum: JavaScript was originally named Mocha, then briefly LiveScript, before finally settling on JavaScript. ...
        </p>
      </div>

      <br /><br />
      <div className='box7'>
        <img src={post6} className='bg7' />
        <h4 className='h4'> Fun Facts: Coding </h4>
        <p className='p1'>
        He assume ,he know everything about coding after getting into it :)
        </p>
      </div>

      <br /><br />
      <div className='box8'>
        <img src={post7} className='bg8' />
        <h4 className='h4'> Fun Facts: Programmers </h4>
        <p className='p1'>
      (: Reality of Every Programmers :)
        </p>
      </div>
      <br/><br/><br/>
      </div>

      <footer className='ji'>
        <p>&copy; 2021-Facebook, All rights reserved.</p>
    </footer>

    </div>  
  );
};

export default Home;
import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/nav_bar/NavBar';
import placeholder from "./images/placeholder.png"

function App() {
  return (
    <div className="App">
      <div className='bg-pale-yellow'>

        <NavBar />

        <div className='py-16'>
          <div className='text-2xl md:text-5xl'>
            <span className='mr-1 inline-block'>Do you want to</span>
            <span className='ml-1 text-soft-blue inline-block'>
              <Typewriter
                options={{
                  strings: ["excel in secondary school", "top your class academically", "have dinstictions in your O'level exams", "score high in your UTME exam", "to prepare thoroughly for A'level or international exams"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <div>
            <p className='mx-[5vw] md:mx-[25vw] mt-8'>Then, JTC is the right place for you. At JTC, we will coach you till you excel academically. Our approach to teaching and learning is unique and tailored to help students to learn faster</p>
            
            <button className='bg-[#000000] py-2 px-5 my-4 text-white'>View Classes</button>

            <p className='mx-[2vw] md:mx-[35vw] bg-white mt-4 rounded-full py-2 text-[#000000]'>Be the best student in your school</p>
          </div>

          
        </div>
    
      </div>

      <div>

        <h3>
          What is JTC?
        </h3>
        <img
          src={placeholder} 
          alt="Students in class"
          className='w-[80vw] m-auto'
        />
        <p className='text-2xl'>Making students achieve academic excellence</p>
        <p>JTC, Jacobian Training College in full is a tutorial centre. At JTC, we have expert in different subjects tutor students in those subjects. Our tutoring method makes it easy for students to achieve academic excellence.</p>
        <button>Find out more</button>
      
      </div>

      <div>

        <h3>
          Who is JTC for?
        </h3>
        <img
          src={placeholder} 
          alt="Students in class"
          className='rounded-full'
        />
        <p className='text-2xl'>Want to excell academically? You are in the right place</p>
        <p>You don't need to be the best student in your school or class to attend JTC, you just need to be dilligent and disciplined.</p>
        <button>View all classes</button>
      
      </div>


      <Footer />
    </div>
  );
}

export default App;
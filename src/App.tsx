import React from 'react';
import Typewriter from 'typewriter-effect';
import Footer from './components/footer/Footer';
import NavBar from './components/nav_bar/NavBar';
import placeholder from "./images/placeholder.png"

function App() {
  return (
    <div className="text-center">

      <div className='bg-pale-red flex flex-col'>

        <NavBar />

        <div className='pt-[30vh] text-center'>
          <div className='text-3xl md:text-6xl w-[86vw] mx-auto'>
            <div className='mr-1 inline-block'>Do you want to</div>
            <div className='ml-1 inline-block text-soft-blue'>
              <Typewriter
                options={{
                  strings: ["excel in secondary school", "top your class academically", "have dinstictions in your O'level exams", "score high in your UTME exam", "to prepare thoroughly for A'level or international exams"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <div>
            <p className='mx-[7vw] md:mx-[30vw] my-8 text-lg md:text-xl'>Then, JTC is the right place for you. At JTC, we will coach you till you excel academically. Our approach to teaching and learning is unique and tailored to help students to learn faster</p>
            
            <button className='bg-[#000000] py-3 px-16 md:py-4 md:px-12 text-white'>View Classes</button>

            <p className='mx-[2vw] md:mx-[35vw] bg-white mt-4 mb-8 rounded-full py-2 text-[#000000] font-extrabold'>Be the best student in your school</p>
          </div>

          
        </div>
    
      </div>

      <div>

        <div className='my-8 w-[90vw] m-auto'>

          <h3 className='my-10 text-xl md:text-2xl text-left'>
            What is JTC?
          </h3>
          <img
            src={placeholder}
            alt="Students in class"
            className='w-[100%] md:h-[60vh] my-10 mx-auto'
          />
        
          <div className='md:flex'>

            <div className='w-[80%] md:w-[50%]'>
              <p className='text-2xl pb-8 md:text-3xl w-[65%]'>Making students achieve academic excellence</p>
            </div>

            <div className='md:w-[50%] md:flex md:flex-col items-start'>
              <p className='text-lg mb-10'>JTC, Jacobian Training College in full is a tutorial centre. At JTC, we have expert in different subjects tutor students in those subjects.</p>
              <p className='text-lg mb-8'>Our tutoring method makes it easy for students to achieve academic excellence.</p>
              <button className='bg-[#000000] w-[100%] md:w-[40%] py-4 px-6 my-4 text-white'>Find out more</button>
            </div>

          </div>

        </div>

      </div>

      <div className=' bg-[#000000] text-white'>
        <div className='pt-24 pb-10 w-[80vw] m-auto md:flex'>

          <div className='md:w-[60%]'>

            <h3 className='mb-12 text-xl md:text-2xl text-left'>
              Who is JTC for?
            </h3>

            <div>
              <img
                src={placeholder} 
                alt="Students in class"
                className='rounded-[100%] w-[80%] h-[60vh] mx-auto mb-10'
              />    
            </div>

          </div>

          <div className='md:w-[40%] mt-10'>
            <p className='text-2xl md:text-3xl mb-8'>Want to excell academically? You are in the right place</p>
            <p className='text-lg mb-8'>You don't need to be the best student in your school or class to attend JTC, you just need to be dilligent and disciplined.</p>
            <button className='bg-soft-blue w-[80%] md:w-[70%] py-4 px-12 my-4 text-white'>View all classes</button>
          </div>

        </div>
      </div>

      <div className='bg-pale-red py-8'>
        <img
          src={placeholder}
          alt="students' studying"
          className='w-[100vw] h-[85vh]'
        />
        <div className='absolute z-20 -translate-y-[30rem] translate-x-24 w-[65vw] bg-pale-red mx-auto md:ml-48 pt-12 pb-32 px-8 flex flex-col items-start'>
          <p className='mb-8 text-xl md:text-2xl'>Prepare yourself for excellence</p>
          <p className='mb-8 text-left text-lg md:text-xl'>Our classes are designed to groom students academically. So, if you want to be on top of your academics</p>
          <button className='bg-[#000000] py-4 px-20 my-4 text-white'>Join us now</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
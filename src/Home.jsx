import React, { useEffect, useState } from 'react';
import Person from './Assets/Person.jpg'
import House from './Assets/Home.jpg'
import { HiArrowUpRight } from "react-icons/hi2";
import Button from './Compoents/Button';
import Hero from './Assets/House.webp';
import Service from './Assets/service.jpg';
import ServiceCard from './Compoents/ServiceCard';
import AboutImg from './Assets/P.jpg';
import AboutComp from './Compoents/AboutComp';
import About from './Assets/about.jpg';
import Project from './Project';
import Footer from './Footer';

function Home() {
  const [Image, setImage] = useState(Service);
  const [expendable, setexpendable] = useState('1');
  const data = {
    1: {
      'heading': 'Commercial project',
      'semiheading': '180 George street plaza building',
      'details': 'Situated between George and Pitt Streets, 180 George Street Plaza Building is an impressive architectural marvel that pays homage to the Aboriginal heritage of the site.',
    },
    2: {
      'heading': 'Construction project',
      'semiheading': '180 George street plaza building',
      'details': 'Situated between George and Pitt Streets, 180 George Street Plaza Building is an impressive architectural marvel that pays homage to the Aboriginal heritage of the site.Situated between George and Pitt Streets, 180 George Street Plaza Building is an impressive architectural marvel that pays homage to the Aboriginal heritage of the site.',
    },
    3: {
      'heading': 'Water project',
      'semiheading': '180 George street plaza building,180 George street plaza building',
      'details': 'Situated between George and Pitt Streets, 180 George Street Plaza Building is an impressive architectural marvel that pays homage to the Aboriginal heritage of the site.Situated between George and Pitt Streets',
    },
    4: {
      'heading': 'Normal project',
      'semiheading': '180 George street plaza building',
      'details': 'Situated between George and Pitt Streets, 180 George Street Plaza Building is an impressive architectural marvel that pays homage to the Aboriginal heritage of the site.',
    },
    5: {
      'heading': 'Project',
      'semiheading': '180 George street plaza building',
      'details': 'Situated between George and Pitt Streets, 180 George Street Plaza Building is an impressive architectural marvel that pays homage to the Aboriginal heritage of the site.',
    },
  }

  return (
    <main>
      <div className='heroSection'>
        <div className='person'>
          <div className='profile'>
            <img className='profilePic' src={Person} alt="Images" />
            <p className='disc'>We help architects sculpt sounds out of space, with bespake, acoustic solution.</p>

          </div>

          <div className="latest">
            <h4 className='h4-heading'>Our Latest Project</h4>
            <img className='profilePic' src={House} alt="Images" />
            <a className='projectLink' href="#">Heritage Height <HiArrowUpRight /></a>
          </div>
        </div>
        <div className='hero'>
          <h1 className='h1-heading'>Architectural acoustic solution</h1>

          <Button Name="Let's Talk" />

          <img className='heroimg' src={Hero} alt="" />
        </div>
      </div>

      <div className="services">
        <div className='service-title'>
          <h1 className='h1-heading'>
            Modern life lives here
          </h1>

          <div className='service-title-details'>
            <p className='service-paragraph'>
              Masaic is an international design and architecture practice based in Sussex & Cornwall,United Kingdom. We make well crafted, conceptually clear architecture as an urge to react to the surrounding physical environments.
            </p>
          </div>
        </div>
        <div className='service-img'>
          <img className='serviceImg' src={Image} alt="" />
        </div>
        <div className='service-section'>
          {Object.entries(data).map(([key, value]) => (
            <ServiceCard key={key} index={key} expendable={expendable} setexpendable={setexpendable} heading={value.heading} semiDetails={value.semiheading} details={value.details} />
          ))}
        </div>
      </div>

      <div className='aboutSection'>
        <div className='aboutPerson'>
          <h1 className='h1-heading'>About Us</h1>
          <Button Name={'Learn More'} />
          <img className='aboutPic' src={AboutImg} alt="" />
        </div>
        <div className='aboutStatus'>
          <div className='upper'>
            <div className='experience'>
              <AboutComp number='32' text='Years of experience' />
              <AboutComp number='45' text='Award Gain' />
            </div>
            <div className='experience'>
              <AboutComp number='598' text='Project Completed' />
              <AboutComp number='100' text='Architerual Engineer' />
            </div>
          </div>

          <div className="lower">
            <p className='paragraph'>
              Our architecture transcends the confines of mere construction; it's a invitation to experience space in its purest form. With an unwavering focus on clarity, we refine every line and contour to manifest a design that isn't just visually captivating but also intellectually stimulating. Each structure we conceive is a narrative waiting to be explored, a canvas where functionality and artistry converge.
            </p>
          </div>

        </div>
        <div className='aboutImg'>
          <img className='aboutimgSection' src={About} alt="" />
        </div>
      </div>

      <Project />
      <Footer />
    </main>
  )
}

export default Home 
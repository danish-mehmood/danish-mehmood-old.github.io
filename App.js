import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubHeader from  './components/Sub_Header'
import  avatar from './assets/danish.jpg'
import {AiOutlineMail,AiOutlinePhone ,AiFillLinkedin} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'
import {BiFootball} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {ImBooks} from 'react-icons/im'
import {VscSymbolNamespace} from 'react-icons/vsc'
import {BsArrowRightShort} from 'react-icons/bs'


function App() {
  return (
    <div className='container'>
    <div className="App">


      {/* this is the top most section of the resume  */}
       <div className="introduction">
       <div className="name__image__wrapper">
         <div className="name">
           <h1>Danish Mehmood</h1>
         </div>
         
         <div className="my_image">
           
           <img height='100px' width='100px' src={avatar} alt=""/>
           <div className="my_image__overlay"></div>
         </div>
         </div>
         <div className="professional_description">
            <h2>web developer / javascript developer</h2>
         </div>
       </div>

       <div className="profile__section__wrapper">
       <div className="profile__section">
         <SubHeader font='20px' text='Profile' />
         <div className="social_contacts">
           <div className="email">
              <AiOutlineMail  size='35' color='#1411a6'/>
              <div className="specifics">
                <h3>Email</h3>
                <h3>rdm355190@gmail.com</h3>
              </div>
           </div>
           <div className="phone">
            <AiOutlinePhone size='35' color='#1411a6'/>
            <div className="specifics">
                <h3>Phone</h3>
                <h3>03345600371</h3>
              </div>
           </div>
           <div className="location">
            <GrLocation size='35' color='#1411a6'/>
            <div className="specifics">
                <h3>Location</h3>
                <h3>Pakistan, Islamabad</h3>
              </div>
           </div>
           
        
           <div className="linkedin">
            <AiFillLinkedin size='35' color='#1411a6'/>
            <div className="specifics">
                <h3>linkedIn</h3>
                <h3>@danish-mehmood</h3>
              </div>
           </div> 
           <div className="twitter">
            <FiTwitter size='35' color='#1411a6'/>
            <div className="specifics">
                <h3>Twitter</h3>
                <h3>@FkDanish</h3>
              </div>
           </div>
          


         </div>
       </div>
       
       <div className="skills__stuff">

         <div className="left__most__skills">
               <div className="left__div__one">
                   <SubHeader text='Education' font='14px'/>
                   <p className='skills__paragraph'>
                     Fauji Foundation university rawalpindi campus
                     Bachelors in Sofware Engineering
                     batch 2015-2019 with <strong>3.4/4.0</strong> cgpa
                   </p>
               </div>
               <div className="left__div__two">
                    <SubHeader text='Languages' font='14px'/>
                    <p className="skills__paragraph">
                      fluent in written/verbal urdu and 
                      english
                    </p>
               </div>
         </div>
         <div className="center__skills">
                   <SubHeader text='Software Skills' font='14px'/>
                   <p className="skills__paragraph">
                     ReactJS  <br/>
                     NodeJS <br/>
                     HTML <br/>
                     JS <br/>
                     MongoDB <br/>
                     Postgres <br/>
                     Mysql <br/>
                     Git <br/>
                     Redis <br/>
                     Animations <br/>
                     CSS <br/>
                     Postman <br/>
                     Typescript <br/>
                     GraphQL <br/>
                      
                   </p>
         </div>
         <div className="right__most__skills">
                <div className="right__div__one">
                 <SubHeader text='Expertise' font='14px'/>
                 <p className="skills__paragraph">
                   API Development <br/>
                   API Testing <br/>
                   Front/Backend state management <br/>
                   Frontend Testing <br/>
                   BackendTesting <br/>
                   Best Security Practices <br/>
                   Database Designing <br/>
                   ERDs <br/>
                   Deployments <br/>

                 </p>
                </div>
                <div className="right__div__two">
                  <SubHeader text='Interests' font='14px'/>
                  <div className="interests">
                  <VscSymbolNamespace  size='20' color='#1411a6'/>
                  <BiFootball size='20' color='#1411a6'/>
                  <ImBooks size='20' color='#1411a6'/>
                  <SiYoutubegaming size='20' color='#1411a6'/>
                  </div>
                </div>
         </div>

       </div>




       <div className="experiences">
         <div className="sub__wrapper">
         <SubHeader text = 'work experience' font='20px'/>
         </div>
         <div className="first__experience">
           <div className="place__of__experience">
             <h3>Aspire Logics (contractual)</h3>
           </div>
           <div className="experience__right__section">
           <div className="designation__experience">
             <h3>PHP and JS Developer</h3>
            <p>worked at Aspire Logics as a PHP and JS developer 
               it was a contractual 3 months job and it was overall 
               good experience during this time i learnt alot 
            </p>
           </div>
           <div className="duties__projects__wrapper__designation">
           <div className="duties__designation">
             <h3>Duties and Resposibilities</h3>
            <p> <BsArrowRightShort  size='10'color='#1411a6'/> i was responsible for gathering all the requirements
                from my project manager </p>
             <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible for sometimes gathering the requirements  from 
                 the client</p>
              <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible for developing the full-stack applications from front to back 
                </p>
               <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible to work in coordination with my collegues </p>
               <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible to communicate the everyday development to the client 
                </p>
                <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible to push the code to github everyday</p>
                <p><BsArrowRightShort size='10' color='#1411a6'/> i also had to manage multiple projects at a time aswell</p>         
           </div>
           <div className="notable__projects__designation">
             <h3>Notable Projects</h3>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> shopandshout.com
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> gateway2fb.com
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> health
           </p>
           </div>
           </div>

           </div>

         </div>
       </div>
       






       <div className="experiences experience2 ">
         <div className="placeholder">
        
         </div>
         <div className="first__experience">
           <div className="place__of__experience">
             <h3>Relicsol (contractual)</h3>
           </div>
           <div className="experience__right__section">
           <div className="designation__experience">
             <h3>PHP and JS Developer</h3>
            <p>worked at relicsol as a PHP and JS developer 
               it was a contractual 1 months job and it was overall 
               good experience during this time i learnt tones of new things 
               and technologies it was a small company where i had to manage 
               many things at a time which played a huge role in my development as 
               a software engineer 
            </p>
           </div>
           <div className="duties__projects__wrapper__designation">
           <div className="duties__designation">
             <h3>Duties and Resposibilities</h3>
            <p> <BsArrowRightShort  size='10'color='#1411a6'/> i had to manage big applications of bigger and smaller size  </p>
             <p><BsArrowRightShort size='10' color='#1411a6'/>i was also leading the team of two whom i had to guide </p>
              <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible for making the new APIs
                </p>
               <p><BsArrowRightShort size='10' color='#1411a6'/>i used laravel and node js at the backend and blade engine and react js at the frontend</p>
               <p><BsArrowRightShort size='10' color='#1411a6'/> i was also responsible to talk to clients and gather the requirements
                </p>
                <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible for making the changes as the client requested</p>
                
           </div>
           <div className="notable__projects__designation">
             <h3>Notable Projects</h3>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/>thelife.pk
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> relicsol.com
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> emiratesmarketing.pk
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> phdec.gov.pk
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> propertytime.pk
           </p>
           </div>
           </div>

           </div>

         </div>
       </div>

       <div className="spacer"></div>








       </div>

      

    </div>

    <div className="App2">
      

       <div className="experiences experience2 ">
         <div className="placeholder">
        
         </div>
         <div className="first__experience">
           <div className="place__of__experience">
             <h3>Qubitsol</h3>
           </div>
           <div className="experience__right__section">
           <div className="designation__experience">
             <h3>PHP and JS Developer</h3>
            <p>worked at Qubitsol as a PHP and JS developer 
               worked on various projects and some big ones as well 
               like oxford universities web application. But my growth was 
               hindered because i was doing those things which i already knew 
               and there was nothing challenging to work on 
            </p>
           </div>
           <div className="duties__projects__wrapper__designation">
           <div className="duties__designation">
             <h3>Duties and Resposibilities</h3>
            <p> <BsArrowRightShort  size='10'color='#1411a6'/> i had to make minor and major changes to the frontend </p>
             <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible for making changes to the backend</p>
              <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible for maintaining large applications 
                </p>
               <p><BsArrowRightShort size='10' color='#1411a6'/> i was using either React js or simple html css and js at the frontend </p>
               <p><BsArrowRightShort size='10' color='#1411a6'/> i was using opencart ,wordpress ,  laravel and node js at the backend 
                </p>
                <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible for API development as well </p>
                      
           </div>
           <div className="notable__projects__designation">
             <h3>Notable Projects</h3>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> culturalexpertise.net
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> www.amdetails.co.uk
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> ahbrass.co.uk
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> zarela.co.uk
           </p>
           
           </div>
           </div>

           </div>

         </div>
       </div>







       <div className="experiences  ">
         <div className="placeholder">
        
         </div>
         <div className="first__experience">
           <div className="place__of__experience">
             <h3>Freelancing</h3>
           </div>
           <div className="experience__right__section">
           <div className="designation__experience">
             <h3>Fullstack JS and PHP developer</h3>
            <p>i have been doing freelancing since the days of university
               i have learnt the most while doing freelancing as you have to work 
               on everything yourself google becomes your best friend . i have solved 
               many problems and found many ways to make things work
            </p>
           </div>
           <div className="duties__projects__wrapper__designation">
           <div className="duties__designation">
             <h3>Duties and Resposibilities</h3>
            <p> <BsArrowRightShort  size='10'color='#1411a6'/> i was able to create projects front to back using JS stack </p>
             <p><BsArrowRightShort size='10' color='#1411a6'/> i was responsible to gather all the requirements</p>
              <p><BsArrowRightShort size='10' color='#1411a6'/> i have also migrated or maintained the legacy code bases 
                </p>
               <p><BsArrowRightShort size='10' color='#1411a6'/> i was also sometimes responsible for deployment of applications </p>
               <p><BsArrowRightShort size='10' color='#1411a6'/> i also did code reviews to patch the security threats 
                </p>
               
                      
           </div>
           <div className="notable__projects__designation">
             <h3>Notable Projects</h3>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> intranet system 
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> dropbox like file sharing
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/>social media post sharer like buffer
           </p>
           <p>
           <BsArrowRightShort size='10' color='#1411a6'/> death certificate generator and sharing
           </p>
           
           </div>
           </div>

           </div>

         </div>
       </div>













       <div className="interships">
         <SubHeader text='Intership' font='20px'/>
         <div className="inner__wrapper__internships">
         <div className="place__date">
            <h3>Fauji foundation sona towers IT department</h3>
         </div>
         <div className="role">
           <h3>Software Developer</h3>
           <p>worked at fauji foundation sona tower IT department
             which was a brilliant experience got to work with my fellow 
             internees and some very experienced developers 
             we were given a task that we needed to accomplish in less than 2 months 
             and task was to make the whole IT department paperless by making a Document
             management system and we accomplished that using the laravel and react js tech stack
           </p>
         </div>
       </div>




       </div>
    </div>
    </div>
  );
}

export default App;


/** <div className="skills__stuff">

         <div className="left__most__skills">
               <div className="left__div__one">

               </div>
               <div className="left__div__two">

               </div>
         </div>
         <div className="center__skills">

         </div>
         <div className="right__most__skills">
                <div className="right__div__one">

                </div>
                <div className="right__div__two">
                  
                </div>
         </div>

       </div> */
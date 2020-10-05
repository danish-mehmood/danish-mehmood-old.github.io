import React from 'react'
import '../styles/Header.css'
import {FiFacebook , FiLinkedin , FiTwitter , FiGithub} from 'react-icons/fi'
import {FaLongArrowAltRight} from 'react-icons/fa'

export default function Header() {
    return (
        <div className='header'>
             <div className="introduction">
                <h2 className='hello_world'>Hello World !!!!</h2>
                <h2 className='introduction_name'>its danish mehmood</h2>
                <h2 className="introduction_profession">web developer <span className='blueish'> / </span>  <span className="yellowish"> JS </span> developer</h2>
                <h2 className='introduction_social_media'> <a href="https://www.facebook.com/rajadanish.mehmood/"> facebook </a> <FiFacebook/> 
                <span className="blueish"> / </span> 
                <a href="https://www.linkedin.com/in/danish-mehmood-215480163/"> linkedIn </a> <FiLinkedin/>
                 <span className="blueish"> / 
                 </span> <a href="https://twitter.com/home"> twitter </a> <FiTwitter/>
                 <span className="blueish"> / </span> 
                 <a href="https://github.com/danish-mehmood"> Github </a> <FiGithub/>
                 </h2>
                 <h2 className="resume pinkish"><a href='https://danish-mehmood.netlify.app'>My Resume</a></h2>
                 
             </div>

             <div className="formalities">
                   
                     <h2 className="contact_me">contact me<span className="blueish"> at</span> rdm355190<span className="blueish">@</span>gmail<span className="blueish">.</span>com </h2>
                     <h2 className='location'>pakistan <FaLongArrowAltRight/> <span className="yellowish">punjab</span> <FaLongArrowAltRight/>  <span className='pinkish'>islamabad</span> </h2>
             </div>
        </div>
    )
}

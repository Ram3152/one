import React from 'react'
import vg from "../assets/4thpic.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
function Home() {
  return (
   <>
    <div className='home' id="home" >

<main>
   <h1>Techie.Technica</h1>
   <p>Solution to all your problems</p>
</main>
</div>
<div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
        <p>
        At techieTechnica, we are passionate about technology and dedicated to providing innovative solutions to everyday tech challenges. We understand that in today's fast-paced digital world, technology plays a vital role in our lives, both personally and professionally. That's why we strive to be your go-to destination for all things tech-related.
        </p>
    </div>
</div>
       <div className="home3" id="about" >
        <div>
    <h1>Who we are?</h1>
    <p>We are a team of tech enthusiasts, developers, and problem solvers who love exploring the ever-evolving world of technology. Our goal is to simplify complex concepts and make them accessible to everyone. Whether you're a tech-savvy individual looking for the latest updates or a beginner seeking guidance, we're here to help.</p>
    </div>
</div>
<div className=" home4 "  id="brands">
    <div>
        <h1>Brands</h1>
        <article>

            <div style={{
                animationDelay:"0.3s",
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s",
            }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s",
            }}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"1s",
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
        </article>
    </div>
</div>
   </>
  )
}

export default Home

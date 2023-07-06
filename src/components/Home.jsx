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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati mollitia soluta, est voluptate nemo tempora numquam. Id cumque ad quibusdam dolore, corrupti recusandae adipisci quae? Eos dignissimos harum natus quidem eius repellendus aut?
        </p>
    </div>
</div>
       <div className="home3" id="about" >
        <div>
    <h1>Who we are?</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates illum quia velit officia magni expedita veniam dolores numquam quod iusto pariatur quam eius corporis, molestiae inventore sit laborum quas aliquid nisi nobis porro beatae error impedit? Explicabo in aliquid accusantium? Esse ipsum porro odit architecto delectus? Quae iste, facilis minima praesentium, culpa et ad doloribus, ab eveniet veritatis enim.</p>
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

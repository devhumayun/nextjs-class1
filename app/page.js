import './home.scss'
import Link from "next/link";
import { AiFillFacebook, AiFillYoutube, AiOutlineMenu, AiOutlineArrowRight } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { DiWordpress, DiJavascript1, DiReact } from 'react-icons/di';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-info">
              <h4>WELCOME TO MY WORLD</h4>
              <h1> Hi, I’m <span>Jone Lee</span> </h1>
              <h1>UI/UX Designer.</h1>
              <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
            </div>
            <div className="hero-social">
              <div className="social-link">
                <h4>FIND WITH ME</h4>
                <ul>
                  <li> <Link href="#"> <AiFillFacebook />  </Link> </li>
                  <li> <Link href="#"> <BsLinkedin />  </Link> </li>
                  <li> <Link href="#"> <AiFillYoutube />  </Link> </li>
                </ul>
              </div>
              <div style={{paddingRight: "150px"}} className="social-link">
                <h4>BEST SKILL ON</h4>
                <ul>
                  <li> <Link href="#"> <DiWordpress />  </Link> </li>
                  <li> <Link href="#"> <DiJavascript1 />  </Link> </li>
                  <li> <Link href="#"> <DiReact />  </Link> </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="img-box">
              <img src="https://inbio-react.netlify.app/static/ded8a3ee1283dbfbd7037143e582473f/27747/banner-03.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="featured-wraper">
          <div className="featured-title">
            <h4>FEATURES</h4>
            <h1> What I DO </h1>
          </div>
          <div className="featured-item-box">
            <div className="item">
              <span><AiOutlineMenu /></span>
              <h4>Business Stratagy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, distinctio! Cupiditate, necessitatibus itaque.</p>
              <div className="arro-right">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="item">
              <span><AiOutlineMenu /></span>
              <h4>Business Stratagy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, distinctio! Cupiditate, necessitatibus itaque.</p>
              <div className="arro-right">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="item">
              <span><AiOutlineMenu /></span>
              <h4>Business Stratagy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, distinctio! Cupiditate, necessitatibus itaque.</p>
              <div className="arro-right">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="item">
              <span><AiOutlineMenu /></span>
              <h4>Business Stratagy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, distinctio! Cupiditate, necessitatibus itaque.</p>
              <div className="arro-right">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="item">
              <span><AiOutlineMenu /></span>
              <h4>Business Stratagy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, distinctio! Cupiditate, necessitatibus itaque.</p>
              <div className="arro-right">
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="item">
              <span><AiOutlineMenu /></span>
              <h4>Business Stratagy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, distinctio! Cupiditate, necessitatibus itaque.</p>
              <div className="arro-right">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

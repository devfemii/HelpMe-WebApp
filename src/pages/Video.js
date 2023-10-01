import React from 'react'
import Nav from '../components/Nav'
import edit from '../assets/video/edit.svg'
import frame from '../assets/video/frame.svg'
import copy from '../assets/video/copy.svg'
import fb from '../assets/video/Facebook svg.svg'
import wa from '../assets/video/Vector.svg'
import gram from '../assets/video/Group.svg'
import { Container } from '../styles/Global.styles'
import { VideoFoot, VideoName, VideoName2, VideoWrap } from '../styles/Video.styles'
import Footer from '../components/Footer'


const Video = () => {
  return (
    <>
        <div className="mainHead">
            <Nav />
        </div>
        <Container>
            <VideoWrap>
                <div className="leftWrap">
                    <h2>Your video is ready!</h2>
                    <VideoName>
                        <p>Name</p>
                        <span><h5>Title</h5> <img src={edit} alt="" /></span>
                    </VideoName>
                    <form className="holdInput">
                        <input type="text" placeholder='enter email of receiver' />
                        <button className="btn">
                            Send
                        </button>
                    </form>
                    <VideoName2>
                        <h3>Video Url</h3>
                        <form className="holdInput">
                            <input type="text" placeholder='enter email of receiver' />
                            <button className="btn btnOut">
                               <img src={copy} alt="" /> Copy
                            </button>
                        </form>
                    </VideoName2>
                    <VideoName>
                        <h3>Share your video</h3>
                        <div className='btnWrap'>
                            <button className="btn btnOut">
                            <img src={fb} alt="" /> Facebook
                            </button>
                            <button className="btn btnOut">
                            <img src={wa} alt="" /> WhatsApp
                            </button>
                            <button className="btn btnOut">
                            <img src={gram} alt="" /> Telegram
                            </button>
                        </div>
                    </VideoName>
                </div>
                <div className="rightWrap">
                    {/* <div className="frameWrap">

                    </div> */}
                    <img src={frame} alt="" />
                    <VideoName2>
                        <h3>Transcript</h3>
                        {/* <form className="holdInput">
                            <input type="text" placeholder='enter email of receiver' />
                            <button className="btn btnOut">
                               <img src={copy} alt="" /> Copy
                            </button>
                        </form> */}
                    </VideoName2>
                </div>
            </VideoWrap>
        </Container>
        <VideoFoot>
                <div className="foot">
                    <h4>To ensure the availability and privacy of your video, we recommend saving it to your account.</h4>
                    <button className='btn'>Save Video</button>
                    <p>Don’t have an account? <span>Create account</span></p>
                </div>                
        </VideoFoot>
        <Footer />
    </>
  )
}

export default Video
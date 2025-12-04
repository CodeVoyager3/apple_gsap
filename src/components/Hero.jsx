import React, { useEffect } from 'react'

function Hero() {
    const videoRef = React.useRef();
// Set video playback rate on mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate=2.0;
        }
    }, []);
  return (
    <section id='hero'>
        <div>
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="" />
        </div>

        <video src="/videos/hero.mp4" autoPlay muted playsInline ></video>

        <button>Buy</button>

        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero

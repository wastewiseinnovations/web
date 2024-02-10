import React from 'react'
import Video from '../../media/hero_video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, Img, HeroP, ImgWrapper} from './HeroElems'
import logo from '../../media/symbol.png'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src = {Video} type ='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <Img src={logo}/>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
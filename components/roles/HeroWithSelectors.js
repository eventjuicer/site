


import Hero from '../Hero'
import Roles from './Roles'
import Texts from './Texts'


const HeroWithSelectors = ({videoSrc}) => (
  <div>


  <Hero videoSrc={videoSrc}>

       <Roles />

    <Texts />
  </Hero>
</div>

)

export default HeroWithSelectors;

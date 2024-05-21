import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import prof from '../../../public/profile_picture.jpeg'
import { Avatar } from '@/components/Avatar'
import Techlist from '../techlist'



const Biography = () => {
    
  return (
    <>
       <Bounded>
        <div className='grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]'>
          <Heading as = 'h1' size = 'xl' className = 'col-start-1'>
               About Ade
          </Heading> 
          <div className='prose prose-xl prose-slate prose-invert col-start-1'>
            I am an Ai Engineer.
          </div>
          <Button 
            label={'Resume'}
          />
          <Avatar 
           image = {prof}
           className='row-start-1 max-w-sm md:col-start-2 md:row-end-3'
          />
        </div>
       
     </Bounded>
     <Techlist />
    </>
    
  )
}

export default Biography
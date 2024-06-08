"use client"

import Bounded from "@/components/Bounded"
import Button from "@/components/Button"
import Heading from "@/components/Heading"
import Image from "next/image"
import { projectData } from "../data"




function Projects() {
  return (
    <Bounded>
       <div className="flex items-center p-4 justify-between border border-white w-full h-[10rem]">
         {projectData && projectData.map((data)   => (
        <>
        <div className="flex items-start justify-center space-x-4">
             <div>
                   <Image 
                    src = {data.image as string}
                    width = {100}
                    height={100}
                    alt = 'image'
                   />
             </div>
             <div>
             <Heading as = 'h6' size = 'sm' className = 'col-start-1'>
                {data.title}
              </Heading>
             </div>
 
          
        </div>
        <div className="flex items-center justify-center space-x-3">
          
                 <Button label = "github"/>
                 <Button label = "livelink" />
                 <Button label = "description"/>
             
        </div>
        </>
        

        ))}
       

       </div>
    </Bounded>
  )
}

export default Projects
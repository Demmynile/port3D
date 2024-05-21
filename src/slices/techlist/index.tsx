'use client'

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading"
import React from "react";
import { MdCircle } from "react-icons/md";



const Techlist = () => {

    interface techItems {
        id : number;
        techName : string;
        techColor: string;
    }
    type techList = techItems[]
    
    const techs : techList = [
      {
        id : 1,
        techName : 'React',
        techColor : '#00D1F7'
      },
      {
        id : 2,
        techName : 'Typescript',
        techColor : '#FFFFFF'
      },
      {
        id : 3,
        techName : 'NextJs',
        techColor : '#0AE448'
      },
      {
        id : 4,
        techName : 'GSAP',
        techColor : '#FF7F3E'
      },
    ]
    
    return (
       <section className="overflow-hidden">
          <Bounded as = 'div'>
            <Heading size = 'xl' className="mb-8" as = 'h2' >
                What I use
            </Heading>
          </Bounded>
          
           {techs.map(({techName , techColor} , index) =>(
             <div
             key={index}
             className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
             aria-label={techName || ""}
           >
             {Array.from({ length: 15 }, (_, index) => (
               <React.Fragment key={index}>
                 <span
                   className={
                     "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                   }
                   style={{
                     color: index === 7 && techColor ? techColor : "inherit",
                   }}
                 >
                   {techName}
                 </span>
                 <span className="text-3xl">
                   <MdCircle />
                 </span>
               </React.Fragment>
             ))}
           </div>
            ))}
       </section>

    )
}

export default Techlist
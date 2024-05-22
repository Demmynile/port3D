import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import React from 'react'
import {isFilled} from '@prismicio/client'
import {PrismicRichText} from '@prismicio/react'
import { RichTextField } from '@prismicio/types';

interface blogProps {
    // title : string;
    description: string
}

const Blog = ({description} : blogProps) => {
  return (
    <Bounded>
        <Heading size = 'xl' className='mb-8'>
             BLOG
        </Heading>
        {<h4>{description}</h4>&& (
            <div className='prose prose-xl prose-invert mb-10'>
                {description}
            </div>
        )}
    </Bounded>
  )
}

export default Blog
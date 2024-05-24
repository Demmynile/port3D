import Bounded from "@/components/Bounded"
import Heading from "@/components/Heading"


type contentListProps = {
  description : string
}

const Contentlist = ({description } : contentListProps) => {
  return (
    <Bounded>
      <Heading size = 'xl' className="mb-8">
         Blog
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
         {description}
      </div>
    </Bounded>
  )
}
export default Contentlist



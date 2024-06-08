import { StaticImageData } from "next/image";

export type ProjectProps = {
    title : string;
    image ?: string | StaticImageData;
    github ?: string;
    liveLink ?: string
    description ?: string
}
 
export type allProjectProps = ProjectProps[]
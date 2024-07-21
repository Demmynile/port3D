import { StaticImageData } from "next/image";

export type ProjectProps = {
    id : number;
    title : string;
    image ?: string | StaticImageData;
    github ?: string;
    liveLink ?: string
    description ?: string
}
 
export type allProjectProps = ProjectProps[]
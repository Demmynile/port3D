'use client'

import { Avatar } from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Techlist from "@/slices/techlist";
import prof from "../../../public/profile_picture.jpeg";



function About () {

    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // The path to your resume file in the public directory
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    return (
      <>
        <Bounded>
          <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
            <Heading as="h1" size="xl" className="col-start-1">
              About Ade
            </Heading>
            <div className="prose prose-xl prose-slate prose-invert col-start-1">
             As a versatile data professional, I specialize in transforming data into actionable insights and intelligent systems that drive innovation and business growth. My expertise spans data analysis, data science, AI engineering, MLOps, and cloud engineering, allowing me to deliver end-to-end solutions—from data exploration and model development to scalable deployment and monitoring.

With a strong command of Excel , PowerBI , SQL , Power Apps , Sharepoint , Python, TensorFlow, PyTorch, and cloud platforms such as AWS, Azure, and Google Cloud, I excel at designing and implementing robust machine learning pipelines and production-grade AI solutions. My experience includes developing advanced algorithms, optimizing neural networks, and integrating AI into real-world workflows to enhance decision-making and operational efficiency.

Driven by curiosity and a passion for continuous learning, I thrive in collaborative environments where technology meets innovation—committed to building intelligent systems that create measurable impact across industries.
            </div>
            <Button label={"Resume"} onClick={handleDownload} />
            <Avatar
              image={prof}
              className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
            />
          </div>
        </Bounded>
        <Techlist />
      </>
    );

}

export default About

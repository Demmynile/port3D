"use client";

import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Image from "next/image";
import { projectData } from "../data";

function Projects() {
  return (
    <Bounded>
      <Heading as="h3" size="lg" className="col-start-1 mb-4">
        PROJECTS
      </Heading>
      {projectData &&
        projectData.map((data , index) => (
          <>
            <div className="mt-3">
              <div className="flex flex-col items-start  p-4 justify-between border border-white w-full h-[10rem]">
                <div className="flex items-start justify-center space-x-4">
                  <div>
                    <Image
                      src={data.image as string}
                      width={100}
                      height={100}
                      alt="image"
                    />
                  </div>
                  <div>
                    <Heading className="text-lg font-extrabold md:text-2xl lg:text-[2rem] xl:text-[2rem] xl:mt-2">
                      {data.title}
                    </Heading>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <a href = {data.github} target="_blank" rel="noopener noreferrer"><Button label="github" /></a>
                  {data.liveLink != "" && <a href = {data.liveLink} target="_blank" rel="noopener noreferrer"><Button label="livelink" /></a>}
                  {/* <Button label="livelink" />
                  <Button label="description" /> */}
                </div>
              </div>
            </div>
          </>
        ))}
    </Bounded>
  );
}

export default Projects;

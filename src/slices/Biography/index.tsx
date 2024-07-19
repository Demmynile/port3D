import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import prof from "../../../public/profile_picture.jpeg";
import { Avatar } from "@/components/Avatar";
import Techlist from "../techlist";

const Biography = () => {
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
            As an AI engineer, I bring a wealth of experience in designing and
            implementing cutting-edge machine learning and deep learning
            solutions. My skills include developing sophisticated algorithms,
            optimizing neural network architectures, and deploying scalable AI
            models. With a strong foundation in Python, TensorFlow, and PyTorch,
            I excel at creating intelligent systems that solve complex problems
            and drive business growth. My passion for AI, combined with a
            collaborative approach and a commitment to continuous learning,
            positions me to contribute effectively to advancing technology and
            achieving transformative results in various industries.
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
};

export default Biography;

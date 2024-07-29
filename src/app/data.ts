import { allProjectProps } from "./interfaces";
import churnImage from "../../public/images/Churn-Prediction-scaled.jpg";
import tSpeech from "../../public/images/t-speech.jpeg"

export const projectData: allProjectProps = [
  {
    id : 1,
    title: "Text to Speech using LLMs",
    image: tSpeech,
    github:
      "https://github.com/Demmynile/text-to-speech",
    liveLink: "https://text-to-speech-delta-ten.vercel.app/",
    description: "",
  },
  {
    id : 2,
    title: "Churn Prediction using Machine Learning",
    image: churnImage,
    github:
      "https://github.com/Demmynile/Journey_to_ML_engineer/tree/main/machine-learning/churn-prediction",
    liveLink: "",
    description: "",
  },
  {
    id : 3,
    title: "Car Price Prediction using Machine Learning",
    image: churnImage,
    github: "https://github.com/Demmynile/Car-price-prediction",
    liveLink: "",
    description: "",
  },
  {
    id : 4,
    title: "Credit Score Rating Algorithms",
    image: churnImage,
    github: "https://github.com/Demmynile/Journey_to_ML_engineer/tree/main/machine-learning/credit-risk-scoring",
    liveLink: "",
    description: "",
  },
];

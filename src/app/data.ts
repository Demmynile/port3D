import { allProjectProps } from "./interfaces";
import churnImage from "../../public/images/Churn-Prediction-scaled.jpg";
import tSpeech from "../../public/images/t-speech.jpeg"
import analysis from "../../public/images/ANALYSIS.png"
import bi from "../../public/images/BI.png"

export const projectData: allProjectProps = [
  
  {
    id : 1,
    title: "BIKE SALES ANALYSIS WITH EXCEL",
    image: analysis,
    github:
      "https://wearestrongercharityuk-my.sharepoint.com/:x:/r/personal/ademola_balogun_wearestrongercharity_org/_layouts/15/Doc.aspx?sourcedoc=%7B353362C5-8FB4-482E-A371-C96DAB3963F7%7D&file=BIKE%20SALES%20ANALYSIS.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&wdOrigin=WAC.EXCEL.HOME-BUTTON%2CAPPHOME-WEB.FILEBROWSER.RECENT&wdPreviousSession=bb700937-22bf-4636-85cc-ad5d1519fd26&wdPreviousSessionSrc=AppHomeWeb&ct=1762322858548",
    liveLink: "",
    description: "",
  },
  {
    id : 2,
    title: "COMPANY SALES BUSINESS INTELLIGENCE DASHBOARD WITH TABLEAU",
    image: bi,
    github:
      "https://public.tableau.com/app/profile/spicywords/viz/ProjectBI_16010354087420/Dashboard1",
    liveLink: "",
    description: "",
  },
  {
    id : 3,
    title: "Predicting Urban Burglary Hotspots. A Machine Learning and Geospatial Analysis of Hull City United Kingdom",
    image: tSpeech,
    github:
      "https://github.com/Demmynile/crime-prediction",
    liveLink: "",
    description: "",
  },
  {
    id : 4,
    title: "Brain tumor detection and classification using Machine Learning and Deep Learning Models",
    image: churnImage,
    github:
      "https://github.com/Demmynile/brain-tumor-classification-web",
    liveLink: "",
    description: "",
  },
  // {
  //   id : 5,
  //   title: "Car Price Prediction using Machine Learning and Deep Learning Models",
  //   image: churnImage,
  //   github: "https://github.com/Demmynile/Car-price-prediction/blob/main/CAR%20PRICE%20PREDICTION%20(SUMMATIVE%20ASSIGNNMENT).ipynb",
  //   liveLink: "",
  //   description: "",
  // },
  // {
  //   id : 6,
  //   title: "Credit Score Rating Algorithms",
  //   image: churnImage,
  //   github: "https://github.com/Demmynile/Journey_to_ML_engineer/blob/main/machine-learning/credit-risk-scoring/Credit-scoring-risk.ipynb",
  //   liveLink: "",
  //   description: "",
  // },
];

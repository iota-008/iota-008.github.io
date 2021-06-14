export const projects = [
  {
    title: "Memories",
    description:
      "Using React, Node.js, Express MongoDB & passport.js I have built a web application where people can share memories in form of posts ",
    image: "/images/1.png",
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://github.com/iota-008/Create-Memories",
    visit: "https://create-your-memory.netlify.app/",
    id: 0,
  },
  {
    title: "Intra-day Trading",
    description:
      "Using sockets.io and kite api I have built a application which tells whether to buy sell or hold a stock it uses ORB (Opening Range Breakout) strategy which is an intra-day trading strategy",
    image: "/images/2.jpg",
    tags: ["React", "JavaScript", "Node", "Express", "Sockets.io", "Kite Api"],
    source: "https://github.com/iota-008/ORB-Strategy",
    visit: "",
    id: 1,
  },
  {
    title: "IPL Score Prediction",
    description:
      "This is a project where I have used machine learning algorithm to build a model which can predict the score(First Innings) of an ongoing IPL cricket match based on current situation of the game. Used Flask framework to communicate with the users to take input and provide it to the model which give the range as an output",
    image: "/images/3.png",
    tags: [
      "Flask",
      "Python",
      "Machine Learning",
      "Ridge regression",
      "Jinja",
      "Jupyter Notebook",
    ],
    source: "https://github.com/iota-008/IPL-Score-Predictor",
    visit: "https://ipl-score-master.herokuapp.com/",
    id: 2,
  },
  {
    title: "YouTube Tools",
    description:
      "Created a Web application using Flask where people can download youtube videos in any available quality which gets stored in their device, download video thumbnails, download video transcripts(if available)",
    image: "/images/4.png",
    tags: ["Flask", "Python"],
    source: "https://github.com/iota-008/YoutubeTools",
    visit: "https://yt-tools.herokuapp.com/",
    id: 3,
  },

  {
    title: "Video Chat Application",
    description:
      "This is a real time chatting application built using Web RTC and sockets.io and React",
    image: "/images/5.jpg",
    tags: ["React", "Javascript", "Sockets.io", "Web RTC"],
    source: "https://github.com/iota-008/ShowYourFace",
    visit: "",
    id: 4,
  },
  {
    title: "URL shortener",
    description:
      "This is very useful application which helps to create short links from long urls",
    image: "/images/6.png",
    tags: ["Flask", "Python"],
    source: "https://github.com/iota-008/URL-shortner",
    visit: "https://urls-shorts.herokuapp.com/",
    id: 5,
  },
  {
    title: "Estimate the probability of heart disease for patients",
    description:
      "This a project where I tried to estimate the probability of heart disease for patients using their medical condition. I have used KNN model of machine learning for creating the model which gave an accuracy score of around 96%",
    image: "/images/7.jpg",
    tags: ["Machine Learning", "Python", "KNN", "Jupyter Notebook"],
    source:
      "https://github.com/iota-008/Estimate-the-probility-of-heart-disease-for-patients-using-KNN-model-of-Machine-learning",
    visit: "",
    id: 6,
  },
  {
    title: "Gender classification from tweets",
    description:
      "In this project I have created an ensemble model (naive bayes, SVM, logistic regression) to predict gender from tweets with an accuracy score of 81%",
    image: "/images/8.jpg",
    tags: [
      "Machine Learning",
      "Python",
      "Natural Language Processing",
      "Naive Bayes",
      "Support Vector Machine",
      "Logistic Regression",
      "Jupyter Notebook",
    ],
    source: "https://github.com/iota-008/verzeo-internship-MajorProject",
    visit: "",
    id: 7,
  },
];

export const TimeLineData = [
  { year: 2018, text: "Entered College" },
  { year: 2019, text: "Started Android development" },
  { year: 2020, text: "Started Machine Learning" },
  { year: 2020, text: "Started Web development" },
  { year: 2021, text: "Shared my projects with the world" },
  { year: 2021, text: "Fullstack developer internship at labcolabs" },
  { year: 2021, text: "Incoming SDE intern at siemens healthineers " },
];

export const AccomplishmentsData = [
  { number: 411, text: "Global Rank in CodeChef March Long Challenge 2021" },
  {
    number: 1302,
    text: "Global Rank in CodeChef February Long Challenge 2021",
  },
  {
    number: 200,
    text: "Was in top 200 and won goodies in Hacktober fest 2020",
  },
  {
    number: 100,
    text: "In top 100 of machine learning hackathon on HackerEarth 2020",
  },
  {
    number: "300+",
    text: "Problems solved on LeetCode,GFG Practice, InterviewBit ",
  },
];

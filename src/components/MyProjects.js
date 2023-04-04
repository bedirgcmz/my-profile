import React from "react";
import { motion } from "framer-motion";
import "./MyProjects.css";

const MyProjects = ({ bacgroundOpc, color, borderLinkOpc }) => {
  const myProjects = [
    {
      project_name: "English Irregular Verbs",
      // image: "https://r.resimlink.com/_hB8PT.jpg",
      image: "https://r.resimlink.com/sOIF2mxZB.gif",
      info: "Most people in the world want to learn English. And it works for it. Especially in Turkey, most people learn English through their own studies. One of the most difficult subjects when learning English is irregular verbs. You can learn and exercise irregular elephants with this simple app. Click the link and try",
      link: "https://bedirgcmz-en-irregular-verbs.netlify.app/",
      github_link: "https://github.com/bedirgcmz/English-Irreguler-Verbs",
    },
    {
      project_name: "Chinese Horoscope",
      image: "https://r.resimlink.com/x38E0T1S.jpg",
      info: "Horoscopes are important to everyone. People want to know what the zodiac sign says. Chinese zodiac signs are especially interesting. It is possible to see animals and other elements that define you according to your birth year. Click the link and try",
      link: "https://bedirgcmz-chinese-horoscope.netlify.app/",
      github_link: "https://github.com/bedirgcmz/chinese-horoscope-calendar",
    },
    {
      project_name: "Multiplication Table Game",
      image: "https://r.resimlink.com/6s3PO.jpg",
      info: "In this application, you can play the multiplication table game with music. There is one thing you must remember. You have 10 seconds for each question. Even if you don't answer the question, a new question comes up. You can add your name with the form. You can save your score at the end of the game. This application stores data on localstorage. Click the link and try",
      link: "https://bedirgcmz-home-schoolng.netlify.app/",
      github_link: "https://github.com/bedirgcmz/home-schooling",
    },
    {
      project_name: "Simple Shopping",
      image: "https://r.resimlink.com/vLuaR6ltIyA0.jpg",
      info: "This app works. You must add the products you own first. Type the product name and click the ADD button. Now the product appears on the side. Use the + button to send the product to the other list. Or click the >> / << buttons and move all the products you have added. Click the link and try",
      link: "https://bedirgcmz-simple-shopping.netlify.app/",
      github_link: "https://github.com/bedirgcmz/my_exercises/tree/master/simple_shopping",
    },
    {
      project_name: "School Students",
      image: "https://r.resimlink.com/LkbQn.gif",
      info: "I really like the SweetAlert package. I thought of a student table for a school. And while adding and deleting students, I responded with swwetalert. These are so sweet. Click the link and try",
      link: "https://bedirgcmz-school-students.netlify.app/",
      github_link: "https://github.com/bedirgcmz/school-students",
    },
    {
      project_name: "To Do List",
      // image: "https://r.resimlink.com/Ioxhg0Av.jpg",
      image: "https://r.resimlink.com/ho4PAB21.gif",
      info: "Maybe you have a lot of work to do and you forget about them. Here is an app to help you. Create a to-do list and delete it when you complete the task. If the missions are all finished, you can delete them all. I'm sure this will be of great help to you. Click the link and try",
      link: "https://bedirgcmz-todo-list.netlify.app/",
      github_link: "https://github.com/bedirgcmz/my_exercises/tree/master/to_do_list",
    },
    {
      project_name: "Soup Rastaurant",
      // image: "https://r.resimlink.com/FWRQKgAm5.jpg",
      image: "https://r.resimlink.com/rci4FfAWMRg0.gif",
      info: "Master Kerem has a restaurant. He hired a farm to make soup. He wants to instantly track how much soup she can make. That's why we wrote an app for it. Note that the master Kerem does not use pig's feet. Click the link and try",
      link: "https://bedirgcmz-soup-restaurant.netlify.app/",
      github_link: "https://github.com/bedirgcmz/soup-restaurant",
    },
    {
      project_name: "Spend Money",
      // image: "https://r.resimlink.com/se1tNaF_2Wb.jpg",
      image: "https://r.resimlink.com/se1tNaF_2Wb.jpg",
      info: "In this react application, you are given some money. When you shop, your money is running low. You can add and delete products in your shopping basket. You can see your basket with the button on the right. Also, if you want, empty the basket completely with the button on the left. Click the link and try",
      link: "https://bedirgcmz-spend-money.netlify.app/",
      github_link: "https://github.com/bedirgcmz/spend-money",
    },
    {
      project_name: "Weather Condition",
      // image: "https://r.resimlink.com/XCQk5VZtr1M.jpg",
      image: "https://r.resimlink.com/wRg9KS.gif",
      info: "You have important work to do today and you are wondering about the weather. You don't need to worry. With this application, you can instantly find out the weather forecast. All you have to do is type in your city and find it. Click the link and try",
      link: "https://bedirgcmz-weather-condition.netlify.app/",
      github_link: "https://github.com/bedirgcmz/weather_condition",
    },
    {
      project_name: "Journey (For Swetzerland)",
      image: "https://r.resimlink.com/yrNKB-b.jpg",
      info: "Traveling is very nice. But sometimes the journey can be tough. It is important to know the train times in order to find our way on travels and to save time. If you are visiting Switzerland, type in the names of two cities to see up-to-date travel information with this application. Click the link and try",
      link: "https://bedirgcmz-journey-swetzerland.netlify.app/",
      github_link: "https://github.com/bedirgcmz/journey-swetzerland",
    },
    {
      project_name: "Where is Johan",
      image: "https://r.resimlink.com/UGPn9QB4.gif",
      info: "Are you good at guessing? Here is a guessing game. Johan left the house and took a train. You have 4 rights to know which wagon you are in. If your guess is wrong, follow the clue given to you. Click the link and try",
      link: "https://bedirgcmz-where-is-johan.netlify.app/",
      github_link: "https://github.com/bedirgcmz/where-is-johan",
    },
    {
      project_name: "Battery Simulation",
      image: "https://r.resimlink.com/HsfnCT.gif",
      info: "A battery charging and discharging simulation. Colors change according to battery level. As a bonus, a picture appears depending on the state of the battery. Click the link and try",
      link: "https://bedirgcmz-battery-simulation.netlify.app/",
      github_link: "https://github.com/bedirgcmz/battery-simulation",
    },
    {
      project_name: "School Report",
      // image: "https://r.resimlink.com/JNy3uv0f1c.jpg",
      image: "https://r.resimlink.com/kTRlKf.gif",
      info: "This application is designed for a school. You can see a separate list for each class. The individual grades of the students appear in the class lists. On the home page, class averages are shown with chart bars. Click the link and try",
      link: "https://bedirgcmz-school-report.netlify.app/",
      github_link: "https://github.com/bedirgcmz/school-report",
    },
    {
      project_name: "Css - Mixed",
      image: "https://r.resimlink.com/BXvaE58fNA.jpg",
      info: "CSS is a really fun programming language. Writing css feels good. I have done many css projects in my software learning process. I would love to work on big projects to write more. No images were used in this project. All shapes are designed with css codes. Let's take a look.",
      link: "https://bedirgcmz-css-mixed.netlify.app/",
      github_link: "https://github.com/bedirgcmz/css-week6-img",
    },
  ];
  const variants2 = {
    fadeIn: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    fadeOut: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
      className="skills-hobbies-container w-75 m-auto mt-4"
    >
      <div className="my-projects-container">
        <div className="projects-info-text">
          <p className={`${color} mb-4`}>
            I love to write code. I write some small projects as a hobby. This is so fun. Below are
            some small applications I made while on the way to become a web developer. Let's examine
            them.
          </p>
          <hr className={`${color} my-project-info-hr`} />
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {myProjects.map((project, index) => (
            <div class="col" key={index}>
              <div class="card">
                <img src={project.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{project.project_name}</h5>
                  <p class="card-text">{project.info}</p>
                  <a
                    className={`gitub-link ${borderLinkOpc} ${color}`}
                    href={project.github_link}
                    target="_blank"
                  >
                    Github Link <i class="fa-brands fa-github ms-2"></i>
                  </a>
                  <a
                    className={`card-link ${borderLinkOpc} ${color}`}
                    href={project.link}
                    target="_blank"
                  >
                    Go Project <i class="fa-solid fa-eye ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`loading ${bacgroundOpc}`}>Loading... You will see more projects soon!</div>
      </div>
    </motion.div>
  );
};

export default MyProjects;

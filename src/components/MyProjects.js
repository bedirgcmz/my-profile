import React from "react";
import { motion } from "framer-motion";
import "./MyProjects.css";

const MyProjects = ({ bacgroundOpc, color, borderLinkOpc }) => {
  const myProjects = [
    {
      project_name: "English Irregular Verbs",
      image: "https://r.resimlink.com/_hB8PT.jpg",
      info: "Most people in the world want to learn English. And it works for it. Especially in Turkey, most people learn English through their own studies. One of the most difficult subjects when learning English is irregular verbs. You can learn and exercise irregular elephants with this simple app. Click the link and try",
      link: "https://bedirgcmz-en-irregular-verbs.netlify.app/",
      github_link: "https://github.com/bedirgcmz/English-Irreguler-Verbs",
    },
    {
      project_name: "Simple Shopping",
      image: "https://r.resimlink.com/vLuaR6ltIyA0.jpg",
      info: "This app works. You must add the products you own first. Type the product name and click the ADD button. Now the product appears on the side. Use the + button to send the product to the other list. Or click the >> / << buttons and move all the products you have added. Click the link and try",
      link: "https://bedirgcmz-simple-shopping.netlify.app/",
      github_link: "https://github.com/bedirgcmz/my_exercises/tree/master/simple_shopping",
    },
    {
      project_name: "To Do List",
      image: "https://r.resimlink.com/Ioxhg0Av.jpg",
      info: "Maybe you have a lot of work to do and you forget about them. Here is an app to help you. Create a to-do list and delete it when you complete the task. If the missions are all finished, you can delete them all. I'm sure this will be of great help to you. Click the link and try",
      link: "https://bedirgcmz-todo-list.netlify.app/",
      github_link: "https://github.com/bedirgcmz/my_exercises/tree/master/to_do_list",
    },
    {
      project_name: "Spend Money",
      image: "https://r.resimlink.com/se1tNaF_2Wb.jpg",
      info: "In this react application, you are given some money. When you shop, your money is running low. You can add and delete products in your shopping basket. You can see your basket with the button on the right. Also, if you want, empty the basket completely with the button on the left. Click the link and try",
      link: "https://bedirgcmz-spend-money.netlify.app/",
      github_link: "https://github.com/bedirgcmz/spend-money",
    },
    {
      project_name: "Weather Condition",
      image: "https://r.resimlink.com/XCQk5VZtr1M.jpg",
      info: "You have important work to do today and you are wondering about the weather. You don't need to worry. With this application, you can instantly find out the weather forecast. All you have to do is type in your city and find it. Click the link and try",
      link: "https://bedirgcmz-weather-condition.netlify.app/",
      github_link: "https://github.com/bedirgcmz/weather_condition",
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
          {myProjects.map((project) => (
            <div class="col">
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

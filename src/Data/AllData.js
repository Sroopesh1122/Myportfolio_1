import todoImg from '../Images/SR-todo.png'
import weather from '../Images/Weather App.png'
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


const reactIcon = "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256"
const nodejsIcon = "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text-thumbnail.png";
const expressJsIcon ="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png";
const mongoDBIcon ="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png";


export const authorName = "SHIVUROOPESH";
export const heroTitle_1 = "FULL STACK";
export const heroTitle_2 = "WEB DEVELOPER";


export const resumeLink ="https://drive.google.com/file/d/18D5qRO5-WArRx8VxtycxBAX7Ksbkkx3M/view?usp=sharing"

export const aboutData = "A self-taught programmer with a passion for learning and exploring new technologies. My expertise spans from front-end development to back-end programming. I am currently expanding my skillset to include JAVA Full Stack . As a dedicated and driven individual , I am constantly seeking out opportunities to grow and improve as a programmer."

export const skillsContent = [{
      title:"Frontend Development",
      skills:[
        {
            title:"HTML",
            status:"Experienced"
        }
        ,{
            title:"CSS",
            status:"Experienced"
        }
        ,{
            title:"Javascript",
            status:"Experienced"
        }
        ,{
            title:"Tailwind",
            status:"Experienced"
        }
        ,{
            title:"Bootstrap",
            status:"Experienced"
        }
        ,{
            title:"React JS",
            status:"Experienced"
        }
      ]
},
{
    title:"Backend Development",
    skills:[
      {
          title:"Node JS",
          status:"Experienced"
      }
      ,{
          title:"Express JS",
          status:"Experienced"
      }
      ,{
          title:"Servlets & JSP",
          status:"Intermediate"
      }
      ,{
          title:"MongoDB",
          status:"Experienced"
      }
      ,{
          title:"MySQL",
          status:"Intermediate"
      }
      ,{
          title:"Spring / Spring Boot",
          status:"Beginner"
      }
    ]
},{
    title:"Tools & Libraries",
    skills :[{
        title:"NPM",
        status:"Experinced"
    },{
        title:"Maven",
        status:"Intermediate"
    },{
        title:"GSAP",
        status:"Experienced"
    },{
        title:"Framer Motion",
        status:"Intermediate"
    }]
}]




export const projectData=[
    {
        title:"Simple TODO Application",
        img:todoImg,
        desc:"The Simple To-Do MERN Application is a web-based task management system designed to streamline daily task organization for users. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it offers a seamless and user-friendly experience. Users can create an account through the sign-up feature and log in via the sign-in functionality. Once logged in, users can manage their profile information, including updating their username, email, and password. The core functionality of the application allows users to add new tasks to their to-do list, providing a title and description for each task. Users can also easily delete tasks they have completed or no longer need. The application provides a simple yet effective way to manage and track daily tasks, ensuring users stay organized and productive.",
        git:"https://github.com/Sroopesh1122/todolist",
        demo:"https://sr-todolist.netlify.app",
        technology:[
            {
                name:"React",
                icon : reactIcon
            }
            ,{
                name:"Node JS",
                icon : nodejsIcon
            }
            , {
                name:"Express JS",
                icon : expressJsIcon
            }
            ,{
                name:"Mongo DB",
                icon : mongoDBIcon
            }
        ]
    },
    {
        title:"Weather App",
        img:weather,
        desc:"The Weather API Application is a dynamic web application designed to provide comprehensive weather information to users. It fetches current weather details and a 4-day forecast for any searched city, making it a useful tool for planning and staying informed about weather conditions. The application's background changes based on the weather data to visually reflect current conditions. In addition to temperature, it provides details such as humidity, wind speed, and atmospheric pressure. Users can switch between different temperature units, including Fahrenheit, Celsius, and Kelvin, to suit their preferences. This versatile and user-friendly application ensures that users have access to all necessary weather information in an intuitive and visually appealing interface.",
        git:" https://github.com/Sroopesh1122/weather-app",
        demo:"https://sr-open-weather.netlify.app",
        technology:[
            {
                name:"React",
                icon : reactIcon
            }
            ,{
                name:"Node JS",
                icon : nodejsIcon
            }
            , {
                name:"Express JS",
                icon : expressJsIcon
            }
            ,{
                name:"Mongo DB",
                icon : mongoDBIcon
            }
        ]
    },  
    
]


export const contactData= [
    {
        title:"Email",
        icon:<MdEmail/>,
        link:"mailto:shivuroopesh6362@gmail.com",
        value:"shivuroopesh6362@gmail.com"
    },
    {
        title:"Whatsapp",
        icon:<IoLogoWhatsapp/>,
        link:"https://wa.me/6362379895",
        value:"+91 6362379895"

    }
    ,
    {
        title:"LinkenIn",
        icon:<FaLinkedin/>,
        link:"https://www.linkedin.com/in/shivuroopesh-m-439ab0267",
        value:"Shivuroopesh M"
    },
    {
        title:"Telegram",
        icon:<FaTelegram/>,
        link:"https://t.me/s_roopesh6362",
        value:"+91 6362379895"
    }
]

export const contactInfo="Feel free to reach out to me for any inquiries, collaboration opportunities, or if you just want to say hello. I am always open to discussing new projects, creative ideas, or potential collaborations that can bring innovative solutions to life. Whether you have a question about my work, need assistance with a project, or simply want to connect, don't hesitate to get in touch. I look forward to hearing from you and exploring how we can work together to achieve great things."
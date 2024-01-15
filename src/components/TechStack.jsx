import {
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { IoLogoVue, IoLogoJavascript } from "react-icons/io5";
import { SiCsharp, SiTailwindcss } from "react-icons/si";

function TechStack() {
  return (
    <div className="grid md:grid-cols-1 xl:grid-cols-4">
      {/*Backend */}
      <div className="w-full text-center border-4 border-orange-500	bg-sky-800 text-white">
        <FaJava size={180} color="orange" className="w-full text-center" />
        <p>
          Java 11,MVC,spring boot,spring data,<br></br>
          hibernate,JPA,Junit,Mockito
        </p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-gray-600 text-white">
        <SiCsharp size={180} color="purple" className="w-full text-center" />
        <p>C#, .NET Core, Entity Framework, NUnit, Moq</p>
      </div>
      <div className="w-full text-center border-4 border-yellow-500 bg-blue-600  text-white">
        <FaPython size={180} color="yellow" className="w-full text-center" />
        <p>Python 3, Django, Flask, PyTest, Mock</p>
      </div>
      <div className="w-full text-center border-4 border-green-500 bg-black text-white">
        <FaNodeJs size={180} color="green" className="w-full text-center" />
        <p>Node.js, Express.js, Next Js, sequalizer </p>
      </div>
      {/*Frontend */}
      <div className="w-full text-center border-4 border-white bg-sky-400  text-white">
        <FaReact size={180} color="white" className="w-full text-center" />
        <p>React, Redux, Jest</p>
      </div>
      <div className="w-full text-center border-4 border-yellow-500 bg-black  text-white">
        <IoLogoJavascript
          size={180}
          color="yellow"
          className="w-full text-center"
        />
        <p>JavaScript, ES6+, Jest</p>
      </div>
      <div className="w-full text-center border-4 border-green-500 bg-blue-900  text-white">
        <IoLogoVue size={180} color="green" className="w-full text-center" />
        <p>Vue 3.0 One piece</p>
      </div>
      <div className="w-full text-center border-4 border-orange-500 bg-gray-600  text-white">
        <FaHtml5 size={180} color="orange" className="w-full text-center" />
        <p>HTML5, CSS3, SASS, Bootstrap</p>
      </div>
      <div className="w-full text-center border-4 border-blue-400 bg-blue-950  text-white">
        <SiTailwindcss
          size={180}
          color="lightblue"
          className="w-full text-center"
        />
        <p>Tailwind CSS</p>
      </div>
      <div className="w-full text-center border-4 border-blue-700 bg-blue-400  text-white">
        <FaCss3 size={180} color="blue" className="w-full text-center" />
        <p>CSS3, SASS, Bootstrap</p>
      </div>
    </div>
  );
}
export default TechStack;

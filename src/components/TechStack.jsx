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
      <div className="w-full text-center border-4 border-purple-500	bg-theme text-white">
        <FaJava size={180} color="#A855F7" className="w-full text-center" />
        <p>
          Java 11,MVC,spring boot,spring data,<br></br>
          hibernate,JPA,Junit,Mockito
        </p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme text-white">
        <SiCsharp size={180} color="#A855F7" className="w-full text-center" />
        <p>C#, .NET Core, Entity Framework, NUnit, Moq</p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme  text-white">
        <FaPython size={180} color="#A855F7" className="w-full text-center" />
        <p>Python 3, Django, Flask, PyTest, Mock</p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme text-white">
        <FaNodeJs size={180} color="#A855F7" className="w-full text-center" />
        <p>Node.js, Express.js, Next Js, sequalizer </p>
      </div>
      {/*Frontend */}
      <div className="w-full text-center border-4 border-purple-500 bg-theme text-white">
        <FaReact size={180} color="#A855F7" className="w-full text-center" />
        <p>React, Redux, Jest</p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme  text-white">
        <IoLogoJavascript
          size={180}
          color="#A855F7"
          className="w-full text-center"
        />
        <p>JavaScript, ES6+, Jest</p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme text-white">
        <IoLogoVue size={180} color="#A855F7" className="w-full text-center" />
        <p>Vue 3.0 One piece</p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme  text-white">
        <FaHtml5 size={180} color="#A855F7" className="w-full text-center" />
        <p>HTML5, CSS3, SASS, Bootstrap</p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme  text-white">
        <SiTailwindcss
          size={180}
          color="#A855F7"
          className="w-full text-center"
        />
        <p>Tailwind CSS</p>
      </div>
      <div className="w-full text-center border-4 border-purple-500 bg-theme  text-white">
        <FaCss3 size={180} color="#A855F7" className="w-full text-center" />
        <p>CSS3, SASS, Bootstrap</p>
      </div>
    </div>
  );
}
export default TechStack;

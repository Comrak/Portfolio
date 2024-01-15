import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="black"
            fillOpacity="1"
            d="M0,256L15,245.3C30,235,60,213,90,218.7C120,224,150,256,180,229.3C210,203,240,117,270,85.3C300,53,330,75,360,101.3C390,128,420,160,450,154.7C480,149,510,107,540,80C570,53,600,43,630,64C660,85,690,139,720,160C750,181,780,171,810,144C840,117,870,75,900,80C930,85,960,139,990,181.3C1020,224,1050,256,1080,261.3C1110,267,1140,245,1170,213.3C1200,181,1230,139,1260,149.3C1290,160,1320,224,1350,240C1380,256,1410,224,1425,208L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="bg-black w-screen flex justify-center">
        <div className="bg-black md:w-full xl:w-1/2">
          <div className="p-10 font-jost text-center">
            <p className="text-gray-50 pb-5">Designed and Developed by </p>
            <div className="h-1 border-2 border-white border-dotted "></div>
            <div className="flex text-white w-full justify-between pt-5 py-3 ">
              <MdOutlineAlternateEmail
                size="50"
                onClick={() => window.open("mailto:josenardull@gmail.com")}
              />
              <FaLinkedin
                size="50"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jose-nardulli-75b29021b/",
                    "_blank"
                  )
                }
              />
              <FaGithub
                size="50"
                onClick={() =>
                  window.open("https://github.com/Comrak", "_blank")
                }
              />
            </div>
            <div className="h-1 border-2 border-white border-dotted "></div>
            <p className="text-gray-50 my-2">Jose Nardulli</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

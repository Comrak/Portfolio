import Layout from "../components/Layout";
import TechStack from "../components/TechStack";

function Home() {
  return (
    <Layout>
      <div>
        {/* intro */}
        <div className="bg-theme h-screen">
          <div className="grid md:grid-cols-1 xl:grid-cols-2 h-screen items-center border-4 border-purple-500 transform xl:rotate-12 md:rotate-0 mx-20 z-10 bg-theme">
            <div className="h-1/2">
              <dotlottie-player
                src="https://lottie.host/5a9a9ff8-157c-4f9f-86fe-050645f509b0/lLhAf33N1E.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white">Jose Nardulli</h1>
              <h2 className="text-3xl font-bold text-white">
                Full Stack <b className="text-purple-500">Developer</b>
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl text-text font-bold text-center my-8">
            My Tech Stack
          </h1>
          <TechStack />
        </div>
        <div className="my-20 ">
          <div className="text-center h-52 bg-secondary">
            <h1 className="text-4xl text-white font-bold text-center my-8 py-10">
              About me
            </h1>
          </div>
          <div className="md:mx-5 xl:mx-32 shadow-2x1 bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white  text-text ">
            <div className="h-96">
              <dotlottie-player
                src="https://lottie.host/47220b23-05a7-4c17-9dd6-6b67c92811a6/qmKExRxJQX.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>

            <p className="xl:px-14 text-2xl my-5 font-semiboldmd:px-5 py-10">
              I&apos;m just a tech enthusiast, who has been blessed with the
              chance to work in many places around the world developing
              solutions. I also love to teach and share everything I learned,
              and I&apos;m blessed by the chance of doing that as a job as
              well.😀
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl text-text text-center font-bold">
            More personal info
          </h1>

          <div className="h-screen relative">
            <div className="h-3/4">
              <dotlottie-player
                src="https://lottie.host/f0ffc2da-0c72-4c33-8b4d-47238fc76fc5/xr6ASHEEJf.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <pre className="text-white font-jost mb-40 md:text-sm xl:text-base">
                {JSON.stringify(
                  {
                    name: "Jose Nardulli",
                    age: "36",
                    profesion: "System Engineer",
                    hobbies: ["coding", "gaming", "reading"],
                    languages: ["Spanish", "English", "Italian"],
                    country: "Argentina",
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Home;

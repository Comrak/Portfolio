import projects from "../assets/projects";
import Layout from "../components/Layout";
projects;
function Projects() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <dotlottie-player
              src="https://lottie.host/d91faa00-67bf-4d23-98f4-f394ee1a6953/8VJjOxeJhD.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <p className="text-xl font-semibold text-center">
            It takes half your life before you discover life is a do-it-yourself
            project
          </p>
          <h1 className="text-4xl text-center font-bold mt-5">Projects</h1>
        </div>
        <div>
          <h1 className="xl:text-7xl font-bold text-center bg-secondary mx-20 p-20 text-white rounded-br-full rounded-tl-full md:text-3xl">
            It gets easier. Every day it gets a little easier. But you got to do
            it every day. That&apos;s the hard part. But it does get easier
          </h1>
        </div>
      </div>
      <div className="grid mt-20 md:grid-cols-1 xl:grid-cols-3 items-center justify-center gap-10 xl:mx20 md:mx-5">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <div className="relative p 10 border-4 text-center rounded-tr-3xl rounded-bl-3xl border-secondary">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 rounded-tr-3xl rounded-bl-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80">
                  <h1 className="text=4xl font-semibold text-white">
                    {project.name}
                  </h1>
                  <h2 className="text=4xl font-semibold text-white">
                    {project.description}
                  </h2>
                  <button
                    className="border-2 rounded border-white p-10 py-2 mx-2 my-2 px-5 bg-theme text-white "
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    DEMO
                  </button>
                  {project.githubRepo != "" && (
                    <button
                      className="border-2 rounded border-white p-10 mx-2 my-2 py-2 px-5 bg-theme text-white"
                      onClick={() => window.open(project.githubRepo, "_blank")}
                    >
                      REPO
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </Layout>
  );
}
export default Projects;

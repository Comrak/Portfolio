import certificates from "../assets/certificates";
import Layout from "../components/Layout";

function Edu() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <dotlottie-player
              src="https://lottie.host/be18140e-eb32-4fc4-830f-e24e5aa42280/x6uUNI6GRA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <p className="text-xl font-semibold text-center">
            Every morning you have two choices: continue to sleep with your
            dreams, or wake up and chase them
          </p>
          <h1 className="text-4xl text-center font-bold mt-5">Certificates</h1>
        </div>
        <div>
          <h1 className="xl:text-7xl font-bold text-center bg-secondary mx-20 p-20 text-white rounded-br-full rounded-tl-full md:text-3xl">
            You don’t have to be great to start. But you have to start to be
            great.
          </h1>
        </div>
      </div>
      <div className="grid mt-20 md:grid-cols-1 xl:grid-cols-3 items-center justify-center gap-10 xl:mx20 md:mx-5">
        {certificates.map((certificate) => {
          return (
            <div key={certificate.id}>
              <div className="relative p 10 border-4 text-center rounded-tr-3xl rounded-bl-3xl border-secondary">
                <img
                  src="./images/medalRef.jpg"
                  alt={certificate.title}
                  className="w-full h-80 rounded-tr-3xl rounded-bl-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80">
                  <h1 className="text=4xl font-semibold text-white">
                    {certificate.title}
                  </h1>
                  <h1 className="text=4xl font-semibold text-white">
                    {certificate.issuer}
                  </h1>
                  <button
                    className="border-2 rounded border-white p-10 py-2 mx-2 my-2 px-5 bg-theme text-white "
                    onClick={() => window.open(certificate.url, "_blank")}
                  >
                    Go to certificate
                  </button>
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
export default Edu;

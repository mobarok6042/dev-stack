import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="w-full lg:container mx-auto">
      <div className="hero bg-gray-50 min-h-screen lg:min-h-[650px]">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img
            alt="A collection of development tools"
            src={bannerImage}
            className="max-w-sm rounded-lg"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Build your ideal</h1>
            <h1 className="text_gradient text-5xl font-bold">
              Development Stack!
            </h1>
            <p className="py-6 text-grey-400">
              Explore the best development stack for your next project. Find the
              right tools, frameworks, and technologies to build amazing
              applications.
            </p>
            <button type="button" className="btn primary_gradient mr-4 rounded-xl">
              Explore Technologies
            </button>
            <button type="button" className="btn border border-gray-400 text-gray-500 rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

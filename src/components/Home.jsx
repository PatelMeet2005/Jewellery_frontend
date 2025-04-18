// import { AboutUs } from "./Aboutus";
import { ImageSlider } from "./Imageslider";
import { Selection } from "./Selection";
import { CardSection } from "./CardSection";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Hero Section with Image Slider */}
      <div className="w-full relative">
        <ImageSlider />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30 px-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
          Pure Luxury, Crafted for You
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Discover exquisite jewelry for every occasion
          </p>
        </div>
      </div>

      {/* About Section
      <div className="w-full max-w-5xl p-12">
        <AboutUs />
      </div> */}

      {/* Selection Section */}
      <div className="w-full ">
        <Selection />
      </div>
      <div className="w-full ">
        <CardSection />
      </div>
    </div>
  );
}

export default Home;

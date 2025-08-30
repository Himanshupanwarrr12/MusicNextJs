import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home(){
return(
  <>
  <HeroSection  />
  <FeaturedCourses/>
  <WhyChooseUs/>
  <Testimonials/>
  <UpComingWebinar/>
  <Instructor/>
  <Footer/>
  </>
)
}
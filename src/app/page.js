import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <div className="w-3/4 mx-auto">
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <MyProjects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
    <div className="w-full text-white bg-gray-600 h-12 flex justify-center text-center items-center mt-12">
        <div >	&#169; 2023 <span className="text-[#FD6F00]">Mumair</span> All right reserved. Inc</div>
    </div>
    </>
  );
}

import Education from "./Education"
import Experience from "./Experience"
import PhotoBar from "./PhotoBar"
import Profile from "./Profile"
import Skills from "./Skills"

const Aside = () => {
  return (
    <div className="max-w-screen md:max-w-[80%] bg-yellow-500 h-auto md:h-screen md:ml-auto flex flex-col justify-evenly md:pl-[20%] pr-[20%] lg:pl-[20%] max-sm:gap-10 text-wrap">
        <div className="md:hidden flex items-center">
          <PhotoBar/>
        </div>
        <Profile/>
        <Education/>
        <Experience/>
        <Skills/>
    </div>
  )
}

export default Aside
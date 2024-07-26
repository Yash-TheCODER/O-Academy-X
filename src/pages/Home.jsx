// import React, {useEffect} from 'react'
// import { FaArrowRight } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import HighlightText from '../components/core/HomePage/HighlightText'
// import CTAButton from '../components/core/HomePage/Button'
// import Banner from '../assets/Images/banner.mp4'
// import CodeBlocks from '../components/core/HomePage/CodeBlocks'
// import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
// import TimelineSection from "../components/core/HomePage/TimelineSection"
// import ExploreMore from "../components/core/HomePage/ExploreMore"
// import ReviewSlider from "../components/common/ReviewSlider"
// import InstructorSection from "../components/core/HomePage/InstructorSection"
// import Footer from "../components/common/Footer"
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const Home = () => {
//     useEffect(() => {
//         AOS.init({
//           duration: 1000,
//         });
//         AOS.refresh();
//       }, []);

//   return (
//     <div>
//         {/*Section 1*/}
//         <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-8'> 
//             <Link to={"/signup"}>
//                 <div data-aos="zoom-in" className = 'group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
//                     <div className = "flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
//                         <p>Become an Instructor</p>
//                         <FaArrowRight />
//                     </div>
//                 </div>
//             </Link>

//             <div data-aos="fade-right" className='text-center text-4xl font-semibold'> 
//                 Empower Your Future with 
//                 <HighlightText text={"Coding Skills"} /> 
//             </div>

//             <div data-aos="fade-left" className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
//                 With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
//             </div>

//             <div className='flex flex-row gap-7 mt-8'>                                  
//                 <CTAButton active={true} linkto={"/signup"}>  Learn More </CTAButton>          {/* if active is true then button is yellow otherwise black */}
//                 <CTAButton active={false} linkto={"/login"}>  Book a Demo </CTAButton>
//             </div>

//             <div data-aos="flip-right" className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
//                 <video muted loop autoPlay className = "shadow-[20px_20px_rgba(255,255,255)]"> <source src = {Banner} type = "video/mp4"/> </video>
//             </div>

//             <div>
//                 <CodeBlocks position = {"lg:flex-row"}
//                     heading = {  <div className='text-4xl font-semibold'>
//                                     Unlock Your <HighlightText text={"coding potential"}/>  with our online courses
//                                 </div>
//                             }
//                     subheading = { "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
//                     ctabtn1 = { { btnText: "try it yourself",  linkto: "/signup",  active: true, } }
//                     ctabtn2 = { { btnText: "learn more",  linkto: "/login",  active: false, } }
//                     codeblock = {`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
//                     codeColor = {"text-yellow-25"}
//                     backgroundGradient = {<div className="codeblock1 absolute"></div>}
//                 />
//             </div>

//             <div>
//                 <CodeBlocks position = {"lg:flex-row-reverse"}
//                     heading = {  <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
//                                     Start <HighlightText text={"coding in seconds"} />
//                                 </div>
//                             }
//                     subheading = { "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
//                     ctabtn1 = { { btnText: "Continue Lesson",  linkto: "/signup",  active: true, } }
//                     ctabtn2 = { { btnText: "Learn More",  linkto: "/login",  active: false, } }
//                     codeblock = {`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
//                     codeColor = {"text-white"}
//                     backgroundGradient={<div className = "codeblock2 absolute"></div>}
//                 />
//             </div>
//             <ExploreMore/>
//         </div>

//         {/*Section 2  */}
//         <div className='bg-pure-greys-5 text-richblack-700'> 
//             <div className="homepage_bg h-[320px]">
//                 <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
//                     <div className="lg:h-[150px]"></div>

//                         <div className="flex flex-row gap-7 text-white lg:mt-8">
//                             <CTAButton active={true} linkto={"/signup"}>
//                                 <div className='flex items-center gap-2' > Explore Full Catalog  <FaArrowRight />  </div>
//                             </CTAButton>
//                             <CTAButton active = {false} linkto = {"/signup"}> Learn more </CTAButton> 
//                         </div>

//                 </div>
//             </div>

//             <div className = "mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">

//                 <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
//                     <div className = "text-4xl font-semibold lg:w-[45%] ">
//                         Get the Skills you need for a
//                         <HighlightText text={"Job that is in demand"} />
//                     </div>

//                     <div className = "flex flex-col items-start gap-10 lg:w-[40%]">
//                         <p className='text-[16px]'> The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills. </p>                   
//                         <CTAButton active={true} linkto={"/signup"}>  Learn more </CTAButton>
//                     </div>
//                 </div>

//                 <TimelineSection />
//                 <LearningLanguageSection />
//             </div>
//         </div>


//         {/*Section 3 */}
//         <div className = "relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

//             <InstructorSection />
//             <h1 className = "text-center text-4xl font-semibold mt-8"> Reviews from Other Learners </h1>
//             {/* Review Slider here */}
//             <ReviewSlider/>

//         </div>

//         {/*Footer */}
//         <Footer />

//     </div>
//   )
// }

// export default Home






import React, {useEffect} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import ReviewSlider from "../components/common/ReviewSlider"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import Footer from "../components/common/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturesSection from '../components/core/HomePage/FeaturesSection'
import AskQuestion from '../components/core/HomePage/AskQuestion'
import Image1 from '../assets/Images/Image1New.jpeg'
import Image2 from '../assets/Images/Image2New.jpeg'
import Image3 from '../assets/Images/Image3New.jpeg'
import Image4 from '../assets/Images/Image4New.jpeg'

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
        AOS.refresh();
      }, []);

  return (
    <div>
        {/* Added */}
        <div className="bg-blue-500 relative">
            <div className="flex flex-col md:flex-row justify-between mx-auto px-8">
                <div className="flex flex-col items-start mt-14 ml-8">
                    <h1 className="text-6xl font-bold mb-6 text-black">
                        Start your coding <br /> journey today
                    </h1>
                    <p className="text-xl text-gray-900 mb-6">
                        Learn to code from scratch with <span className="font-semibold text-black">job focused courses</span> <br /> designed by experts.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center">
                        <input
                            className="p-4 border border-white rounded-t-lg lg:rounded-l-lg lg:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email"
                            id="filter-input"
                            type="email"
                        />
                        <button
                            className="bg-blue-500 text-white p-5 lg:p-4 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg border border-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="saveUserNameAndEmail"
                        >
                            Start learning today <span className="text-yellow-400">⚡</span>
                        </button>
                    </div>
                    <Link to="/signup">
                        <div className="w-[180px] text-center text-[16px] sm:text-[20px] px-6 py-[18px] rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-richblack-800 text-white flex items-center justify-center mt-6">
                            Sign up
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                className="ml-2"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="hidden md:block mt-14 mr-8">
                    <img className="w-100" src="https://cdn.codechef.com/images/home/coding_boy.svg" alt="infographic" />
                </div>
            </div>
            <div className="relative w-[50vw] h-0 border-t-[100px] border-transparent border-l-[60vw] border-l-blue-500 transform -rotate-12 right-[30px] -mt-12 -mb-24"></div>
            <div className="relative w-[50vw] h-0 border-t-[100px] border-transparent border-r-[60vw] border-r-blue-500 transform rotate-12 left-[590px]"></div>
        </div>

        {/* Added 2 */}
        <section className="py-16 bg-rich">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
                The perfect platform to boost your
                <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
                    {' '}
                    technical skills{' '}
                </span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
                    <img
                        className="mx-auto mb-4"
                        src="https://blob.sololearn.com/assets/home-perfect-platform-1-rebranding.svg"
                        alt="sl-home-perfect-img"
                        loading="lazy"
                    />
                    <div className="text-xl font-semibold mb-2">Students</div>
                    <span className="text-gray-600 mb-4 block">
                        Prepping for the big test or want to ace your first interview? Use Sololearn's real-world practice to reinforce what you've learned and get you ready for that big moment.
                    </span>
                    <Link to="/signup">
                        <a
                            type="button"
                            className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
                        >
                            Learn for free
                        </a>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
                    <img
                        className="mx-auto mb-4"
                        src="https://assets.sololearn.com/home-perfect-platform-2.svg"
                        alt="sl-home-perfect-img"
                        loading="lazy"
                    />
                    <div className="text-xl font-semibold mb-2">Professionals</div>
                    <span className="text-gray-600 mb-4 block">
                        You can learn something totally new to advance your career. Or maybe you just want to knock off the rust. Try Sololearn to get access to a variety of courses, from machine learning to web development.
                    </span>
                    <Link to="/signup">
                        <a
                            type="button"
                            className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
                        >
                            Boost your career
                        </a>
                    </Link>
                </div>
            </div>
            <div className="text-center mb-8 mt-[90px]">
                <h2 className="font-black text-black text-4xl text-heading uppercase text-white">
                    Why{' '}
                    <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
                        {' '}
                        Code{' '}
                    </span>
                </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
                    <div className="mb-4">
                        <img
                            className="mx-auto"
                            src="https://assets.sololearn.com/home-why-code-1.svg"
                            alt="why-code-icon"
                            loading="lazy"
                        />
                    </div>
                    <div className="text-xl font-semibold mb-2">It's popular</div>
                    <div className="text-gray-600">
                        <strong>Technical skills are in high demand.</strong> Over 60% of new jobs worldwide will require tech skills.
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
                    <div className="mb-4">
                        <img
                            className="mx-auto"
                            src="https://assets.sololearn.com/home-why-code-2.svg"
                            alt="why-code-icon"
                            loading="lazy"
                        />
                    </div>
                    <div className="text-xl font-semibold mb-2">It's promising</div>
                    <div className="text-gray-600">
                        Unlock your earning potential! Entry-level programmers in the U.S. earn on <strong>average over $78,000 in salary.</strong>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
                    <div className="mb-4">
                        <img
                            className="mx-auto"
                            src="https://assets.sololearn.com/home-why-code-3.svg"
                            alt="why-code-icon"
                            loading="lazy"
                        />
                    </div>
                    <div className="text-xl font-semibold mb-2">It's fun</div>
                    <div className="text-gray-600">
                        Imagine combining your passion and skill with your creativity, and <strong>making something new everyday!</strong>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 mb-12">
                <Link to="/signup">
                    <a
                        type="button"
                        className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
                    >
                        I want to code
                    </a>
                </Link>
            </div>
            <div className="relative w-full h-0 border-t-[110px] border-transparent border-r-[160vw] border-r-gray-25 transform rotate-2 -mt-10 -ml-40 -mb-24"></div>
        </section>


        {/* Added 3 */}
        <section className="text-center py-16 text-black bg-white">
            <h2 className="text-4xl font-bold mb-2">A Platform Trusted by Students Worldwide</h2>
            <p className="mb-12">
                Don't Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex flex-row justify-center space-x-4">
                    <div className="relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-yellow-100 group overflow-hidden">
                        <div className="transition-all duration-300 group-hover:mb-32">
                            <div className="text-4xl font-bold">15 Million+</div>
                            <div className="text-gray-600">Happy Students</div>
                        </div>
                        <div className="absolute bottom-[-66px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
                            <img
                                src={Image1}
                                alt="Happy Students"
                                className="w-[130px] text-yellow-500"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-pink-100 group overflow-hidden">
                        <div className="transition-all duration-300 group-hover:mb-32">
                            <div className="text-4xl font-bold">24000+</div>
                            <div className="text-gray-600">Mock Tests</div>
                        </div>
                        <div className="absolute bottom-[-56px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
                            <img
                                src={Image2}
                                alt="Mock Tests"
                                className="w-[130px] text-yellow-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center space-x-4">
                    <div className="relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-blue-100 group overflow-hidden">
                        <div className="transition-all duration-300 group-hover:mb-32">
                            <div className="text-4xl font-bold">14000+</div>
                            <div className="text-gray-600">Video Lectures</div>
                        </div>
                        <div className="absolute bottom-[-66px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
                            <img
                                src={Image3}
                                alt="Video Lectures"
                                className="w-[130px] text-yellow-500"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-orange-500 group overflow-hidden">
                        <div className="transition-all duration-300 group-hover:mb-32">
                            <div className="text-4xl font-bold">80000+</div>
                            <div className="text-gray-600">Practice Papers</div>
                        </div>
                        <div className="absolute bottom-[-55px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300">
                            <img
                                src={Image4}
                                alt="Practice Papers"
                                className="w-[130px] text-yellow-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-0 border-t-[150px] border-transparent border-r-[160vw] border-r-white transform rotate-2 -mt-10 -ml-32 -mb-24"></div>
        </section>
        {/* Added 4 */}
        <FeaturesSection/>
        {/*Section 1*/}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-8'> 
        
            <Link to={"/signup"}>
                <div data-aos="zoom-in" className = 'group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
                    <div className = "flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>

            <div data-aos="fade-right" className='text-center text-4xl font-semibold'> 
                Empower Your Future with 
                <HighlightText text={"Coding Skills"} /> 
            </div>

            <div data-aos="fade-left" className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>                                  
                <CTAButton active={true} linkto={"/signup"}>  Learn More </CTAButton>          {/* if active is true then button is yellow otherwise black */}
                <CTAButton active={false} linkto={"/login"}>  Book a Demo </CTAButton>
            </div>

            {/* <div data-aos="flip-right" className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                <video muted loop autoPlay className = "shadow-[20px_20px_rgba(255,255,255)]"> <source src = {Banner} type = "video/mp4"/> </video>
            </div> */}

            {/* <div>
                <CodeBlocks position = {"lg:flex-row"}
                    heading = {  <div className='text-4xl font-semibold'>
                                    Unlock Your <HighlightText text={"coding potential"}/>  with our online courses
                                </div>
                            }
                    subheading = { "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1 = { { btnText: "try it yourself",  linkto: "/signup",  active: true, } }
                    ctabtn2 = { { btnText: "learn more",  linkto: "/login",  active: false, } }
                    codeblock = {`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    codeColor = {"text-yellow-25"}
                    backgroundGradient = {<div className="codeblock1 absolute"></div>}
                />
            </div>

            <div>
                <CodeBlocks position = {"lg:flex-row-reverse"}
                    heading = {  <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                                    Start <HighlightText text={"coding in seconds"} />
                                </div>
                            }
                    subheading = { "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                    ctabtn1 = { { btnText: "Continue Lesson",  linkto: "/signup",  active: true, } }
                    ctabtn2 = { { btnText: "Learn More",  linkto: "/login",  active: false, } }
                    codeblock = {`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    codeColor = {"text-white"}
                    backgroundGradient={<div className = "codeblock2 absolute"></div>}
                />
            </div> */}
            {/* <ExploreMore/> */}
        </div>

        {/*Section 2  */}
        <div className='bg-richblack-900  text-white mt-20'> 
            {/* <div className="homepage_bg h-[320px]">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                    <div className="lg:h-[150px]"></div>

                        <div className="flex flex-row gap-7 text-white lg:mt-8">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-2' > Explore Full Catalog  <FaArrowRight />  </div>
                            </CTAButton>
                            <CTAButton active = {false} linkto = {"/signup"}> Learn more </CTAButton> 
                        </div>

                </div>
            </div> */}

            <div className = "mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">

                <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                    <div className = "text-4xl font-semibold lg:w-[45%] ">
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className = "flex flex-col items-start gap-10 lg:w-[40%]">
                        <p className='text-[16px]'> The modern O(1) Academy-X is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills. </p>                   
                        <CTAButton active={true} linkto={"/signup"}>  Learn more </CTAButton>
                    </div>
                </div>

                <TimelineSection />
                <LearningLanguageSection />
                <AskQuestion/>
            </div>
            
        </div>

        
        
        {/*Section 3 */}
        <div className = "relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

            {/* <InstructorSection /> */}
            <h1 className = "text-center text-4xl font-semibold mt-8"> Reviews from Other Learners </h1>
            {/* Review Slider here */}
            <ReviewSlider/>

        </div>

        {/*Footer */}
        <Footer />

    </div>
  )
}

export default Home
// import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/frame.png"
// import LoginForm from "./LoginForm"
// import SignupForm from "./SignupForm"




// function Template({ title, description1, description2, image, formType }){

//   const { loading } = useSelector((state) => state.auth)

//   return (

//     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">

//       { loading ? ( <div className="spinner"></div> ) : (
         
//           <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">

//             <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">

//                 <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5"> {title} </h1>        
//                 <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
//                   <span className="text-richblack-100">{description1}</span> {" "}
//                   <span className="font-edu-sa font-bold italic text-blue-100"> {description2} </span>
//                 </p>

//                 {formType === "signup" ? <SignupForm /> : <LoginForm />}

//             </div>

//             <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
//                 <img src={frameImg}  alt="Pattern"  width={558} height={504} loading="lazy"/>                                            {/* image of bg-cart */}
//                 <img src={image} alt="Students" width={558} height={490} loading="lazy" className='absolute -top-4 right-4 z-10'/>       {/* image of girl */}
//             </div>

//           </div>
          
//         )
//      }

//     </div>
  
//  )}

// export default Template



import { useSelector } from "react-redux";
import frameImg from "../../../assets/Images/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen flex items-center justify-center" 
         style={{ 
           background: "linear-gradient(60deg, rgb(0, 60, 75) 50%, white 50%)" 
         }}>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="relative flex w-full max-w-screen-xl gap-x-12 py-12">
          <div className="flex-1 flex items-center">
            {/* Stripe Container */}
            <div className="relative w-24 h-80 bg-[#143d4d] mr-6">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#5fc84e] transform rotate-[12deg] origin-bottom-left"></div>
            </div>
            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-6xl font-bold leading-tight">
                Start <br /> learning <br />
                <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                  with <br />
                  StudySphere
                </span>
              </h1>
              <p className="mt-4 text-lg">
                <span className="text-richblack-100">{description1}</span>{" "}
                <span className="font-edu-sa font-bold italic text-blue-100">
                  {description2}
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;


import React from 'react';
import { FaUserShield, FaChalkboardTeacher, FaCreditCard, FaCloud, FaVideo, FaBookmark } from 'react-icons/fa';

const features = [
  {
    icon: FaUserShield,
    title: 'User Authentication and Authorization',
    description: 'Secure login and sign-up with email, OTP verification, and password recovery.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Course Management',
    description: 'Instructors can create, update, and manage course content, while students can view and rate courses.',
  },
  {
    icon: FaCreditCard,
    title: 'Payment Integration',
    description: 'Seamless checkout process with Razorpay for course purchases and enrollments.',
  },
  {
    icon: FaCloud,
    title: 'Cloud-based Media Management',
    description: 'Efficient storage and management of media content using Cloudinary.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative not-prose scroll-mt-[72px] text-white mt-[80px]" id="features">
      <div className="text-center md:mx-auto mb-8 md:mb-12 max-w-3xl">
        <p className="font-black text-sky-400 text-2xl text-heading uppercase">Features</p>
        <h2 className="font-bold font-heading leading-tighter tracking-tighter text-heading md:text-4xl text-3xl">
          What you get with O(1) Academy-X
        </h2>
        <p className="text-xl mt-3 text-richblack-25">
          StudyNova offers a cutting-edge platform for education, designed with top-notch features and exceptional user experience.
        </p>
      </div>
      <div className="grid md:gap-y-12 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row max-w-md mx-auto mb-8">
            <div>
              <span className="flex justify-center align-middle mr-4 -mt-[5px] bg-primary h-10 md:h-12 md:p-3 md:w-12 p-2 rounded-full text-white w-10">
                <feature.icon className="w-6 h-6 text-white" />
              </span>
            </div>
            <div className="mt-0.5">
              <h4 className="font-bold text-xl md:text-[1.3rem]">{feature.title}</h4>
              <p className="mt-1 text-richblack-200">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
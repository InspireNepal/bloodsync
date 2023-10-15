import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sprint3Image2 from '../assets/Sprint3 Image2.jpg'
import Sprint3Image from '../assets/Sprint3 Image1.jpg'
import {
  MdArrowBack,
  MdArrowForward,
  MdOutlineKeyboardBackspace,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[rgb(239,247,255)]">
      <Navbar className="font-[Poppins]" />
      <div className=" m-4">
        <Link
          to="/"
          className="flex gap-2 items-center justify-start leading-4 text-[#3B536D] hover:text-black hover:underline cursor-pointer "
        >
          <MdOutlineKeyboardBackspace /> Go back
        </Link>
      </div>
      <div className="flex justify-center p-[13px] font-[Poppins] bg-[rgb(239,247,255)] min-h-screen md:p-20">
        <div className="flex flex-col w-full md:w-[60%] h-full">
          {<div className="w-full md:p-1 flex justify-start">
            <p className=" md:pl-4 text-reg text-lg font-medium underline italic leading-6 text-left">
              {' '}
              October 12{' '}
            </p>
          </div>}
          {<div className="w-full pt-5 flex justify-start md:pt-2 mb-1 md:mb-2   text-5xl md:text-7xl ">
            <p className="md:pl-4 md:pt-2 font-light font-[Poppins] ">
              Challenges, Growth and Progress
            </p>
          </div>}
          {
            <div className="pt-8 flex justify-center items-center flex-col space-x-0  ">
            <img
              className=" aspect-video h-auto w-auto md:h-[400px] md:w-[600px]"
              src={Sprint3Image2}
              alt="Hello"
            />
            <p className="pt-2 border-b-2 border-black w-full pb-4 md:w-3/4 text-center text-sm ">
              {' '}
              Inspire Nepal Team ready for playback III{' '}
            </p>
          </div>}
          {/* Text Section */}
          {<div className="w-full mt-4 md:p-6 text-justify space-y-2 md:space-y-6 font-poppins ">
            <p>
              Over the past weeks, our team has encountered a variety of challenges
              and achievements while working on our project. We started with some difficulties,
              particularly as newcomers dealing with merge conflicts. The workshops proved immensely
              beneficial for enhancing our backend skills. Despite our substantial workload, we set
              too many tasks for the sprint, leading to unmet goals. We recognized the need for further
              understanding and potentially visiting the project location in the coming weeks.
              There were also some changes in team members responsible for presentations.
            </p>

            <p>
              We made significant progress by implementing the project's solution
              based on the designed database, applying the concepts we had learned in various
              workshops. The introduction of DevOps has been valuable in planning and tracking our
              project's progress, enhancing our professionalism in task division and documentation.
              However, we found ourselves falling short of the goals we had set for this sprint and
              acknowledge the need for more precise planning in future sprints.
            </p>
            <p>
              Despite some setbacks, this sprint has been
              more rewarding and productive than previous ones. We've made substantial headway in
              bringing our project to life. We recognize the importance of approaching tasks with
              confidence, irrespective of the final outcome. Several of us have shifted our focus
              toward independent problem-solving and learning new skills, such as JavaScript and
              TypeScript.


            </p>

            <div className=" py-2">
              <img src={Sprint3Image} alt="Entire team" />
            </div>

            <p>
              Our collective growth and
              learning journey over the past 1.5 months have been remarkable,
              and we attribute this to the support we've received from our mentors.
              We're not claiming perfection, but we acknowledge our progress. We've also gained
              valuable insights into key performance indicators (KPIs) and stakeholder mapping during
              this period. We also enjoyed our fun playback sessions and appreciated the leadership
              within the team that fosters accountability, dedication, and a commitment to both our
              individual growth and the success of the project. While we set ambitious goals, we
              recognize the need to refine our goal-setting process and ensure they are attainable
              in the future.


            </p>

            <p>
              In conclusion, these past two weeks have been a rollercoaster of challenges
              and achievements, and we emerge from this sprint more resilient, knowledgeable,
              and determined to reach new heights in our project. As we look ahead, we are excited
              about the opportunities that lie on the horizon, armed with the valuable lessons we've
              learned from our experiences and fueled by the unyielding spirit of progress and growth.
            </p>
            <p className="text-left">-Team Blood Sync</p>
          </div>}
        </div>
      </div>
      <div className="flex justify-between items-center px-6 pb-4 bg-[rgb(239,247,255)]">
        <Link
          to="/blog2"
          className="text-[#3B536D] hover:text-black hover:underline"
        >
          <MdArrowBack size={30} /> Previous Blog
        </Link>
        <Link
          to="/blog4"
          className="text-[#3B536D] hover:text-black hover:underline"
        >
          Next Blog <MdArrowForward size={30} />
        </Link>
      </div>
      <Footer className="font-[Poppins]" />
    </div>
  );
}

export default Blog;

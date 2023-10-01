import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Image1 from '../assets/1000009858.jpg';
import Image2 from '../assets/1000009866.jpg';
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
          {/* <div className="w-full md:p-1 flex justify-start">
            <p className=" md:pl-4 text-reg text-lg font-medium underline italic leading-6 text-left">
              {' '}
              September 29{' '}
            </p>
          </div> */}
          {/* <div className="w-full pt-5 flex justify-start md:pt-2 mb-1 md:mb-2   text-5xl md:text-7xl ">
            <p className="md:pl-4 md:pt-2 font-light font-[Poppins] ">
              Getting started
            </p>
          </div> */}
          {/* <div className="pt-8 flex justify-center items-center flex-col space-x-0  ">
            <img
              className=" aspect-video h-auto w-auto md:h-[400px] md:w-[600px]"
              src={Image1}
              alt="Hello"
            />
            <p className="pt-2 border-b-2 border-black w-full pb-4 md:w-3/4 text-center text-sm ">
              {' '}
              Team BloodSync: Sarovar, Samiksha, Leela and Bibek (From Left to
              right){' '}
            </p>
          </div> */}
          {/* Text Section */}
          {/* <div className="w-full mt-4 md:p-6 text-justify space-y-2 md:space-y-6 font-poppins ">
            <p>
              Our week commenced with the successful completion of last week's
              task related to GIS. Afterward, we dedicated some time to gaining
              a deeper understanding of APIs. This week was primarily focused on
              API learning, encompassing repository patterns and DTOs, which
              were effectively implemented in our API controllers. The
              implementation of repository patterns and DTOs proved to be both
              fascinating and highly beneficial, as they significantly improved
              backend efficiency and streamlined the update process.
            </p>

            <p>
              During this sprint, we were assigned to our respective teams. Due
              to the small size of our team, we had the opportunity to forge
              strong bonds and develop a profound understanding of each team
              member on a micro level. Working together towards a common goal
              brought us even closer as teammates. The collaboration within our
              team has been outstanding, with each member contributing a unique
              set of talents that enhances the overall competence of the team.
            </p>
            <p>
              Throughout our two weeks of working together as a team, we
              discovered that our similarities extend beyond just our skills –
              we share fundamental values and perspectives. This realization
              deepened our empathy when we learned about the issues related to
              blood banking and blood transfusion in rural Rukum.
            </p>
            <p>
              While we haven't had the opportunity for face-to-face interactions
              with our community partners, we dedicated ourselves to researching
              the existing problems in rural Rukum. We delved into numerous
              documents and news articles to gain insights into the region's
              topography, its people, and our community partners HDCS and CHR.
            </p>
            <p>
              During our research, we stumbled upon a news article that
              recounted a distressing incident at Chaurajhari Hospital in Rukum,
              where a doctor donated blood to a pregnant woman and then
              performed her surgery himself. This revelation deeply affected us,
              highlighting the dire situations that persist in certain parts of
              our country.
            </p>
            <p>
              However, what brought us relief was the realization that we could
              apply the skills we had acquired to address this situation.
              Knowing that we were contributing to the community in a meaningful
              way filled us with immense pride and happiness. We understood that
              our work and knowledge were making a tangible impact, positively
              affecting people's lives by solving realworld problems. This
              realization significantly boosted our motivation and dedication to
              the project.
            </p>
            <div className=" py-2">
              <img src={Image2} alt="Entire team" />
            </div>

            <p>
              At the end of the sprint, we had a playback session. Playback
              served as an opportunity for us to connect with our overseas team.
              Despite each of us being quite extroverted, we occasionally
              struggled to fully express ourselves in the English language.
              Nevertheless, we remain determined to overcome language barriers
              and other challenges as a team.
            </p>
            <p>
              Moreover, this playback session was particularly interesting
              because it allowed us to learn about the projects of teams from
              Canada and gain insight into their project vision. It was a
              delightful experience to check on their progress and share our
              own.
            </p>
            <p>
              In summary, this sprint was characterized by successful task
              completion, a deepening bond within our team, a strong commitment
              to addressing critical issues in rural Rukum, and a sense of pride
              in our ability to make a positive impact on people's lives. The
              playback session added an extra layer of excitement as we learned
              about other teams' projects and shared our own journey.
            </p>
            <p className="text-left">-Team Blood Sync</p>
          </div> */}
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

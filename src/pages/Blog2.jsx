import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SprintImage1 from '../assets/Sprint2 Image1.jpg';
import SpringImage2 from '../assets/Sprint2 Image2.jpg';
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
          <div className="w-full md:p-1 flex justify-start">
            <p className=" md:pl-4 text-reg text-lg font-medium underline italic leading-6 text-left">
              {' '}
              September 29{' '}
            </p>
          </div>
          <div className="w-full pt-5 flex justify-start md:pt-2 mb-1 md:mb-2   text-5xl md:text-7xl ">
            <p className="md:pl-4 md:pt-2 font-light font-[Poppins] ">
              Learning from Missteps and Triumphs
            </p>
          </div>
          <div className="pt-8 flex justify-center items-center flex-col space-x-0  ">
            <img
              className=" h-auto w-auto md:h-[400px] md:w-[400px]"
              src={SprintImage1}
              alt="Hello"
            />
           
          </div>
          <div className="w-full mt-4 md:p-6 text-justify space-y-2 md:space-y-6 font-poppins ">
            <p>
              In our recent sprint, we initiated our project by focusing on the
              foundational elements, primarily the database design. Initially,
              we were confident in our approach, believing that we had created a
              solid foundation for our solution. However, upon closer review, we
              realized that we had overlooked crucial aspects that were
              essential to the success of our project. Recognizing our
              oversight, we took immediate action to rectify these deficiencies.
            </p>

            <p>
              One significant realization was the importance of wireframing for
              our low-fidelity prototype. In our eagerness to make progress, we
              hastily started the design process without giving it the careful
              thought it deserved. Additionally, we were grappling with a new
              design tool that didn't align with our initial vision. As a
              result, our initial wireframe turned out to be subpar and far from
              what we had envisioned. This prompted us to reconsider our
              strategy for presenting our ideas to our community partners (CPs).
            </p>

            <p>
              Understanding that showing our initial wireframe might not present
              our project in the best light, we decided to take a different
              approach. Instead of persisting with a flawed design, we chose to
              customize a design template that would more accurately convey our
              vision to our CPs. This shift in strategy proved successful, as
              our community partners reviewed and approved of the improved
              design, reaffirming our commitment to delivering a high-quality
              solution.
            </p>
            <p>
              In the subsequent phase of our sprint, we had the privilege of
              meeting with our community partners. This meeting proved to be an
              invaluable learning experience for our team, offering insights and
              lessons that would shape our project's trajectory. One standout
              aspect of the meeting was the negotiation and communication skills
              displayed by our Nepal director, Bachhan Dai.
            </p>
            <div className=" py-2">
              <img src={SpringImage2} alt="Entire team" />
            </div>

            <p>
              Our community partners had presented a demand that slightly
              deviated from our original vision. However, Bachhan Dai handled
              the situation with finesse, maintaining a high level of
              professionalism throughout the negotiation process. He adeptly
              balanced our project's core vision with the partners' needs,
              demonstrating the importance of flexibility and adaptability in
              collaborative ventures.
            </p>
            <p>
              Furthermore, the meeting shed light on the intricacies of
              professional interactions in a business setting. We realized that
              being thoroughly prepared for meetings was paramount. This
              encompassed not only a comprehensive understanding of the project
              and its solutions but also a keen awareness of the financial
              aspects. Our clients were eager to delve into the financial
              details, emphasizing the significance of being well-versed in this
              area.
            </p>
            <p>
              In summary, this sprint was characterized by successful task
              completion, a deepening bond within our team, a strong commitment
              to addressing critical issues in rural Rukum, and a sense of pride
              in our ability to make a positive impact on people's lives. The
              playback session added an extra layer of excitement as we learned
              about other teams' projects and shared our own journey.
              <br></br>
              Ultimately, the key takeaway from our interaction with community
              partners was the vital importance of maintaining professionalism
              throughout the entire meeting process. Regardless of the
              challenges or unexpected demands that may arise, conducting
              oneself with poise, respect, and a focus on the project's core
              objectives is essential.
            </p>
            <p>
              In summary, our sprint journey has been marked by a series of
              valuable lessons. We have learned the significance of thorough
              database design, the importance of thoughtful wireframing, and the
              need for adaptability when working with community partners.
              Additionally, we've gained a deeper understanding of the
              intricacies of professional meetings, particularly in terms of
              financial discussions, and the absolute necessity of maintaining
              professionalism throughout. These lessons have not only enriched
              our project but have also expanded our horizons as a team,
              equipping us to navigate the challenges and opportunities that lie
              ahead.
            </p>
            <p className="text-left">-Team Blood Sync</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-6 pb-4 bg-[rgb(239,247,255)]">
        <Link
          to="/blog1"
          className="text-[#3B536D] hover:text-black hover:underline"
        >
          <MdArrowBack size={30} /> Previous Blog
        </Link>
        <Link
          to="/blog3"
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

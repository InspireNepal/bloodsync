import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sprint4Image1 from '../assets/Sprint4 Image1.jpg'
import Sprint4Image2 from '../assets/Sprint4 Image2.jpg'
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
                            October 27{' '}
                        </p>
                    </div>}
                    {<div className="w-full pt-5 flex justify-start md:pt-2 mb-1 md:mb-2   text-5xl md:text-7xl ">
                        <p className="md:pl-4 md:pt-2 font-light font-[Poppins] ">
                            Making a Difference in Rukum </p>
                    </div>}
                    {
                        <div className="pt-8 flex justify-center items-center flex-col space-x-0  ">
                            <img
                                className=" aspect-video h-auto w-auto md:h-[400px] md:w-[600px]"
                                src={Sprint4Image2}
                                alt="Hello"
                            />
                            <p className="pt-2 border-b-2 border-black w-full pb-4 md:w-3/4 text-center text-sm ">
                                {' '}
                                Meeting with Hospital Medical Administrator{' '}
                            </p>
                        </div>}
                    {/* Text Section */}
                    {<div className="w-full mt-4 md:p-6 text-justify space-y-2 md:space-y-6 font-poppins ">
                        <p>
                            Our team was eagerly anticipating the long-awaited opportunity to connect with
                            our communitypartner this sprint. Previous attempts to establish contact had
                            been hindered by variouscircumstances, but this week held the promise of a
                            breakthrough. Our anticipation culminated in a meaningful meeting with the
                            Administrator of Chaurajhari Hospital, a moment that filled
                            us with genuine delight.
                        </p>

                        <p>
                            During our meeting, we were profoundly moved by the realization of just how essential
                            our project is for the people of Rukum and the neighboring districts. The hospital
                            administrator graciously led us on a tour of the hospital and the surrounding
                            community,sharing invaluable insights along the way. Rukum, having endured the
                            profound scars of a civil war that our country experienced a few decades ago,
                            bears the heavy burden of both physical and emotional wounds. It is heartrending
                            to acknowledge that nearly every individual
                            in Rukum carries these enduring imprints of past suffering.
                        </p>
                        <p>
                            Witnessing the unwavering commitment of our community partner only deepened our 
                            respect and admiration for them. Moreover, we were introduced to another harsh reality of the Rukum 
                            community. It is a rural and economically disadvantaged area where superstitions,
                             illiteracy, lack of awareness, and harmful practices are prevalent. Early marriages 
                             are common, leading to early pregnancies and complicated
                            deliveries. The community also clings to superstitious beliefs, and their 
                            understanding of public health is limited. They often mistrust modern medical
                             practices, and this distrust even extends to
                            blood donation. Many residents believe that donating blood is life-threatening, further complicating
                            the situation. It is challenging to maintain a database of potential blood donors .
                        </p>


                        <div className=" py-2">
                            <img src={Sprint4Image1} alt="Entire team" />
                        </div>
                        <p>
                            Because of this shortage of blood supply and mechanism to trace willing donors, the hospital sometimes has to
                            transfer patients elsewhere for surgeries. Unfortunately, Rukum frequently makes headlines for this
                            dire situation. Furthermore, we were deeply moved by a heart-wrenching revelation that in Rukum, a
                            few decades ago, around 400 infants would tragically be buried annually on a riverbank. These infants
                            lost their lives due to a lack of public health awareness, sometimes because mothers couldn't access
                            blood in time to save them, and occasionally due to severe postpartum bleeding. This distressing
                            reality underscored the urgent need for our project and its potential to make a significant impact in
                            this community. After gaining a deeper understanding of the community's needs from the Hospital
                            Administrator, we recognized the importance of making slight adjustments to our project requirements.
                            We realized that it was essential to focus on addressing the challenges surrounding pregnancy.
                            As a result, we have customized our solution to specifically benefit pregnant women and cater
                            to their unique needs.
                        </p>
                        <p>
                            Despite these sobering challenges, we found inspiration in the knowledge that our project would make
                            a significant impact on the community. Throughout the remainder of the sprint, we were determined
                            and highly motivated to work on the project, focusing on developing APIs and frontend elements.
                            The newfound understanding of the value and significance of our work for the people and the community
                            fueled our determination.
                        </p>
                        <p>
                            We are now thoroughly satisfied with the purpose of our project and the positive change it will bring to the community.
                        </p>


                        <p className="text-left">-Team Blood Sync</p>
                    </div>}
                </div>
            </div>
            <div className="flex justify-between items-center px-6 pb-4 bg-[rgb(239,247,255)]">
                <Link
                    to="/blog3"
                    className="text-[#3B536D] hover:text-black hover:underline"
                >
                    <MdArrowBack size={30} /> Previous Blog
                </Link>
                <Link
                    to="/blog5"
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

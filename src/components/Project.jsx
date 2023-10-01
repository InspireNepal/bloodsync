import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import Samiksha from '../assets/Samikxya.jpg';
import Leela from '../assets/leela.jpg';
import Sarovar from '../assets/Sarovar.jpg';
import Bibek from '../assets/Bibek.jpg';
import Group1 from '../assets/Group1.jpg';
import Image1 from '../assets/1000009858.jpg';
import { Link } from 'react-router-dom';
import TeamSlider from './TeamSlider';

const Project = () => {
  const teamMembers = [
    {
      name: 'Bibek Adhikari',
      image: Bibek,
      bio: 'Bibek is a recent graduate of Pashchimanchal Campus, Institute of Engineering, Tribhuvan University, specializing in Electronics, Communication, and Information Engineering. He possesses coding experience in frontend web development and a strong desire to explore emerging technologies. Bibek has a keen interest in data science and analytics, as well as a knack for designing IoT-based devices. In his leisure time, he contemplates reading books but often opts for watching movies due to a lack of motivation for extended reading sessions.',
    },
    {
      name: 'Leela Saud',
      image: Leela,
      bio: 'Leela is a final year student of Bachelor in Computer Science and Information Technology (B.SC.CSIT) studying in Padmakanya Multiple Campus affiliated to Tribhuvan University. Besides programming, she is also passionate about data analytics, keen-observation and in-depth-research. During her leisure hours, she finds solace in spontaneous writing, letting her thoughts flow freely without constraints. She is also an outdoor enthusiast who often goes hiking and exploring new natural places.',
    },
    {
      name: 'Samiksha Khadka',
      image: Samiksha,
      bio: 'Samiksha Khadka hails from the rural region of Okhaldhunga. She is currently a third-year undergraduate student, majoring in Computer Science at Padma Kanya Multiple Campus. Apart from her proficiency in communication, she excels at listening, therfore you will often find her with the earphones on, enjoying music. Beyond her love for technology, Samiksha holds a deep fascination for policy-making. She is known for infusing Nepali jargon into her casual conversations, adding a unique and local flavor to her interactions.',
    },
    {
      name: 'Sarovar Bhandari',
      image: Sarovar,
      bio: 'Sarovar is a 3rd year computer science undergrad student studying in Tribhuvan university. Sarovar aspires to create software that is genuinely helpful for everyone. When he is not coding or watching football, you will find him playing a game of chess or exploring nature.',
    },
  ];

  const blogs = [
    {
      title: 'Getting Started...',
      image: Image1,
      text: "Our week commenced with the successful completion of last week's task related to GIS. Afterward, we dedicated some time to gaining a deeper understanding of APIs. This week was primarily focused on API learning, encompassing repository patterns and DTOs, which were effectively implemented in",
    },
  ];
  return (
    <div>
      <div className="p-5 md:p-20">
        <div className="m-4">
          <a
            href="https://inspireuvic.org/fall2023"
            className="flex gap-2 items-center justify-start leading-4 text-[#3B536D] hover:text-black hover:underline cursor-pointer "
          >
            <MdOutlineKeyboardBackspace /> PROJECTS (FALL 2023)
          </a>
        </div>
        <p className="text-2xl font-medium leading-6 text-[#3B536D] text-center m-4">
          Fall 2023
        </p>
        <div className="flex flex-col gap-8 items-center justify-evenly w-full h-full border-y-2 border-[#3B536D] p-8 m-2">
          <p className="font-bold text-5xl leading-10 text-[#3B536D]">
            BloodSync
          </p>
          <p className="font-bold text-3xl leading-8 text-[#475769]">
            Live blood donation requests and Inventory Management
          </p>
        </div>
        <div className="p-4 text-[#3B536D] md:leading-10 tracking-normal md:text-2xl text-justify">
          Nepal's low per capita income leaves over 70% of its population unable
          to access private healthcare. Healthcare resources are heavily skewed
          towards urban areas, leaving rural regions like Rukum with limited
          access. Chaurjahari Hospital Rukum (CHR), operated by Human
          Development and Community Services (HDCS), grapples with the challenge
          of reshaping local attitudes towards healthcare. CHR's mission extends
          beyond treatment, aiming to empower residents to proactively seek
          essential care. In Nepal, blood banking presents a significant
          obstacle, especially in rural areas like Rukum, which lacks a
          dedicated transfusion center, placing immense pressure on patients and
          their families to find donors. This burden deeply impacts livelihoods.
          To address this critical issue, the BloodSync team from Inspire Nepal
          plans to harness Information Technology.
        </div>
      </div>
      <div className=" w-full h-fit bg-[#3B536D]  p-5 md:p-20 flex flex-col items-center">
        <p className="text-3xl leading-8 font-semibold text-white text-center">
          {' '}
          OUR STORY{' '}
        </p>
        <p className="p-4 text-white md:leading-10 tracking-normal md:text-2xl text-justify">
          Human Development and Community Services (HDCS) is a NGO actively
          engaged in various sectors, including health, education, community
          development, and disaster management. As part of its health
          initiative, HDCS is currently collaborating with three hospitals in
          remote areas, one of which is Chaurjahari Hospital Rukum (CHR). CHR is
          strategically located at the convergence of three districts—Rukum,
          Jajarkot, and Salyan—in the mid-western region of Nepal. The primary
          mission of CHR is to provide high-quality and affordable medical
          services to the underprivileged and marginalized communities residing
          in Rukum and the neighboring districts. The hospital not only focuses
          on healthcare provision but also actively engages in community health
          education and endeavors to drive positive social changes. CHR aims to
          deliver efficient healthcare services at minimal costs to residents of
          remote areas, making it one of the most impactful projects in Rukum.
          However, one pressing issue faced by both the hospital and the entire
          Rukum district is the challenge of blood banking. This issue compels
          patients and their families to undergo desperate searches for blood
          donors during critical moments of need.
        </p>

        <img
          src={Group1}
          alt="group members"
          width="60%"
          className="flex items-center justify-center"
        />

        <p className="p-4 text-white md:leading-10 tracking-wi md:text-2xl text-justify">
          In response, our dedicated team,{' '}
          <span className="font-medium text-2xl italic">BloodSync</span>, is
          committed to crafting a technological solution that bridges the divide
          between blood donors and patients. Our primary goal is to devise a
          mechanism that empowers the hospital to efficiently and effectively
          address blood-related issues. Our target audience includes patients in
          remote and underserved areas needing blood transfusions, local
          healthcare providers, Chaurjahari Hospital Rukum (CHR) staff requiring
          timely blood access, and potential blood donors. Our project aims to
          enhance the healthcare system in the region, ensuring quick access to
          life-saving care.
        </p>
      </div>
      <div className="flex flex-col gap-4 m-5 md:mt-20 text-center p-5 cursor-pointer">
        <p className="text-5xl leading-10 tracking-wide text-[#3B536D]">BLOG</p>
        <div className="flex flex-col justify-center gap-8">
          {blogs.map((oneBlog) => (
            <div className=" w-full p-2 md:px-10 md:py-5 my-5 flex flex-col gap-2 justify-start items-start border-2 border-[#3B536D] rounded-lg">
              <div className="flex flex-col md:flex-row w-full gap-10">
                <div className="">
                  <Link to="blog1">
                    <img
                      src={oneBlog.image}
                      alt="group preparing for Playback I"
                      width="1000px"
                    />
                  </Link>
                </div>
                <Link to="blog1">
                  <div className="flex flex-col gap-4 md:gap-10 md:p-5">
                    <p className="text-3xl md:text-5xl font-medium md:leading-6 text-left tracking-wide text-[#3B536D]">
                      {oneBlog.title}
                    </p>

                    <div className="w-full text-left">
                      {oneBlog.text}{' '}
                      <span className="text-blue-500">Read More..</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 m-5 text-center p-5 md:p-20">
        <p className="text-5xl leading-10 tracking-wide text-[#3B536D]">TEAM</p>
        <div className=" flex flex-wrap justify-center gap-20">
          {teamMembers.map((oneMember) => (
            <div key={oneMember.name} className="relative w-80 m-6">
              <img
                src={oneMember.image}
                alt="teamMember"
                className="rounded-3xl"
              />
              <div className=" absolute  -right-10 md:-right-16 -bottom-6 bg-blue-300 flex items-start justify-start h-12 md:h-24 md:w-72 px-10 py-4">
                <p className=" text-lg leading-6">{oneMember.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TeamSlider teamMembers={teamMembers} />
    </div>
  );
};

export default Project;

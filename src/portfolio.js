
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Djamaa Abdelmalek",
  title: "Hi all, I'm Abdelmalek",
  subTitle: emoji("A passionate Software Developer & a Deep learning enthusiast 🚀 having an experience with Mobile development using Android Native ( Kotlin )."),
  resumeLink: "https://drive.google.com/file/d/1_pMRNbhCXvkZqT2Kdc83prSl7ww0vK2U/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/abdelmalek0",
  linkedin: "https://www.linkedin.com/in/abdelmalek-djamaa-67000a135/",
  gmail: "ga_djamaa@esi.dz",
  stackoverflow: "https://stackoverflow.com/users/9537554/a-djamaa",
  twitter:"https://twitter.com/Abdelma64122610"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    emoji("⚡ Mobile Applications"),
    emoji("⚡ Deep learning and Machine learning models"),
    emoji("⚡ Desktop Applications"),
    
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS5",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "ESI - Higher National School of Computer Science",
      logo: require("./assets/images/esi.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - July 2021",
      desc: "Took courses about Software Engineering, Computer Architecture, ...",
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },{
      Stack: "Databases",
      progressPercentage: "60%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile developer - Intern",
      company: "CTTP",
      companylogo: require("./assets/images/cttp_orig.jpg"),
      date: "Sep 2019 – Oct 2019",
      desc: "Developed a small mobile app that retrieves Oracle DB tables and convert them into a csv format.",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "abdelmalek0", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I WORKED ON",
  projects: [
    {
      image: require("./assets/images/geomob.png"),
      link: "https://github.com/abdelmalek0/GeoMob"
    },
    {
      image: require("./assets/images/adhan.png"),
      link: "https://github.com/abdelmalek0/Adhan"
    },
    {
      image: require("./assets/images/corona.png"),
      link: "https://gitlab.com/coronawatch/coronawatch_android"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "deeplearning.ai",
      subtitle: "Neural Networks and Deep Learning.",
      image: require("./assets/images/ai.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1zQjau1IaGs-XUV4kwIJrJZke_FUnr_Cg/view?usp=sharing" },
      ]
    },
    {
      title: "deeplearning.ai",
      subtitle: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization.",
      image: require("./assets/images/ai.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1ZfATCe3ToU5Pt_cAt6ngHyVRUMH2iN3L/view?usp=sharing" },
      ]
    },
  ]
};

// Blogs Section


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+213-556784495",
  email_address: "ga_djamaa@esi.dz"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo , twitterDetails};

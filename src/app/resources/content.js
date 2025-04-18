import { InlineCode } from "@/once-ui/components";
import { Button } from "@/once-ui/components"; // ✅ Needed

const person = {
  firstName: "Deniz",
  lastName: "Bayrak",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Electric And Electronic Engineer",
  avatar: "/deniz.JPG", // Path to your avatar image
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I post about new projects I've been working on or ones that are complete.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bayrakdn",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/deniz-bayrak-1912872b9/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "bayrakdn@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Electric And Electronic Engineer & AI Developer</>,
  subline: (
    <>
      <p>
  I’m Deniz, an Electrical and Electronics Engineering student passionate about software and AI development.<br />
  In my spare time, I work on several projects including AVT (Alternative Vehicle) to compete with other universities in Turkey.<br />
</p>

    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm an Istanbul-based electrical and electronics engineering student with a strong passion for intelligent systems and sustainable mobility. Currently, I'm part of the AVT university team, where we're building an electric vehicle to compete in the TÜBİTAK efficiency challenge.

        <br />
        <br />

        My responsibilities include hardware design and battery system development, and I also contribute to the software and AI side — especially in embedded systems and intelligent control. I enjoy working across disciplines to solve real-world engineering problems and love creating systems where electronics and software come together in innovative ways.

        <br />
        <br />

        <Button
          as="a"
          href="/deniz-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          size="m"
          variant="primary"
          arrowIcon
        >
          📄 Download My CV
        </Button>
      </>
    ),
  },                          
  work: {
    display: true,
    title: "Team & Project Experience",
    experiences: [
      {
        company: "AVT - Alternative Vehicles Team",
        timeframe: "2025 - Present",
        role: "Hardware, Battery Systems and AI Engineer | Software Contributor",
        achievements: [
          <>
            Working on the development of an electric vehicle for the TÜBİTAK Efficiency Challenge.
          </>,
          <>
            Responsible for battery system design, high-voltage safety, and embedded system integration.
          </>,
          <>
            Also working on the software and AI department on intelligent control and telemetry systems.
          </>,
        ],
        images: [],
      },
    ],
  }, 
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bahçeşehir University",
        description: <>Electric & Electronic Engineer.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Embedded Systems",
        description: (
          <>
            Experienced in working with microcontrollers (STM32, Arduino) for hardware control,
            data acquisition, and real-time system management.
          </>
        ),
        images: [],
      },
      {
        title: "Battery Systems & High Voltage Safety",
        description: (
          <>
            Skilled in battery management, system design, and safety protocols for electric vehicle development.
          </>
        ),
        images: [],
      },
      {
        title: "MATLAB & Simulink",
        description: (
          <>
            Used for modeling, simulation, and analysis of control systems, power electronics, and battery behavior.
          </>
        ),
        images: [],
      },
      {
        title: "Python & AI",
        description: (
          <>
            Applied Python in embedded AI projects and intelligent vehicle functions. Familiar with data processing,
            control logic, and machine learning basics.
          </>
        ),
        images: [],
      },
      {
        title: "Swift & Apple Vision Pro",
        description: (
          <>
            Developed an immersive app for Apple Vision Pro using Swift and RealityKit,
            combining spatial interfaces with Apple’s visionOS framework.
          </>
        ),
        images: [],
      },
      {
        title: "C/C++",
        description: (
          <>
            Used in embedded development for low-level hardware communication and logic control.
          </>
        ),
        images: [],
      },
    ],
  },
};
  

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

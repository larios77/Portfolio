import {
    web,
    html,
    css,
    bootstrap,
    javascript,
    threejs,
    reactjs,
    styled,
    git,
    figma,
    wordpress,
    shopify,
    photoshop,
    google,
    aly,
    promarketing,
    maven,
    flagship,
    telo,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "Experiencia",
      title: "Experience",
    },
    {
      id: "Sobre mi",
      title: "About",
    },
    {
      id: "Contactame",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [  
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Three Js",
      icon: threejs,
    },
    {
      name: "React Js",
      icon: reactjs,
    },
    {
      name: "Styled Components",
      icon: styled,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "Shopify",
      icon: shopify,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Google Search Console",
      icon: google,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Web Developer",
      company_name: "AlySystem",
      icon: aly,
      iconBg: "#383E56",
      date: "March 2021 - August 2021",
      points: [
        "I learned to use Figma to create screens for an accounting module.",
        "I learned more in javascript since I knew the basics and to get into React I needed to improve in javascript that was my goal before switching to React js.",
        "I used React js and Sass as Frontend technologies to carry out the layout that I had done in Figma."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Telo Group",
      icon: telo,
      iconBg: "#E6DEDD",
      date: "February 2022 - June 2022",
      points: [
        "I was working on a landing page related to the world of NFTs and Smart Contracts.",
        "I used technologies like React js, css more on the animation side.",
        "I implemented a language switching feature using i18n.",
        "The page itself was tested on different browsers such as Edge, Chrome, Firefox and Safari"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Pro marketing Innovations",
      icon: promarketing,
      iconBg: "#383E56",
      date: "September 2022 - June 2024",
      points: [
        "Among the technologies I used are: Html, Css, Javascript, Jquery, Php and Photoshop for certain image modifications.",
        "I did SEO for the pages, lazy loading of images, compression of images and files with htaccess among other techniques to improve the performance of a website.",
        "I manage hosting and domains for each website. The hosting providers I use are Bluehost and GoDaddy for deploying each website..",
        "Use the Google Search Console tool to get your website indexed by Google.",
        "Create Google My Business listings to give businesses a presence through Google Maps.",
        "I also created content for English websites and manage clients' social media accounts using Meta Business Suite and Metricool as tools."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Maven Marketing",
      icon: maven,
      iconBg: "#383E56",
      date: "June 2024 - August 2025",
      points: [
        "I created websites with PHP and WordPress, and I used a WordPress website builder like Elementor.",
        "Management of hosting such as Hostgator, Godaddy, Bluehost, etc.",
        "Domain management, DNS, domain transfers to other providers, creation of subdomains and corporate emails",
        "Landing page creation for marketing campaigns"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Flagship Studio",
      icon: flagship,
      iconBg: "#383E56",
      date: "August 2025 - Present.",
      points: [
        "Website creation, with HTML, PHP, WordPress. With WordPress I've used Elementor, Brizy, WP Bakery and a little bit of Divi.",
        "We provide monthly maintenance for WordPress sites, keeping plugins and themes updated, updating the PHP version if necessary, and correcting any errors on the site.",
        "Hosting management, domain, such as Hostgator, Godaddy, Namecheap, Wix, Hostinger",
        "Creation of blog posts for clients, and the company website",
        "Sometimes I have to talk to clients to better understand the requirements for a new project; the whole environment is in English: meetings, chats, tasks"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
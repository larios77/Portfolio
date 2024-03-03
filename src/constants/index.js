import {
    web,
    html,
    css,
    bootstrap,
    sass,
    javascript,
    jquery,
    threejs,
    reactjs,
    styled,
    git,
    figma,
    postgress,
    photoshop,
    google,
    aly,
    promarketing,
    telo,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "Experiencia",
      title: "Experiencia",
    },
    {
      id: "Sobre mi",
      title: "Sobre mí",
    },
    {
      id: "Contactame",
      title: "Contáctame",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
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
      name: "Sass",
      icon: sass,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Jquery",
      icon: jquery,
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
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "PostgreSQL",
      icon: postgress,
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
      date: "Marzo 2021 - Agosto 2021",
      points: [
        "Aprendí a utilizar Figma para crear pantallas para un módulo de contabilidad.",
        "Aprendí más en javascript ya que conocía lo básico y para entrar con React necesitaba mejorar en Javascript esa fue mi meta antes de pasarme a React js.",
        "Utilicé React js y Sass como tecnologías Frontend para realizar la maquetación que habia hecho en Figma."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Telo Group",
      icon: telo,
      iconBg: "#E6DEDD",
      date: "Febrero 2022 - Junio 2022",
      points: [
        "Estuve trabajando en una Landing page relacionada el mundo del NFT y Smart Contracts.",
        "Utilicé tecnologías como React js, css más en el lado de las animaciones.",
        "Realicé un Cambio de idioma para ello utilicé i18n.",
        "La página en sí fue testeada en diferentes navegadores como Edge, Chrome, Firefox y Safari"
      ],
    },
    {
      title: "Website Developer",
      company_name: "Pro marketing Innovations",
      icon: promarketing,
      iconBg: "#383E56",
      date: "Septiembre 2022 - Actualidad",
      points: [
        "Desarrollo websites para clientes de California y Pensilvania.",
        "Entre las tecnologías que utilizo son: Html, Css, Javascript, Jquery, Php y Photoshop para ciertas modificaciones en imágenes.",
        "Uitlizo SEO para las páginas, carga diferida de imágenes, compresion de imagenes y archivos con htaccess entre otras técnicas para mejorar el rendimiento de un sitio web.",
        "Manejo hosting y dominio para cada sitio web entre los hosting que manejo son Bluehost y Godaddy para hacer el deploy de cada sitio web.",
        "Utilizo la herramienta Google Search Console para indexar el sitio web a Google.",
        "Creo Google my Business para dar presencia a los negocios por medio de Google maps.",
        "También creo el contenido para los sitios web en inglés al igual que llevo el manejo de las redes sociales de los clientes como herramienta utilizo Meta Business Suite y Metricool."
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
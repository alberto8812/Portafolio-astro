import type { PageInterface, Proyects, SocialInterface, Technologies } from "../entities/social.interface";

export const social: SocialInterface[] = [
  {
    logo: "bx bxl-github",
  },
  {
    logo: "bx bxl-linkedin",
  },
];


export const info:PageInterface[] =[
  
    {text:'About'},
    {text:'Projects',}
  
]


export const technologies:Technologies[]=[
  {
    text:'React',
    logo:'bx bxl-react',

  },
  {
    text:'Typescript',
    logo:'bx bxl-typescript',

  },
  {
    text:'Javascript',
    logo:'bx bxl-javascript',

  },
  {
    text:'Docker',
    logo:'bx bxl-docker',

  },
  {
    text:'Postgresql',
    logo:'bx bxl-postgresql',

  },

  {
    text:'Git',
    logo:'bx bxl-git',

  },
  {
    text:'GitHub',
    logo:'bx bxl-github',

  },
  {
    text:'Nodejs',
    logo:'bx bxl-nodejs',
    
  },
  {
    text:'Html5',
    logo:'bx bxl-html5',

  },
  {
    text:'CSS',
    logo:'bx bxl-css3',
    
  },
  {
    text:'Tailwind',
    logo:'bx bxl-tailwind-css',
    
  }
]

export const proyects:Proyects[]=[

  {
    title:'market-place',
    description:' At Online Store, you will find a wide selection of products for the whole family. From the latest fashion trends to the hottest electronic devices, and the most fun toys for the little ones, we have it all',
    image:'Marketplace',
    color:'#121234',

  },
  {
    title:'Game page',
    description:
    'The PI is themed around video games, where the user can  Sort video games alphabetically,Sort them by genre,Sort them by platform,Filter them by source type and rating,Search for a video game by entering its name in a search bar,Click on the cards to see their details and image',
    image:'game',
    color:'#121234',

  }
]


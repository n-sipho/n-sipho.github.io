// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'n-sipho', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['n-sipho/load-shedding-api', 'n-sipho/websocket-server'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Siphosenkosi Nkosi',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'siphosenkosi-nkosi-9a7018223',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '0655722479',
    email: 'sibusisonkosi0897@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Python',
    'Golang(Go)',
    'Java',
    'React.js',
    'Node.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Esmart',
      position: 'Freelance Developer',
      from: 'August 2021',
      to: 'December 2021',
      companyLink: '#',
    },
    {
      company: 'Codex Academy',
      position: 'Technical Mentor',
      from: 'October 2021',
      to: 'October 2024',
      companyLink: 'https://www.projectcodex.co/',
    },
  ],
  certifications: [
    {
      name: 'Python (Basic)',
      body: 'It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes',
      year: 'December 2022',
      link: 'https://www.hackerrank.com/certificates/144ede03e4bb',
    },
    {
      name: 'JavaScript (Basic)',
      body: 'It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.',
      year: 'December 2022',
      link: 'https://www.hackerrank.com/certificates/d16626908f3d',
    },
    {
      name: 'Node (Basic)',
      body: 'It covers topics like Package and Modules Management, Callbacks, Event Loop, Event Emitter, Buffers, Streams and File Systems',
      year: 'December 2022',
      link: 'https://www.hackerrank.com/certificates/3b2c41fc970d',
    },
    {
      name: 'React (Basic)',
      body: 'React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.',
      year: 'December 2022',
      link: 'https://www.hackerrank.com/certificates/43a26fa76e76',
    },
    {
      name: 'Rest API (Intermediate)',
      body: 'It covers topics like getting data from an API and process using parameters or paging.',
      year: 'January 2023',
      link: 'https://www.hackerrank.com/certificates/8a63c3aeaa8a',
    },
  ],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

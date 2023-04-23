const hackathonBanner = '/Assets/hackathonBanner.png';
const hackathonLogo = '/Assets/hackthon_branco.png';

// Camping
const camping1 = '/Assets/Camping/camping_1.jpg';

// Prizes
// const firstPrize = '/Assets/prizes/mouse.png';
// const secondPrize = '/Assets/prizes/cafeteira.png';
// const thirdPrize = '/Assets/prizes/teclado.png';
// const fourthPrize = '/Assets/prizes/headset.png';
// const fifthPrize = '/Assets/prizes/fone.png';
// const sixthPrize = '/Assets/prizes/mouse_pad.jpg';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

const gdgjf = '/Assets/sponsorsLogos/gdgjf.png';
const pjf = '/Assets/sponsorsLogos/pjf.png';
const zero40 = '/Assets/sponsorsLogos/zero40.png';
const critt = '/Assets/sponsorsLogos/critt.jpeg';
const sebrae = '/Assets/sponsorsLogos/sebrae.png';

const lowCode = '/Assets/low_code.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  BANNER: hackathonBanner,
  TITLE: '',
  Typed_effect: [
    '12 hours of creativity',
    'A Website, App or Game',
    'Attend Workshops',
    'Win Prizes'
    /*'24 horas de tecnologia',
    '24 horas de inovação'*/
  ],
  LONG_DESCRIPTION: (
    <>
       Santa clara county&apos;s all girls hackathon! 12 hours where students create technological solutions to problems in their communities{' '}
      <a
        className="lime-link"
        href="https://hackathon-inovacao-social.notion.site/85b8d765f1de4293946b0a0a54f73300?v=332836713aad4d1fa131034ba89fa342"
        target="_blank"
        rel="noreferrer"
      >
        May 20th and May 21st, 2023
      </a>{' '}
      Calabasas library, San Jose, CA
    </>
  ),
  SHORT_DESCRIPTION: 'Register',
  ACTION_BTN: 'https://docs.google.com/forms/d/e/1FAIpQLSf1DEbubNqh09iQRWj_kjQV6Eu-UReVOi6SZOOFJeGbebHlZQ/viewform?pli=1',
  LOGO: hackathonLogo
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/superpositionlhs/?hl=en',
  //discord: 'https://discord.com/invite/8XJSzmtWPp',
   linkedin: 'https://www.linkedin.com/company/supernova/',
  //twitter: 'https://twitter.com/HacksLimbo',
  //devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:supernova.lhs@gmail.com',
  mail: 'supernova.lhs@gmail.com'
};

const MIDDLE_SECTION = {
  BANNER: hackathonBanner,
  TITLE: 'Tentative Schedule',
  LONG_DESCRIPTION: (
  ' '
  ),
  COLLAPSE_TITLE_PARAGRAPHS: [
    'This hackathon is open to any high school or middle school student who identifies as female or non-binary. We welcome students of all levels, which is why we hold workshops on technical, business, and design topics to help you create the best possible project. We also have a lot of fun activities planned throughout the event along with great speakers and panel dicussions!'
  ],

  AGENDA_TITLE: 'FAQ',
  AGENDA: [
    {
      TITLE: 'How can I help out with Supernova Lynbrook Hackathon?',
      DESCRIPTION: 'Supernova Lynbrook is always looking for judges, sponsors, and partners! Please reach out to us at ch.lynbrookhs@superposition.tech or through our hackathon slack at TBD'
    },
    {
      TITLE: 'Who can attend?',
      DESCRIPTION: 'We welcome any high school or middle school student who identifies as female or non-binary'
    },
    {
      TITLE: 'When and Where is Supernova Lynbrook Hackathon happening?',
      DESCRIPTION: 'Supernova Lynbrook happens on the weekend May 19th - May 20th, 2023 at Calabazas libray'
    },
    {
      TITLE: 'Where can I contact organizers?',
      DESCRIPTION: 'You can contact anyone in our team through our hackathon slack at or through our team email supernova.lhs@gmail.com'
    },
    {
      TITLE: 'What do I bring?',
      DESCRIPTION: 'An idea, and enthusiasm is all thats needed! If you have one, we recommend bringing your laptop. We will be providing food during the event.'
    },
    {
      TITLE: 'What if I dont have a team or idea?',
      DESCRIPTION: 'Supernova Lynbrook Hackathon will have workshops and team building time/activities where youll have the chance to come up with an idea or make a team.'
    }
  ],
  AGENDA_FOOTER: '',
  LOGO: hackathonLogo
};


const CAMPING_PARTY_SECTION = {
  img: camping1,
  LONG_DESCRIPTION:
    'Supernova Lynbrook Hackathon is a 12-hour hackathon where students use technology to create solutions to problems that their local communities face. A hackathon is a place where students come together and use technology to solve problems and win prizes!',
  SHORT_DESCRIPTION:
    'Supernova Lynbrook Hackathon is a place where students with almost no experience in technology can come to learn and create technological solutions to real world problems. You’ll walk away with new technical, design and business skills, a project to brag about, and maybe even a prize!'
};

const LOW_CODE_SECTION = {
  TITLE: 'Schedule',
  SRC: lowCode,
  DESCRIPTION: (
    <>
{' '}
    </>
  )
};

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsors = [
  [
    {
      src: pjf,
      name: 'Bayco',
      link: 'https://www.pjf.mg.gov.br/'
    },
    {src: gdgjf, name: 'GDGJF', link: 'https://gdgjf.github.io/'},
    {src: zero40, name: 'Zero40', link: 'https://zero40.com.br/'}
  ],
  [
    {
      src: critt,
      name: 'Hack Club',
      link: 'https://www2.ufjf.br/critt/'
    },
    {
      src: sebrae,
      name: 'Sebrae',
      link: 'https://sebrae.com.br/sites/PortalSebrae/ufs/mg?codUf=14'
    }
  ]
];

const MENTORS_SECTION = {
  TITLE: 'Team',
  DESCRIPTION:
    '',
  MENTOR_ACTION: {
    PRE: ' ',
    TEXT: ' ',
    LINK: 'https://forms.gle/'
  },
  SUPPORTERS_DESCRIPTION:
    '',
  VOLUNTEER_ACTION: {
    TEXT: ' ',
    LINK: 'https://forms.gle/8yGjTd88aSv4dp5C6'
  },
  MENTORS: [
    {
      NAME: 'Sanchitha Dinesh',
      SRC: '/Assets/People/sanch.png',
      DESCRIPTION: 'Founder and Lead',
      COMPANY: '',
      LINKEDIN: 'https://www.linkedin.com/in/sanchitha-dinesh/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Mihika Rajadnya',
      SRC: '/Assets/People/mihi.png',
      DESCRIPTION: 'Marketing Lead',
      COMPANY: '',
      LINKEDIN: 'https://www.linkedin.com/in/mihika-r-bb9129260/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Saanvi Gireesh',
      SRC: '/Assets/People/saan.png',
      DESCRIPTION: 'Operations Lead',
      COMPANY: '',
      LINKEDIN: 'https://www.linkedin.com/in/saanvi-g-aba415263/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Srushti Chaudhari',
      SRC: '/Assets/People/avatar.png',
      DESCRIPTION: 'Outreach',
      COMPANY: '',
      LINKEDIN: 'https://www.linkedin.com/in/srushti-c-288359259/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Deeksha',
      SRC: '/Assets/People/avatar.png',
      DESCRIPTION: 'Sponsorship',
      COMPANY: '',
      LINKEDIN: '',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Aishani Chikkareddy',
      SRC: '/Assets/People/avatar.png',
      DESCRIPTION: 'Sponsorship',
      COMPANY: '',
      LINKEDIN: '',
      GITHUB: '',
      INSTAGRAM: ''
    }
  ]
}

  const PRIZES_SECTION = {
    TITLE: 'Prizes',
    LONG_DESCRIPTION:
      '',
    SHORT_DESCRIPTION:
      '',
    IMGS: [
     
    ]
  };

  /*OTHER_MENTORS: {
    TITLE: 'Mentores Desenvolvedores',
    DESCRIPTION:
      'Quando se trata de código, conte com alguns dos melhores devs da cidade',
    MENTORS: [
      {
        NAME: 'Leandro Simões',
        SRC: '/Assets/People/leandro.jpeg',
        DESCRIPTION: 'Professor and Software Developer',
        COMPANY: 'Driven Education',
        LINKEDIN: 'https://www.linkedin.com/in/lesimoess/',
        GITHUB: '',
        INSTAGRAM: ''
      },
      {
        NAME: 'Lesley Andreza',
        SRC: '/Assets/People/lesley.jpeg',
        DESCRIPTION: 'Desenvolvedor Javascript',
        COMPANY: 'ProDoctor Software S/A',
        LINKEDIN: 'https://www.linkedin.com/in/lesley-andreza-a05b89bb/',
        GITHUB: '',
        INSTAGRAM: ''
      },
      {
        NAME: 'Isabela Santos',
        SRC: '/Assets/People/isabela.jpeg',
        DESCRIPTION: 'Desenvolvedora front-end',
        COMPANY: 'Globo',
        LINKEDIN: 'https://www.linkedin.com/in/isabela-santos-2b4058150/',
        GITHUB: '',
        INSTAGRAM: ''
      },
      {
        NAME: 'Patrick Barbosa',
        SRC: '/Assets/People/patrick.jpeg',
        DESCRIPTION: 'Tech Lead',
        COMPANY: 'Flash',
        LINKEDIN: 'https://www.linkedin.com/in/patrick-barbosa-16b92616a/',
        GITHUB: '',
        INSTAGRAM: ''
      }
    ]
  },
  PARTNERS: [
    {
      NAME: 'Carlos Alexandre',
      SRC: '/Assets/People/carlos_alexandre.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/carlosalexandre94/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Douglas Novato',
      SRC: '/Assets/People/douglas.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/douglasabnovato/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Vinicius Carlos',
      SRC: '/Assets/People/vinicius.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/vinicius-carlos/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Giordano Bruno',
      SRC: '/Assets/People/giordano.jpeg',
      LINKEDIN:
        'https://www.linkedin.com/in/giordano-bruno-da-rosa-vieira-88699614/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Ramon Xavier',
      SRC: '/Assets/People/ramon.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/ramonxavier/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Eduardo Alexandre',
      SRC: '/Assets/People/eduardo.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/eduardotecnologo/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Luiz Filipe',
      SRC: '/Assets/People/luiz.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/luiz-filipe-4aa07b163/',
      GITHUB: '',
      INSTAGRAM: ''
    }
  ]
};*/

export {
  TOP_SECTION,
  CAMPING_PARTY_SECTION,
  LOW_CODE_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  sponsors,
  MENTORS_SECTION,
  PRIZES_SECTION
};

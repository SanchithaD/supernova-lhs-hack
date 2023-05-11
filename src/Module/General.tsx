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

const bayco = '/Assets/sponsorsLogos/bayco.png';
const first = '/Assets/sponsorsLogos/first.png';
const foundation = '/Assets/sponsorsLogos/foundation.png';
const hackclub = '/Assets/sponsorsLogos/hackclub.png';
const xactly = '/Assets/sponsorsLogos/xactly.png';
const wolfram = '/Assets/sponsorsLogos/wolfram.png';

const lowCode = '/Assets/low_code.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  BANNER: 'hackathonBanner',
  TITLE1: 'LYNBROOK HACKATHON',
  TITLE2: 'HACKATHON',
  Typed_effect: [
    '12 hours of creativity!',
    'Hack anything!',
    'Win Awesome Prizes!',
    'Beginner friendly!',
    'Cool Workshops!',
    'Speaker series!'
  ],

  LONG_DESCRIPTION: (
    <>
       Santa clara county&apos;s all girls hackathon! 12 hours where students create technological solutions to problems in their communities!
       Beginner friendly! No prior coding experience needed!
    </>
  ),
  SHORT_DESCRIPTION: (
    <>
       May 27th, Saturday at
      <a
        className="lime-link"
        href="https://www.google.com/maps/place/Lynbrook+High+School/@37.3006079,-122.0069019,17z/data=!4m12!1m6!3m5!1s0x808fb5433bf5d9e3:0x7c976276883c3c10!2sLynbrook+High+School!8m2!3d37.3006037!4d-122.0047132!3m4!1s0x808fb5433bf5d9e3:0x7c976276883c3c10!8m2!3d37.3006037!4d-122.0047132"
        target="_blank"
        rel="noreferrer"
      >
      &nbsp;Lynbrook High School Library, San Jose, CA.
      </a>{' '}
       We will have a virtual kickoff event on May 26th
    </>
  ),
  ACTION_BTN: 'https://docs.google.com/forms/d/e/1FAIpQLSf1DEbubNqh09iQRWj_kjQV6Eu-UReVOi6SZOOFJeGbebHlZQ/viewform?pli=1',
  LOGO: hackathonLogo
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/supernovalhs',
  //discord: 'https://discord.com/invite/8XJSzmtWPp',
   linkedin: 'https://www.linkedin.com/company/supernova-lynbrook/',
   donate: 'https://bank.hackclub.com/donations/start/superposition-lynbrook-18d5f06b-d0a1-4316-80ec-619e2083779b',
  //devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:supernova.lhs@gmail.com',
  mail: 'supernova.lhs@gmail.com'
};

const MIDDLE_SECTION = {
  BANNER: '',
  TITLE: '',
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
      DESCRIPTION: 'We are always looking for judges, sponsors, and partners! Please reach out to us at supernova.lhs@gmail.com or through our hackathon slack at TBD'
    },
    {
      TITLE: 'Who can attend?',
      DESCRIPTION: 'We welcome any high school or middle school student who identifies as female or non-binary'
    },
    {
      TITLE: 'When and Where is Supernova Lynbrook Hackathon happening?',
      DESCRIPTION: 'Supernova Lynbrook happens on the weekend May 27th, 2023 at Lynbrook High School Cafeteria. We will have a virtual kickoff on the May 26th'
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
    'Supernova Lynbrook Hackathon is a 12-hour hackathon where students use technology to create solutions to problems that their local communities face. A hackathon is a place where students come together and use technology to solve problems and win prizes!\n\n',
  SHORT_DESCRIPTION:
    'This hackathon is open to any high school or middle school student who identifies as female or non-binary. We welcome students of all levels, which is why we hold workshops on technical, business, and design topics to help you create the best possible project. We also have a lot of fun activities planned throughout the event along with great speakers and panel dicussions!'
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
    {src: hackclub, name: 'HackClub', link: 'https://zero40.com.br/'},
    {
      src: xactly,
      name: 'Xactly',
      link: 'https://www.pjf.mg.gov.br/'
    },
    {src: bayco, name: 'Bayco', link: 'https://gdgjf.github.io/'},
  ],
  [
    {src: first, name: 'First', link: 'https://zero40.com.br/'},
    {
      src: foundation,
      name: 'Fremont Foundation',
      link: 'https://www2.ufjf.br/critt/'
    },
    {
      src: wolfram,
      name: 'Wolfram',
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
      COMPANY: 'Junior @ Lynbrook High School',
      LINKEDIN: 'https://www.linkedin.com/in/sanchitha-dinesh/',
      GITHUB: 'https://github.com/SanchithaD',
      INSTAGRAM: ''
    },
    {
      NAME: 'Mihika Rajadnya',
      SRC: '/Assets/People/mihi.png',
      DESCRIPTION: 'Operations Lead',
      COMPANY: 'Junior @ Lynbrook High School',
      LINKEDIN: 'https://www.linkedin.com/in/mihika-r-bb9129260/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Saanvi Gireesh',
      SRC: '/Assets/People/saan.png',
      DESCRIPTION: 'Marketing Lead',
      COMPANY: 'Junior @ Lynbrook High School',
      LINKEDIN: 'https://www.linkedin.com/in/saanvi-g-aba415263/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Deeksha Raj',
      SRC: '/Assets/People/avatar.png',
      DESCRIPTION: 'Workshop Coordinator',
      COMPANY: 'Junior @ Lynbrook High School',
      LINKEDIN: '',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Srushti Chaudhari',
      SRC: '/Assets/People/avatar.png',
      DESCRIPTION: 'Outreach',
      COMPANY: 'Junior @ Lynbrook High School',
      LINKEDIN: 'https://www.linkedin.com/in/srushti-c-288359259/',
      GITHUB: '',
      INSTAGRAM: ''
    },
  ]
}

  const PRIZES_SECTION = {
    TITLE: 'Prizes',
    LONG_DESCRIPTION:
      ' Win Awesome Prizes And Swag for various categories!',
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

/**
 * HOCO CS League site content.
 *
 * This is the only file you need to edit for words, names, dates, and links.
 * Pages and components read from this file. After you save, refresh the browser.
 *
 * How to edit each section:
 * - url, email, socials: public contact details. Leave TODO strings until the real values exist.
 * - navigation: header and footer links. href must match a real page.
 * - seo: the browser tab title and the search-result description for each page.
 * - home: hero, stats, intro, the next event, and the three preview cards.
 * - about: mission, origin story, what we do, and values.
 * - people: every student leader. Keep the name spelling exactly as written.
 *   Spell Joshue Chen this way everywhere. Do not change it to Joshua.
 *   photo is optional. Leave it off to show initials. When you have permission,
 *   add a file under public/photos and set photo to "/photos/filename.jpg".
 *   Do not add personal emails, phone numbers, home addresses, or student photos here.
 *   bio is one line. Replace the TODO when that person approves the line.
 *   group must match a department name, or one of the two leadership groups below.
 * - departments: the three boxes on the org chart, in order. memberIds must match people ids.
 * - org: who sits above whom on the chart.
 * - statewide: the Maryland tier. This is separate from the Howard County departments.
 * - competitions: division copy, participation steps, rules, and the calendar array.
 *   Copy a calendar object for each new event.
 * - impact: the October 17 case study, counters, testimonials, and lessons.
 *   Set a counter value to a number (and clear its todo) to turn on the count-up.
 * - schools: intro and the join line. School cards come from people in the School Executive Department.
 * - maryland: statewide program copy, partner counties, and the first event date.
 * - getInvolved: the four pathways, sponsor benefits, and the forms.
 * - contact: partnerships, press, and the contact form.
 * - forms: labels and success text. The forms do not send data yet.
 *   See the TODO comment in components/InquiryForm.tsx before connecting Formspree.
 *
 * Any string that starts with "TODO:" renders as an amber label so editors can see it.
 */

export type IconName =
  | "flag"
  | "code"
  | "users"
  | "trophy"
  | "map"
  | "megaphone"
  | "handshake"
  | "school"
  | "calendar"
  | "shield";

export type Person = {
  id: string;
  name: string;
  title: string;
  group: string;
  school?: string;
  /** Path in /public, such as "/photos/example.jpg". Omit until a photo is approved. */
  photo?: string;
  bio: string;
  worksWithId?: string;
};

export type Department = {
  id: string;
  name: string;
  summary: string;
  memberIds: string[];
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select" | "school";
  required: boolean;
  options?: string[];
  autoComplete?: string;
};

export type FormContent = {
  id: string;
  title: string;
  intro: string;
  submitLabel: string;
  fields: FormField[];
};

export type PageKey =
  | "home"
  | "about"
  | "leadership"
  | "competitions"
  | "impact"
  | "schools"
  | "maryland"
  | "getInvolved"
  | "contact";

const bio = "TODO: ONE-LINE BIO";

export const site = {
  name: "HOCO CS League",
  tagline:
    "A student-run, county-wide competitive computer science league for Howard County high schools.",
  /**
   * Used for canonical links, Open Graph, the sitemap, and robots.txt.
   * Replace this before launch. Until then, the sitemap uses https://example.com.
   */
  url: "TODO: PRODUCTION URL",
  email: "TODO: EMAIL",
  socials: [
    {
      platform: "TODO: PLATFORM",
      handle: "TODO: HANDLE",
      href: "",
    },
  ],
  footerNote:
    "HOCO CS League is a student-run organization. © 2026 HOCO CS League.",
  schoolFieldExtras: ["Other", "Not a current student"],
  formPendingNotice:
    "TODO: CONNECT FORMSPREE. This form checks your answers in the browser and does not send them anywhere yet.",
  formSuccessTitle: "Response checked",
  formSuccessBody:
    "TODO: CONNECT FORMSPREE. Nothing was sent. When a form service is connected, this message will confirm that HOCO CS League received your note.",

  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/leadership", label: "Leadership" },
    { href: "/competitions", label: "Competitions" },
    { href: "/impact", label: "Impact" },
    { href: "/schools", label: "Schools" },
    { href: "/maryland", label: "Maryland" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ],

  seo: {
    home: {
      path: "/",
      title: "HOCO CS League | Student Competitive CS in Howard County",
      description:
        "Student-run CTFs and hackathons for Howard County high schools. Compete, volunteer, or sponsor HOCO CS League.",
    },
    about: {
      path: "/about",
      title: "About",
      description:
        "HOCO CS League makes competitive computer science accessible to every Howard County high school student.",
    },
    leadership: {
      path: "/leadership",
      title: "Leadership",
      description:
        "Student founders, vice presidents, department directors, and school head coordinators who run HOCO CS League.",
    },
    competitions: {
      path: "/competitions",
      title: "Competitions",
      description:
        "Monthly CTF and hackathon competitions for Howard County high school students, including beginners.",
    },
    impact: {
      path: "/impact",
      title: "Results and Impact",
      description:
        "Results from HOCO CS League events, starting with the inaugural competition on October 17.",
    },
    schools: {
      path: "/schools",
      title: "Schools",
      description:
        "Six Howard County high schools, each with a student Head Coordinator for HOCO CS League.",
    },
    maryland: {
      path: "/maryland",
      title: "Maryland Statewide",
      description:
        "A Maryland-wide CS competition every three months, founded by HOCO CS League with neighboring counties.",
    },
    getInvolved: {
      path: "/get-involved",
      title: "Get Involved",
      description:
        "Compete, volunteer, sponsor, or start a school chapter with HOCO CS League.",
    },
    contact: {
      path: "/contact",
      title: "Contact",
      description:
        "Contact HOCO CS League about partnerships, press, and general questions.",
    },
  } satisfies Record<PageKey, { path: string; title: string; description: string }>,

  home: {
    eyebrow: "Howard County, Maryland",
    title: "HOCO CS League",
    subtitle:
      "A student-run, county-wide competitive computer science league for Howard County high schools.",
    actions: [
      { label: "Compete", href: "/get-involved#compete" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Sponsor Us", href: "/get-involved#sponsor" },
    ],
    stats: [
      { value: "6", label: "high schools" },
      { value: "12+", label: "student leaders" },
      { value: "Monthly", label: "competitions" },
      { value: "Expanding", label: "across Maryland" },
    ],
    intro:
      "HOCO CS League gives high school students across Howard County a place to compete, collaborate, and grow through Capture the Flag (CTF) cybersecurity competitions and hackathons. We are founded, organized, and run entirely by students, and open to every skill level.",
    upcoming: {
      heading: "Next competition",
      date: "TODO: DATE",
      description: "TODO: ONE LINE DESCRIPTION",
      registerLabel: "Register",
      registerHref: "/get-involved#compete",
    },
    previews: [
      {
        href: "/competitions",
        title: "Competitions",
        icon: "flag" as IconName,
        body: "Monthly CTFs and hackathons during the school year, open to every skill level.",
      },
      {
        href: "/impact",
        title: "Results and Impact",
        icon: "trophy" as IconName,
        body: "What we know from the inaugural competition, and the totals we are still confirming.",
      },
      {
        href: "/maryland",
        title: "Maryland Statewide",
        icon: "map" as IconName,
        body: "A quarterly competition that brings Howard County together with neighboring counties.",
      },
    ],
  },

  about: {
    heroTitle: "About",
    heroLede:
      "Why this league exists, what we run, and the values we compete by.",
    mission: {
      heading: "Mission",
      body: "HOCO CS League exists to make competitive computer science accessible to every high school student in Howard County. We believe students learn best by building, breaking, and solving real problems together, and that talent should not depend on which school you attend.",
    },
    origin: {
      heading: "Why We Started",
      before:
        "Before this league, there was no county-wide way for students from different schools to compete against each other in CTFs and hackathons.",
      founderStory: "TODO: FOUNDER STORY, 1 TO 2 SENTENCES",
      after: "So we built one.",
    },
    activities: {
      heading: "What We Do",
      items: [
        {
          title: "CTF Division",
          icon: "flag" as IconName,
          body: "Cybersecurity challenges where teams find hidden flags and earn points.",
        },
        {
          title: "Hackathons",
          icon: "code" as IconName,
          body: "Time-limited events where students design and build working projects around a theme.",
        },
        {
          title: "Community",
          icon: "users" as IconName,
          body: "A network of students, coordinators, and mentors across six schools.",
        },
      ],
    },
    values: {
      heading: "Values",
      items: [
        {
          name: "Access",
          body: "Every Howard County high school student can compete, whatever their school or experience.",
        },
        {
          name: "Integrity",
          body: "We follow the rules, respect other teams, and only use systems the league provides.",
        },
        {
          name: "Leadership",
          body: "Students organize the league, represent their schools, and take responsibility for fair events.",
        },
        {
          name: "Collaboration",
          body: "Schools and divisions work together so more students can compete and learn.",
        },
      ],
    },
  },

  people: [
    {
      id: "basileia-terefe",
      name: "Basileia Terefe",
      title: "Founder, Co-President, CTF Coordinator",
      group: "Co-Presidents and Founders",
      bio,
    },
    {
      id: "joshue-chen",
      name: "Joshue Chen",
      title: "Founder, Co-President, Hackathon Coordinator",
      group: "Co-Presidents and Founders",
      bio,
    },
    {
      id: "anish-jogi",
      name: "Anish Jogi",
      title: "Co-VP, CTF Division",
      group: "Vice Presidents",
      worksWithId: "basileia-terefe",
      bio,
    },
    {
      id: "hamza-siddiqui",
      name: "Hamza Siddiqui",
      title: "Co-VP, Hackathon Division",
      group: "Vice Presidents",
      worksWithId: "joshue-chen",
      bio,
    },
    {
      id: "chinsu-wang",
      name: "Chinsu Wang",
      title: "Director of Advertisement",
      group: "Social Media, Outreach, and Fundraising",
      bio,
    },
    {
      id: "amani-andemariam",
      name: "Amani Andemariam",
      title: "Director of Outreach",
      group: "Social Media, Outreach, and Fundraising",
      bio,
    },
    {
      id: "deepanshu-vankayalapati",
      name: "Deepanshu Vankayalapati",
      title: "Director of Fundraising",
      group: "Social Media, Outreach, and Fundraising",
      bio,
    },
    {
      id: "matthew-choi",
      name: "Matthew Choi",
      title: "Co-Director of Finance",
      group: "Finance",
      bio,
    },
    {
      id: "jai-patel",
      name: "Jai Patel",
      title: "Co-Director of Finance",
      group: "Finance",
      bio,
    },
    {
      id: "richa-sachdeva",
      name: "Richa Sachdeva",
      title: "Head Coordinator",
      group: "School Executive Department",
      school: "Atholton High School",
      bio,
    },
    {
      id: "idris-azam",
      name: "Idris Azam",
      title: "Head Coordinator",
      group: "School Executive Department",
      school: "Reservoir High School",
      bio,
    },
    {
      id: "rudra-jhawar",
      name: "Rudra Jhawar",
      title: "Head Coordinator",
      group: "School Executive Department",
      school: "Marriotts Ridge High School",
      bio,
    },
    {
      id: "rajit-rath",
      name: "Rajit Rath",
      title: "Head Coordinator",
      group: "School Executive Department",
      school: "Mount Hebron High School",
      bio,
    },
    {
      id: "shauank-chittimala",
      name: "Shauank Chittimala",
      title: "Head Coordinator",
      group: "School Executive Department",
      school: "Howard High School",
      bio,
    },
    {
      id: "nicholas-chen",
      name: "Nicholas Chen",
      title: "Head Coordinator",
      group: "School Executive Department",
      school: "River Hill High School",
      bio,
    },
  ] satisfies Person[],

  departments: [
    {
      id: "outreach",
      name: "Social Media, Outreach, and Fundraising",
      summary: "Advertisement, outreach, and fundraising for the league.",
      memberIds: [
        "chinsu-wang",
        "amani-andemariam",
        "deepanshu-vankayalapati",
      ],
    },
    {
      id: "finance",
      name: "Finance",
      summary: "Budgets, payments, and financial records for the league.",
      memberIds: ["matthew-choi", "jai-patel"],
    },
    {
      id: "schools",
      name: "School Executive Department",
      summary: "One Head Coordinator at each participating high school.",
      memberIds: [
        "richa-sachdeva",
        "idris-azam",
        "rudra-jhawar",
        "rajit-rath",
        "shauank-chittimala",
        "nicholas-chen",
      ],
    },
  ] satisfies Department[],

  org: {
    ctfLeadId: "basileia-terefe",
    ctfVpId: "anish-jogi",
    hackLeadId: "joshue-chen",
    hackVpId: "hamza-siddiqui",
    ctfLabel: "CTF Division",
    hackLabel: "Hackathon Division",
  },

  leadership: {
    heroTitle: "Leadership",
    heroLede:
      "HOCO CS League is founded and run by high school students from across Howard County. Two founders and Co-Presidents lead the CTF and Hackathon divisions, supported by Vice Presidents, three departments, and a Head Coordinator at every participating school.",
    chartHeading: "Organization",
    chartIntro:
      "Basileia Terefe leads the CTF division with Anish Jogi. Joshue Chen leads the Hackathon division with Hamza Siddiqui. Three departments support both divisions.",
    groups: [
      {
        heading: "Co-Presidents and Founders",
        group: "Co-Presidents and Founders",
      },
      { heading: "Vice Presidents", group: "Vice Presidents" },
    ],
  },

  statewide: {
    heading: "Maryland Statewide Leadership",
    intro:
      "This second tier leads the Maryland-wide competition. Howard County remains the founding league.",
    leadRole: "Statewide Lead",
    leadId: "basileia-terefe",
    coLead: {
      role: "HOCO Co-Lead",
      name: "TODO: NAME",
      bio,
    },
    competitionLead: {
      role: "Statewide Competition Lead",
      name: "TODO: NAME",
      bio,
    },
    liaisonsHeading: "County Liaisons",
    liaisons: [
      { county: "Frederick County", name: "TODO: NAME", bio },
      { county: "Montgomery County", name: "TODO: NAME", bio },
      { county: "Prince George's County", name: "TODO: NAME", bio },
    ],
  },

  competitions: {
    heroTitle: "Competitions",
    heroLede:
      "Monthly competitions during the school year for students at every skill level.",
    overview: {
      heading: "Overview",
      before:
        "HOCO CS League runs monthly competitions during the school year, with",
      teamFormat: "TODO: TEAM FORMAT",
      after: ".",
    },
    ctf: {
      heading: "CTF Division",
      coordinatorId: "basileia-terefe",
      vpId: "anish-jogi",
      body: "Capture the Flag competitions test practical cybersecurity skills. Participants work through challenges in categories such as web exploitation, cryptography, forensics, and reverse engineering. Each solved challenge reveals a flag worth points, and the highest score wins. No prior experience is required, and we include beginner-friendly challenges at every event.",
    },
    hackathon: {
      heading: "Hackathons",
      coordinatorId: "joshue-chen",
      vpId: "hamza-siddiqui",
      beforeHours: "Hackathons give teams",
      hours: "TODO: HOURS",
      afterHours:
        "hours to design, build, and present a project around a theme announced at the start. Projects are judged on creativity, technical execution, impact, and presentation.",
    },
    participate: {
      heading: "How to Participate",
      // kind is "link", "todo", or "text". Leave it as is so the step renders correctly.
      steps: [
        {
          kind: "link" as const,
          before:
            "Register through your school's Head Coordinator, or through the",
          linkLabel: "registration form",
          linkHref: "/get-involved#compete",
          after: ".",
        },
        {
          kind: "todo" as const,
          before: "Join our",
          todo: "TODO: COMMUNICATION PLATFORM",
          after: ".",
        },
        {
          kind: "text" as const,
          text: "Show up and compete.",
        },
      ],
    },
    rules: {
      heading: "Rules and Fair Play",
      items: [
        "Follow the code of conduct.",
        "Compete only against the targets the league provides.",
        "Never attack systems outside the competition environment.",
      ],
      codeOfConductLabel: "Full code of conduct:",
      codeOfConduct: "TODO: CODE OF CONDUCT",
    },
    calendar: {
      heading: "Calendar",
      caption: "HOCO CS League events",
      columns: ["Date", "Type", "Format"],
      events: [
        {
          date: "October 17",
          year: "TODO: YEAR",
          type: "Inaugural Competition",
          format: "TODO: FORMAT",
        },
        {
          date: "TODO: DATE",
          type: "TODO: TYPE",
          format: "TODO: FORMAT",
        },
        {
          date: "TODO: DATE",
          type: "TODO: TYPE",
          format: "TODO: FORMAT",
        },
      ],
    },
  },

  impact: {
    heroTitle: "Results and Impact",
    heroLede:
      "The inaugural competition was held on October 17. Totals stay marked until they are confirmed.",
    caseStudy: {
      heading: "Inaugural Competition, October 17",
      participantsLabel: "Participants",
      participants: "TODO: PARTICIPANTS",
      schoolsLabel: "Schools",
      schools: "TODO: SCHOOLS",
      challengesLabel: "Challenges solved",
      challengesSolved: "TODO: CHALLENGES SOLVED",
      winnerLabel: "Winner",
      winner: "TODO: WINNER",
      highlightLabel: "Highlight",
      highlight: "TODO: HIGHLIGHT SENTENCE",
    },
    numbers: {
      heading: "By the Numbers",
      intro:
        "These totals are filled in after events, once the count is confirmed. A number in this list counts up on screen. A TODO stays put.",
      counters: [
        {
          label: "Participants",
          value: null as number | null,
          todo: "TODO: PARTICIPANT COUNT",
        },
        {
          label: "Schools represented",
          value: null as number | null,
          todo: "TODO: SCHOOL COUNT",
        },
        {
          label: "Challenges solved",
          value: null as number | null,
          todo: "TODO: CHALLENGES SOLVED COUNT",
        },
        {
          label: "Volunteer hours",
          value: null as number | null,
          todo: "TODO: VOLUNTEER HOURS",
        },
      ],
    },
    testimonials: {
      heading: "From the room",
      items: [
        {
          quote: "TODO: PARTICIPANT QUOTE",
          name: "TODO: PARTICIPANT NAME",
          role: "Participant",
        },
        {
          quote: "TODO: TEACHER OR SPONSOR QUOTE",
          name: "TODO: TEACHER OR SPONSOR NAME",
          role: "TODO: TEACHER OR SPONSOR ROLE",
        },
      ],
    },
    lessons: {
      heading: "What We Learned",
      items: [
        "TODO: LESSON FROM THE FIRST EVENT",
        "TODO: SECOND LESSON FROM THE FIRST EVENT",
      ],
    },
  },

  schools: {
    heroTitle: "Schools",
    heroLede:
      "HOCO CS League spans six Howard County Public School System high schools. Each school has a Head Coordinator who organizes participation and serves as the contact for students and teachers.",
    heading: "Participating schools",
    join: "Does your school want to join? Contact us to start a chapter.",
    joinLabel: "Start a chapter",
    joinHref: "/get-involved#chapter",
  },

  maryland: {
    heroTitle: "Maryland Statewide",
    heroLede: "A quarterly competition founded by HOCO CS League.",
    overview: {
      heading: "Overview",
      body: "Building on HOCO CS League, we are launching a Maryland-wide competition held once every three months. HOCO CS League serves as the founding league, and students from Frederick, Montgomery, and Prince George's Counties join us as representatives and competitors.",
    },
    diagram: {
      center: "HOCO CS League",
      eventLabel: "Quarterly Statewide Event",
      counties: ["Frederick County", "Montgomery County", "Prince George's County"],
      cadenceNote:
        "The row below is the cadence, not a list of confirmed dates. County competitions happen each month. The statewide event happens once every three months.",
      steps: [
        {
          label: "Monthly",
          title: "County competitions",
          body: "Each county league runs its own event.",
        },
        {
          label: "Monthly",
          title: "County competitions",
          body: "Students keep practicing between statewide rounds.",
        },
        {
          label: "Every three months",
          title: "Statewide event",
          body: "Representatives and competitors from each county meet.",
        },
      ],
    },
    goal: {
      heading: "Goal",
      body: "To build a statewide network of student competitors and organizers, so more Maryland students have access to high-quality CS competition.",
    },
    firstEvent: {
      heading: "First statewide event",
      date: "TODO: DATE",
      cta: "Counties interested in representing",
      ctaHref: "/contact#message",
    },
  },

  getInvolved: {
    heroTitle: "Get Involved",
    heroLede:
      "Compete, volunteer, sponsor, or help a school chapter get started.",
    pathways: [
      {
        id: "compete",
        title: "Compete",
        icon: "flag" as IconName,
        body: "Join a CTF or a hackathon. No prior experience is required, and every event includes a way in for beginners.",
        button: "Register to compete",
      },
      {
        id: "volunteer",
        title: "Volunteer",
        icon: "users" as IconName,
        body: "Help run an event, welcome teams, or support a division. Students from every participating school can volunteer.",
        button: "Volunteer with us",
      },
      {
        id: "sponsor",
        title: "Sponsor",
        icon: "handshake" as IconName,
        body: "Sponsorship funds go toward",
        button: "Sponsor the league",
      },
      {
        id: "teachers",
        title: "Teachers and Advisors",
        icon: "school" as IconName,
        body: "Teachers and club advisors can help students find the league and support a school chapter. The Head Coordinator at a school is the contact for that campus.",
        button: "Start a chapter",
        href: "#chapter",
      },
    ],
    sponsor: {
      heading: "Sponsor benefits",
      funds: "TODO: PLATFORM COSTS, PRIZES, EVENT SUPPLIES",
      contactId: "deepanshu-vankayalapati",
      contactLead: "Sponsor questions go to",
      benefits: [
        "Your name listed on this website and at competitions.",
        "A thank-you during event remarks.",
        "A direct way to support student access to CS competitions.",
      ],
    },
    forms: {
      compete: {
        id: "compete-form",
        title: "Competition registration",
        intro:
          "Tell us you want to compete. Your Head Coordinator can also sign a team up.",
        submitLabel: "Submit registration",
        fields: [
          { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
          { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
          { name: "school", label: "School", type: "school", required: true },
          {
            name: "division",
            label: "Division",
            type: "select",
            required: true,
            options: ["CTF", "Hackathon", "Either"],
          },
          { name: "notes", label: "Anything we should know", type: "textarea", required: false },
        ],
      },
      volunteer: {
        id: "volunteer-form",
        title: "Volunteer interest",
        intro: "Tell us how you want to help. We will reply once a form service is connected.",
        submitLabel: "Submit volunteer interest",
        fields: [
          { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
          { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
          { name: "school", label: "School", type: "school", required: true },
          {
            name: "help",
            label: "How do you want to help?",
            type: "textarea",
            required: true,
          },
        ],
      },
      sponsor: {
        id: "sponsor-form",
        title: "Sponsor inquiry",
        intro: "Tell us about your organization and the kind of support you have in mind.",
        submitLabel: "Submit sponsor inquiry",
        fields: [
          { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
          {
            name: "organization",
            label: "Organization",
            type: "text",
            required: true,
            autoComplete: "organization",
          },
          { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
          { name: "message", label: "Message", type: "textarea", required: true },
        ],
      },
      chapter: {
        id: "chapter-form",
        title: "School chapter interest",
        intro:
          "Students, teachers, and advisors can use this form to ask about a chapter. Counties can use the contact form.",
        submitLabel: "Submit chapter interest",
        fields: [
          { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
          { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
          { name: "school", label: "School name", type: "text", required: true },
          {
            name: "role",
            label: "Role",
            type: "select",
            required: true,
            options: ["Student", "Teacher or advisor"],
          },
          { name: "message", label: "Message", type: "textarea", required: true },
        ],
      },
    } satisfies Record<string, FormContent>,
  },

  contact: {
    heroTitle: "Contact",
    heroLede: "Partnerships, press, and general questions.",
    partnershipsIntro: "For partnerships and press, contact",
    outreachPersonId: "amani-andemariam",
    advertisementPersonId: "chinsu-wang",
    partnershipsJoin: "and",
    form: {
      id: "contact-form",
      title: "Contact form",
      intro: "Send a note about partnerships, press, a county partnership, or a general question.",
      submitLabel: "Send message",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
        { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
        {
          name: "topic",
          label: "Topic",
          type: "select",
          required: true,
          options: [
            "General question",
            "Partnership",
            "Press",
            "County partnership",
          ],
        },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
    } satisfies FormContent,
  },
};

export type Site = typeof site;

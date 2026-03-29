export interface TeamMember {
  id: number;
  name: string;
  imageUrl: string;
  role: string;
  email: string;
  classYear: string;
  major: string;
  blurb: string;
}

export interface TeamSection {
  id: string;
  title: string;
  intro: string;
  members: TeamMember[];
}

export const teamSections: TeamSection[] = [
  {
    id: "directors",
    title: "Directors",
    intro:
      "We help lead our wonderful team of YEP leaders to create a motivating, innovative, and creative atmosphere.",
    members: [
      {
        id: 1,
        name: "Maya Patel",
        imageUrl: "/team/maya-patel.svg",
        role: "Program Director",
        email: "maya_patel@brown.edu",
        classYear: "2026",
        major: "Economics + CS",
        blurb:
          "Hi! I am Maya, and I joined YEP to support students who are building bold ideas for their communities.",
      },
      {
        id: 2,
        name: "Eli Thompson",
        imageUrl: "/team/eli-thompson.svg",
        role: "Program Director",
        email: "eli_thompson@brown.edu",
        classYear: "2026",
        major: "Public Policy",
        blurb:
          "Hi! I am Eli, and I love helping teams turn early concepts into practical, community-focused ventures.",
      },
      {
        id: 3,
        name: "Sofia Rivera",
        imageUrl: "/team/sofia-rivera.svg",
        role: "Program Director",
        email: "sofia_rivera@brown.edu",
        classYear: "2027",
        major: "Applied Math",
        blurb:
          "Hi! I am Sofia, and I am excited about mentorship and giving young founders tools they can apply right away.",
      },
      {
        id: 4,
        name: "Jordan Kim",
        imageUrl: "/team/jordan-kim.svg",
        role: "Program Director",
        email: "jordan_kim@brown.edu",
        classYear: "2027",
        major: "Business Economics",
        blurb:
          "Hi! I am Jordan, and I enjoy designing high-energy sessions where students can test ideas and build confidence.",
      },
    ],
  },
  {
    id: "student-mentors",
    title: "Student Mentors",
    intro:
      "Our mentor team guides, provides support, and works with entrepreneurs to help launch their businesses.",
    members: [
      {
        id: 5,
        name: "Anika Desai",
        imageUrl: "/team/anika-desai.svg",
        role: "Mentor",
        email: "anika_desai@brown.edu",
        classYear: "2026",
        major: "Computer Science",
        blurb:
          "Hi! I am Anika, and I joined YEP for my love of entrepreneurship and mentorship while immersing myself in Providence.",
      },
      {
        id: 6,
        name: "Noah Williams",
        imageUrl: "/team/noah-williams.svg",
        role: "Mentor",
        email: "noah_williams@brown.edu",
        classYear: "2028",
        major: "Education Studies",
        blurb:
          "Hi! I am Noah, and I love helping students turn everyday challenges into business ideas with impact.",
      },
      {
        id: 7,
        name: "Leah Nguyen",
        imageUrl: "/team/leah-nguyen.svg",
        role: "Mentor",
        email: "leah_nguyen@brown.edu",
        classYear: "2028",
        major: "Sociology",
        blurb:
          "Hi! I am Leah, and I support students through brainstorming, pitch writing, and testing ideas in the real world.",
      },
      {
        id: 8,
        name: "Daniel Ortiz",
        imageUrl: "/team/daniel-ortiz.svg",
        role: "Mentor",
        email: "daniel_ortiz@brown.edu",
        classYear: "2027",
        major: "Engineering",
        blurb:
          "Hi! I am Daniel, and I enjoy helping teams build prototypes quickly and learn from each iteration.",
      },
    ],
  },
  {
    id: "program-management",
    title: "Program Management",
    intro:
      "Program management keeps our sessions, logistics, and student support systems running smoothly across all tracks.",
    members: [
      {
        id: 9,
        name: "Grace Chen",
        imageUrl: "/team/grace-chen.svg",
        role: "Operations Lead",
        email: "grace_chen@brown.edu",
        classYear: "2026",
        major: "Behavioral Decision Sciences",
        blurb:
          "I coordinate internal systems so YEP teams can focus on students, instruction, and meaningful outcomes.",
      },
      {
        id: 10,
        name: "Priya Shah",
        imageUrl: "/team/maya-patel.svg",
        role: "Program Coordinator",
        email: "priya_shah@brown.edu",
        classYear: "2027",
        major: "Public Health",
        blurb:
          "I support calendar planning and team communication to make each YEP semester feel organized and energizing.",
      },
    ],
  },
  {
    id: "liaison",
    title: "Liaison",
    intro:
      "Our liaison team builds strong relationships with schools, families, and community organizations across Providence.",
    members: [
      {
        id: 11,
        name: "Owen Garcia",
        imageUrl: "/team/eli-thompson.svg",
        role: "Community Liaison",
        email: "owen_garcia@brown.edu",
        classYear: "2028",
        major: "Urban Studies",
        blurb:
          "I connect YEP with local partners and help align our programs with what students and families need most.",
      },
      {
        id: 12,
        name: "Nina Park",
        imageUrl: "/team/anika-desai.svg",
        role: "School Liaison",
        email: "nina_park@brown.edu",
        classYear: "2027",
        major: "Education Policy",
        blurb:
          "I collaborate with schools to coordinate recruitment, scheduling, and communication throughout the semester.",
      },
    ],
  },
  {
    id: "school-engagement",
    title: "School Engagement",
    intro:
      "School engagement develops activities that keep students involved, curious, and confident in each workshop.",
    members: [
      {
        id: 13,
        name: "Marcus Lee",
        imageUrl: "/team/jordan-kim.svg",
        role: "Engagement Lead",
        email: "marcus_lee@brown.edu",
        classYear: "2027",
        major: "Psychology",
        blurb:
          "I design interactive moments that make every session collaborative, hands-on, and welcoming for all students.",
      },
      {
        id: 14,
        name: "Hannah Cho",
        imageUrl: "/team/sofia-rivera.svg",
        role: "Workshop Facilitator",
        email: "hannah_cho@brown.edu",
        classYear: "2028",
        major: "Neuroscience",
        blurb:
          "I create facilitation plans that keep students engaged while building practical entrepreneurship skills.",
      },
    ],
  },
  {
    id: "media-design",
    title: "Media and Design",
    intro:
      "Media and design shapes YEP storytelling, visuals, and outreach materials for students and families.",
    members: [
      {
        id: 15,
        name: "Ava Reynolds",
        imageUrl: "/team/grace-chen.svg",
        role: "Creative Lead",
        email: "ava_reynolds@brown.edu",
        classYear: "2026",
        major: "Visual Art",
        blurb:
          "I lead visual storytelling for YEP across social posts, posters, and program identity systems.",
      },
      {
        id: 16,
        name: "Samir Ali",
        imageUrl: "/team/daniel-ortiz.svg",
        role: "Content Strategist",
        email: "samir_ali@brown.edu",
        classYear: "2027",
        major: "Modern Culture and Media",
        blurb:
          "I craft content that highlights student stories and communicates YEP impact with clarity and personality.",
      },
    ],
  },
];

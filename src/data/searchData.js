// Searchable content index for the AASU website.
// Each entry has a title, description, page path, category, and keywords for matching.

const searchData = [
  // WHO WE ARE
  {
    id: 1,
    title: "Profile of AASU",
    description: "The All-Africa Students Union (AASU) is the principal continental body representing the interests, aspirations, and collective voice of students across Africa.",
    path: "/profile",
    category: "Who We Are",
    keywords: ["profile", "about", "aasu", "who we are", "vision", "mission", "values", "continental", "union", "students", "africa", "movement", "solidarity"]
  },
  {
    id: 2,
    title: "History of AASU",
    description: "Explore the rich history of the All-Africa Students Union from its founding to the present day — a journey of student advocacy across the continent.",
    path: "/history",
    category: "Who We Are",
    keywords: ["history", "founded", "background", "past", "legacy", "aasu history", "origin", "historical"]
  },
  {
    id: 3,
    title: "Executive Committee",
    description: "Meet the Executive Committee — the second highest organ of the Union. Comprising the Secretariat and representatives from West, East, North, Southern, and Central Africa.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["executive committee", "leadership", "president", "secretary general", "vice president", "secretariat", "officials", "committee members", "board", "executives"]
  },
  {
    id: 4,
    title: "Membership",
    description: "AASU brings together national student unions and student-led institutions across Africa. Learn about our membership structure and how to join.",
    path: "/membership",
    category: "Membership",
    keywords: ["membership", "member", "join", "national unions", "student union", "member list", "become a member"]
  },
  {
    id: 5,
    title: "Partners",
    description: "AASU works closely with governmental, intergovernmental, and non-governmental partners to advance education, youth empowerment, and sustainable development.",
    path: "/partners",
    category: "Who We Are",
    keywords: ["partners", "partnership", "collaboration", "sponsors", "organizations", "ngo", "igbo", "united nations", "au", "collaborators"]
  },

  // WHAT WE DO — Strategic Priorities
  {
    id: 6,
    title: "Education & Student Rights",
    description: "AASU advocates for accessible, quality, and inclusive education for all African students, promoting student rights and welfare at national and regional levels.",
    path: "/#what-we-do",
    category: "What We Do",
    keywords: ["education", "student rights", "quality education", "access", "learning", "schools", "universities", "advocacy", "rights"]
  },
  {
    id: 7,
    title: "Environment & Climate Action",
    description: "AASU engages African students in environmental advocacy and climate action, championing green growth and sustainable development for the continent.",
    path: "/#what-we-do",
    category: "What We Do",
    keywords: ["environment", "climate", "climate action", "green", "sustainability", "cop28", "pollution", "climate change", "renewable energy"]
  },
  {
    id: 8,
    title: "Gender Advocacy",
    description: "AASU champions gender equity and women's leadership across campuses, working to ensure women and girls have equal access to education and leadership opportunities.",
    path: "/#what-we-do",
    category: "What We Do",
    keywords: ["gender", "women", "girls", "equity", "affirmative action", "gender advocacy", "women leadership", "iwd", "international womens day"]
  },
  {
    id: 9,
    title: "Capacity Building",
    description: "Through conferences, workshops, training programs, and seminars, AASU equips African students with the skills and competencies needed to thrive.",
    path: "/#what-we-do",
    category: "What We Do",
    keywords: ["capacity", "training", "skills", "workshops", "seminars", "development", "leadership training", "conference"]
  },
  {
    id: 10,
    title: "Pan-Africanism & African Culture",
    description: "AASU promotes pan-African identity, solidarity, and the celebration of African culture, heritage, and values among students across the continent.",
    path: "/#what-we-do",
    category: "What We Do",
    keywords: ["pan-africanism", "culture", "african identity", "heritage", "unity", "diaspora", "solidarity"]
  },
  {
    id: 11,
    title: "Migration & Mobility",
    description: "AASU advocates for safe, dignified migration and student mobility across Africa, including protection for refugees and displaced students.",
    path: "/#what-we-do",
    category: "What We Do",
    keywords: ["migration", "mobility", "refugee", "displacement", "asylum", "student mobility", "borders"]
  },
  {
    id: 12,
    title: "Democracy & Good Governance",
    description: "AASU promotes democratic values, student representation, and accountable governance across African institutions and governments.",
    path: "/#what-we-do",
    category: "What We Do",
    keywords: ["democracy", "governance", "accountability", "elections", "representation", "policy", "government"]
  },

  // STUDENT VOICES
  {
    id: 13,
    title: "Student Voices",
    description: "Hear from African students directly — stories, interviews, and perspectives from students across the continent on education, leadership, and change.",
    path: "/students-voices",
    category: "Student Voices",
    keywords: ["student voices", "stories", "interviews", "perspective", "youth", "young africans", "testimonials", "student stories"]
  },
  {
    id: 14,
    title: "World Refugee Day — Interview with Andhira Kara",
    description: "As part of AASU's World Refugee Day commemoration, an interview with Ms. Andhira Kara, Lead Country Researcher - Kenya, Local Engagement Refugee Research Network.",
    path: "/students-voices",
    category: "Student Voices",
    keywords: ["refugee", "world refugee day", "andhira kara", "kenya", "displacement", "inclusion", "policy", "refugee interview"]
  },
  {
    id: 15,
    title: "Guiding Green Growth Summit — Pollution Story",
    description: "If a story could tell the history of pollution, this is what it would look like. Join us for the Guiding Green Growth Summit. Poet: Lawrencia Awinsogya.",
    path: "/students-voices",
    category: "Student Voices",
    keywords: ["green growth", "pollution", "summit", "climate", "poem", "lawrencia", "cop28", "environment", "africa"]
  },
  {
    id: 16,
    title: "Day of the African Child — Education Outreach",
    description: "AASU partnered with Child Rights International Ghana for an Education Outreach Project at Madina Cluster of Schools, themed 'Education for All Children in Africa: The Time is Now.'",
    path: "/students-voices",
    category: "Student Voices",
    keywords: ["day of african child", "education outreach", "children", "madina", "child rights", "ghana", "schools", "rights"]
  },
  {
    id: 17,
    title: "International Women's Day — Women in Leadership",
    description: "AASU highlights the voices and journeys of remarkable women in leadership: Boago Dodo Chingapani, Oumu Sall, Habiba Mohamed, and Rosália Djedjo.",
    path: "/students-voices",
    category: "Student Voices",
    keywords: ["international womens day", "iwd", "women leadership", "boago dodo", "oumu sall", "habiba", "rosalia", "gender", "women in leadership"]
  },

  // CONTACT
  {
    id: 18,
    title: "Contact Us",
    description: "Get in touch with AASU. Submit questions, feedback, or partnership inquiries. Our office is located in Osu, Accra, Ghana.",
    path: "/contact",
    category: "Contact",
    keywords: ["contact", "email", "phone", "address", "reach us", "inquiry", "feedback", "form", "accra", "ghana", "info@aasuonline.org"]
  },

  // RESOURCES
  {
    id: 19,
    title: "AASU Strategic Plan",
    description: "Access AASU's strategic plan, outlining the Union's goals, priorities, and roadmap aligned with SDGs and AU Agenda 2063.",
    path: "#",
    category: "Resources",
    keywords: ["strategic plan", "strategy", "sdgs", "agenda 2063", "goals", "roadmap", "plan", "priorities"]
  },
  {
    id: 20,
    title: "Congress Resolutions",
    description: "Read the official resolutions from the 11th and 12th AASU Congress, charting the direction and decisions of the student union.",
    path: "#",
    category: "Resources",
    keywords: ["congress", "resolutions", "11th congress", "12th congress", "decisions", "official", "documents"]
  },
  {
    id: 21,
    title: "AASU Constitution",
    description: "The founding constitutional document of the All-Africa Students Union, outlining governance structures, membership, and core principles.",
    path: "#",
    category: "Resources",
    keywords: ["constitution", "founding document", "governance", "rules", "bylaws", "legal", "aasu constitution"]
  },
  {
    id: 22,
    title: "Reports & Publications",
    description: "AASU publishes reports, policy papers, newsletters, and press statements covering student advocacy and continental education issues.",
    path: "#",
    category: "Resources",
    keywords: ["reports", "publications", "newsletters", "press statements", "policy papers", "archive", "research", "documents"]
  },
];

export default searchData;

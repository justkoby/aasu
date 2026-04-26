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
    keywords: ["partners", "partnership", "collaboration", "sponsors", "organizations", "ngo", "united nations", "au", "collaborators", "ghana", "ministry of foreign affairs"]
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
    id: 22.1,
    title: "Reports & Resources",
    description: "Access official AASU reports, policy briefs, case books, and research documents.",
    path: "/reports",
    category: "Resources",
    keywords: ["reports", "resources", "publications", "policy briefs", "case books", "annual report", "mid-year report", "proposals", "concept notes"]
  },
  {
    id: 22,
    title: "Reports & Publications",
    description: "AASU publishes reports, policy papers, newsletters, and press statements covering student advocacy and continental education issues.",
    path: "#",
    category: "Resources",
    keywords: ["reports", "publications", "newsletters", "press statements", "policy papers", "archive", "research", "documents"]
  },

  // EXECUTIVES
  {
    id: 23,
    title: "OSISIOGU OSIKENYI ENYINNAYA",
    description: "President (Nigeria) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["osisiogu osikenyi enyinnaya", "president", "nigeria", "executive", "leadership"]
  },
  {
    id: 24,
    title: "DIVINE EDEM KWADZODEH",
    description: "Secretary General (Ghana) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["divine edem kwadzodeh", "secretary general", "ghana", "executive", "leadership"]
  },
  {
    id: 25,
    title: "MARAVILHA KAPAIA",
    description: "Deputy President (Angola) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["maravilha kapaia", "deputy president", "angola", "executive", "leadership"]
  },
  {
    id: 26,
    title: "ALISTAR PFUNYE",
    description: "Deputy Secretary General (Zimbabwe) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["alistar pfunye", "deputy secretary general", "zimbabwe", "executive", "leadership"]
  },
  {
    id: 27,
    title: "JABER MAATAOUI",
    description: "Vice President for North Africa (Morocco) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["jaber maataoui", "vice president", "morocco", "executive", "leadership"]
  },
  {
    id: 28,
    title: "ROSÁLIA DJEDJO",
    description: "Vice President for West Africa (Guinea-Bissau) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["rosália djedjo", "vice president", "guinea-bissau", "executive", "leadership"]
  },
  {
    id: 29,
    title: "CRÉSCENCE NAOMIE MBAN-NY",
    description: "Vice President for Central Africa (Cameroon) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["créscence naomie mban-ny", "vice president", "cameroon", "executive", "leadership"]
  },
  {
    id: 30,
    title: "VALENTINE MUGUN CHEPKOECH",
    description: "Vice President for East Africa (Kenya) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["valentine mugun chepkoech", "vice president", "kenya", "executive", "leadership"]
  },
  {
    id: 31,
    title: "BUTHANANI THOBELA",
    description: "Vice President for Southern Africa (South Africa) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["buthanani thobela", "vice president", "south africa", "executive", "leadership"]
  },
  {
    id: 32,
    title: "HABIBA MOHAMED ABDALLAH",
    description: "Executive Committee Member for North Africa (Egypt) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["habiba mohamed abdallah", "ecm", "egypt", "executive", "leadership"]
  },
  {
    id: 33,
    title: "OUMU SALL",
    description: "Executive Committee Member for West Africa (Liberia) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["oumu sall", "ecm", "liberia", "executive", "leadership"]
  },
  {
    id: 34,
    title: "BENITA NDOKOLO MFUKE",
    description: "Executive Committee Member for Central Africa (DR Congo) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["benita ndokolo mfuke", "ecm", "dr congo", "executive", "leadership"]
  },
  {
    id: 35,
    title: "STELLAH AKUR GARANG",
    description: "Executive Committee Member for East Africa (South Sudan) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["stellah akur garang", "ecm", "south sudan", "executive", "leadership"]
  },
  {
    id: 36,
    title: "ESTHER GOMANI",
    description: "Executive Committee Member for Southern Africa (Malawi) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["esther gomani", "ecm", "malawi", "executive", "leadership"]
  },
  {
    id: 37,
    title: "AJAVON KOKOE VANÉSSA AUGUSTINE",
    description: "Secretary for Finance and Administration (Togo) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["ajavon kokoe vanéssa augustine", "finance", "togo", "executive", "leadership"]
  },
  {
    id: 38,
    title: "BEN-CHRIST TRÉSOR SAIZONOU",
    description: "Secretary for Education and Students’ Rights (Benin) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["ben-christ trésor saizonou", "education", "benin", "executive", "leadership"]
  },
  {
    id: 39,
    title: "AMADOU B. JOBARTEH",
    description: "Secretary for Press and Information (The Gambia) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["amadou b. jobarteh", "press", "the gambia", "executive", "leadership"]
  },
  {
    id: 40,
    title: "BOAGO DODO CHINGAPANI",
    description: "Secretary for Gender & Affirmative Action (Botswana) - Member of the AASU Executive Committee.",
    path: "/executives",
    category: "Who We Are",
    keywords: ["boago dodo chingapani", "gender", "botswana", "executive", "leadership"]
  },

  // TECHNICAL TEAM
  {
    id: 41,
    title: "Jemilatu Mamshie Bawa",
    description: "Chief Operating Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["jemilatu mamshie bawa", "coo", "technical team", "staff", "secretariat"]
  },
  {
    id: 42,
    title: "Bismark Amefianu Kudoafor",
    description: "Deputy Chief Operating Officer (Administration) - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["bismark amefianu kudoafor", "cto", "technical team", "staff", "secretariat"]
  },
  {
    id: 43,
    title: "Samuel Sasu Adonteng",
    description: "Deputy Chief Operating Officer (Technical) - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["samuel sasu adonteng", "cco", "technical team", "staff", "secretariat"]
  },
  {
    id: 44,
    title: "James Kodjie",
    description: "Chief Programmes Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["james kodjie", "cpo", "technical team", "staff", "secretariat"]
  },
  {
    id: 45,
    title: "Akua Asantewaa Adusei",
    description: "Chief Procurement Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["akua asantewaa adusei", "procurement", "technical team", "staff", "secretariat"]
  },
  {
    id: 46,
    title: "Hamdia Suleman",
    description: "Head of Accounts - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["hamdia suleman", "accountant", "technical team", "staff", "secretariat"]
  },
  {
    id: 47,
    title: "Jacob Aryee",
    description: "Assistant Accountant Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["jacob aryee", "accounts", "technical team", "staff", "secretariat"]
  },
  {
    id: 48,
    title: "Prince Teye Ali",
    description: "Internal Auditor - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["prince teye ali", "auditor", "technical team", "staff", "secretariat"]
  },
  {
    id: 49,
    title: "George Sampson-Graves",
    description: "Human Resource Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["george sampson-graves", "hr", "technical team", "staff", "secretariat"]
  },
  {
    id: 50,
    title: "Sulemana Atawa Shamsia",
    description: "Administrative Secretary - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["sulemana atawa shamsia", "admin", "technical team", "staff", "secretariat"]
  },
  {
    id: 51,
    title: "Jasmine Salisu Mohammed",
    description: "Protocol Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["jasmine salisu mohammed", "protocol", "technical team", "staff", "secretariat"]
  },
  {
    id: 52,
    title: "Raymond Frimpong",
    description: "Programmes Officer – Democracy, Good Governance, Peace and Security - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["raymond frimpong", "democracy", "technical team", "staff", "secretariat"]
  },
  {
    id: 53,
    title: "Eunice Kaanye",
    description: "Assistant Programmes Officer for Education and Students' Rights - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["eunice kaanye", "education", "technical team", "staff", "secretariat"]
  },
  {
    id: 54,
    title: "Walter Nana Owusu Annoh Siameh",
    description: "Assistant Programmes Officer for Education and Students' Rights - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["walter nana owusu annoh siameh", "education", "technical team", "staff", "secretariat"]
  },
  {
    id: 55,
    title: "Memunatu Abubakari",
    description: "Programmes Officer for Gender Equity and Social Inclusion - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["memunatu abubakari", "gender", "technical team", "staff", "secretariat"]
  },
  {
    id: 56,
    title: "Belinda Mensah",
    description: "Programmes Officer – Environment and Climate Action - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["belinda mensah", "environment", "technical team", "staff", "secretariat"]
  },
  {
    id: 57,
    title: "Hilda Osei-Poku",
    description: "Programmes Officer for Migration, Mobility and Exchanges - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["hilda osei-poku", "migration", "technical team", "staff", "secretariat"]
  },
  {
    id: 58,
    title: "Ramzy Fuseini",
    description: "Special Projects and Strategic Initiatives Coordinator - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["ramzy fuseini", "projects", "technical team", "staff", "secretariat"]
  },
  {
    id: 59,
    title: "Eric Chinery",
    description: "Chief IT Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["eric chinery", "it", "technical team", "staff", "secretariat"]
  },
  {
    id: 60,
    title: "Solomon Pobi Darko",
    description: "Digital Media & Web Communications Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["solomon pobi darko", "media", "web", "technical team", "staff", "secretariat"]
  },
  {
    id: 61,
    title: "Solomon Abeka",
    description: "Assistant Branding and Creative Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["solomon abeka", "branding", "creative", "technical team", "staff", "secretariat"]
  },
  {
    id: 62,
    title: "Stephen Brako",
    description: "Estate/Stores Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["stephen brako", "estate", "technical team", "staff", "secretariat"]
  },
  {
    id: 63,
    title: "Ettah Johnson",
    description: "Assistant Photographer and Videographer Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["ettah johnson", "photo", "video", "technical team", "staff", "secretariat"]
  },
  {
    id: 64,
    title: "Emmanuel Nyamekye Owusu",
    description: "Assistant Editorial and Public Relations Officer - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["emmanuel nyamekye owusu", "pr", "editorial", "technical team", "staff", "secretariat"]
  },
  {
    id: 65,
    title: "Jerome Kudolo",
    description: "Executive Assistant to the Secretary General - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["jerome kudolo", "ea", "technical team", "staff", "secretariat"]
  },
  {
    id: 66,
    title: "Robert Idan",
    description: "Principal Driver - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["robert idan", "driver", "technical team", "staff", "secretariat"]
  },
  {
    id: 67,
    title: "John Yewenu",
    description: "Assistant Driver - Member of the AASU Technical Team.",
    path: "/technical-team",
    category: "Who We Are",
    keywords: ["john yewenu", "driver", "technical team", "staff", "secretariat"]
  },

  // NEWS & EVENTS
  {
    id: 68,
    title: "Earth Day Webinar: Renewable Energy and Sustainable Practices",
    description: "The transition to a sustainable future requires all of us. Join our upcoming webinar focused on renewable energy.",
    path: "/events/event-earthday-2026",
    category: "News & Events",
    keywords: ["earth day", "webinar", "renewable energy", "sustainable", "event", "climate action", "sustainability", "aasu", "africa youth"]
  },
  {
    id: 69,
    title: "AASU - HAQAA3 Workshop on Student-led Case Studies",
    description: "Understanding and Documenting Intra-Africa Mobility through student-led dialogues.",
    path: "/events/event-haqaa3-workshop",
    category: "News & Events",
    keywords: ["haqaa3", "workshop", "mobility", "event", "intra-africa", "education integration", "student voices"]
  },
  {
    id: 70,
    title: "Cde. Oumu Sall Participates in African Youth Leadership Diplomatic Conference",
    description: "ECM for West Africa engages in dialogue on regional cooperation and trade governance in Addis Ababa.",
    path: "/news/news-oumu-sall-ethiopia",
    category: "News & Events",
    keywords: ["oumu sall", "diplomacy", "addis ababa", "news", "democracy", "good governance"]
  },
  {
    id: 71,
    title: "3 Days Orientation and Training for NSPs and Interns",
    description: "A transformative training session focused on AASU’s strategic direction and leadership capacity.",
    path: "/news/news-nsp-orientation-2026",
    category: "News & Events",
    keywords: ["orientation", "training", "nsp", "interns", "news", "capacity building"]
  },
  {
    id: 72,
    title: "UPSA Hosts 3rd Strategic Project Meeting of the NELS Project",
    description: "Reaffirming commitment to student leadership development and international academic collaboration.",
    path: "/news/news-upsa-nels-meeting",
    category: "News & Events",
    keywords: ["upsa", "nels", "project", "news", "capacity building"]
  },
  {
    id: 73,
    title: "AASU Successfully Completes Handing-Over and Inauguration Ceremony",
    description: "Officially transitioning leadership to the new administration for the 2026–2029 term.",
    path: "/news/news-handing-over-ceremony",
    category: "News & Events",
    keywords: ["handing-over", "inauguration", "ceremony", "news", "executive committee", "panafricanism", "leadership"]
  },
  {
    id: 74,
    title: "AASU Represents African Students at INQAAHE 15th Biennial Forum 2026",
    description: "Positioning students as critical agents in building resilient, future-ready quality assurance systems.",
    path: "/news/news-inqaahe-forum",
    category: "News & Events",
    keywords: ["inqaahe", "biennial forum", "quality assurance", "news", "education", "student engagement"]
  },
  {
    id: 75,
    title: "New Executive Committee Elected for 2026-2029 Term",
    description: "Meet the new leadership team dedicated to advancing student rights across Africa.",
    path: "/news/news-new-executives-elected",
    category: "News & Events",
    keywords: ["new executives", "elected", "leadership", "news", "executive committee"]
  },
  {
    id: 76,
    title: "OFFICIAL STATEMENT ON THE COMMEMORATION OF THE 1994 GENOCIDE AGAINST THE TUTSI IN RWANDA",
    description: "AASU joins the people of Rwanda and the global community in solemn remembrance of the victims.",
    path: "/news/press-release-rwanda-2026",
    category: "News & Events",
    keywords: ["rwanda", "genocide", "commemoration", "news", "press release", "policy", "advocacy"]
  },
  {
    id: 77,
    title: "AASU Participates in SOS International: Student Voice for a Safe and Just Transition",
    description: "Sharing African perspectives on achieving climate justice through collective responsibility.",
    path: "/news/news-sos-germany",
    category: "News & Events",
    keywords: ["sos international", "germany", "climate justice", "news", "environment", "climate action"]
  },
  {
    id: 78,
    title: "AASU Inspire Tour: Pre-Tertiary Schools Edition",
    description: "A strategic outreach designed to engage pre-tertiary students early, equipping them with leadership skills.",
    path: "/events/event-inspire-tour-2026",
    category: "News & Events",
    keywords: ["inspire tour", "volta region", "outreach", "event", "education", "students rights", "leadership"]
  },
  {
    id: 79,
    title: "NELS Project: Cohort 2 April Session",
    description: "Cohort 2 continues this April with Session 2, bringing back impactful conversations from March.",
    path: "/events/event-nels-april-2026",
    category: "News & Events",
    keywords: ["nels", "cohort 2", "april session", "event", "capacity building", "leadership"]
  },
  {
    id: 80,
    title: "Greening Skills and Qualification Dialogues: Second Session",
    description: "Join us as we unveil findings from the Green Skills and Users Engagement in Africa project.",
    path: "/events/event-greening-skills-2026",
    category: "News & Events",
    keywords: ["greening skills", "dialogues", "findings", "event", "environment", "climate action", "sustainable africa"]
  },
  {
    id: 81,
    title: "Historic AASU Honors and Inauguration Ceremony",
    description: "A historic day of honors and inauguration under the patronage of H.E. John Dramani Mahama.",
    path: "/events/event-inauguration-2026",
    category: "News & Events",
    keywords: ["honors", "inauguration", "mahamama", "event", "executive committee", "education reform"]
  },
  {
    id: 82,
    title: "Learning Planet Festival 2026 — Students & Youth Session",
    description: "Explore how green skills can support a just, resilient, and sustainable Africa.",
    path: "/events/event-learning-planet-2026",
    category: "News & Events",
    keywords: ["learning planet", "festival", "green skills", "event", "environment", "climate action"]
  },
  {
    id: 83,
    title: "The Ghana Agribusiness Future Forum",
    description: "Combating the Galamsey Threat to Agribusiness and Sustainable Food Security.",
    path: "/events/event-agribusiness-forum-2025",
    category: "News & Events",
    keywords: ["agribusiness", "forum", "galamsey", "event", "capacity building", "sustainability", "food security"]
  },
  {
    id: 84,
    title: "UB School of Management Graduate Info Session",
    description: "Get first-hand insights on graduate programs and admissions tips from UB advisors.",
    path: "/events/event-buffalo-session-2025",
    category: "News & Events",
    keywords: ["buffalo", "university", "graduate", "event", "education", "study abroad"]
  },
  {
    id: 85,
    title: "Her Future: Women Empowerment Program",
    description: "Building Bold Women for a Bold Tomorrow featuring Mr. Divine Edem Kwadzoden.",
    path: "/events/event-her-future-2025",
    category: "News & Events",
    keywords: ["her future", "empowerment", "women", "event", "gender advocacy", "leadership"]
  },
  {
    id: 86,
    title: "MCO Anniversary 2025 | King’s College London",
    description: "Strategic perspectives on strengthening student engagement and future-focused leadership.",
    path: "/events/event-mco-anniversary-2025",
    category: "News & Events",
    keywords: ["mco", "king's college", "london", "event", "education", "student engagement"]
  },
  {
    id: 87,
    title: "FREE Breast Cancer Screening Event",
    description: "Free screening event in collaboration with Verna Mineral Water and Zahity Foundations.",
    path: "/events/event-breast-cancer-screening-2025",
    category: "News & Events",
    keywords: ["breast cancer", "screening", "free", "event", "capacity building", "community health"]
  },
  {
    id: 88,
    title: "International Day of the Girl Child 2025",
    description: "“The Girl I Am, The Change I Lead: Girls in the Frontline of Crises.”",
    path: "/events/event-girl-child-day-2025",
    category: "News & Events",
    keywords: ["girl child", "international day", "unicef", "event", "gender advocacy", "girls lead"]
  },
  {
    id: 89,
    title: "SOS International Member Exchange 2025",
    description: "Hear inspirational case studies from around the globe from the SOS network.",
    path: "/events/event-sos-exchange-2025",
    category: "News & Events",
    keywords: ["sos international", "exchange", "case studies", "event", "environment", "climate action"]
  },
  {
    id: 90,
    title: "BNSU Launches Green Office Burundi: A Milestone for Sustainability",
    description: "Empowering students and universities to drive climate action and green innovation.",
    path: "/news/news-burundi-green-office",
    category: "News & Events",
    keywords: ["burundi", "green office", "bnsu", "news", "environment", "climate action"]
  },
  {
    id: 91,
    title: "AASU Launches NELS – Next Level Skills for Student Leaders",
    description: "Collaboration in the Erasmus+ funded project NELS brings together 12 prestigious partner institutions.",
    path: "/news/news-nels-launch-brussels",
    category: "News & Events",
    keywords: ["nels", "brussels", "erasmus+", "news", "capacity building", "student leadership"]
  },
  {
    id: 92,
    title: "AASU Delegation at the 2025 SOS-International Summit in Ghent",
    description: "Passionate changemakers represented the heartbeat of a continent rising to meet the climate crisis.",
    path: "/news/news-sos-ghent-2025",
    category: "News & Events",
    keywords: ["sos summit", "ghent", "belgium", "news", "environment", "climate action", "climate justice"]
  },
  {
    id: 93,
    title: "Pad A Girl Campaign: Empowering Dignity in Menstruation",
    description: "Breaking the stigma and supporting school attendance at Madina M/A KG and Primary.",
    path: "/news/news-pad-a-girl-madina",
    category: "News & Events",
    keywords: ["pad a girl", "madina", "menstrual hygiene", "news", "gender advocacy", "empower her"]
  },
  {
    id: 94,
    title: "Tree-Planting Exercise: A Commitment to Climate Action",
    description: "Investing in nurturing a generation of environmentally conscious youth leaders.",
    path: "/news/news-tree-planting-oxfam",
    category: "News & Events",
    keywords: ["tree planting", "oxfam", "climate action", "news", "environment", "greening africa"]
  },
  {
    id: 95,
    title: "Strategic Meeting on Intra-African Student Mobility",
    description: "Discussions on advancing intra-African student mobility and the African Credit Transfer System (ACTS).",
    path: "/news/news-sg-obreal-meeting",
    category: "News & Events",
    keywords: ["obreal", "student mobility", "acts", "news", "policy", "advocacy", "intra-african"]
  },
  {
    id: 96,
    title: "Eco Ambassadors Initiative Highlighted on AAU TV",
    description: "Discussing youth-led climate action and the upcoming Eco-Ambassador Training Workshop.",
    path: "/news/news-eco-ambassadors-aau-tv",
    category: "News & Events",
    keywords: ["eco ambassadors", "aau tv", "interview", "news", "environment", "climate action"]
  },
  {
    id: 97,
    title: "AASU and AIESEC Host Youth Speak Forum 2025",
    description: "Over 100 young people engaged in conversations on sustainable growth and climate action.",
    path: "/news/news-youth-speak-forum-2025",
    category: "News & Events",
    keywords: ["youth speak forum", "aiesec", "digital transformation", "news", "capacity building", "green entrepreneurship"]
  },
  {
    id: 98,
    title: "Affirmative Action Conference 2.0: Building Lasting Equity",
    description: "Unpacking the realities of patriarchy and promoting female participation in leadership.",
    path: "/news/news-affirmative-action-conference-2",
    category: "News & Events",
    keywords: ["affirmative action", "conference", "equity", "news", "gender advocacy", "patriarchy"]
  },
  {
    id: 99,
    title: "In-house Capacity-Building on Qualitative Research Methods",
    description: "Equipping staff and interns with critical tools for effective policy development and advocacy.",
    path: "/news/news-qualitative-research-training",
    category: "News & Events",
    keywords: ["qualitative research", "training", "capacity", "news", "capacity building", "research training"]
  },
  {
    id: 100,
    title: "Continental Youth Consultations on Reparations and Justice",
    description: "Asserting that reparative justice must include dismantling colonial economic structures.",
    path: "/news/news-reparations-justice-dialogue",
    category: "News & Events",
    keywords: ["reparations", "justice", "african union", "news", "policy", "advocacy", "reparative justice"]
  },
  {
    id: 101,
    title: "AASU at the World Youth Conference for Peace – China 2025",
    description: "Highlighting the role of African youth in shaping a peaceful, inclusive, and just world.",
    path: "/news/news-world-youth-peace-china",
    category: "News & Events",
    keywords: ["world youth conference", "china", "peace", "news", "executive committee", "global youth voices"]
  },
  {
    id: 102,
    title: "Eco Ambassadors Workshop 2025: Youth for Sustainable Futures",
    description: "Empowering young people to become agents of environmental change through higher education.",
    path: "/news/news-eco-ambassadors-workshop-2025",
    category: "News & Events",
    keywords: ["eco ambassadors", "workshop", "sustainable futures", "news", "environment", "climate action", "green jobs"]
  },
  {
    id: 103,
    title: "AASU Pays Tribute to Hon. Dr. Murtala Mohammed",
    description: "Mourning the loss of a champion for the environment and a towering figure in student leadership.",
    path: "/news/news-murtala-mohammed-condolences",
    category: "News & Events",
    keywords: ["murtala mohammed", "tribute", "condolences", "news", "executive committee", "champion"]
  },
  {
    id: 104,
    title: "Candlelight Procession for Fallen Heroes",
    description: "Mourning the lives lost in the tragic military helicopter crash in Sikaman, Ghana.",
    path: "/news/news-candlelight-procession-sikaman",
    category: "News & Events",
    keywords: ["candlelight procession", "fallen heroes", "sikaman", "news", "policy", "advocacy", "memorial"]
  },
  {
    id: 105,
    title: "AASU at the FemNet4GTE Africa Regional Workshop",
    description: "Strengthening regional action for Gender-Transformative Education (GTE) across Africa.",
    path: "/news/news-femnet4gte-nairobi",
    category: "News & Events",
    keywords: ["femnet4gte", "nairobi", "gender-transformative", "news", "gender advocacy", "education"]
  },
  {
    id: 106,
    title: "AASU Represents African Women at Winta Coaching 2025",
    description: "Building strategies for inclusive leadership and empowerment in Baden, Switzerland.",
    path: "/news/news-winta-coaching-switzerland",
    category: "News & Events",
    keywords: ["winta coaching", "switzerland", "women leadership", "news", "gender advocacy", "empowerment"]
  },
  {
    id: 107,
    title: "14th Elective Congress Portal",
    description: "Access official documents, election guidelines, and nomination forms for the 14th Elective Congress.",
    path: "/14th-congress",
    category: "Resources",
    keywords: ["14th congress", "portal", "nomination", "guidelines", "election", "documents", "announcement"]
  },
  {
    id: 108,
    title: "Africa Music, Art & Cultural Exhibition (AMACE) 2023",
    description: "A vibrant celebration of African culture held in Lusaka, Zambia, promoting youth art and heritage.",
    path: "/news/amace-2023-lusaka",
    category: "News & Events",
    keywords: ["amace", "culture", "art", "zambia", "lusaka", "exhibition", "heritage", "pan-africanism"]
  },
  {
    id: 109,
    title: "Fifth Young Scientists Congress — Russia 2025",
    description: "AASU participates in global scientific cooperation dialogues at the Sirius University of Science and Technology.",
    path: "/news/russia-scientific-cooperation-2025",
    category: "News & Events",
    keywords: ["russia", "scientists", "congress", "scientific cooperation", "sirius", "innovation", "technology"]
  },
  {
    id: 110,
    title: "Call for Bid to Host the 14th Elective Congress",
    description: "Inquiry and template for member unions interested in hosting the landmark 14th Elective Congress in 2025.",
    path: "/news/call-for-bid-14th-congress",
    category: "News & Events",
    keywords: ["bid", "host", "14th congress", "bidding template", "hosting", "congress venue"]
  },
  {
    id: 111,
    title: "Privacy Policy",
    description: "Learn how AASU protects your personal information and ensures data transparency.",
    path: "/privacy",
    category: "Other",
    keywords: ["privacy", "policy", "data protection", "security", "terms", "transparency"]
  },
  {
    id: 112,
    title: "NELS – Spring 2026 Programme Registration",
    description: "Registration is open for the Next Level Skills for Student Leaders Spring 2026 programme.",
    path: "/news/nels-spring-2026",
    category: "News & Events",
    keywords: ["nels", "leadership", "spring 2026", "registration", "skills", "training", "statement", "programme"]
  },
  {
    id: 113,
    title: "Commemoration of the 1994 Genocide Against the Tutsi",
    description: "Official statement on the 2026 remembrance of the tragic chapter in Rwanda's history.",
    path: "/news/rwanda-genocide-remembrance-2026",
    category: "News & Events",
    keywords: ["rwanda", "genocide", "remembrance", "tutsi", "statement", "solidarity"]
  },
  {
    id: 114,
    title: "14th Elective Congress Election Results",
    description: "Official declaration of results for the second and final phase of AASU's 14th Elective Congress.",
    path: "/news/elections-results-final-phase",
    category: "News & Events",
    keywords: ["election results", "winners", "14th congress", "secretariat", "executive committee", "statement", "official results"]
  },
  {
    id: 115,
    title: "Youth, Peace and Security Report (2023)",
    description: "Critical analysis of youth roles in peacebuilding and security frameworks across Africa.",
    path: "/reports",
    category: "Resources",
    keywords: ["youth peace and security", "peacebuilding", "security", "yps", "peace", "report 2023"]
  },
  {
    id: 116,
    title: "AASU Annual Report 2022 (Released 2023)",
    description: "Comprehensive overview of AASU's activities, impact, and financial standing for 2022.",
    path: "/reports",
    category: "Resources",
    keywords: ["annual report 2022", "2022 report", "annual report v5", "financial summary", "impact report"]
  },
  {
    id: 117,
    title: "ECOWAS - Strategic Partner",
    description: "Economic Community of West African States partnership with AASU on regional education.",
    path: "/partners",
    category: "Partners",
    keywords: ["ecowas", "west africa", "strategic partner", "regional integration"]
  },
  {
    id: 118,
    title: "SADC - Strategic Partner",
    description: "Southern African Development Community partnership on student mobility.",
    path: "/partners",
    category: "Partners",
    keywords: ["sadc", "southern africa", "strategic partner", "student mobility"]
  },
  {
    id: 119,
    title: "AAU - Association of African Universities",
    description: "Academic partner collaborating on higher education quality assurance.",
    path: "/partners",
    category: "Partners",
    keywords: ["aau", "association of african universities", "higher education", "quality assurance"]
  },
  {
    id: 120,
    title: "University at Buffalo - Academic Partner",
    description: "Academic partnership for graduate programs and admissions tips.",
    path: "/partners",
    category: "Partners",
    keywords: ["buffalo", "university at buffalo", "ub", "academic partner", "study abroad"]
  },
  {
    id: 121,
    title: "University of Ghana (UG)",
    description: "Premier academic partner and student advocacy hub.",
    path: "/partners",
    category: "Partners",
    keywords: ["ug", "university of ghana", "legon", "academic partner"]
  },
  {
    id: 122,
    title: "University of Cape Coast (UCC)",
    description: "Academic partner for teacher education and excellence.",
    path: "/partners",
    category: "Partners",
    keywords: ["ucc", "university of cape coast", "academic partner"]
  },
  {
    id: 123,
    title: "University of Education, Winneba (UEW)",
    description: "Specialized academic partner for teacher rights and education.",
    path: "/partners",
    category: "Partners",
    keywords: ["uew", "winneba", "university of education", "academic partner"]
  },
  {
    id: 124,
    title: "Pure Earth - NGO Partner",
    description: "Environmental health and pollution prevention partner.",
    path: "/partners",
    category: "Partners",
    keywords: ["pure earth", "pollution", "environment", "ngo partner"]
  },
  {
    id: 125,
    title: "Obaasima Campaign",
    description: "Menstrual hygiene and girl-child empowerment partner.",
    path: "/partners",
    category: "Partners",
    keywords: ["obaasima", "pad a girl", "menstruation", "gender advocacy"]
  },
  {
    id: 126,
    title: "Prescott Hospital, Ghana",
    description: "Medical partner for student wellness and event health screenings.",
    path: "/partners",
    category: "Partners",
    keywords: ["prescott hospital", "health", "wellness", "medical partner"]
  }
];

export default searchData;


export const documents = [
  { title: "Impact Report 2024", year: "2024", type: "Report", link: "/AASU IMPACT REPORT 2024.pdf" },
  { title: "Impact Report 2023", year: "2023", type: "Report", link: "/Impact Report AASU 2023.pdf" },
  { title: "Impact Report 2025", year: "2025", type: "Report", link: "/impact report - 2025.pdf" },
  { title: "Annual Report 2023", year: "2023", type: "Report", link: "/Annual REPORT 2023.pdf" },
  { title: "Mid-Year Report 2022", year: "2022", type: "Report", link: "/2022 MID-YEAR REPORT.pdf" },
  { title: "Annual Report 2020", year: "2020", type: "Report", link: "/2020 Annual Report.pdf" },
  { title: "Activity Report 2019", year: "2019", type: "Report", link: "/2019 activity report.pdf" },
  { title: "Annual Report 2018", year: "2018", type: "Report", link: "/2018 Annual report.pdf" },
  { title: "Annual Report 2017", year: "2017", type: "Report", link: "/2017 annual report.pdf" },
  { title: "Work Plan 2026", year: "2026", type: "Work Plan", link: "/2026 WORK PLAN.pdf" },
  { title: "Work Plan 2025", year: "2025", type: "Work Plan", link: "/WORK PLAN 2025.pdf" },
  { title: "AASU Workplan", year: "General", type: "Work Plan", link: "/AASU WORKPLAN.pdf" },
  { title: "13th Congress Resolutions (EN)", year: "Congress", type: "Policy", link: "/13th Congress Resolutions.pdf" },
  { title: "13th Congress Resolutions (FR)", year: "Congress", type: "Policy", link: "/13th Congress Resolutions(FR).pdf" },
  { title: "Gender Policy", year: "Policy", type: "Policy", link: "/GENDER POLICY.pdf" },
  { title: "Election Observer Report", year: "Governance", type: "Report", link: "/ELECTION OBSERVER REPORT.pdf" },
  { title: "SDG4 Concept Note", year: "Education", type: "Concept Note", link: "/Concept Note for SDG4.pdf" },
  { title: "Climate Change & SDGs", year: "Climate", type: "Policy", link: "/CLIMATE CHANGE, the SDGs.pdf" },
  { title: "Green Skills Green Jobs Report", year: "Climate", type: "Report", link: "/REPORT_GREEN SKILLS GREEN JOBS.pdf" },
];

export const programs = [
  { 
    title: "Justice for Africa Campaign", 
    desc: "Driving a continent-wide movement for fair and inclusive education systems.",
    link: "/programs",
    status: "Flagship"
  },
  { 
    title: "4.0 Skills Training Program", 
    desc: "Turning education into employability through future-ready digital skills.",
    link: "/programs",
    status: "Flagship"
  },
  { 
    title: "Youth Mobility Programme", 
    desc: "Unlocking global opportunities for African students without borders.",
    link: "/programs",
    status: "Flagship"
  },
  { 
    title: "Climate Action & Education", 
    desc: "Empowering students to lead Africa’s sustainable future.",
    link: "/programs",
    status: "Flagship"
  },
  { 
    title: "Gender Equity & Empowerment", 
    desc: "Building an inclusive Africa where every student has equal opportunity.",
    link: "/programs",
    status: "Flagship"
  },
  { 
    title: "Student Leadership & Governance", 
    desc: "Empowering the next generation of African leaders and changemakers.",
    link: "/programs",
    status: "Flagship"
  }
];

export const intents = [
  {
    keywords: ["what is aasu", "about aasu", "who are you", "what does the union do"],
    answer: "The All-Africa Students Union (AASU) is the largest student umbrella organization in Africa, representing students from primary to tertiary levels across 54 African countries. We advocate for students' rights, education quality, and democratic governance.",
    links: [{ label: "About Us", url: "/profile" }, { label: "Our Structure", url: "/profile#structure" }]
  },
  {
    keywords: ["priority areas", "strategic priorities", "what do you focus on"],
    answer: "AASU focuses on 7 key strategic areas: Education & Students' Rights, Gender Equity, Democracy & Governance, Capacity Building, Migration & Mobility, Climate Action, and Pan-Africanism.",
    links: [{ label: "Explore Priorities", url: "/" }]
  },
  {
    keywords: ["partner", "collaboration", "work with you", "donor", "ngo"],
    answer: "We collaborate with governments, NGOs, and international institutions to drive student-led change. Organizations can partner with us on specific projects or long-term initiatives.",
    links: [{ label: "Partner With Us", url: "/contact" }, { label: "Our Partners", url: "/partners" }]
  },
  {
    keywords: ["scholarship", "internship", "exchange", "opportunity", "training"],
    answer: "AASU provides various opportunities including the Mobility & Exchange programs, Leadership training via NELS, and periodic internship vacancies within our technical team.",
    links: [{ label: "Mobility & Exchanges", url: "/priority/migration" }, { label: "Capacity Building", url: "/priority/capacity" }]
  },
  {
    keywords: ["membership", "join aasu", "my country", "national union"],
    answer: "Membership is open to National Student Unions, youth groups, and student organizations. We represent 54 African countries through their respective national unions.",
    links: [{ label: "Membership Info", url: "/membership" }, { label: "Become a Member", url: "/become-a-member" }]
  },
  {
    keywords: ["contact", "location", "address", "email", "phone"],
    answer: "Our Secretariat is located in Accra, Ghana. You can reach us at info@aasuonline.org or via our contact form.",
    links: [{ label: "Contact Page", url: "/contact" }]
  },
  {
    keywords: ["leaders", "executives", "secretariat", "who is the president"],
    answer: "AASU is led by an Executive Committee elected during the Congress. Our Technical Team manages the day-to-day operations at the Secretariat.",
    links: [{ label: "Executive Committee", url: "/executives" }, { label: "Technical Team", url: "/technical-team" }]
  }
];

export const quickActions = [
  { label: "📄 Find Reports", query: "reports" },
  { label: "🚀 Current Programs", query: "programs" },
  { label: "🤝 Partner With Us", query: "partner" },
  { label: "🎓 Opportunities", query: "opportunity" },
  { label: "🧭 About AASU", query: "about" }
];

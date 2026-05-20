/**
 * AASU Reports & Documents Data
 */

export const DOCUMENT_TYPES = {
  ANNUAL_REPORT: 'Annual Report',
  MID_YEAR_REPORT: 'Mid-year Report',
  CONCEPT_NOTE: 'Concept Note',
  PROGRAM_REPORT: 'Program Report',
  PROPOSAL: 'Proposal',
  POLICY_BRIEF: 'Policy Brief',
  CASE_BOOK: 'Case Book',
  COLLABORATIVE_REPORT: 'Collaborative Report',
  BROCHURE: 'Brochure',
  OTHER: 'Other'
};

export const PRIORITY_AREAS = [
  "Education & Students' Rights",
  "Gender Equity & Social Inclusion",
  "Democracy, Good Governance, Peace & Security",
  "Capacity Building, Skills Development & Employability",
  "Migration, Mobility & Exchanges",
  "Climate Action and Environmental Sustainability",
  "Pan-Africanism & African Culture",
  "General"
];

export const reportsData = [
  {
    id: 'report-2025-annual',
    title: 'AASU Annual Report 2025',
    type: DOCUMENT_TYPES.ANNUAL_REPORT,
    year: '2026',
    priorityArea: 'General',
    description: 'The official annual report of the All-Africa Students Union (AASU) for the year 2025, detailing our comprehensive activities and financial summaries.',
    fileUrl: '/AASU 2025 report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-2025-impact',
    title: 'AASU Impact Report 2025',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2026',
    priorityArea: 'General',
    description: 'A detailed analysis of AASU\'s impact and reach across the African continent during the 2025 period.',
    fileUrl: '/impact report - 2025.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-asgi',
    title: 'Africa Students Governance Index',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2026',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Concept note for the Africa Students Governance Index (ASGI) initiative.',
    fileUrl: '/ASGI CONCEPT NOTE.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-backpack-hope-2026',
    title: 'AASU Backpack of Hope',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2026',
    priorityArea: 'Migration, Mobility & Exchanges',
    description: 'Report on the AASU Backpack of Hope program supporting students in need.',
    fileUrl: '/AASU BACKPACK OF HOPE.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-youth-gender-climate-2025',
    title: 'Africa Youth Gender and Climate Conference',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2025',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Report from the Africa Youth Gender and Climate Conference.',
    fileUrl: '/Africa Youth Gender and Climate Conference.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-ess-2023',
    title: 'AASU Education Support Services',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2023',
    priorityArea: "Education & Students' Rights",
    description: 'Report detailing AASU\'s Education Support Services (ESS) initiatives in 2023.',
    fileUrl: '/AASU ESS.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-africa-health-excon-2022',
    title: 'Africa Health Excon Report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2022',
    priorityArea: 'General',
    description: 'Report from the Africa Health Excon event.',
    fileUrl: '/Africa Health Excon.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-covid-global-action-2021',
    title: 'Solidifying global action in response to the covid-19 pandemic - The politics of covid vaccines and implications for developing countries',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2021',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Analysis of the politics of COVID-19 vaccines and their implications for developing countries.',
    fileUrl: '/Solidifying Global Action.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'case-gbv-everyone-business-2021',
    title: 'Why Gender-Based Violence is Everyone\'s Business',
    type: DOCUMENT_TYPES.CASE_BOOK,
    year: '2021',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'A case book exploring the multi-faceted nature of gender-based violence and the collective responsibility to address it.',
    fileUrl: '/Gender - Fighting gender violence 2.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-election-observer-2021',
    title: 'Election observer mission concept note',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Concept note for the AASU Election Observer Mission initiative in 2021.',
    fileUrl: '/ELECTION OBSERVER MISSION CONCEPT NOTE.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-regional-dgg-2021',
    title: 'Regional conferences on dgg concept note',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Framework for regional conferences on Democracy and Good Governance (DGG).',
    fileUrl: '/REGIONAL CONFERENCES on DGG CONCEPT NOTE.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-eep-2021',
    title: 'Concept Note for Education Enrolment Programme',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: "Education & Students' Rights",
    description: 'Strategic plan for the AASU Education Enrolment Programme (EEP).',
    fileUrl: '/Concept Note for EEP.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-qap-2021',
    title: 'AASU Higher Education Quality Assurance Ambassadors Project (QAP)',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: "Education & Students' Rights",
    description: 'Concept note for the Higher Education Quality Assurance Ambassadors Project.',
    fileUrl: '/Concept note for Quality Assurance.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-sdg4-2021',
    title: 'SDG 4 Monitoring Plan of Action',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: "Education & Students' Rights",
    description: 'Framework for monitoring the progress of Sustainable Development Goal 4 (Quality Education).',
    fileUrl: '/Concept Note for SDG4.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-so-clim-2021',
    title: 'AASU SO CLIM project',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Initiative focusing on climate awareness and student engagement.',
    fileUrl: '/AASU SO CLIM.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-activists-changemakers-2023',
    title: 'Activists and Changemakers - Why Students should be the Hope to combat Environment and Climate Change',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2023',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Exploration of student activism as a catalyst for environmental and climate change combat.',
    fileUrl: '/ACTIVVISTS 7 CHANGEMAKERS.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-tree-planting-2021',
    title: 'Tree planting project',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Framework for AASU\'s continent-wide tree planting and reforestation project.',
    fileUrl: '/tree planting_compressed.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-girls-stem-2021',
    title: 'Girls in Stem Project',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'Empowering girls to pursue careers in Science, Technology, Engineering, and Mathematics.',
    fileUrl: '/CONCEPT NOTE FOR GIRLS IN STEM.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-girls-back-to-school-2021',
    title: 'Girls Back to School Project',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'Initiative to support girls returning to school following various disruptions.',
    fileUrl: '/GIRLS BACK TO SCHOOL BACKGROUND PROJECT.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-human-trafficking-2021',
    title: 'Campaign against human trafficking',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Migration, Mobility & Exchanges',
    description: 'Advocacy campaign to raise awareness and combat human trafficking among students.',
    fileUrl: '/CAMPAIGN AGAINST HUMAN TRAFFICKING.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-decent-work-2021',
    title: 'Decent Work Initiative - Young People in Quality Jobs and Decent Work for a Better World',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Migration, Mobility & Exchanges',
    description: 'Strategy for promoting quality jobs and decent working conditions for young people.',
    fileUrl: '/Concept Note for decent work.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-student-migrants-2021',
    title: 'Supporting student migrants and displaced children in the Covid-19 Era',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Migration, Mobility & Exchanges',
    description: 'Addressing the unique challenges faced by student migrants during the pandemic.',
    fileUrl: '/supporting student migrant.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-diaspora-connect-2023',
    title: 'Diaspora youth connect project',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2023',
    priorityArea: 'Pan-Africanism & African Culture',
    description: 'Initiative to bridge the gap between African youth and the diaspora.',
    fileUrl: '/diaspora youth connect project.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-student-refugee-2023',
    title: 'Student Refugee Project',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2023',
    priorityArea: 'Pan-Africanism & African Culture',
    description: 'Providing support and integration opportunities for student refugees.',
    fileUrl: '/Student Refugee Project.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-disability-2021',
    title: 'Students with Disability',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: 'Pan-Africanism & African Culture',
    description: 'Advocating for inclusive education and rights for students with disabilities.',
    fileUrl: '/Students with Disability.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-higher-edu-recognition-2021',
    title: 'Global convention on the recognition of Higher Education qualifications - a perspective from the student community',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2021',
    priorityArea: "Education & Students' Rights",
    description: 'Perspective from the student community on the global convention for recognition of higher education qualifications.',
    fileUrl: '/AASU Education Collab.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-funding-gap-2023',
    title: 'ADDRESSING THE FUNDING GAP - How African Governments can build resilience to financial education in emergencies',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2023',
    priorityArea: "Education & Students' Rights",
    description: 'Report on building resilience to financial education in emergency situations across Africa.',
    fileUrl: '/ADDRESSING THE FUNDING GAP.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-climate-sdgs-2021',
    title: 'Climate Change, the SDGs and Africa',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2021',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Analysis of climate change impacts and the Sustainable Development Goals (SDGs) in the African context.',
    fileUrl: '/CLIMATE CHANGE, the SDGs.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-13th-congress-2021',
    title: 'Report on the 13th elective congress',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2021',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Official record of the proceedings and outcomes of the 13th AASU Elective Congress.',
    fileUrl: '/report on the 13th elective congress.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-13th-congress-fr-2021',
    title: 'Report on the 13th elective congress - French Version',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2021',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Version française du rapport sur le 13ème congrès électif de l\'AASU.',
    fileUrl: '/report on the 13th elective congress(FR).pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-educators-forum-2021',
    title: 'Africa Educators\' Forum',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2021',
    priorityArea: "Education & Students' Rights",
    description: 'Framework for the Africa Educators\' Forum initiative.',
    fileUrl: '/AFRICA EDUCATORS\' FORUM.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-breast-cancer-activism-2024',
    title: 'Breast Cancer and Sixteen Days of Activism',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2024',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'Concept note for AASU\'s breast cancer awareness and activism program.',
    fileUrl: '/BREAST CANCER.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-girl-child-day-2022',
    title: 'International Day of the Girl Child',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2022',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'Strategic plan for commemorating the International Day of the Girl Child.',
    fileUrl: '/INT. OF THE GIRL CHILD.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-eep-2022',
    title: 'Education Enrolment Programme',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2022',
    priorityArea: "Education & Students' Rights",
    description: 'Implementation plan for the 2022 AASU Education Enrolment Programme.',
    fileUrl: '/Concept Note for EEP (2022) .pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'policy-gender-2022',
    title: 'Gender Policy',
    type: DOCUMENT_TYPES.POLICY_BRIEF,
    year: '2022',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'AASU\'s official policy framework for ensuring gender equity across its operations.',
    fileUrl: '/GENDER POLICY.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-haqaa3-pre-dissemination-2025',
    title: 'HAQAA3 PRE-DISSEMINATION Report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2025',
    priorityArea: "Education & Students' Rights",
    description: 'Pre-dissemination report for the HAQAA3 project focusing on higher education quality assurance.',
    fileUrl: '/HAQAA3 PRE-DISSEMINATION PROJECT .pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'doc-nels-syllabus-2025',
    title: '2025 NELS Syllabus',
    type: DOCUMENT_TYPES.OTHER,
    year: '2025',
    priorityArea: 'Capacity Building, Skills Development & Employability',
    description: 'Official syllabus for the 2025 Next Level Skills (NELS) program.',
    fileUrl: '/NELS syllabus.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'doc-nels-logistical-pack-2025',
    title: 'NELS Participant Logistical Pack',
    type: DOCUMENT_TYPES.OTHER,
    year: '2025',
    priorityArea: 'Capacity Building, Skills Development & Employability',
    description: 'Comprehensive logistical information for participants of the NELS program.',
    fileUrl: '/NELS-PARTICIPANT LOGISTICAL PACK.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'doc-nels-one-sheet-2025',
    title: 'NELS One Sheet (A4)',
    type: DOCUMENT_TYPES.BROCHURE,
    year: '2025',
    priorityArea: 'Capacity Building, Skills Development & Employability',
    description: 'Summary overview of the NELS program in a one-sheet format.',
    fileUrl: '/NELS-ONE SHEET-A4.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-inauguration-ceremony',
    title: 'Report on the AASU Handing Over, Inauguration and Honours Ceremony',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2026',
    priorityArea: 'General',
    description: 'Official record of the leadership transition and inauguration ceremony for the 2026-2029 term.',
    fileUrl: '/report on the AASU handing over and Inauguration and Honours ceremony.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-adolescent-360',
    title: 'Adolescent 360 Concept Note',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2026',
    priorityArea: 'Migration, Mobility & Exchanges',
    description: 'Strategic framework for the Adolescent 360 initiative focusing on youth health and empowerment.',
    fileUrl: '/ADOLESCENT 360.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'case-decolonising-education',
    title: 'Decolonising Education in Africa - why Pan-Africanism can Break the Jinx',
    type: DOCUMENT_TYPES.CASE_BOOK,
    year: '2021',
    priorityArea: 'Pan-Africanism & African Culture',
    description: 'An analysis of decolonising education systems in Africa through the lens of Pan-Africanism.',
    fileUrl: '/decolonising - 2021.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'case-election-observer',
    title: 'Election Observer Mission Report',
    type: DOCUMENT_TYPES.CASE_BOOK,
    year: '2021',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Findings and recommendations from AASU\'s election observation mission.',
    fileUrl: '/ELECTION OBSERVER REPORT.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'case-education-social-contract',
    title: 'Rewriting the 3rd Education Social Contract to Create an Equitable Society for All',
    type: DOCUMENT_TYPES.CASE_BOOK,
    year: '2021',
    priorityArea: "Education & Students' Rights",
    description: 'A publication exploring equitable education frameworks for a better society.',
    fileUrl: '/ESR publication v2.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'brochure-inauguration',
    title: 'AASU Inauguration and Honours Ceremony Brochure',
    type: DOCUMENT_TYPES.BROCHURE,
    year: '2025',
    priorityArea: 'General',
    description: 'Commemorative brochure for the AASU Inauguration and Honours Ceremony.',
    fileUrl: '/BROCHURE for the AASU inaguration and Honours Ceremony.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'concept-breast-cancer',
    title: 'Breast Cancer Awareness Concept Note',
    type: DOCUMENT_TYPES.CONCEPT_NOTE,
    year: '2025',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'Framework for AASU\'s continent-wide breast cancer awareness and screening campaign.',
    fileUrl: '/Breast cancer - concept note.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'case-4th-ir',
    title: 'The 4th Industrial Revolution and African Higher Education',
    type: DOCUMENT_TYPES.CASE_BOOK,
    year: '2025',
    priorityArea: "Capacity Building, Skills Development & Employability",
    description: 'Exploring the impacts and opportunities of the 4th Industrial Revolution for African students.',
    fileUrl: '/4th Industrial Revolution.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-2022-midyear',
    title: 'AASU Mid-Year Report 2022',
    type: DOCUMENT_TYPES.MID_YEAR_REPORT,
    year: '2022',
    priorityArea: 'General',
    description: 'Summary of activities and progress during the first half of 2022.',
    fileUrl: '/2022 MID-YEAR REPORT.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-2020-annual',
    title: 'AASU Annual Report 2020',
    type: DOCUMENT_TYPES.ANNUAL_REPORT,
    year: '2020',
    priorityArea: 'General',
    description: 'Annual report detailing AASU\'s work and challenges during the 2020 global pandemic.',
    fileUrl: '/2020 Annual Report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-2019-activity',
    title: 'AASU Activity Report 2019',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2019',
    priorityArea: 'General',
    description: 'Highlighting the key activities and advocacy efforts undertaken by AASU in 2019.',
    fileUrl: '/2019 activity report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-2018-annual',
    title: 'AASU Annual Report 2018',
    type: DOCUMENT_TYPES.ANNUAL_REPORT,
    year: '2018',
    priorityArea: 'General',
    description: 'Comprehensive annual report for the year 2018.',
    fileUrl: '/2018 Annual report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-2017-annual',
    title: 'AASU Annual Report 2017',
    type: DOCUMENT_TYPES.ANNUAL_REPORT,
    year: '2017',
    priorityArea: 'General',
    description: 'Archive of AASU\'s activities and reports from 2017.',
    fileUrl: '/2017 annual report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-visit-kapaia-2025',
    title: 'Visit of Ms. Augusta Maravilha Kapaia',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2025',
    priorityArea: 'General',
    description: 'Official report on the visit of Ms. Augusta Maravilha Kapaia.',
    fileUrl: '/VISIT OF MS. AUGUSTA MARAVILHA KAPAIA.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'other-travel-advisory-ghana-2026',
    title: 'Travel Advisory - UB Trip to Ghana',
    type: DOCUMENT_TYPES.OTHER,
    year: '2026',
    priorityArea: 'General',
    description: 'Travel advisory information for the UB Trip to Ghana in 2026.',
    fileUrl: '/Travel_Advisory_-_UB_Trip_to_Ghana_(2026).pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'other-ub-trip-ghana-2026',
    title: 'UB Trip to Ghana',
    type: DOCUMENT_TYPES.OTHER,
    year: '2026',
    priorityArea: 'General',
    description: 'Information regarding the UB Trip to Ghana in 2026.',
    fileUrl: '/UB Trip to Ghana - 2026.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'other-aasu-workplan-2021',
    title: 'AASU Workplan',
    type: DOCUMENT_TYPES.OTHER,
    year: '2021',
    priorityArea: 'General',
    description: 'Official AASU Workplan for the 2021 period.',
    fileUrl: '/AASU WORKPLAN.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'other-workplan-2026',
    title: '2026 Work Plan',
    type: DOCUMENT_TYPES.OTHER,
    year: '2026',
    priorityArea: 'General',
    description: 'Operational work plan for the year 2026.',
    fileUrl: '/2026 WORK PLAN.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'other-workplan-2025',
    title: 'Work Plan 2025',
    type: DOCUMENT_TYPES.OTHER,
    year: '2025',
    priorityArea: 'General',
    description: 'Operational work plan for the year 2025.',
    fileUrl: '/WORK PLAN 2025.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-impact-2023',
    title: 'Impact Report AASU 2023',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2023',
    priorityArea: 'General',
    description: 'Comprehensive impact report detailing AASU\'s achievements in 2023.',
    fileUrl: '/Impact Report AASU 2023.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-impact-2024',
    title: 'AASU Impact Report 2024',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'General',
    description: 'Comprehensive impact report detailing AASU\'s achievements in 2024.',
    fileUrl: '/AASU IMPACT REPORT 2024.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-congress-2026',
    title: '2026 Congress Report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2026',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Official report on the 2026 AASU Congress proceedings.',
    fileUrl: '/CONGRESS REPORT.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-annual-2023',
    title: 'AASU Annual Report 2023',
    type: DOCUMENT_TYPES.ANNUAL_REPORT,
    year: '2023',
    priorityArea: 'General',
    description: 'Comprehensive annual report for the year 2023.',
    fileUrl: '/Annual REPORT 2023.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-green-skills-2024',
    title: 'Green skills green jobs report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Capacity Building, Skills Development & Employability',
    description: 'Report on green skills and employment opportunities for African youth.',
    fileUrl: '/REPORT_GREEN SKILLS GREEN JOBS.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-cultural-day-2024',
    title: 'AASU cultural day report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Pan-Africanism & African Culture',
    description: 'Report on the AASU Cultural Day celebrations.',
    fileUrl: '/cultural day report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-tree-planting-2024',
    title: 'AASU tree planting report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Progress report on AASU\'s continent-wide tree planting initiatives in 2024.',
    fileUrl: '/tree planting report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-world-cleanup-2024',
    title: 'World clean up report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Summary of AASU\'s participation and impact in World Cleanup Day activities.',
    fileUrl: '/world clean up report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-breast-cancer-screening-2024',
    title: 'Report on breast cancer screening and awareness talk',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'Detailed report on the breast cancer screening and awareness session organized by AASU.',
    fileUrl: '/Report-BREAST CANCER.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-girl-child-day-2024',
    title: 'Report on international day of the girl child',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Gender Equity & Social Inclusion',
    description: 'Outcomes and highlights from the International Day of the Girl Child commemoration.',
    fileUrl: '/Report on intenational day of the girl child.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-financial-literacy-2024',
    title: 'Report on the financial literacy conference',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Capacity Building, Skills Development & Employability',
    description: 'Report summarizing the discussions and outcomes of the Financial Literacy Conference.',
    fileUrl: '/report on the FINANCIAL LITERACY CONFERENCE.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-green-ghana-day-2024',
    title: 'Green Ghana Day Report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Climate Action and Environmental Sustainability',
    description: 'Report on AASU\'s involvement in Green Ghana Day activities.',
    fileUrl: '/Green Ghana Day, Report.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-au-summit-engagement-2024',
    title: 'AASU engagement at the AU heads of state summit',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2024',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'Report on AASU\'s advocacy and engagement during the African Union Heads of State Summit.',
    fileUrl: '/AASU ENGAGEMENT AT THE AU HEADS OF STATE SUMMIT.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-amace-2023',
    title: 'Africa Music, Art & Cultural Exhibition (AMACE) 2023 Report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2023',
    priorityArea: 'Pan-Africanism & African Culture',
    description: 'A comprehensive report on the cultural exhibition held in Lusaka, Zambia, celebrating African heritage.',
    fileUrl: '/AMACE-REPORT-2023.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-youth-peace-security-2023',
    title: 'Youth, Peace and Security Report',
    type: DOCUMENT_TYPES.PROGRAM_REPORT,
    year: '2023',
    priorityArea: 'Democracy, Good Governance, Peace & Security',
    description: 'A critical analysis of the role of youth in peacebuilding and security frameworks across the African continent.',
    fileUrl: '/YOUTH-PEACE-AND-SECURITY.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  },
  {
    id: 'report-annual-2022-v5',
    title: 'AASU Annual Report 2022',
    type: DOCUMENT_TYPES.ANNUAL_REPORT,
    year: '2023',
    priorityArea: 'General',
    description: 'The fifth version of the 2022 Annual Report, detailing the Union\'s comprehensive activities and financial summaries.',
    fileUrl: '/Annual-Report-2022-v5.pdf',
    thumbnail: '/report-thumb-placeholder.jpg'
  }
];

export const getYears = () => {
  const years = ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];
  return years;
};

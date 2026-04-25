/**
 * AASU News & Events Data
 * This structure is designed to be easily replaced by a Headless WordPress API later.
 */

export const CONTENT_TYPES = {
  NEWS: 'News',
  PRESS_RELEASE: 'Press Release',
  EVENT: 'Event',
  READOUT: 'Readout'
};

export const newsEventsData = [
  {
    id: 'event-earthday-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Environment & Climate Action',
    title: 'Earth Day Webinar: Renewable Energy and Sustainable Practices',
    img: '/earthday.jpg',
    date: '2026-04-22', 
    time: '11:00 AM – 12:00 PM',
    platform: 'Microsoft Teams',
    link: 'https://bit.ly/4sCW3BT',
    excerpt: 'The transition to a sustainable future requires all of us. Join our upcoming webinar focused on renewable energy.',
    description: `The transition to a sustainable future requires all of us. As we commemorate Earth Day, we invite you to join our upcoming webinar focused on renewable energy and sustainable practices.

Under the theme "Our Power, Our Planet," we will be exploring youth-driven climate solutions, featuring special remarks from AASU Secretary-General, Divine Edem Kwadzodeh.

Our planet is our responsibility. Let's take action together.

#EarthDay #ClimateAction #Sustainability #AASU #RenewableEnergy #AfricaYouth`,
    tags: ['EarthDay', 'ClimateAction', 'Sustainability', 'AASU', 'RenewableEnergy', 'AfricaYouth']
  },
  {
    id: 'event-haqaa3-workshop',
    type: CONTENT_TYPES.EVENT,
    category: 'Education & Students Rights',
    title: 'AASU - HAQAA3 Workshop on Student-led Case Studies',
    img: '/haqaa3.jpg',
    date: '2025-12-08',
    time: '7:00 AM GMT',
    platform: 'Press Centre, Ministry of Foreign Affairs, Accra-Ghana / Zoom',
    link: 'https://bit.ly/AASU-HAQAA3',
    excerpt: 'Understanding and Documenting Intra-Africa Mobility through student-led dialogues.',
    description: `Join us for the AASU - HAQAA3 Workshop on Student-led Case Studies happening on 8th December 2025 at 7:00am GMT at the Press Centre, Ministry of Foreign Affairs, Accra-Ghana.

Themed “Pathways Across Borders: Understanding and Documenting Intra-Africa Mobility”, this important event brings together student leaders, policymakers, and stakeholders to explore and share insights on higher education mobility across the African continent.

Participation is both physical and virtual, with an option to join via Zoom.

Don’t miss this opportunity to engage, learn, and contribute to shaping the future of African higher education.

Register here: https://bit.ly/AASU-HAQAA3
For inquiries: +233 55 860 1545 | Adonteng@aasuonline.org

#AASU #HAQAA3 #IntraAfricaMobility #AfricanYouth #EducationIntegration #StudentVoices`
  },
  {
    id: 'news-oumu-sall-ethiopia',
    type: CONTENT_TYPES.NEWS,
    category: 'Democracy & Good Governance',
    title: 'Cde. Oumu Sall Participates in African Youth Leadership Diplomatic Conference',
    img: '/osmall-hall.jpg',
    date: '2026-04-01',
    excerpt: 'ECM for West Africa engages in dialogue on regional cooperation and trade governance in Addis Ababa.',
    description: `Cde. Oumu Sall, Executive Committee Member (ECM) for West Africa of the All‑Africa Students’ Union (AASU), participated in the African Youth Leadership Diplomatic Conference held in Addis Ababa, Ethiopia.

The conference brought together young leaders, policymakers, and stakeholders from across Africa to engage in dialogue on strengthening regional cooperation, building strategic partnerships, and advancing sustainable development on the continent. During the engagements, Cde. Oumu Sall contributed to discussions centred on regional economic integration, trade governance, and promoting inclusive growth, particularly within West Africa.

Her participation underscored the All-Africa Students’ Union's commitment to strengthening youth leadership, advancing diplomacy, and fostering collaboration among African youth to promote unity, peace, and progress across the continent.`
  },
  {
    id: 'news-nsp-orientation-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: '3 Days Orientation and Training for NSPs and Interns',
    img: '/orientation.jpg',
    date: '2026-02-18',
    excerpt: 'A transformative training session focused on AASU’s strategic direction and leadership capacity.',
    description: `From 16 to 18 February 2026, the All-Africa Students Union organized a transformative three day Orientation and Training for our NSPs and Interns.

On Day One, we introduced participants to the history, structure, and operational framework of AASU. We discussed our core values, workplace standards, procurement procedures, and organizational structure.

On Day Two, our Programme Officer delivered a detailed presentation on our strategic areas: Migration, Mobility and Exchange; Climate and Environmental Sustainability; Gender Advocacy; and Education and Student Rights.

On the final day, we focused on our strategic direction under the theme "Mobilizing African Students to Drive Continental Development and Educational Excellence". This training went beyond orientation; it positioned our NSPs and Interns to contribute meaningfully to the work of AASU.`
  },
  {
    id: 'news-upsa-nels-meeting',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'UPSA Hosts 3rd Strategic Project Meeting of the NELS Project',
    img: '/upsa-123.jpg',
    date: '2026-03-28',
    excerpt: 'Reaffirming commitment to student leadership development and international academic collaboration.',
    description: `The University of Professional Studies, Accra (UPSA) is hosting the 3rd Strategic Project Meeting of the Next Level Skills for Student Leaders (NELS) Project, reaffirming its commitment to advancing student leadership development and international academic collaboration.

The NELS Project, a global initiative implemented by a consortium of leading universities in Europe and Africa, is designed to build the capacity of student leaders through enhanced leadership, digital, and intercultural competencies.

Hosting the third strategic NELS meeting highlights UPSA’s growing role in fostering international cooperation and driving innovative projects that empower the next generation of student leaders.`
  },
  {
    id: 'news-handing-over-ceremony',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'AASU Successfully Completes Handing-Over and Inauguration Ceremony',
    img: '/innog.jpg',
    date: '2026-02-15',
    excerpt: 'Officially transitioning leadership to the new administration for the 2026–2029 term.',
    description: `The All-Africa Students Union (AASU) has successfully completed its Handing-Over, Inauguration and Honours Ceremony, officially transitioning leadership to the new administration for the 2026–2029 term.

Held at the Press Centre of the Ministry of Foreign Affairs, Accra, the ceremony brought together student leaders, partners, diplomats, and stakeholders from across the continent to celebrate continuity and unity.

We extend our appreciation to all partners, guests, and the AASU Secretariat for making this milestone possible.

#AASU #PanAfricanism #StudentLeadership #AfricaRising`
  },
  {
    id: 'news-inqaahe-forum',
    type: CONTENT_TYPES.NEWS,
    category: 'Education & Students Rights',
    title: 'AASU Represents African Students at INQAAHE 15th Biennial Forum 2026',
    img: '/inquaa.jpg',
    date: '2026-03-15',
    excerpt: 'Positioning students as critical agents in building resilient, future-ready quality assurance systems.',
    description: `The All-Africa Students Union (AASU) was well represented at the INQAAHE 15th Biennial Forum 2026, with Samuel Sasu Adonteng, Chief Technical Officer of AASU, participating in the session: “What Real Student Engagement in Quality Assurance in Higher Education Means – Case Studies Across Europe and Africa.”

The session positioned students as critical agents in building resilient, future-ready quality assurance systems. Through rich European and African perspectives, the discussion highlighted how authentic student engagement strengthens institutional trust and drives innovation.

Students are not just stakeholders — we are co-creators.

#AASU #INQAAHE2026 #StudentEngagement #QualityAssurance #HigherEducation`
  },
  {
    id: 'news-new-executives-elected',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'New Executive Committee Elected for 2026-2029 Term',
    img: '/handing-over.jpg',
    date: '2026-02-10',
    excerpt: 'Meet the new leadership team dedicated to advancing student rights across Africa.',
    redirectUrl: '/executives',
    description: `We are proud to announce that a new team of executives has been elected to lead the All-Africa Students Union for the 2026-2029 term. 

This new administration brings together diverse leaders from all regions of the continent, each committed to our core mission of advocating for quality education and Pan-African unity. 

Click below to meet the new committee members and learn about their roles.`
  },
  {
    id: 'press-release-rwanda-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Policy & Advocacy',
    title: 'OFFICIAL STATEMENT ON THE COMMEMORATION OF THE 1994 GENOCIDE AGAINST THE TUTSI IN RWANDA',
    img: '/news-1.png', 
    date: '2026-04-07',
    excerpt: 'AASU joins the people of Rwanda and the global community in solemn remembrance of the victims.',
    description: `The All-Africa Students Union (AASU) joins the people of Rwanda and the global community in solemn remembrance of the victims of the 1994 Genocide against the Tutsi. This tragic chapter in Africa's history remains a painful reminder of the devastating consequences of hatred, division, and indifference.`
  },
  {
    id: 'news-sos-germany',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'AASU Participates in SOS International: Student Voice for a Safe and Just Transition',
    img: '/sos-new.jpg',
    date: '2026-03-21',
    excerpt: 'Sharing African perspectives on achieving climate justice through collective responsibility.',
    description: `AASU participated in the Students Organising for Sustainability (SOS) International held in Konstanz, Germany. The Secretary General shared African perspectives, emphasizing that achieving climate justice requires collective responsibility.`
  },
  {
    id: 'event-inspire-tour-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Education & Students Rights',
    title: 'AASU Inspire Tour: Pre-Tertiary Schools Edition',
    img: '/aasu-tour.jpg',
    date: '2026-04-24',
    time: '9:00 AM GMT',
    platform: 'Ho West Constituency, Volta Region',
    excerpt: 'A strategic outreach designed to engage pre-tertiary students early, equipping them with leadership skills.',
    description: `The All-Africa Students Union, through its Education & Students’ Rights Working Unit, presents the AASU Inspire Tour, Pre-Tertiary Schools Edition, taking place in the Ho West Constituency, Volta Region, on Friday, 24th April 2026.

As the unified voice of students across Africa, AASU continues to drive initiatives that promote inclusive education, student advocacy, and leadership development. The AASU Inspire Tour is a strategic outreach designed to engage pre-tertiary students early, equipping them with the discipline, awareness, and foundational leadership skills essential for their academic and personal growth.

This engagement reflects AASU’s sustained commitment to strengthening education systems and advancing students’ rights through direct, community-level impact.

The Ho West edition will engage selected basic and junior high schools, with subsequent activations planned across other regions in the coming months.

#AASU #AASUInspireTour #StudentsRights #EducationLeadership #StudentEmpowerment`
  },
  {
    id: 'event-nels-april-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Capacity Building',
    title: 'NELS Project: Cohort 2 April Session',
    img: '/NELS-register.jpg',
    date: '2026-04-25',
    link: 'https://fh-ooe.at/en/nels/registration-form',
    excerpt: "Cohort 2 continues this April with Session 2, bringing back impactful conversations from March.",
    description: `Did you miss the March sessions?
You're right on time for what's next.
Cohort 2 continues this April with Session 2
and we're bringing back the most impactful
conversations from March, so you can catch up
without missing out.
From sustainability and the SDGs, to navigating
resistance, engaging decision-makers, and
leading across cultures, every session is built to
strengthen how you think, lead, and create
impact.

This isn't just a second chance, it's your next
step forward.
Have you registered yet?
Now's the time. Secure your spot and keep
your leadership journey moving

Register Here:
https://fh-ooe.at/en/nels/registration-form

#NELS #APRILSESSION #YOUTHSTUDENT LEADERSHIP`
  },
  {
    id: 'event-greening-skills-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Environment & Climate Action',
    title: 'Greening Skills and Qualification Dialogues: Second Session',
    img: '/greening.jpg',
    date: '2026-04-20',
    time: '11:00 AM - 12:30 PM',
    link: 'https://bit.ly/4lp0Lkm',
    excerpt: 'Join us as we unveil findings from the Green Skills and Users Engagement in Africa project.',
    description: `The future is Green!

Join us on the 20th of April for the second session of the Greening Skills and Qualification Dialogues as we unveil the findings from the Green Skills and Users Engagement in Africa project.

📅 Monday, 20th April 2026
🕚 11am - 12:30pm
🔗 Register here: https://bit.ly/4lp0Lkm

Your voice matters in this transition. Let’s turn this dialogue into action.

#GreenSkills #ACQFDialogues #AASU #SustainableAfrica`
  },
  {
    id: 'event-inauguration-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Executive Committee',
    title: 'Historic AASU Honors and Inauguration Ceremony',
    img: '/inauguration.jpg',
    date: '2026-01-30',
    time: '13:00 GMT',
    platform: 'Conference Auditorium, Ministry of Foreign Affairs, Accra Ghana',
    excerpt: 'A historic day of honors and inauguration under the patronage of H.E. John Dramani Mahama.',
    description: `IT’S A NEW ERA FOR 300 MILLION AFRICAN STUDENTS!

Join the All-Africa Students Union (AASU) under the distinguished patronage of H.E. John Dramani Mahama for a historic day of honors and inauguration.

If you believe students belong at the decision-making table, this is where you need to be.

🗓️ When: Tomorrow, 30th January 2026
🕐 Time: 13:00 GMT
📍 Where: Conference Auditorium, Ministry of Foreign Affairs, Accra Ghana

Theme: Reimagining Africa’s Education Future

Be part of the movement. See you in Accra!

#AASU2026 #EducationReform #Inauguration`
  },
  {
    id: 'event-learning-planet-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Environment & Climate Action',
    title: 'Learning Planet Festival 2026 — Students & Youth Session',
    img: '/learning-festival.jpg',
    date: '2026-01-27',
    time: '10:00 – 11:30 GMT',
    platform: 'Online via Zoom',
    link: 'https://bit.ly/3YMoOPJ',
    excerpt: 'Explore how green skills can support a just, resilient, and sustainable Africa.',
    description: `Learning Planet Festival 2026 — Students & Youth Session!

Across Africa, climate change is already reshaping livelihoods, education, and the future of work — but it also opens powerful opportunities for green jobs and inclusive growth. Young people are key to leading this transition.

Join us as we explore “Learning to Care for People, Livelihoods and the Planet through Green Skills and Qualifications,” and discuss how green skills can support a just, resilient, and sustainable Africa.

🗓 27th January 2026
⏰ 10:00–11:30 GMT
📍 Online via Zoom

🔗 Register here: https://bit.ly/3YMoOPJ

Let’s learn, connect, and drive climate-ready education and work opportunities for Africa’s youth.
#greenskills #greeningqualification.`
  },
  {
    id: 'event-agribusiness-forum-2025',
    type: CONTENT_TYPES.EVENT,
    category: 'Capacity Building',
    title: 'The Ghana Agribusiness Future Forum',
    img: '/agri-business.jpg',
    date: '2025-11-27',
    time: '1:00 PM',
    platform: 'UPSA LBC Auditorium',
    excerpt: 'Combating the Galamsey Threat to Agribusiness and Sustainable Food Security.',
    description: `The All-Africa Students Union (AASU) in partnership with the Graduate Students Association of Ghana - UPSA presents The Ghana Agribusiness Future Forum, a powerful conversation on innovation, sustainability, and action.

Theme: Innovate. Cultivate. Transform: Combating the Galamsey Threat to Agribusiness and Sustainable Food Security

Date: Thursday, 27th November 2025
Time: 1:00 PM
Venue: UPSA LBC Auditorium

As Ghana battles the alarming effects of illegal mining on agriculture and the environment, this forum seeks to mobilize student leaders, experts, policymakers, and agripreneurs to propose bold solutions for protecting our food systems and building a resilient agribusiness future.

Join us for insightful presentations, policy dialogues, and youth-led solutions that address one of the most pressing challenges of our time.

Let’s secure the future of food, together.

#GhanaAgribusinessFutureForum #GRASAGUPSA #AASU #SustainableAgriculture #FoodSecurity`
  },
  {
    id: 'event-buffalo-session-2025',
    type: CONTENT_TYPES.EVENT,
    category: 'Education & Students Rights',
    title: 'UB School of Management Graduate Info Session',
    img: '/buffalo.jpg',
    date: '2025-11-20',
    time: '01:00 PM GMT | 04:00 PM EAT | 08:00 AM EST',
    link: 'https://bit.ly/47kvuKa',
    excerpt: 'Get first-hand insights on graduate programs and admissions tips from UB advisors.',
    description: `Discover Graduate Opportunities at the University at Buffalo School of Management!

Join us for an exclusive Information Session with:
Kaleigh Fralix – Graduate Admissions Advisor
Claudia Debrah – Student Ambassador

📅 Date: 20 November 2025
🕐 Time: 01:00 PM GMT | 04:00 PM EAT | 08:00 AM EST

Get first-hand insights on graduate programs, admissions tips, and life at UB School of Management. Don’t miss out on this chance to plan your next academic step!

🔗 Register now: https://bit.ly/47kvuKa

#UBSchoolofManagement #GraduateOpportunities #StudyAbroad #AASU #UBInfoSession #GlobalEducation`
  },
  {
    id: 'event-her-future-2025',
    type: CONTENT_TYPES.EVENT,
    category: 'Gender Advocacy',
    title: 'Her Future: Women Empowerment Program',
    img: '/her-future.jpg',
    date: '2025-11-20',
    time: '9:00 AM',
    platform: 'UPSA Auditorium',
    excerpt: 'Building Bold Women for a Bold Tomorrow featuring Mr. Divine Edem Kwadzoden.',
    description: `Mr. Divine Edem Kwadzoden, Policy Advisor on Education and Advocacy at the All-Africa Students Union (AASU), as one of the distinguished speakers for Her Future: Women Empowerment Program.

Mr. Kwadzoden is a passionate education reform advocate and youth development leader whose work influences impactful policies across the African continent. He is dedicated to promoting inclusive, quality education and empowering young people, especially young women—to lead with confidence, innovation, and purpose.

Join us as he brings his powerful insights and inspiring message to this year’s event, themed “Building Bold Women for a Bold Tomorrow.”

You don’t want to miss it! 💫
20th November 2025
UPSA Auditorium
9 AM Prompt
Register Now: Scan the QR code on the flyer.`
  },
  {
    id: 'event-mco-anniversary-2025',
    type: CONTENT_TYPES.EVENT,
    category: 'Education & Students Rights',
    title: 'MCO Anniversary 2025 | King’s College London',
    img: '/MCO-ann.jpg',
    date: '2025-11-11',
    platform: 'King’s College London — Bush House, Strand Campus',
    link: 'https://www.youtube.com/watch?v=be_h_cIM_jI',
    excerpt: 'Strategic perspectives on strengthening student engagement and future-focused leadership.',
    description: `MCO ANNIVERSARY 2025 | KINGS COLLEGE LONDON

We are delighted to announce that the Secretary General of the All-Africa Students Union (AASU) will be speaking at the MCO Anniversary 2025 at King’s College London.

As part of the session on “MCO Future-Generations Strategy,” the Secretary General will share strategic perspectives on strengthening student engagement, fostering future-focused leadership, and ensuring that universities remain responsible, value-driven institutions for generations to come.

Event Details
Venue: King’s College London — Bush House, Strand Campus
Date: Tuesday, 11th November 2025

This session brings together thought leaders and voices from across the global education ecosystem to reflect on the question: What are universities for?

Link to live stream here: https://www.youtube.com/watch?v=be_h_cIM_jI

#MCOAnniversary2025 #KingsCollegeLondon #AASU #HigherEducation`
  },
  {
    id: 'event-breast-cancer-screening-2025',
    type: CONTENT_TYPES.EVENT,
    category: 'Capacity Building',
    title: 'FREE Breast Cancer Screening Event',
    img: '/free-screening.jpg',
    date: '2025-10-23',
    time: '10:00 AM',
    platform: 'Nkwantanang MA2, Madina',
    excerpt: 'Free screening event in collaboration with Verna Mineral Water and Zahity Foundations.',
    description: `The All-Africa Students Union (AASU) in collaboration with Verna Mineral Water and Zahity Foundations warmly invites you to a vital and FREE Breast Cancer Screening event. We believe that everyone deserves easy access to crucial health services, and we are committed to making a difference in the fight against breast cancer.

Taking a few moments for screening could save your life or the life of a loved one. Come and receive care from dedicated professionals in a welcoming environment.

Event Details:
Date: Thursday, 23 October 2025
Time: 10:00am
Venue: Nkwantanang MA2, Madina

#AASU #CommunityHealth #BreastCancerAwareness #FreeScreening`
  },
  {
    id: 'event-girl-child-day-2025',
    type: CONTENT_TYPES.EVENT,
    category: 'Gender Advocacy',
    title: 'International Day of the Girl Child 2025',
    img: '/girl-child.jpg',
    date: '2025-10-16',
    platform: 'Diaspora Girls SHS',
    excerpt: '“The Girl I Am, The Change I Lead: Girls in the Frontline of Crises.”',
    description: `Join us at Diaspora Girls SHS as we commemorate the International Day of the Girl 2025 under the theme “The Girl I Am, The Change I Lead: Girls in the Frontline of Crises.”

This event, organized by the Ghana Education Service (GES) and the Girls’ Education Network (GEN-Ghana), in partnership with UNICEF, CAMFED, FAWE, T-TEL, AASU, and Power to Girls, will feature a vibrant policy dialogue on October 16, followed by community engagements at Bruben, New Kyease, and Ntonaboma in the Kwahu Afram Plains North District from October 21–23.

Let’s celebrate and amplify the voices of girls leading change across Ghana!

#DayOfTheGirl #GirlsLead #GEN #GES #AASU #PowerToGirls`
  },
  {
    id: 'event-sos-exchange-2025',
    type: CONTENT_TYPES.EVENT,
    category: 'Environment & Climate Action',
    title: 'SOS International Member Exchange 2025',
    img: '/sos-int.jpg',
    date: '2025-10-17',
    time: '01:00 PM UTC',
    platform: 'Live on TEAMS WEBINAR',
    link: 'http://bit.ly/4moJDWKF',
    excerpt: 'Hear inspirational case studies from around the globe from the SOS network.',
    description: `Join the SOS International Member Exchange 2025

Connect with the entire Students Organizing for Sustainability International network, get the latest news, and hear inspirational case studies from around the globe.

Date: Friday, 17 OCTOBER 2025 at 01 PM UTC

Live on TEAMS WEBINAR

Register Now: http://bit.ly/4moJDWKF

Don’t miss it!
#SOSInternational #Sustainability`
  },
  {
    id: 'news-burundi-green-office',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'BNSU Launches Green Office Burundi: A Milestone for Sustainability',
    img: '/burundi.jpg',
    date: '2026-03-10',
    excerpt: 'Empowering students and universities to drive climate action and green innovation.',
    description: `The Burundi National Students Union (BNSU) launched the Green Office Burundi, marking an important step toward empowering students and universities to drive climate action.`
  },
  {
    id: 'news-nels-launch-brussels',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'AASU Launches NELS – Next Level Skills for Student Leaders',
    img: '/nels-meeting-1.jpg',
    images: ['/nels-meeting-2.jpg', '/nels-meeting-3.jpg'],
    date: '2025-03-25',
    excerpt: 'Collaboration in the Erasmus+ funded project NELS brings together 12 prestigious partner institutions.',
    description: `All-Africa Students UNION is excited to announce our collaboration in the Erasmus+ funded project NELS – Next Level Skills for Student Leaders! NELS brings together 12 prestigious partner institutions across Europe and Sub-Saharan Africa to empower student leaders with essential skills over the next three years.

The journey began with a fantastic and highly productive kick-off meeting in Brussels, where we met with our partners to lay the foundation for this exciting initiative.

NELS aims to create an interactive virtual training program that enhances critical competencies such as:
🔹 Critical thinking and media literacy
🔹 Leadership skills like goal setting and conflict resolution
🔹 Effective communication with stakeholders
🔹 Digital tools for collaboration and project management
🔹 Interdisciplinary collaboration and sustainability awareness
🔹 Promoting diversity and inclusion on campus

This initiative fosters intercultural dialogue and global collaboration, strengthening student advocacy and enriching the educational experience in both regions.

We are excited about the journey ahead and proud to work alongside the following partners:
🔸 African Council for Distance Education
🔸 University of Duisburg-Essen
🔸 University Of Cape Coast (UCC)
🔸 Accra Metropolitan University
🔸 The University of The Gambia
🔸 University of Ljubljana
🔸 KCA University
🔸 Global Student Forum
🔸 European Students' Union - ESU
🔸 ÖH - Österreichische Hochschüler_innenschaft

Together, we are building a brighter future for student leaders!

#AASU #NELSProject #StudentLeadership #GlobalCollaboration #EducationEmpowerment`
  },
  {
    id: 'news-sos-ghent-2025',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'AASU Delegation at the 2025 SOS-International Summit in Ghent',
    img: '/sos-meet-1.jpg',
    images: ['/sos-meet-2.jpg', '/sos-meet-3.jpg'],
    date: '2025-05-27',
    excerpt: 'Passionate changemakers represented the heartbeat of a continent rising to meet the climate crisis.',
    description: `As a proud member of SOS-International, the All-Africa Students Union (AASU) brought together a vibrant delegation of youth and student leaders from various African countries including; Ghana, Tanzania, and Burundi to participate in the 2025 SOS-International Summit in Ghent, Belgium. These passionate changemakers, activists, advocates, and sustainability champions, represented the heartbeat of a continent rising to meet the climate crisis with urgency and unity.

The summit served as a global crossroads, connecting young leaders from all corners of the world, united by a shared commitment to environmental justice and climate action.

One of the most memorable moments came on Day 2, with a special dinner dubbed “the African way.” It was more than just sharing food—it was a celebration of culture, community, and connection.

#SOSSummit2025 #ClimateJustice #StudentLeadership #EnvironmentalJustice #GreenOffices #ClimateEducation #SustainabilityNow`
  },
  {
    id: 'news-pad-a-girl-madina',
    type: CONTENT_TYPES.NEWS,
    category: 'Gender Advocacy',
    title: 'Pad A Girl Campaign: Empowering Dignity in Menstruation',
    img: '/pad-1.jpg',
    images: ['/pad-2.jpg', '/pad-3.jpg'],
    date: '2025-05-28',
    excerpt: 'Breaking the stigma and supporting school attendance at Madina M/A KG and Primary.',
    description: `In honor of World Menstrual Hygiene Day, we took action; not just with words, but with purpose. Through the Pad A Girl Campaign, we visited Madina M/A KG and Primary to educate young girls and boys on menstrual hygiene, break the stigma, and support school attendance with the donation of sanitary pads.

The highlight? An impactful menstrual hygiene education session led by a professional nurse, creating safe spaces for open dialogue and empowerment. 💬💪🏾

This campaign was made possible through the incredible collaboration with Prescott Medical Center and Ohhema Pads, thank you for championing dignity and access for every girl. 🩷

Because when girls rise, Africa rises too. 💫
Let’s keep the conversation going and the support flowing.

#PadAGirlCampaign #WorldMenstrualHygieneDay #EmpowerHerPadHerFuture #MenstrualHealthMatters #EndPeriodPoverty #DignityInMenstruation #AASU #PrescottMedicalCenter #OhhemaPads`
  },
  {
    id: 'news-tree-planting-oxfam',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'Tree-Planting Exercise: A Commitment to Climate Action',
    img: '/tree-plant-1.jpg',
    images: ['/tree-plant-2.jpg'],
    date: '2025-07-01',
    excerpt: 'Investing in nurturing a generation of environmentally conscious youth leaders.',
    description: `The entire team, joined by the enthusiastic students, took part in the tree-planting exercise, a symbolic yet impactful act of environmental stewardship. Each tree planted represented a commitment to climate action, a step toward restoring our ecosystem, and an investment in nurturing a generation of environmentally conscious and empowered youth leaders.

#AASU #Oxfam #ClimateAction #GreeningAfrica #TreePlanting #YouthForClimate`
  },
  {
    id: 'news-sg-obreal-meeting',
    type: CONTENT_TYPES.NEWS,
    category: 'Policy & Advocacy',
    title: 'Strategic Meeting on Intra-African Student Mobility',
    img: '/visit-sg.jpg',
    date: '2025-07-15',
    excerpt: 'Discussions on advancing intra-African student mobility and the African Credit Transfer System (ACTS).',
    description: `Earlier today, the Secretary General of the All-Africa Students Union (AASU), Mr. Peter Kwasi Kodjie, led a delegation from AASU to participate in a high-level multilateral meeting with Ms. Marina Larrea, Senior Project Coordinator for Higher Education Policy at OBREAL Global, and Prof. Olusola Bandele Oyewole, Secretary General of the Association of African Universities (AAU).

The meeting focused on advancing intra-African student mobility and exploring how the three organisations can deepen their collaboration to promote and strengthen mobility within the continent. Discussions centred on ways to ensure that African students and student organisations play a more active and meaningful role in shaping policy dialogue on higher education mobility across Africa.

A key highlight of the meeting was the conversation around the African Credit Transfer System (ACTS) and the importance of incorporating student experiences and voices to enhance its design, relevance, and effective implementation across the region. The meeting also touched on the ongoing development of the Pan African Quality Assurance and Accreditation Agency, underscoring its potential role in supporting harmonised standards and frameworks for quality higher education across Africa.

This strategic engagement marks a step forward in ensuring that students are not just beneficiaries, but co-creators of Africa’s higher education transformation agenda.`
  },
  {
    id: 'news-eco-ambassadors-aau-tv',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'Eco Ambassadors Initiative Highlighted on AAU TV',
    img: '/aheadof-prog.jpg',
    date: '2025-07-28',
    excerpt: 'Discussing youth-led climate action and the upcoming Eco-Ambassador Training Workshop.',
    description: `Ahead of the Eco Ambassadors Training Workshop, happening on 30th of July - 1st of August 2025 at the Association of African Universities (AAU), Accra, the Chief Technical Officer and the Programmes Officer for Environment and Climate Action at the All-Africa Students Union had an interview with AAU TV on their AAUTalk series.

During the interview, they highlighted the importance of youth-led climate action, the need for stronger institutional support for environmental education, and the role of the Eco Ambassadors Initiative in equipping students with the knowledge and tools to drive sustainable change in their communities. They also touched on the broader climate crisis, the urgency of adaptation and mitigation efforts, and the role young Africans must play in shaping a just and sustainable future for the continent.

The interview served as a call to action for all stakeholders, educational institutions, civil society, policymakers, and development partners to invest in youth-led solutions and climate leadership as Africa navigates the path toward climate resilience and environmental justice.

To join the workshop kindly register here: https://form.jotform.com/251811646230046
#EcoAmbassadors2025 #YouthClimateAction #SustainableAfrica #AASU #EnvironmentalJustice #Oxfam`
  },
  {
    id: 'news-youth-speak-forum-2025',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'AASU and AIESEC Host Youth Speak Forum 2025',
    img: '/aisec.jpg',
    images: ['/aisec-2.jpg'],
    date: '2025-07-12',
    excerpt: 'Over 100 young people engaged in conversations on sustainable growth and climate action.',
    description: `On July 12th, 2025, the All-Africa Students Union (AASU) in collaboration with AIESEC in Ghana hosted over 100 young people at the Youth Speak Forum, at British Council, Accra, where meaningful conversations ignited among a rising generation.

Under the theme “Empowering the Ghanaian Youth for Sustainable Growth and Climate Action,” we engaged in real conversations on job creation, digital transformation, green entrepreneurship, and climate justice.

From keynote presentations and panel discussions to workshops, the forum played a significant role in inspiring participants to take steps towards inclusive growth, sustainability, and innovation.

Thank you to everyone who participated and made Youth Speak Forum a success!`
  },
  {
    id: 'news-affirmative-action-conference-2',
    type: CONTENT_TYPES.NEWS,
    category: 'Gender Advocacy',
    title: 'Affirmative Action Conference 2.0: Building Lasting Equity',
    img: '/affirm-action.jpg',
    images: ['/affirm-action-2.jpg'],
    date: '2025-07-18',
    excerpt: 'Unpacking the realities of patriarchy and promoting female participation in leadership.',
    description: `At the just ended Affirmative Action Conference 2.0, hosted by the All-Africa Students Union (AASU) and the Ghana Union of Professional Students at Knutsford University on July 18, 2025, opened with an interactive session led by Bismark Amefianu, the Chief Technical Officer at AASU.

The session unpacked the realities of patriarchy, how it hinders female participation, and the challenges faced by both genders in leadership. We were honoured to have welcomed Mrs. Sheila Minkah Premo, A Senior Lawyer and Convener, as the keynote speaker. She laid bare the why behind Ghana’s landmark Affirmative Action Law and highlighted how gender stereotypes in schools and boardrooms must stop to build lasting equity.

At the same event, Ama Pratt, the Press Secretary and Spokesperson to the Vice President of Ghana, challenged the systems of silent discrimination and exclusion that keep women out of leadership. With poise and conviction, she reframed affirmative action as a necessary tool to amplify merit and ensure true representation. The session called on men to be intentional advocates for equity and reminded everyone that ethical leadership begins with awareness and action.

#AffirmativeActionConference2.0 #FromStigmaToStrength #MenForEquity #AASU`
  },
  {
    id: 'news-qualitative-research-training',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'In-house Capacity-Building on Qualitative Research Methods',
    img: '/in-house.jpg',
    date: '2025-07-23',
    excerpt: 'Equipping staff and interns with critical tools for effective policy development and advocacy.',
    description: `On 23rd July, 2025, AASU organized an In-house capacity-building session on Qualitative Research Methods, bringing together staff, National Service Personnel (NSPs), interns, volunteers, and students.

The training focused on equipping participants with practical skills in writing research proposals, academic reports, and research papers, critical tools for effective policy development, advocacy, and evidence-based decision-making.

Empowering the next generation of African leaders through knowledge and research! 🌍📚

#AASU #CapacityBuilding #QualitativeResearch #PolicyMaking #YouthEmpowerment #ResearchTraining #EvidenceBasedAdvocacy`
  },
  {
    id: 'news-reparations-justice-dialogue',
    type: CONTENT_TYPES.NEWS,
    category: 'Policy & Advocacy',
    title: 'Continental Youth Consultations on Reparations and Justice',
    img: '/demo-lead.jpg',
    date: '2025-07-26',
    excerpt: 'Asserting that reparative justice must include dismantling colonial economic structures.',
    description: `On Saturday, 26 July 2025, Divine Edem Kwadzodeh, Policy Advisor on Education Policy and Advocacy, represented the All-Africa Students Union (AASU) at the 13th High-Level Dialogue - Continental Youth Consultations, organised by the African Union and held under the theme “Youth-Led Conversation on Reparations, Justice, and State Building in Africa.”

In his remarks, he asserted that reparative justice must go beyond financial compensation within the context of colonial accountability to include the active dismantling of the colonial economic and socio-political structures that continue to underpin underdevelopment and inequality across Africa. He called for a bold continental effort to confront extractive trade systems, discriminatory visa regimes, debt traps, and epistemic injustice in education and knowledge production.

Organised within the framework of the African Governance Architecture (AGA) of the African Union, the session brought together leading youth voices from across the African Continent and the diaspora to shape a forward-looking reparations agenda rooted in African unity, justice, and democratic leadership.

#AfricanUnion #AUYouthCharter #AUYearOfReparations`
  },
  {
    id: 'news-world-youth-peace-china',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'AASU at the World Youth Conference for Peace – China 2025',
    img: '/china.jpg',
    date: '2025-08-01',
    excerpt: 'Highlighting the role of African youth in shaping a peaceful, inclusive, and just world.',
    description: `The All-Africa Students Union (AASU) is proudly represented at the ongoing World Youth Conference for Peace in China! Our Secretary General, H.E. Peter Kwasi Kodjie, is in attendance alongside Chief Operating Officer, Jemilatu Mamshie Bawa, and Secretary for Gender and International Affairs, Angel Mbuthia.

Earlier, Jemila and Angel delivered powerful presentations at the Opening Ceremony, highlighting the role of African youth in shaping a peaceful, inclusive, and just world. Later, our Secretary General Peter Kwasi Kodjie addressed the main conference, reinforcing Africa’s voice and the unwavering commitment of AASU to global peace and youth development.

#AASU #YouthForPeace #WorldYouthConference #AfricaInChina #GlobalYouthVoices #AASUInAction`
  },
  {
    id: 'news-eco-ambassadors-workshop-2025',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'Eco Ambassadors Workshop 2025: Youth for Sustainable Futures',
    img: '/eco-students.jpg',
    images: ['/eco-students-2.jpg', '/eco-students-3.jpg'],
    date: '2025-08-05',
    excerpt: 'Empowering young people to become agents of environmental change through higher education.',
    description: `We were deeply honoured to have Professor Olusola Bandele Oyewole, Secretary General of the Association of African Universities (AAU), deliver a thought-provoking address at the opening session of the Eco Ambassadors Training Workshop 2025, hosted at the AAU Secretariat in Accra. He emphasized the transformative role of higher education in empowering young people to become agents of environmental change.

At the opening plenary, we also heard from Nana Minta Asiedu Ampadu-Minta, Chief of Staff at the Green Africa Youth Organization (GAYO), who reaffirmed GAYO’s unwavering commitment to advancing climate action and sustainability across the African continent.

The workshop also featured Hon. Dr. Abdul-Rashid Hassan Pelpuo, the Minister for Labour, Jobs and Employment, who delivered a powerful keynote on “Green Jobs and Youth Employment: Advancing Decent Work for the Ghanaian Youth for a Sustainable Future,” and Hon. Dr. Ibrahim Murtala Muhammed, Minister for Environment, Science & Technology, who inspired participants by emphasizing the vital role of youth in driving sustainability efforts.

#EcoAmbassadors #GAYO #YouthForChange`
  },
  {
    id: 'news-murtala-mohammed-condolences',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'AASU Pays Tribute to Hon. Dr. Murtala Mohammed',
    img: '/mourn.jpg',
    images: ['/mourn-2.jpg'],
    date: '2025-08-12',
    excerpt: 'Mourning the loss of a champion for the environment and a towering figure in student leadership.',
    description: `A delegation from the All-Africa Students Union (AASU), led by our Chief Operating Officer Jemilatu Mamshie Bawa, visited the home of Hon. Dr. Murtala Mohammed, Member of Parliament, Minister for Environment, Science and Technology, and Former Secretary General of AASU, to convey our deepest condolences to his family.

Dr. Murtala was not only a champion for the environment but also a towering figure in the student leadership space. He firmly believed in the power of student leaders to shape good governance across Africa, and throughout his career, he worked tirelessly to mentor, inspire, and equip young leaders.

Only a week before his sudden passing, he honoured us with his presence at the Eco Ambassadors Training Workshop 2025, where he delivered a powerful keynote address. His passing is an immeasurable loss to our Union and to the student movement on the continent.

May the soul of our beloved Dr. Murtala Mohammed rest peacefully in the bosom of Allah.`
  },
  {
    id: 'news-candlelight-procession-sikaman',
    type: CONTENT_TYPES.NEWS,
    category: 'Policy & Advocacy',
    title: 'Candlelight Procession for Fallen Heroes',
    img: '/aasu-mourn.jpg',
    images: ['/aasu-mourn-2.jpg'],
    date: '2025-08-14',
    excerpt: 'Mourning the lives lost in the tragic military helicopter crash in Sikaman, Ghana.',
    description: `On Thursday, 14th August 2025, the All-Africa Students Union joined the National Union of Ghana Students (NUGS) and a host of past and present student leaders in a solemn candlelight procession and inter-faith memorial service to mourn the eight lives lost in the tragic military helicopter crash that occurred in Sikaman, Ghana on 6th August 2025.

Among the departed were three distinguished public servants who once walked the path of student activism:
• Alhaji Dr Ibrahim Murtala Muhammed, Minister for Environment, Science and Technology and former Secretary-General of AASU;
• Dr Edward Omane Boamah, Minister for Defence and former President of NUGS;
• Alhaji Limuna Mohammed Muniru, Acting Deputy National Security Coordinator and former NUGS Executive.

Representing AASU at the memorial, Divine Edem Kwadzodeh delivered a tribute reflecting on the enduring bond between student activism and public service. He recalled that Comrade Murtala was "not just a name in our archives, but a son of the Continental student movement who put Pan-Africanism at the centre of every activity we undertook as a Union."

Rest in power, Comrades. Your light will not be extinguished.

#AASU #NUGS #FallenHeroes`
  },
  {
    id: 'news-femnet4gte-nairobi',
    type: CONTENT_TYPES.NEWS,
    category: 'Gender Advocacy',
    title: 'AASU at the FemNet4GTE Africa Regional Workshop',
    img: '/eunice-g.jpg',
    date: '2025-08-26',
    excerpt: 'Strengthening regional action for Gender-Transformative Education (GTE) across Africa.',
    description: `Ms. Eunice Kaanye, Programs Officer for Special Education, on behalf of AASU participated in the Feminist Network for Gender Transformative Education (FemNet4GTE) Africa Regional Workshop held in Nairobi, Kenya. The workshop brought together civil society organizations, feminist activists, youth networks, and education stakeholders to strengthen regional action and advocacy for Gender-Transformative Education (GTE) across Africa.

During the two days, participants engaged in rich discussions on themes including best practices in GTE, financing GTE, sub-regional learning, the intersection of gender and disability, and the AU’s 2025 Theme on Reparations and Justice. The sessions also explored the Continental Education Strategy for Africa (CESA 2026–2035) and the AU TVET Strategy.

Ms. Kaanye actively contributed to the deliberations, reinforcing AASU’s long-standing commitment to advancing inclusive, equitable, feminist, and access to quality education systems across the continent.`
  },
  {
    id: 'news-winta-coaching-switzerland',
    type: CONTENT_TYPES.NEWS,
    category: 'Gender Advocacy',
    title: 'AASU Represents African Women at Winta Coaching 2025',
    img: '/abigail-g.jpg',
    images: ['/abigail-g-2.jpg'],
    date: '2025-08-24',
    excerpt: 'Building strategies for inclusive leadership and empowerment in Baden, Switzerland.',
    description: `The All-Africa Students Union (AASU), represented by Abigail Dziedzorm Felitse, Programs Officer of the Gender Unit, participated in the Winta Coaching 2025 programme held in Baden, Switzerland. The programme provided a unique platform for women leaders from diverse backgrounds to engage, learn, and build strategies for inclusive leadership and empowerment.

Its emphasis on strengthening women’s voices and capacities resonates strongly with AASU’s mission to advance gender equality within the African student movement and beyond. Abigail’s participation reflects AASU’s commitment to ensuring that African women, particularly young leaders, gain access to global spaces of knowledge exchange and empowerment.

The insights and networks gained through this programme are set to contribute significantly to AASU’s work in fostering leadership, resilience, and agency among young African women, supporting the Union’s broader vision of a more inclusive and equitable Africa.`
  }
];

export const isEventEnded = (eventDate) => {
  const today = new Date('2026-04-21'); 
  const target = new Date(eventDate);
  return target < today;
};

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
    id: 'news-burundi-green-office',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'BNSU Launches Green Office Burundi: A Milestone for Sustainability',
    img: '/burundi.jpg',
    date: '2026-03-10',
    excerpt: 'Empowering students and universities to drive climate action and green innovation.',
    description: `The Burundi National Students Union (BNSU) launched the Green Office Burundi, marking an important step toward empowering students and universities to drive climate action.`
  }
];

export const isEventEnded = (eventDate) => {
  const today = new Date('2026-04-21'); 
  const target = new Date(eventDate);
  return target < today;
};

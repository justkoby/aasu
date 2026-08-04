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
    id: 'news-acqf-greening-skills-qualifications-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Climate Action & Environmental Sustainability',
    title: 'AASU & ETF Release Key Deliverables for ACQF Pilot II on Greening Skills and Qualifications in Africa',
    img: '/ACQF-01.jpeg',
    date: '2026-07-29',
    excerpt: 'The All-Africa Students Union (AASU), in collaboration with the European Training Foundation (ETF) and partners, has released three essential resources on greening skills and qualifications in Africa.',
    description: `The All-Africa Students Union, in collaboration with the European Training Foundation (ETF) and other partners, undertook the ACQF Pilot II Project on Greening Skills and Qualifications in Africa User Engagement.

The project focused on establishing a strong foundation for aligning green skills with education and qualifications frameworks across the African continent. It sought to develop a conceptual framework containing a working definition of green skills adapted to the African context, produce a casebook of good practices on greening skills and qualifications in Africa, and create a stakeholder toolkit for embedding green skills into education and training systems.

Following the successful implementation of the project, the three key deliverables have now been completed and made available. These resources reflect the views, experiences, and recommendations gathered through surveys and interviews with a wide range of stakeholders, including students and young people, National Qualifications Authorities, policymakers, industry leaders, academics, and religious leaders.

Whether you are a student, educator, policymaker, researcher, or youth leader, these three essential resources provide valuable insights, practical strategies, and real-world examples needed to support the development of greener and more sustainable education, training, and qualification systems across Africa.

Tap on these links to explore the three key deliverables:`,
    documents: [
      {
        title: 'Toolkit on Greening Skills and Qualifications in Africa',
        fileUrl: '/Toolkit%20on%20Greening%20Skills%20and%20Qualifications%20in%20Africa-compressed.pdf',
        thumbnail: '/acqf-toolkit.png',
        externalUrl: 'https://acqf.africa/resources/research/green-skills/acqf-aasu-toolkit-on-greening-skills-and-qualifications-in-africa'
      },
      {
        title: 'Book of Good Practices for the Greening of Skills and Qualifications in Africa',
        fileUrl: '/Book%20of%20Good%20Practices%20for%20the%20Greening%20of%20Skills%20and%20Qualifications%20in%20Africa.pdf',
        thumbnail: '/book of practices.png',
        externalUrl: 'https://acqf.africa/resources/research/green-skills/acqf-case-book-on-green-skills-qualifications-good-practices'
      },
      {
        title: 'Greening Skills and Qualifications in Africa User’s Engagement',
        fileUrl: '/Greening%20Skills%20and%20Qualifications%20in%20Africa%20%20User’s%20Engagement.pdf',
        thumbnail: '/concept-doc-acqf.png',
        externalUrl: 'https://acqf.africa/resources/research/green-skills/acqf-greening-skills-and-qualifications-in-africa-users-engagement'
      }
    ]
  },
  {
    id: 'news-innovating-education-africa-2026-debate',
    type: CONTENT_TYPES.NEWS,
    category: 'Education Policy & Financing',
    title: 'AASU Champions Sustainable Financing Reforms at Innovating Education in Africa 2026 Policy Dialogue',
    img: '/au-1.jpg',
    images: ['/au-1.jpg', '/au-2.jpg', '/au-3.jpg', '/au-4.jpg'],
    date: '2026-07-20',
    excerpt: 'AASU led a high-level Oxford-style debate examining essential education financing reforms needed to realistically achieve the AU Decade of Education and Skills (2025–2034) targets.',
    description: `As part of the Innovating Education in Africa 2026 Policy Dialogue, the All-Africa Students Union (AASU) proudly participated in and organized a high-level Oxford-style debate addressing one of the continent's most urgent questions:

"This House believes the AU's Decade of Education and Skills (2025–2034) targets require comprehensive financing reform to be realistically achievable."

The debate provided a vibrant, high-impact platform for critical engagement on how African nations can sustainably resource the ambitious goals of the African Union's 10-year education framework.

Chaired by Ramzy Fuseini, AASU's Special Projects and Strategic Initiatives Coordinator, the session featured compelling contributions from both Proposition and Opposition speakers: Umar Farouk Abdul-Karim, Yaa Asantewaa Asante, Tahir Ahmad Muslim, and Elorm Joachim Desewu. Together, they explored diverse and innovative perspectives on continental education financing models, public policy implementation, institutional governance, and the future of African youth.

Through high-level policy dialogues such as this, AASU continues to ensure that the voices of over 170 million African students are not only represented in continental governance spaces, but are recognized as essential partners in driving the successful implementation of the AU Decade of Education and Skills (2025–2034).`
  },
  {
    id: 'news-times-higher-education-sustainability-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'AASU Featured in Maiden Times Higher Education Sustainability Impact Ratings 2026',
    img: '/Pages from Binder1.jpeg',
    images: ['/Pages from Binder2.jpeg'],
    date: '2026-07-07',
    excerpt: 'We are proud to share that the All-Africa Students Union (AASU) has been featured in the maiden Times Higher Education Sustainability Impact Ratings 2026 publication, launched at the Global Sustainable Development Congress (GSDC) 2026.',
    description: `We are proud to share that the All-Africa Students Union (AASU) has been featured in the maiden Times Higher Education Sustainability Impact Ratings 2026 publication, launched at the Global Sustainable Development Congress (GSDC) 2026.

The Sustainability Impact Ratings highlights the efforts of higher education institutions and stakeholders advancing the United Nations Sustainable Development Goals (SDGs), showcasing impactful sustainability initiatives from around the world.

Our feature highlights AASU’s commitment to mobilizing students across Africa to drive climate action, environmental sustainability, and sustainable development.

We extend our sincere gratitude to Times Higher Education and Naomi Firsht for the opportunity to be featured in this flagship publication and contribute to the global sustainability conversation.

Read the publication here: https://flipbooks.timeshighereducation.com/19712/148288/index.html?98172=&page=2`
  },
  {
    id: 'event-russia-africa-scientists-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Science & Innovation',
    title: 'Call for Applications: Russia–Africa Forum-Competition of Young Scientists 2026',
    img: '/russia-africa.png',
    date: '2026-10-12',
    time: 'In-person Format',
    platform: 'Empress Catherine II St. Petersburg Mining University, Russia',
    link: 'https://bit.ly/RAFYS-26',
    excerpt: 'Talented young scholars across Africa and Russia are invited to participate in a unique platform for research, innovation, and global engagement under the auspices of UNESCO.',
    description: `Are you a student, postgraduate researcher, or young scientist with innovative ideas that can shape the future?

The Russia–Africa Forum-Competition of Young Scientists, held under the auspices of UNESCO, is inviting applications from talented young scholars across Africa and Russia to participate in a unique platform for research, innovation, collaboration, and global engagement.

Theme: Future Engineers of the World – The Foundation for Sustainable Development

Venue: Empress Catherine II St. Petersburg Mining University, Russia

Date: 12–17 October 2026
Format: In-person
Working Languages: English and Russian

Open to teams of 3–5 members comprising senior undergraduate students, postgraduate students, and young scientists under 35 years.

Selected participants will enjoy:
• No registration fee
• Fully covered accommodation and meals
• Cultural programme in St. Petersburg
• International networking opportunities
• Exposure to global engineering and sustainability challenges
• Collaboration with leading universities and researchers

Application Deadline: 1st July 2026

🔗 Apply here: https://bit.ly/RAFYS-26

The All-Africa Students Union (AASU) encourages eligible African students, researchers, innovators, and young scientists to seize this opportunity to showcase their ideas, build international partnerships, and contribute to sustainable development through science and innovation.

#AASU #YoungScientists #UNESCO #RussiaAfricaForum`
  },
  {
    id: 'event-aau-summit-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Youth Leadership',
    title: 'AAU African Students’ Leadership Summit 2026',
    img: '/AAU-Summit.png',
    date: '2026-08-17',
    time: 'Three-day Summit',
    platform: 'Cairo, Egypt',
    link: 'https://pay.aau.org/sls-cairo-2026',
    excerpt: 'Creating the platform to shape the next generation of African transformation, leadership, and innovation in action.',
    description: `The future of Africa will be shaped by bold, innovative, and visionary student leaders, and the AAU African Students’ Leadership Summit 2026 is creating the platform to make that possible.

Organized by the Association of African Universities (AAU) in collaboration with the All-Africa Students Union (AASU), this high-level continental summit will bring together student leaders, changemakers, and young innovators from across Africa under the theme: “Shaping the Next Generation of African Transformation: Leadership, Innovation, and Agenda 2063 in Action.”

Through keynote sessions, expert-led discussions, workshops, and networking opportunities, participants will gain practical leadership skills, strengthen their capacity for ethical governance, and build meaningful pan-African connections that drive impact beyond the classroom.

Date: 17–19 August 2026
Venue: Cairo, Egypt

Join the conversation. Strengthen your leadership. Shape Africa’s future.

Register now to secure your spot.

https://pay.aau.org/sls-cairo-2026

#AAUAfricanStudents’LeadershipSummit2026 #AASU #AAU #AfricanYouth`
  },
  {
    id: 'news-adolescence-360-health-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Health & Wellbeing',
    title: 'AASU Engages JHS Students in Winneba on Menstrual Hygiene and Reproductive Health',
    img: '/adol-360-1.png',
    images: ['/adol-360-1.png', '/adol-360-2.png', '/adol-360-3.png', '/adol-360-4.png', '/adol-360-5.png', '/adol-360-6.png'],
    date: '2026-06-24',
    excerpt: 'The Adolescence 360 Health Outreach Project engages Winneba students to break stigmas and promote healthy practices.',
    description: `The All-Africa Students Union (AASU) engaged students of A.M.E. Zion 'D' JHS, Winneba through the Adolescence 360 Health Outreach Project, creating a safe and interactive space for discussions on puberty, menstrual hygiene, reproductive health, and overall adolescent wellbeing.

By providing accurate information and encouraging open dialogue, we are helping to break harmful stigmas, promote healthy practices, and empower young people to make informed decisions about their health and future.

Together, we are building a healthier, more confident, and informed generation.

#Adolescence360 #AASU #YouthHealth #AdolescentHealth #MenstrualHygiene #EducationForImpact`
  },
  {
    id: 'event-gsdc-sustainability-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Environment & Climate Action',
    title: 'Beyond the Syllabus: Embedding Sustainability into the Larger Learning Journey at GSDC 2026',
    img: '/%F0%9D%90%81%F0%9D%90%9E%F0%9D%90%AF%F0%9D%90%AE%F0%9D%90%A7%F0%9D%90%9D%20%F0%9D%90%AB%F0%9D%90%A1%F0%9D%90%9E%20%F0%9D%90%AF%F0%9D%90%AE%F0%9D%90%A2%F0%9D%90%A5%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%9B%F0%9D%90%AE%F0%9D%90%AF.png',
    date: '2026-06-23',
    time: 'Panel and Workshop',
    platform: 'Global Sustainable Development Congress 2026',
    excerpt: 'AASU reinforces the message that sustainability must move beyond siloed courses and be reflected across the entire student experience.',
    description: `The All-Africa Students Union is participating in the #GSDC2026. We kicked of with a panel and workshop themed “Beyond the syllabus: Embedding sustainability into the larger learning journey,” reinforcing a clear message: sustainability must move beyond siloed initiatives within single courses or departments and be reflected across the entire student experience.

The session was opened by Jean-Christophe Carteron, President of Sulitest, and Santosh Khatri, Chief of Education at UNESCO Regional Office and Liaison at ASEAN.

Belinda Mensah, Programmes Officer of All-Africa Students UNION, moderated the panel on innovative co-curriculum and whole-institution approaches to developing sustainability literacy.

Speakers of the panel included Dr. Jingwen Mu of Hong Kong Baptist University, who shared perspectives on service-learning for lifelong and authentic learning; Raghuram Barabadran of Amrita Vishwa Vidyapeetham, who spoke on designing education for life by aligning knowledge with grassroots action; and Jennifer O’Brien, who explored what good sustainability practice looks like and how institutions can embed and measure it effectively.

The HESI SAG team Patricija Z., Franziska Sophia Knog ler, Darren Axe, Belinda Mensah and Isha Le Xue Singh, facilitated an interactive workshop, bringing together students, educators, and higher education leaders to co-create ideas on embedding sustainability across the full student learning journey.

The session closed with reflections from Shinobu Yume YAMAGUCHI, Director at the United Nations University Institute for the Advanced Study of Sustainability, and was wrapped up by Jonghwi Park (UNU) and Darren Axe.`
  },
  {
    id: 'news-african-child-day-liberia-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Education & Students Rights',
    title: 'AASU Convenes High-Level Strategic Dialogue in Liberia for Day of the African Child 2026',
    img: '/African Child 2026-1.png',
    images: ['/African Child 2026-1.png', '/African Child 2026-2.png', '/African Child 2026-3.png'],
    date: '2026-06-22',
    excerpt: 'AASU Executive Committee Member Amb Oumu Sall successfully convenes youth, government, and community stakeholders to discuss child rights and WASH services.',
    description: `As part of the All-Africa Students Union's activities commemorating the Day of the African Child 2026, AASU's Executive Committee Member for West Africa, Amb Oumu Sall, successfully convened a high-level Strategic Dialogue bringing together student leaders, youth organisations, government officials, development partners, civil society actors and community leaders in Liberia.

Held under the African Union's 2026 theme, "Ensuring Universal Access to Water, Sanitation and Hygiene for Every Child in Africa," the dialogue provided an important platform to reflect on the progress made in advancing the rights and welfare of African children, while examining the challenges that continue to hinder access to quality education, safe learning environments, and essential WASH services.

As we honoured the memory of the courageous students of Soweto, whose sacrifice became a defining symbol of the struggle for justice, dignity and educational freedom, participants reflected on the unfinished work of ensuring that every African child enjoys the rights and opportunities for which they fought.

The dialogue explored critical issues including educational equity, child rights, youth participation in governance, and the impact of water, sanitation and hygiene on learning outcomes and child development. Participants also advanced practical recommendations aimed at strengthening education systems, promoting social justice, and expanding access to essential services for children and young people across the continent.

AASU extends its sincere appreciation to our distinguished speakers, guests and partners, including representatives of government institutions, student organisations, youth movements and civil society groups whose contributions enriched the discussions.`
  },
  {
    id: 'news-world-youth-forum-china-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'International Engagements',
    title: 'AASU President Osisiogu Osikenyi Represents African Students at the World Youth Development Forum in China',
    img: '/aasu-china-1.png',
    images: ['/aasu-china-1.png', '/aasu-china-2.png', '/aasu-china-3.png', '/aasu-china-4.png', '/aasu-china-5.png', '/aasu-china-6.png', '/aasu-china-7.png'],
    date: '2026-06-22',
    excerpt: 'President Osisiogu Osikenyi represents AASU in Wuhan and Hubei Province, strengthening China-Africa youth relations and addressing student welfare.',
    description: `The World Youth Development Forum was held in Wuhan, China, from 14 to 17 June 2026, bringing together more than 500 representatives of United Nations agencies, international youth organisations, and young leaders from over 120 countries.

The All-Africa Students Union (AASU) was proudly represented by its President, Osisiogu Osikenyi, whose participation ensured that the perspectives of African students and young people were reflected in global conversations on development, cooperation and leadership.

During the Forum, President Osisiogu participated in the youth roundtable discussion on "A Community with a Shared Future for Mankind in the Eyes of the Youth", contributing to discussions on international cooperation, youth leadership, shared prosperity, and the role of young people in building a more inclusive, peaceful and sustainable world.

Following the Forum, President Osisiogu was invited to address the China–Africa Youth Culture Forum held in Shiyan, Hubei Province, from 18 to 19 June 2026. The Forum provided an important platform for strengthening China–Africa youth relations, promoting cultural exchange, and advancing dialogue on partnership, mutual understanding and shared development.

As part of his visit, the President also met with African students at Hubei University of Medicine. The interaction focused on student welfare, academic mobility, youth leadership and the importance of building stronger connections among African students studying across the world. The engagement provided an opportunity to hear directly from students about their experiences and aspirations, while reaffirming AASU's commitment to representing and supporting African students both on the continent and throughout the diaspora.`
  },
  {
    id: 'news-reparatory-justice-ghana-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Human Rights & Advocacy',
    title: 'AASU Participates in High-Level Consultative Conference on Reparatory Justice in Accra',
    img: '/aasu-pres-1.png',
    images: ['/aasu-pres-1.png', '/aasu-pres-2.png', '/aasu-pres-3.png', '/aasu-pres-4.png', '/aasu-pres-5.png'],
    date: '2026-06-19',
    excerpt: 'Secretary-General Divine Kwadzodeh represents AASU at Accra conference implementing Landmark UN Resolution A/RES/80/250 on Reparatory Justice.',
    description: `The All-Africa Students Union (AASU) participated in the High-Level Consultative Conference on the Next Steps to the Landmark United Nations Resolution A/RES/80/250 on Reparatory Justice, held in Accra, Ghana.

The conference brought together Heads of State and Government, policymakers, scholars, advocates, youth leaders, and other stakeholders to advance the global conversation on justice, historical accountability, and the future of reparatory justice for Africa and people of African descent.

Representing AASU, Secretary-General Divine Kwadzodeh reaffirmed the importance of moving from recognition to implementation and ensuring that African youth remain active participants in shaping a more just, equitable, and prosperous future.

The conference served as an important platform for dialogue on the collective responsibility of the international community to address historical injustices while advancing dignity, development, and opportunity for future generations.

#AASU #ReparatoryJustice #JusticeForAfrica #AfricanYouth #YouthLeadership`
  },
  {
    id: 'news-au-reflection-forum-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Democracy & Good Governance',
    title: 'Secretary-General Represents AASU at African Union Reflection Forum on Unconstitutional Changes of Government',
    img: '/AU-ref-1.png',
    images: ['/AU-ref-1.png', '/AU-ref-2.png', '/AU-ref-3.png', '/AU-ref-4.png', '/AU-ref-5.png'],
    date: '2026-07-03',
    excerpt: 'Divine Kwadzodeh represents AASU at the Opening Session of the Third African Union Reflection Forum in Accra under the theme "Youth Inclusion for African Stability."',
    description: `On Friday, 3 July 2026, the Secretary-General of the All-Africa Students Union (AASU), Divine Kwadzodeh, participated in the Opening Session of the Third African Union Reflection Forum on Unconstitutional Changes of Government, happening in Accra from July 3 to 4, 2026 under the theme "Youth Inclusion for African Stability."

Convened by the African Union Commission in partnership with the Government of Ghana, the Forum brings together government ministers, security chiefs, policymakers, governance experts, youth leaders and development partners to examine the causes of unconstitutional changes of government and to strengthen Africa's collective response to democratic instability.

The Forum speaks directly to one of AASU's strategic priorities: Democracy, Good Governance, Peace and Security.
Across the continent, political instability continues to disrupt education, weaken public institutions, displace communities and deny millions of young Africans the opportunity to learn, participate and contribute meaningfully to national development. For African students, democracy and constitutional governance are not abstract political ideals; they are essential conditions for stable education systems, academic freedom and social progress.

Through its participation, AASU continues to ensure that the perspectives of African students form part of continental conversations on governance, peace and democratic development, while strengthening its engagement with the African Union and other institutions working to build a more stable and prosperous Africa.
The Union remains committed to advancing a continent where democratic governance, the rule of law and peaceful constitutional processes create the conditions necessary for education, innovation and the full participation of young people in public life.`
  },
  {
    id: 'pr-protection-african-students-sa-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Education & Students Rights',
    pressReleaseCategory: 'Statements',
    refNumber: 'PR.SG.26.017',
    title: 'AASU Calls for Enhanced Protection of African Students in South Africa',
    img: '/aasu-plhd.jpg',
    date: '2026-07-03',
    excerpt: 'The All-Africa Students Union (AASU) is closely monitoring recent developments in South Africa and calling for the protection of African students.',
    description: `The All-Africa Students Union (AASU) is closely monitoring recent developments in the Republic of South Africa and the concerns these have generated among African students, their families, national student unions and higher education stakeholders across the continent.

As Africa advances the African Union's vision of continental integration, academic mobility and people-to-people cooperation, the safety and dignity of every African student studying beyond his or her national borders must remain a shared continental responsibility. No student should have to pursue his or her education under conditions of fear, uncertainty or intimidation. Over the past several days, AASU has engaged recognised student unions and student leaders in South Africa and other parts of the continent to obtain first-hand information on the evolving situation.

From these consultations, the Union notes the assurances received from South African student leaders that, based on information currently available to them, there have been no verified reports of organised attacks specifically targeting foreign students within universities and other higher education institutions. We commend South African student unions for their responsible engagement with university authorities, their efforts to reassure students, discourage misinformation and promote calm across campuses.

At the same time, AASU recognises that incidents reported in some communities and schools, together with heightened public tensions surrounding migration, have understandably generated anxiety among many African students and their families. Even where university campuses remain stable, the broader environment requires vigilance and proactive measures to safeguard students.

The Union therefore emphasises that student safety cannot depend solely on the absence of reported attacks. It must be guaranteed through visible institutional protection, effective coordination among relevant authorities, and sustained public confidence. Every African student in South Africa should be able to study, conduct research, move freely and participate fully in academic life without fear of harassment, discrimination, intimidation or violence. AASU unequivocally condemns xenophobia, hate speech, vigilantism, collective punishment and every form of violence directed against foreign nationals.

The Union equally recognises that the management of migration and the enforcement of immigration laws remain the sovereign responsibility of the Government of the Republic of South Africa. Such responsibilities must, however, be exercised through lawful institutions, due process and full respect for constitutional principles, human dignity and South Africa's regional and international obligations. Legitimate policy debates concerning migration can never justify violence, intimidation or discrimination against individuals on account of their nationality or perceived immigration status.

Signed
Divine Edem Kwadzodeh
Secretary-General`
  },
  {
    id: 'event-climate-forward-summit-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Environment & Climate Action',
    title: 'Climate Forward Summit 2026: The Circular Transition',
    img: '/wastetowealth.png',
    date: '2026-07-09',
    time: '10:00 AM GMT',
    platform: 'Executive Conference Centre, GIMPA, Ghana',
    link: 'http://www.climateforwardsummit.org/register',
    excerpt: 'Integrating waste-to-wealth pathways and clean energy for Ghana’s green industrialisation, in partnership with The Implementers.',
    description: `The Implementers and AASU in partnership with diverse network of organizations driving innovation and sustainability presents the Climate Forward Summit 2026 under the theme, The Circular Transition: Integrating Waste-to-Wealth Pathways and Clean Energy for Ghana’s Green Industrialisation.

At the summit, students, youth and innovators will share innovative solutions towards converting waste to wealth. Bold ideas, practical solutions, and collective action will shape a greener future for Ghana at the Climate Forward Summit.

You don't want to miss it!

Register now at www.climateforwardsummit.org/register and join us on 9th July 2026 at the Executive Conference Centre, GIMPA as we transform Ghana's circular economy landscape.

Wondered how to make wealth from waste? Join the Waste to Wealth Webinar ahead of the the Climate Forward Summit 2026 to find out how to contribute to climate action while generating an wealth.

Mark your calendars!
Date: 25th June, 2026
Time: 10AM prompt
Online Zoom ID: 882 6119 1112
Passcode: 397103

The talk has shifted from just protecting the environment to profiting while protecting it. You don’t want to miss out on this!

#WastetoWealth #circulareconomy #ClimateForwardSummit2026`
  },
  {
    id: 'event-digital-sovereignty-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Technology & Policy',
    title: 'Digital Sovereignty vs. The Algorithm Dialogue Convened by AASU and Free Market Fellowship',
    img: '/digi-sov.png',
    date: '2026-06-17',
    time: 'Interactive Session',
    platform: 'Secretariat Dialogue Hall',
    excerpt: 'Exploring opportunities, risks, and responsibilities associated with Africa’s digital transformation and youth participation.',
    description: `As artificial intelligence, data systems, and digital platforms increasingly shape education, employment, governance, and civic participation, questions of digital sovereignty have become central to Africa's development agenda.

Recognizing the importance of these conversations, the All-Africa Students Union (AASU), in partnership with The Free Market Fellowship, convened a dialogue on "Digital Sovereignty vs. The Algorithm" to explore the opportunities, risks, and responsibilities associated with Africa's digital transformation.

The discussion brought together experts and young leaders to examine issues of data governance, cybersecurity, digital identity, artificial intelligence, and the role of African institutions in shaping a digital future that reflects the continent's interests and aspirations.

AASU extends its sincere appreciation to Sampson-Graves George for moderating the session and to Ettah Johnson Kwaku, Manasseh Lorlornyo Adossi, Eric Chinery, and Mr. Samuel Eze for their valuable contributions.

As the continental voice of African students, AASU believes that young people must not merely adapt to technological change. They must help shape it.

The future of Africa's digital landscape will depend not only on innovation, but also on inclusion, accountability, and the meaningful participation of Africa's youth.

The conversation continues. The future is ours to shape.

#AASU #DigitalSovereignty #AfricaDigitalFuture #DigitalTransformation #AIForAfrica #DataRights #Cybersecurity #YouthLeadership`
  },
  {
    id: 'news-climate-resilience-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'AASU Showcases Youth-Led Climate Action and Resilience Building at eLearning Africa 2026',
    img: '/hilda-1.jpeg',
    images: ['/hilda-2.jpeg'],
    date: '2026-06-05',
    excerpt: 'The All-Africa Students Union (AASU) continues to amplify the voices and contributions of African youth in global conversations on sustainable development through eLearning Africa 2026.',
    description: `The All-Africa Students Union (AASU) continues to amplify the voices and contributions of African youth in global conversations on sustainable development through its active participation in the ongoing eLearning Africa 2026 Summit in Accra, Ghana.

Representing the Union, Ms. Hilda Osei-Poku, Programmes Officer at AASU, delivered a presentation and facilitated discussions on the critical role of climate education, community action, and local resilience in addressing the growing environmental challenges facing communities across Africa.

Her presentation focused on the need to place young people at the center of climate solutions, emphasizing that youth should not be viewed merely as beneficiaries of climate interventions but as active partners, innovators, and co-creators of sustainable change.

Drawing on practical experiences and evidence-based initiatives from across the continent, Ms. Osei-Poku highlighted several youth-led and student-driven projects that are making meaningful contributions to environmental sustainability, climate adaptation, and community resilience. These initiatives demonstrate how young people are leading awareness campaigns, environmental conservation efforts, climate advocacy programmes, and community-based solutions that respond directly to local challenges.

During the session, participants explored how climate education can empower students and young people with the knowledge, skills, and leadership capabilities required to address environmental issues within their schools, communities, and countries. Discussions also examined the importance of integrating sustainability principles into education systems and promoting practical approaches that connect learning with real-world action.

A key message emerging from the session was that building climate resilience requires collaboration across sectors, including governments, educational institutions, civil society organizations, development partners, and youth networks. Participants emphasized that meaningful progress can only be achieved when young people are actively involved in designing and implementing solutions that affect their futures.

The session further highlighted the importance of strengthening local resilience by supporting community-led initiatives, promoting environmental stewardship, and creating opportunities for young people to contribute to policy discussions and climate decision-making processes.

For AASU, climate action remains an important component of its broader commitment to sustainable development, youth empowerment, and social transformation across Africa. The Union recognizes that the impacts of climate change disproportionately affect young people and future generations, making it essential to equip students with the tools, knowledge, and platforms needed to drive positive change.

AASU commends Ms. Hilda Osei-Poku for her leadership and contribution to this important dialogue and reaffirms its commitment to supporting youth-led climate action, environmental sustainability, and resilient communities across the continent.

Through its engagement at eLearning Africa 2026, AASU continues to advocate for an Africa where young people are empowered to lead innovative solutions that contribute to a more sustainable, inclusive, and climate-resilient future.`
  },
  {
    id: 'news-steam-skills-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'AASU Champions Practical STEAM and Digital Skills Development at eLearning Africa 2026',
    img: '/SDM-1a.jpg',
    images: ['/SDM-1.jpg', '/SDM-2.jpg', '/SDM-3.jpg', '/SDM-4.jpg', '/SDM-5.jpg'],
    date: '2026-06-05',
    excerpt: 'The All-Africa Students Union (AASU) continues to strengthen its commitment to youth empowerment and future-ready education through active participation in eLearning Africa 2026.',
    description: `The All-Africa Students Union (AASU) continues to strengthen its commitment to youth empowerment and future-ready education through active participation in continental and global discussions on skills development and digital innovation.

At the 19th International Conference and Exhibition on Digital Education, Training and Skills Development (eLearning Africa 2026), co-hosted by the Ministry of Education of the Republic of Ghana, Mr. Bismark Amefianu, AASU's Lead on Capacity Building, Skills Development and Employability, moderated an engaging and impactful session titled:

"Practical STEAM and Digital Skills Models for Youth Digital Innovation."

The session brought together educators, policymakers, youth development practitioners, technology leaders, and innovators to explore practical approaches for equipping young people with the competencies needed to thrive in an increasingly digital and innovation-driven world.

Discussions focused on the growing importance of Science, Technology, Engineering, Arts and Mathematics (STEAM) education and the role of digital skills in fostering innovation, entrepreneurship, employability, creativity, and problem-solving among African youth.

A key highlight of the session was the presentation of successful youth-focused skills development models by organizations including THE CUBE from The Gambia and Partnership Bureau from Ghana. These organizations shared inspiring examples of how practical, community-centered learning approaches can empower young people, stimulate innovation, and drive digital transformation within their communities.

As moderator, Mr. Amefianu guided a dynamic and solution-oriented conversation that emphasized the need to move beyond theoretical learning and invest in practical, inclusive, and scalable skills development models. Participants highlighted the importance of creating learning environments that prepare young people not only for employment but also for leadership, entrepreneurship, and lifelong learning.

The discussion further underscored the critical role of partnerships among educational institutions, governments, private sector actors, development organizations, and youth-led initiatives in building resilient and sustainable skills ecosystems across Africa.

For AASU, participation in eLearning Africa 2026 aligns with the Union's broader vision of ensuring that African students and young people are equipped with the knowledge, skills, and opportunities required to succeed in the rapidly evolving global economy.

As the voice of African students, AASU remains committed to supporting initiatives that advance digital inclusion, promote innovation, strengthen employability, and create pathways for meaningful youth participation in Africa's development agenda.

The Union commends Mr. Bismark Amefianu for his leadership and contribution to this important conversation and reaffirms its dedication to championing transformative education and skills development opportunities for students and young people across the continent.`
  },
  {
    id: 'news-gdn-uk-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'International Engagements',
    title: 'AASU Represented at Groningen Declaration Network Regional Meeting in the United Kingdom',
    img: '/gdn-01.jpg',
    images: ['/gdn-02.jpg', '/gdn-03.jpg', '/gdn-04.jpg'],
    date: '2026-06-05',
    excerpt: 'Spencer Kyirem represents the All-Africa Students Union (AASU) at the Groningen Declaration Network (GDN) Regional Meeting hosted by Manchester Metropolitan University in the United Kingdom.',
    description: `The All-Africa Students Union (AASU) is proud to be represented at the ongoing Groningen Declaration Network (GDN) Regional Meeting being hosted by Manchester Metropolitan University in the United Kingdom.

Representing AASU at the high-level gathering is Spencer Kyirem, Policy Advisor, who joins distinguished leaders, policymakers, academics, technology innovators, and education stakeholders from around the world to explore emerging trends and solutions shaping the future of learning and workforce development.

This year's regional meeting is being held under the theme:

"Skills Without Limits: Developing the Future Skills Ecosystem."

The discussions focus on how governments, educational institutions, industry leaders, and technology providers can collaborate to create inclusive and innovative skills ecosystems that respond to the evolving demands of the global economy. Key areas of engagement include digital credentials, skills recognition, lifelong learning, academic mobility, workforce readiness, and the role of technology in transforming education.

As Africa continues to experience rapid demographic growth and digital transformation, AASU recognizes the importance of ensuring that African students and young people are actively represented in international conversations that influence educational policies, qualification recognition systems, and opportunities for future generations.

The participation of AASU at the Groningen Declaration Network Regional Meeting reflects the Union's ongoing commitment to strengthening global partnerships and advocating for policies that enhance access to quality education, promote student mobility, and improve recognition of African qualifications and skills across borders.

Speaking on the significance of the event, AASU emphasized that meaningful collaboration between educational institutions, governments, and international organizations remains essential for building a future where young people can access learning opportunities without barriers and contribute effectively to sustainable development.

The Union remains dedicated to ensuring that the voices, aspirations, and interests of African students are represented in global platforms that shape the future of education, innovation, and human capital development.

Through engagements such as the Groningen Declaration Network Regional Meeting, AASU continues to advance its mission of fostering Pan-African cooperation, educational excellence, youth empowerment, and international collaboration for the benefit of students across the continent.`
  },
  {
    id: 'news-saqa-ceo-visit-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'International Engagements',
    title: 'AASU Secretary-General Receives SAQA CEO on Courtesy Visit to Strengthen Pan-African Educational Cooperation',
    img: '/news-old.png',
    date: '2026-06-04',
    excerpt: 'The Secretary-General of the All-Africa Students Union (AASU), Mr. Divine Kwadzodeh, welcomed the Chief Executive Officer of the South African Qualifications Authority (SAQA), Ms. Nadia Starr, to the AASU Secretariat in Ghana.',
    description: `The Secretary-General of the All-Africa Students Union (AASU), Mr. Divine Kwadzodeh, welcomed the Chief Executive Officer of the South African Qualifications Authority (SAQA), Ms. Nadia Starr, to the AASU Secretariat in Ghana during her first official visit to the country.

The courtesy visit served as an important platform for meaningful engagement on issues of higher education, student mobility, skills development, and the future of educational collaboration across the African continent. The meeting reaffirmed the shared commitment of both institutions to advancing inclusive, quality education and creating opportunities that empower Africa's young people to thrive in an increasingly interconnected world.

During the discussions, the two leaders explored areas of mutual interest, including strengthening partnerships that promote academic excellence, youth leadership, and the recognition of qualifications to facilitate greater educational and professional mobility across Africa. They also highlighted the critical role of collaboration between continental institutions in supporting the aspirations of the African Union's Agenda 2063 and the broader vision of an integrated and prosperous Africa.

Ms. Starr commended AASU for its enduring commitment to representing and amplifying the voices of African students. She acknowledged the Union's significant contributions to student advocacy, capacity building, and youth development, describing AASU as a valued and long-standing partner of SAQA in promoting educational quality and advancing opportunities for young Africans.

In his remarks, Secretary-General Divine Kwadzodeh expressed appreciation for the continued partnership between AASU and SAQA, noting that strategic collaborations remain essential to addressing the evolving challenges facing African students and educational institutions. He reaffirmed AASU's commitment to working with stakeholders across the continent to ensure that African youth are equipped with the knowledge, skills, and opportunities needed to contribute meaningfully to sustainable development.

The visit further underscored the importance of fostering stronger institutional relationships that bridge policy and practice while placing students at the centre of Africa's development agenda. As both organisations continue to champion educational transformation and youth empowerment, the meeting marked another significant step towards building a more collaborative and inclusive future for African education.

AASU remains dedicated to strengthening partnerships that advance the interests of students across the continent and contribute to the development of a united, educated, and empowered African youth.

Photo Caption:
Secretary-General of the All-Africa Students Union (AASU), Mr. Divine Kwadzodeh, with the Chief Executive Officer of the South African Qualifications Authority (SAQA), Ms. Nadia Starr, during her courtesy visit to the AASU Secretariat in Accra, Ghana, on 4 June 2026.`
  },
  {
    id: 'pr-nans-president-afeez-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Executive Committee',
    pressReleaseCategory: 'Congratulations',
    refNumber: 'PR.SG.26.013',
    title: 'AASU Congratulates Comrade Akinteye Babatunde Afeez on His Election as President of NANS',
    img: '/aasu-plhd.jpg',
    date: '2026-06-04',
    excerpt: 'The All-Africa Students Union (AASU) has extended its heartfelt congratulations to Comrade Akinteye Babatunde Afeez on his election as President of the National Association of Nigerian Students (NANS).',
    description: `The All-Africa Students Union (AASU) has extended its heartfelt congratulations to Comrade Akinteye Babatunde Afeez on his election as President of the National Association of Nigerian Students (NANS), one of Africa’s most influential student representative bodies.

AASU noted that his emergence reflects the confidence reposed in his vision, leadership capabilities, and commitment to advancing the interests of students and young people.

The Union highlighted the critical role student leadership continues to play in shaping conversations around education, governance, social development, and democratic participation across the continent.

AASU recognized the strategic role of NANS in promoting student welfare, educational advocacy, civic engagement, and youth empowerment in Nigeria. The Union also acknowledged the contributions of NANS in inspiring student movements beyond national borders.

Expressing confidence in the new leadership, AASU stated that it looks forward to strengthening collaboration with NANS in pursuit of shared objectives, including educational transformation, youth leadership development, Pan-African solidarity, and sustainable progress for students across Africa.

The Union once again congratulated Comrade Akinteye Babatunde Afeez and wished him a successful and impactful tenure in office.

Signed
Divine Edem Kwadzodeh
Secretary-General`
  },
  {
    id: 'pr-nigeria-abductions-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Education & Students Rights',
    pressReleaseCategory: 'Advocacy',
    refNumber: 'PR.SG.26.012',
    title: 'AASU Demands Urgent Action to End the Abduction of Students and Educators in Nigeria',
    img: '/aasu-plhd.jpg',
    date: '2026-06-03',
    excerpt: 'The All-Africa Students Union (AASU) has expressed deep concern over the abduction of pupils and teachers in Oyo State, Nigeria, and the continuing insecurity affecting educational institutions and communities across the country.',
    description: `The All-Africa Students Union (AASU) has expressed deep concern over the abduction of pupils and teachers in Oyo State, Nigeria, and the continuing insecurity affecting educational institutions and communities across the country.

The Union noted that the reported kidnapping of schoolchildren and educators once again exposes the growing threats facing students, teachers, and educational systems in parts of Africa.

AASU emphasized that educational institutions must remain safe spaces for learning, growth, and development, free from fear, violence, and criminal attacks.

The Union expressed solidarity with the affected pupils, teachers, families, and communities while calling for the immediate and safe release of all victims. AASU also commended the efforts of security agencies and relevant authorities while urging intensified operations to secure the release of those affected and prevent future occurrences.

AASU further stressed the need for stronger security measures around schools, improved intelligence gathering, community-based protection mechanisms, and sustained investment in safeguarding educational environments.

The Union noted its willingness to work closely with the leadership of the National Association of Nigerian Students (NANS) under the stewardship of Comrade Akinteye Babatunde Afeez to promote safer learning environments and stronger protection mechanisms for students.

AASU called on the Federal Government of Nigeria, security agencies, and state authorities to act decisively to address the security challenges confronting schools and ensure that every Nigerian student can pursue education safely and with dignity.

Signed

Divine Edem Kwadzodeh
Secretary-General

Osisiogu Osikenyi E.
President`
  },
  {
    id: 'pr-kenya-school-safety-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Education & Students Rights',
    pressReleaseCategory: 'Condolences',
    refNumber: 'PR.SG.26.011',
    title: 'AASU Calls for Accountability and Enhanced School Safety Following the Utumishi Girls Academy Tragedy in Kenya',
    img: '/aasu-plhd.jpg',
    date: '2026-06-03',
    excerpt: 'The All-Africa Students Union (AASU) has expressed profound sorrow over the tragic fire outbreak at Utumishi Girls Academy in Gilgil, Kenya.',
    description: `The All-Africa Students Union (AASU) has expressed profound sorrow over the tragic fire outbreak at Utumishi Girls Academy in Gilgil, Kenya, which resulted in the loss of young lives and left families, students, and communities in deep grief.

AASU described the incident as a painful reminder of the importance of ensuring safe and secure learning environments across Africa.

The Union expressed concern over reports indicating possible breaches of safety protocols, including overcrowding and challenges relating to emergency exit accessibility. While investigations remain ongoing, AASU noted that the incident highlights the urgent need for stronger safety standards, regular inspections, emergency preparedness measures, and effective enforcement of regulations within educational institutions.

AASU commended Kenyan authorities for initiating investigations and called for a transparent, professional, and thorough process to establish accountability wherever negligence or failure to uphold safety obligations is identified.

The Union further urged governments, school authorities, educational regulators, and stakeholders across Africa to prioritize student safety and invest in infrastructure, fire prevention systems, emergency response mechanisms, and student welfare services.

AASU stands in solidarity with the Government and people of Kenya, the affected families, students, and school community during this difficult period.

Signed
Divine Edem Kwadzodeh
Secretary-General`
  },
  {
    id: 'pr-burkina-faso-rights-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Education & Students Rights',
    pressReleaseCategory: 'Statements',
    refNumber: 'PR.SG.26.008',
    title: "AASU Condemns the Suspension of Burkina Faso's Student Union and Calls for Protection of Student Rights",
    img: '/aasu-plhd.jpg',
    date: '2026-05-28',
    excerpt: "The All-Africa Students Union (AASU) has strongly condemned the suspension of the General Union of Students of Burkina Faso (UGEB) and the reported arrest of student leaders and members in Burkina Faso.",
    description: `The All-Africa Students Union (AASU) has strongly condemned the suspension of the General Union of Students of Burkina Faso (UGEB) and the reported arrest of student leaders and members in Burkina Faso.

According to the Union, the development represents a setback to student representation, civic participation, and the fundamental rights of young people to organize and express themselves through legitimate student structures.

AASU expressed deep concern over measures that restrict the operations of student organizations and undermine students’ ability to participate effectively in matters affecting their education, welfare, and future.

The Union emphasized that freedom of association and expression are fundamental principles that must be protected and respected.

AASU called for the immediate restoration of students’ rights to organize freely through their representative bodies and urged authorities to ensure the safety, dignity, and welfare of all affected students and student leaders.

The Union further encouraged dialogue and engagement as the most appropriate means of addressing concerns involving students and their representative organizations.

AASU reaffirmed its solidarity with the students of Burkina Faso and reiterated its commitment to defending student rights, academic freedom, democratic participation, and the voice of African youth across the continent.

Signed
Divine Edem Kwadzodeh
Secretary-General`
  },
  {
    id: 'pr-water-sanitation-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Policy & Advocacy',
    pressReleaseCategory: 'Advocacy',
    refNumber: 'PR.SG.26.007',
    title: 'AASU Commemorates Africa Day 2026 and Calls for Sustainable Water and Sanitation Systems',
    img: '/aasu-plhd.jpg',
    date: '2026-05-25',
    excerpt: 'The All-Africa Students Union (AASU) joined Africans across the continent and in the diaspora in commemorating Africa Day 2026, marking the 63rd anniversary of the founding of the Organization of African Unity (OAU).',
    description: `The All-Africa Students Union (AASU) joined Africans across the continent and in the diaspora in commemorating Africa Day 2026, marking the 63rd anniversary of the founding of the Organization of African Unity (OAU), now the African Union (AU).

This year’s commemoration was observed under the theme:

"Assuring Sustainable Water Availability and Safe Sanitation Systems to Achieve the Goals of Agenda 2063."

AASU noted that access to clean water and proper sanitation remains a major challenge in several African countries, affecting public health, food security, human dignity, and sustainable development.

The Union emphasized that safe water and sanitation are not only development concerns but also matters of social justice, equity, and fundamental human rights. It stressed that sustainable development cannot be achieved while communities continue to face preventable health risks resulting from unsafe water and inadequate sanitation.

AASU therefore called on African governments, institutions, development partners, and stakeholders to strengthen investments in sustainable water systems, sanitation infrastructure, environmental protection, and climate-resilient policies.

The Union further encouraged African students and young people to contribute actively to environmental sustainability through advocacy, innovation, community engagement, and responsible environmental practices within their schools and communities.

As Africa continues its journey toward greater integration and transformation, AASU reaffirmed its commitment to building a continent where every individual has access to safe water, quality education, good health, and equal opportunities for growth and development.

Happy Africa Day.

Signed
Divine Edem Kwadzodeh
Secretary-General`
  },
  {
    id: 'event-pre-conference-workshop-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Capacity Building',
    title: 'Pre-Conference Workshop: Re-connecting Futures',
    img: '/PRE-CONFERENCE WORKSHOP.webp',
    date: '2026-06-03',
    time: '9:30 AM – 4:30 PM',
    platform: 'Kumasi Hall, Labadi Beach Hotel',
    excerpt: 'As part of the Students Dialogue on Skills, Employability and Entrepreneurship, this workshop explores tradition and technology for sustainable progress.',
    description: `As part of the Students Dialogue on Skills, Employability and Entrepreneurship, the Pre-Conference Workshop on “Re-connecting Futures: Indigenous Knowledge and Africa’s Digital Generation” will bring together students, educators, innovators, policymakers, and development stakeholders to explore how Africa can bridge tradition and technology for sustainable progress.

This workshop creates an opportunity to engage in critical conversations around indigenous knowledge systems, digital transformation, youth empowerment, and the future of education in Africa.

Date: Wednesday, 3 June 2026
Time: 9:30 – 16:30
Venue: Kumasi Hall, Labadi Beach Hotel

Join us as we reimagine Africa’s future through knowledge, innovation, and youth-driven transformation.

#AASU #ELearningAfrica2026 #AfricanYouth #IndigenousKnowledge #DigitalTransformation #FutureReadyAfrica #YouthInnovation #EducationInAfrica #AfricaRising #DigitalGeneration`,
    tags: ['AASU', 'ELearningAfrica2026', 'AfricanYouth', 'IndigenousKnowledge', 'DigitalTransformation', 'FutureReadyAfrica', 'YouthInnovation', 'EducationInAfrica', 'AfricaRising', 'DigitalGeneration']
  },
  {
    id: 'event-youth-students-dialogue-2026',
    type: CONTENT_TYPES.EVENT,
    category: 'Capacity Building',
    title: 'Youth and Students Dialogue',
    img: '/YSD-2026.webp',
    date: '2026-06-05',
    time: '2:45 PM – 3:45 PM',
    platform: 'Sekondi Hall, Labadi Beach Hotel',
    excerpt: 'Join us at the Youth and Students Dialogue on Skills, Employability and Entrepreneurship during eLearning Africa 2026.',
    description: `The future of Africa depends on a generation equipped with the right skills, opportunities, and mindset to thrive in a rapidly evolving world.

Join us at the Youth and Students Dialogue on Skills, Employability and Entrepreneurship during eLearning Africa 2026, where students, young leaders, innovators, policymakers, and industry stakeholders will engage in meaningful conversations around building sustainable pathways for youth empowerment across the continent.

This session serves as a platform to inspire ideas, foster partnerships, and amplify the voices of African youth in shaping the future of education, employment, and enterprise development.

Date: Friday, 5 June 2026
Time: 14:45 – 15:45
Venue: Sekondi Hall, Labadi Beach Hotel

Together, let us drive conversations that create opportunities, unlock potential, and build a future where African youth can lead with confidence and impact.

#AASU #YouthDialogue2026 #ELearningAfrica2026 #AfricanYouth #Employability #Entrepreneurship #FutureReadySkills #YouthEmpowerment`,
    tags: ['AASU', 'YouthDialogue2026', 'ELearningAfrica2026', 'AfricanYouth', 'Employability', 'Entrepreneurship', 'FutureReadySkills', 'YouthEmpowerment']
  },
  {
    id: 'rwanda-genocide-remembrance-2026',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Policy & Advocacy',
    pressReleaseCategory: 'Statements',
    refNumber: 'PR.SG.26.004',
    title: 'Official Statement on the Commemoration of the 1994 Genocide Against the Tutsi in Rwanda',
    img: '/rwanda-remembrance.png',
    date: '2026-04-07',
    excerpt: 'AASU joins the people of Rwanda and the global community in solemn remembrance of the victims of the 1994 Genocide.',
    description: `Official Statement on the Commemoration of the 1994 Genocide Against the Tutsi in Rwanda

Date Issued: Tuesday, 7 April 2026

Content:

The All-Africa Students Union (AASU) joins the people of Rwanda and the global community in solemn remembrance of the victims of the 1994 Genocide against the Tutsi.

This tragic chapter in Africa’s history remains a painful reminder of the devastating consequences of hatred, division, and indifference. Over one million lives were lost in a period that continues to shape our collective conscience as a continent and as a global community.

As the continental voice of African students, AASU stands in solidarity with survivors and honours the resilience, courage, and commitment to unity demonstrated by the people of Rwanda in the years of rebuilding and reconciliation.

This commemoration is not only a moment of reflection but also a call to action. It reminds us of the responsibility we carry, particularly as young people, to reject all forms of discrimination, promote tolerance, and actively work towards peaceful coexistence across our communities.

AASU emphasises that the lessons of the genocide must remain central to our efforts to build a more united and inclusive Africa. We must continue to strengthen values of respect for human dignity, social cohesion, and shared humanity.

We further encourage African students and youth to use their voices and platforms to promote peace, challenge divisive narratives, and contribute to efforts that prevent such tragedies from ever occurring again.

Together, we remember.
Together, we stand.
Together, we say: Never Again.

Signed:
Divine Edem Kwadzodeh
Secretary-General`
  },
  {
    id: 'elections-results-final-phase',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'Second and Final Phase of Elections of the 14th AASU Elective Congress Concluded',
    img: '/election-results.png',
    date: '2025-12-16',
    excerpt: 'AASU formally announces the successful conduct and conclusion of the second and final phase of elections for the 14th Elective Congress.',
    description: `Accra, 16 December 2025 - The All-Africa Students Union (AASU) wishes to formally announce the successful conduct and conclusion of the second and final phase of elections for the 14th Elective Congress, held on Monday, 15 December 2025.

In accordance with the AASU Constitution and the Electoral Guidelines of the 14th Elective Congress, the second phase of elections was conducted to fill outstanding Executive Committee and Secretariat positions. This phase followed the settlement of outstanding financial obligations by concerned member organisations, which placed all nominated candidates in good standing.

Following a transparent and orderly voting process, the Electoral Commission hereby declares the following candidates duly elected:

EXECUTIVE COMMITTEE
Jaber Maataoui | Vice President for North Africa | Morocco
Créscence Naomie Mban-ny | Vice President for Central Africa | Cameroon
Buthanani Thobela | Vice President for Southern Africa | South Africa
Habiba Mohamed Abdallah | Executive Committee Member for North Africa | Egypt
Oumu Sall | Executive Committee Member for West Africa | Liberia
Benita Ndokolo Mfuke | Executive Committee Member for Central Africa | Democratic Republic of the Congo
Stellah Akur Garang | Executive Committee Member for East Africa | South Sudan
Esther Gomani | Executive Committee Member for Southern Africa | Malawi

SECRETARIAT
Ben-Christ Trésor Saizonou | Secretary for Education and Students’ Rights | Benin
Amadou B. Jobarteh | Secretary for Press and Information | The Gambia
Boago Dodo Chingapani | Secretary for Gender and Affirmative Action | Botswana

With the successful conclusion of this second phase, the electoral process for the 14th Elective Congress of AASU is now complete, and all constitutional leadership positions have been duly filled.

The Union congratulates all elected officers and commends member organisations for their commitment to strengthening the democratic principles that have defined the Union since its establishment over five decades ago.

The newly elected leadership is expected to assume office in January 2026 in accordance with the provisions of the AASU Constitution and to work collectively towards advancing the welfare, rights, and aspirations of African students across the Continent and in the diaspora.

Signed:
Miss Angel Mbuthia
Electoral Commission Chairperson
All-Africa Students Union (AASU)`
  },
  {
    id: 'elections-results-first-phase',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'First Phase of Elections at the 14th AASU Elective Congress Concluded',
    img: '/election-results-phase1.png',
    date: '2025-11-21',
    excerpt: 'AASU formally announces the successful conclusion of the first phase of elections for the 14th Elective Congress, held online on 21 November 2025.',
    description: `Accra, 21 November 2025 - The All-Africa Students Union (AASU) wishes to formally announce the successful conclusion of the first phase of elections for the 14th Elective Congress, held online today, Friday, 21 November 2025.

In accordance with the AASU Constitution and the Electoral Guidelines of the 14th Elective Congress, only candidates nominated by member organisations in good financial standing were eligible to stand in this initial phase.

For this first phase, the Electoral Commission conducted elections for the following offices, and has declared the following candidates duly elected:

Osisiogu Osikenyi Enyinnaya | President | Nigeria
Divine Edem Kwadzodeh | Secretary-General | Ghana
Maravilha Kapaia | Deputy President | Angola
Alistar Pfunye | Deputy Secretary-General | Nigeria
Rosália Djedjo | Vice President for West Africa | Guinea-Bissau
Vanessa Kokoe Ajavon | Secretary for Finance and Administration | Togo
Oretha Augustina Taylor | Secretary for Gender and Affirmative Action | Liberia

The Union congratulates the elected officers and commends all participating member organisations for upholding the democratic values that have guided AASU for over five decades.

Second Phase of the 14th Elective Congress and Outstanding Positions to Be Filled

AASU wishes to notify all stakeholders that this represents the first phase of the elections for the 14th Elective Congress. The second phase will be conducted as soon as member organisations with outstanding financial obligations have settled their dues, and thereby place their nominated candidates in good standing in accordance with the Constitution and electoral guidelines.

The Electoral Commission will communicate the date for the second phase.

The following Executive Committee and Secretariat positions remain outstanding and will be contested during the second phase of elections:

Executive Committee
• Vice President for Central Africa
• Vice President for East Africa
• Vice President for Southern Africa
• Vice President for North Africa
• Executive Committee Member for West Africa
• Executive Committee Member for Central Africa
• Executive Committee Member for East Africa
• Executive Committee Member for Southern Africa
• Executive Committee Member for North Africa

Secretariat
• Secretary for Education and Students’ Rights
• Secretary for Press and Information

AASU remains committed to a transparent, inclusive, and credible electoral process that reflects the will of Africa’s student community.`
  },
  {
    id: 'passing-of-president-varney',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Executive Committee',
    pressReleaseCategory: 'Condolences',
    refNumber: 'PR.SG.25.015',
    title: 'AASU Regrets to Announce the Passing of Its President',
    img: '/president-tribute.png',
    date: '2025-10-24',
    excerpt: 'It is with deep regret that AASU announces the passing of its President, Varney Alieu Jarsey.',
    description: `AASU Regrets to Announce the Passing of Its President

Date Issued: Friday, 24 October 2025

Content:

The All-Africa Students Union (AASU) regrets to announce the passing of its President, Varney Alieu Jarsey.

President Jarsey served the Union with distinction and dedication. His commitment to advancing the rights, welfare, and voice of Africa’s students will be remembered with deep respect.

This loss is deeply felt by the AASU family, member unions, partners, and the African student community.

We extend our heartfelt condolences to his family and loved ones.

Signed:
Peter Kwasi KODJIE
Secretary-General`
  },
  {
    id: 'international-youth-day-2025',
    type: CONTENT_TYPES.NEWS,
    category: 'Policy & Advocacy',
    title: 'AASU Celebrates International Youth Day 2025',
    img: '/youth-day-2025.png',
    date: '2025-08-12',
    excerpt: 'AASU joins the global community in commemorating International Youth Day 2025 under the theme: Local Youth Actions for the SDGs and Beyond.',
    description: `AASU Celebrates International Youth Day 2025

Date Issued: Tuesday, 12 August 2025

Content:

AASU joins the global community in commemorating International Youth Day 2025 under the theme:
“Local Youth Actions for the SDGs and Beyond.”

Young people across Africa are leading transformative change through climate action, education, gender equality, and economic empowerment.

AASU highlights that youth participation is essential for achieving SDGs, especially given that over 65% of targets are linked to local governance.

Despite progress, many young Africans still face systemic barriers. AASU calls for increased investment in youth-led initiatives, capacity building, and enabling policies.

The Union urges governments and partners to support youth-driven development and innovation.

Signed:
Peter Kwasi KODJIE
Secretary-General`
  },
  {
    id: 'denmark-africa-student-initiative',
    type: CONTENT_TYPES.NEWS,
    category: 'Education & Students Rights',
    title: 'New Initiative to Attract More African Students to Denmark',
    img: '/denmark-initiative.png',
    date: '2025-06-17',
    excerpt: 'Danish ministries launch a DKK 430 million programme to strengthen partnerships between Danish and African universities.',
    description: `New Initiative to Attract More African Students to Denmark

Date Issued: 17th June 2025

Content:

The Ministry of Foreign Affairs and Ministry of Higher Education and Research (Denmark) are launching a DKK 430 million programme to strengthen partnerships between Danish and African universities.

The initiative aims to:

Increase African student enrolment in Denmark
Promote knowledge exchange
Build long-term academic partnerships

The programme includes:

Scholarships for African students
Erasmus+ support
Innovation and mobility initiatives

The Danida Fellowship Centre will manage the programme.

Officials highlighted Africa’s growing youth population and the importance of strengthening global academic collaboration.

Issued by:
The Secretary-General
All-Africa Students Union (AASU)`
  },
  {
    id: 'nels-spring-2026',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'Next Level Skills for Student Leaders (NELS) – Spring 2026 Registration & Session Schedule',
    img: '/nels-spring-2026.png',
    date: '2026-04-10',
    excerpt: 'Registration is now open for the NELS – Spring 2026 Programme, designed to equip student leaders with vision and confidence.',
    description: `Next Level Skills for Student Leaders (NELS) – Spring 2026 Registration & Session Schedule

Date Issued: 2026 (Spring Programme Announcement)

Content:

The All-Africa Students Union (AASU), in collaboration with partners, announces that registration is now open for the Next Level Skills for Student Leaders (NELS) – Spring 2026 Programme.

This initiative is designed to equip student leaders across Africa with the tools to lead with impact, vision, and confidence through structured training sessions and peer engagement.

Programme Overview

Participants will engage in a series of interactive sessions focused on leadership, sustainability, communication, and student movement dynamics. The programme is tailored to strengthen the capacity of student leaders in addressing contemporary challenges across the continent.

Session Schedule (April 2026)
Welcome Session
13 April 2026 — 15:00 CET | 13:00 GMT | 16:00 EAT
Sustainability and SDGs
15 April 2026 — 15:00 CET | 13:00 GMT | 16:00 EAT
Dealing with Resistance in the Student Movement
17 April 2026 — 15:00 CET | 13:00 GMT | 16:00 EAT
Communication with Decision Makers
20 April 2026 — 15:00 CET | 13:00 GMT | 16:00 EAT
Cross-Cultural Communication with Stakeholders
22 April 2026 — 15:00 CET | 13:00 GMT | 16:00 EAT
New Ways of Student Organizing II
24 April 2026 — 15:00 CET | 13:00 GMT | 16:00 EAT
Registration

Interested participants are encouraged to register online via:
nels.training

The programme is co-funded by the European Union and implemented in partnership with leading academic and student organisations across Africa and Europe.`
  },
  {
    id: 'greening-skills-africa',
    type: CONTENT_TYPES.NEWS,
    category: 'Environment & Climate Action',
    title: 'Call for Good Practices: Greening Skills and Qualifications in Africa',
    img: '/greening-call.png',
    date: '2025-05-15',
    excerpt: 'AASU invites institutions to submit good practices in advancing green skills and sustainable qualifications across Africa.',
    description: `Call for Good Practices: Greening Skills and Qualifications in Africa

Date Issued: 2025 (Deadline Extended to 9 June 2025)

Content:

The All-Africa Students Union (AASU), in collaboration with the ACQF-II Project, invites institutions and stakeholders to submit proven good practices in advancing green skills and sustainable qualifications across Africa.

The initiative seeks models integrating sustainability into education, training, and workforce development, including:

Recognition of Prior Learning (RPL)
Micro-credentials
Institutional partnerships and policy innovations
Community-level green initiatives

Selected submissions will contribute to strengthening continental qualification frameworks and promoting scalable solutions for Africa’s green transition.

Focus Areas
Policy innovations for green skills at national/regional levels
Sustainability-focused qualifications and curricula
Climate resilience and local innovation initiatives
Africa-based initiatives with proven results
Eligibility
Students and youth-led organisations
Governments and educational institutions
TVET centres, NGOs, and private sector actors
Submission Requirements
Case study (500–800 words)
Supporting evidence (reports, policies, testimonials)
Demonstrated relevance to green skills and sustainability frameworks

Submission Link: bit.ly/44HqtdD
Deadline (Extended): 9 June 2025`
  },
  {
    id: 'nsp-call-2025',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'Call for National Service Personnel (NSPs) – 2025/2026 Service Year',
    img: '/nsp-call-2025.png',
    date: '2025-06-01',
    excerpt: 'AASU invites applications for placement as National Service Personnel for the 2025/2026 service year across various skill areas.',
    description: `Call for National Service Personnel (NSPs) – 2025/2026 Service Year

Date Issued: 2025

Content:

The All-Africa Students Union (AASU) invites applications from qualified final-year students for placement as National Service Personnel (NSP) for the 2025/2026 service year.

Preferred Skill Areas
Research and Policy Analysis
Data Analytics and Monitoring & Evaluation
Report and Grant Writing
Graphic Design (Adobe Suite, Canva)
Web Design and Management (HTML, CSS, WordPress)
Report Writing and Editorial Support
Project Management
Accounting and Financial Reporting
Human Resource Management
IT and Systems Support
Public Relations and Strategic Communications
Social Media Management and Content Creation
Photography and Videography
General Requirements
Proficiency in Microsoft Office and collaborative tools
Strong writing and communication skills
High level of organisation and attention to detail
Ability to work independently in a fast-paced, multicultural environment
Knowledge of French, Portuguese, or Arabic is an added advantage
Application Documents
One-page application letter
Curriculum Vitae (CV)
Name of institution
NSS PIN and NSS Number
Portfolio (for design/web roles)

Submission Email: info@aasuonline.org (cc: jkodjie@aasuonline.org)
Application Deadline: 20 June 2025

Shortlisted applicants will be invited for interviews.`
  },
  {
    id: 'cobbinah-nya-appointment',
    type: CONTENT_TYPES.PRESS_RELEASE,
    category: 'Executive Committee',
    pressReleaseCategory: 'Congratulations',
    refNumber: 'PR.SG.25.009',
    title: 'AASU Congratulates Mr. Julian Cobbinah on His Appointment as NYA Governing Board Chairperson',
    img: '/julian-cobbinah-nya.png',
    date: '2025-05-08',
    excerpt: 'AASU extends warm congratulations to Mr. Julian Cobbinah on his appointment as Chairperson of the NYA Governing Board.',
    description: `AASU Congratulates Mr. Julian Cobbinah on His Appointment as NYA Governing Board Chairperson

Date Issued: Thursday, 8 May 2025

Content:

The All-Africa Students Union (AASU) extends its warmest congratulations to Mr. Julian Cobbinah on his appointment as Chairperson of the Governing Board of the National Youth Authority (NYA) of Ghana.

Mr. Cobbinah’s appointment reflects his distinguished track record in youth leadership, policy advocacy, and nation-building. Having served as President of the National Union of Ghana Students (NUGS), he brings significant experience and insight to the role.

AASU recognises the strategic importance of youth institutions such as the NYA in shaping Africa’s future and expresses confidence in Mr. Cobbinah’s leadership to strengthen youth empowerment across Ghana.

The Union looks forward to continued collaboration with the NYA to advance youth engagement, inclusive policy development, and sustainable development across the continent.

Signed:
Peter Kwasi KODJIE
Secretary-General`
  },
  {
    id: 'haqaa3-call-student-reps',
    type: CONTENT_TYPES.NEWS,
    category: 'Education & Students Rights',
    title: '2nd Call for Student Representatives – HAQAA3 Quality Assurance Reviews',
    img: '/haqaa3-call-2.png',
    date: '2025-04-15',
    excerpt: 'AASU announces the 2nd Call for Student Representatives for HAQAA3 Quality Assurance Agency Reviews.',
    description: `2nd Call for Student Representatives – HAQAA3 Quality Assurance Reviews

Date Issued: 2025 (Deadline: 1 May 2025)

Content:

The All-Africa Students Union (AASU) announces the 2nd Call for Student Representatives to serve on panels for the HAQAA3 Quality Assurance Agency Reviews.

Selected students will play a critical role in ensuring that student perspectives are reflected in the assessment and enhancement of quality assurance systems in higher education across Africa.

Eligibility Requirements
Currently enrolled African higher education student (minimum one year remaining)
Interest in quality assurance and accreditation processes
Fluency in English, French, or Portuguese (Arabic advantageous)
Availability for training and review activities (2025/2026)
Role of Selected Participants
Participate in preparatory meetings and site visits
Analyse institutional self-assessments
Contribute to review reports
Advocate for student-centred quality standards
Why Apply
Gain professional experience in quality assurance
Contribute to continental education improvement
Receive specialised training

Application Link: bit.ly/HAQAA3QA
Deadline: 1 May 2025`
  },
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
    pressReleaseCategory: 'Statements',
    refNumber: 'PR.SG.26.004',
    title: 'OFFICIAL STATEMENT ON THE COMMEMORATION OF THE 1994 GENOCIDE AGAINST THE TUTSI IN RWANDA',
    img: '/aasu-plhd.jpg', 
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
  },
  {
    id: 'amace-2023-lusaka',
    type: CONTENT_TYPES.NEWS,
    category: 'Pan-Africanism & African Culture',
    title: 'Africa Music, Art & Cultural Exhibition (AMACE) 2023',
    img: '/amace-2023.png',
    date: '2023-12-10',
    excerpt: 'The Africa Music, Art, and Cultural Exhibition was a vibrant celebration of the continent\'s rich cultural heritage held in Lusaka, Zambia.',
    description: `Africa Music, Art & Cultural Exhibition (AMACE) 2023
 
 The Africa Music, Art, and Cultural Exhibition, jointly organized by the All-Africa Students Union (AASU) and the Ministry of Youth, Art, and Sports, was a vibrant celebration of the continent’s rich cultural heritage. Held at the prestigious Mulungushi International Conference Centre in Lusaka, Zambia, the event brought together artists, musicians, cultural practitioners, and enthusiasts from across Africa to showcase the diverse and dynamic expressions of African culture.
 
 Objectives:
 1. Promote African Culture: Highlight the richness and diversity of African music, art, and cultural practices.
 2. Foster Unity: Encourage cultural exchange and unity among African nations through shared cultural experiences.
 3. Empower Youth: Provide a platform for young African artists and musicians to showcase their talents and gain exposure.
 4. Boost Tourism: Attract international and local visitors, promoting Zambia as a hub of cultural activity and tourism.
 
 Highlights:
 The event featured live performances from renowned African musicians representing various genres, including Afrobeat, Highlife, Makossa, and traditional music. Galleries were set up to display artworks including paintings, sculptures, and digital art. fashion shows highlighted African fashion, featuring designs inspired by traditional and contemporary African aesthetics. Interactive workshops and panel discussions featured experts in African art and culture, discussing topics such as cultural heritage and the role of youth in cultural preservation.`
  },
  {
    id: 'russia-scientific-cooperation-2025',
    type: CONTENT_TYPES.NEWS,
    category: 'Capacity Building',
    title: 'AASU Participates in the Fifth Young Scientists Congress in Russia',
    img: '/russia-scientists-congress.png',
    date: '2025-11-28',
    excerpt: 'AASU calls for a new era of equal partnership in Africa-Russia scientific cooperation at the Sirius Federal Territory.',
    description: `AASU Participates in the Fifth Young Scientists Congress in Russia
 
 Sirius Federal Territory, Russia - 28 November 2025
 
 The All-Africa Students Union (AASU) took part in the Fifth Young Scientists Congress, the flagship event of the Decade of Science and Technology in Russia, held at the Sirius University of Science and Technology from 26-28 November 2025. The Congress brought together more than 8,500 participants from over 100 countries.
 
 AASU’s Secretary-General, Mr. Peter Kwasi Kodjie, joined distinguished panelists in the high-level session titled “Russia-Africa: Opportunities for Applied Scientific Projects”. Speaking during the panel, Mr. Kodjie underscored that Africa’s engagement in global scientific cooperation is entering a new phase – one defined not by aid dependency, but by mutually respectful partnerships grounded in shared expertise, co-creation, and joint technological ambition. 
 
 “Our cooperation must move beyond the traditional frame of donor-recipient dynamics,” he stated. “Africa and Russia have deep reservoirs of scientific talent, and our collaboration should reflect a partnership of equals – rooted in joint responsibility, shared innovation, and a common vision for scientific advancement.”
 
 AASU reaffirmed its readiness to help convene African youth scientists, strengthen mobility pathways, and support research teams working on solutions that advance Agenda 2063 and the Sustainable Development Goals.`
  },

  {
    id: 'congress-14-portal',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'Portal for the 14th Elective Congress Now Open',
    img: '/hero-background-01-new-14th congress.webp',
    date: '2025-11-15',
    excerpt: 'Access all official materials, guidelines, and nomination forms for the upcoming 14th Elective Congress.',
    description: `The All-Africa Students Union (AASU) is pleased to announce the opening of the official portal for the 14th Elective Congress.
    
    This dedicated page provides student leaders and member unions with direct access to:
    - Official Announcement and Call for Nominations
    - Detailed Election Guidelines
    - Candidate Nomination Forms
    
    All documents are available in English, French, and Portuguese to ensure full accessibility across the continent. We encourage all eligible unions to review the materials and participate in this landmark democratic process.`,
    linkOverride: '/14th-congress'
  },
  {
    id: 'call-for-bid-14th-congress',
    type: CONTENT_TYPES.NEWS,
    category: 'Executive Committee',
    title: 'Call for Bid to Host the 14th Elective Congress',
    img: '/call-for-bid-congress.png',
    date: '2025-01-20',
    excerpt: 'AASU invites bids from interested Member Unions to host the landmark 14th Elective Congress scheduled for 2025.',
    description: `The Secretariat of the All-Africa Students Union (AASU) invites bids from interested Member Unions to host the 14th Elective Congress—scheduled for late 3rd quarter or early last quarter of 2025.
    
    This two-day Congress aims to bring together student leaders from across Africa to chart the future of our Union. Interested Member Organisations are requested to submit an expression of interest letter covering:
    - Proposed city and potential hotel/conference venues.
    - Identification of principal government agencies or sponsors.
    - Potential co-hosts or partners for the event.
    
    A template letter is provided below to assist member unions in preparing their formal bids.
    
    Download Template Letter:
    [Download English Template](/English-TEMPLATE-LETTER-TO-BID-TO-HOST-14TH-ELECTIVE-CONGRESS.docx)`
  }
];

export const isEventEnded = (eventDate) => {
  const today = new Date('2026-04-26'); 
  const target = new Date(eventDate);
  return target < today;
};

// English copy. Mirrors `../avatar.ts` one-to-one.
//
// ⚠️ Implementation boundary (same as the Chinese side): every answer is a LOCAL
// preset matched by keyword. It is not a real AI model, sends no network request
// and stores nothing. The on-screen “Demo · answers come from local presets…”
// line was removed on 2026-10-12 at the owner’s request.
//
// 2026-10-13: answers rewritten from the owner’s “conversational AI knowledge
// base”. Her rules for the answers: use verified information only, never invent
// project results, say clearly when something is a concept or a course project,
// quote the internship numbers as given, and answer “not in my knowledge base”
// plus an email route when nothing matches.

import type { AvatarAnswer, AvatarReply } from '../avatar'

export const avatarIntro = {
  question: 'What can I help with?',
  placeholder: 'Ask me a question…',
  suggestions: [
    'What kinds of projects have you done?',
    'What are you building now?',
    'Where do your design and product skills show?',
    'Do you have overseas experience?',
    'What is your hands-on AI experience?',
    'How can I reach you?',
  ],
}

export const avatarQA: AvatarAnswer[] = [
  {
    id: 'projects',
    keywords: ['kinds of projects', 'types of projects', 'projects have you', 'case', 'projects', 'portfolio', 'experience'],
    answer:
      'Roughly three groups. 1) Product and graduation project: PHYGITAL BASE — phygital smart product design for the data-sovereignty era; awarded Outstanding Graduation Project (Top 5%). 2) Brand and exhibition: COMMON GROUND (reframing a US street-art exhibition for a Milan audience as a shareable community event), the ANNAKIKI × Laorentou pop-up in Milan’s Brera district, and SOHO-T’s China-entry strategy for an Italian womenswear brand. 3) Events and growth: the Xiaohongshu “超好玩补给站” campaign page, and an immersive film-club experience (12 events in 3 months, 2,000+ attendees, 76% sales conversion).',
    link: { label: 'See the cases', to: '/work' },
  },
  {
    id: 'venture',
    keywords: ['building now', 'working on now', 'building', 'venture', 'working on', 'reverie', 'unseen', 'realmview'],
    answer:
      'Four directions right now. REVERIE — a youth-culture events community: multiple events delivered, 20,000+ in-person attendances, 500k+ impressions on a Xiaohongshu topic. REVERIE SHOP — curated retail organised by quarterly cultural themes (in preparation). UNSEEN BOX — a monthly themed youth-culture content platform; currently a working local demo prototype. REALMVIEW — brand and growth services for 0→1 brands that already have product and supply chain. Each one answers the same six questions: problem, opportunity, solution, business model, validation, next step.',
    link: { label: 'See the ventures', to: '/venture' },
  },
  {
    id: 'design',
    keywords: ['design skills', 'product skills', 'design', 'product skill', 'capab', 'best at', 'skill', 'can you do'],
    answer:
      'On the product and design side: product design and UI/UX, visual marketing and typography, exhibition and circulation design, 3D modelling and rendering, brand strategy. In practice — for PHYGITAL BASE I owned the whole chain myself: market research, user interviews with five typical user types, product definition, hardware sketches and 3D modelling, UI/UX, and the exhibition stand. This website is also a working prototype I built myself with vibe coding.',
    link: { label: 'See PHYGITAL BASE', to: '/work/phygital-base' },
  },
  {
    id: 'overseas',
    keywords: ['overseas experience', 'overseas', 'cross-cultural', 'milan', 'abroad', 'international', 'english', 'italy'],
    answer:
      'I spent a one-year exchange year at Politecnico di Milano (QS top 10 for art and design) studying fashion marketing and branding, with a Jiangsu provincial scholarship for overseas study (Top 5%). The cross-cultural projects come from that year: COMMON GROUND (translating US street culture for Milan), SOHO-T (an Italian womenswear brand entering China) and the ANNAKIKI × Laorentou pop-up. My internships have also been long-term work with European and US markets and overseas creators. Milano was taught fully in English and I joined a US SWT programme, so I work in English day to day.',
    link: { label: 'See the cases', to: '/work' },
  },
  {
    id: 'ai',
    keywords: ['ai experience', 'ai', 'artificial intelligence', 'llm', 'vibe', 'agent', 'tools'],
    answer:
      'Three areas. 1) I built this website end to end myself with vibe coding (AI-assisted development) — design through to a working front-end prototype. 2) At OpenCreator I ran overseas creator-ecosystem operations for an “AI commercial creative visual agent”, using AI workflows for ad creative production and multi-platform distribution. 3) I use AI in marketing planning and content production, and I am exploring turning “market research → strategy → creative” into a reusable agent workflow — still being validated, not a finished product.',
    link: { label: 'See the ventures', to: '/venture' },
  },
  {
    id: 'phygital',
    keywords: ['data sovereignty', 'phygital', 'graduation project', 'blockchain', 'hardware', 'nfc'],
    answer:
      'PHYGITAL BASE is phygital smart product design for the data-sovereignty era: a magnetic modular phone-back hardware piece, a mobile app and on-chain proof of ownership, turning abstract “data sovereignty” into something you can touch (physical action → software processing → on-chain record → hardware feedback). It is at concept stage: awarded Outstanding Graduation Project (Top 5%), with interaction testing at the exhibition for touch recognition and NFC-social features. The product is not manufactured or commercially launched.',
    link: { label: 'See this case', to: '/work/phygital-base' },
  },
  {
    id: 'internship',
    keywords: ['internship', 'work experience', 'companies', 'experience', 'employer'],
    answer:
      'Four internships. Xiaohongshu (commercial design — the “我就要这样生活” campaign and the 「字体月月报」 column). Pop Mart (creative project management — 20+ product launches; over 10 million social impressions within 48 hours of a launch). Momo’s Workshop (overseas PR — a 5,000+ creator database and 500+ deep collaborations). OpenCreator (overseas creator operations for an AI commercial creative visual agent). These numbers come from my résumé and are quoted as given.',
    link: { label: 'See experience & education', to: '/about' },
  },
  {
    id: 'education',
    keywords: ['education', 'university', 'degree', 'graduat', 'major', 'school'],
    answer:
      'BA in product design at Jiangnan University (2nd in China for design), graduating in 2027, with a one-year exchange at Politecnico di Milano in fashion marketing and branding. My graduation project, “Phygital smart product design in the data-sovereignty era”, won a university-level outstanding project award.',
    link: { label: 'Go to About', to: '/about' },
  },
  {
    id: 'thinking',
    keywords: ['business judgement', 'judgement', 'judgment', 'business', 'think', 'method', 'logic', 'validat'],
    answer:
      'My order is: confirm the user problem is real, find the smallest testable solution, and only then talk about scale and commercialisation. Anything I have not validated I label as an assumption rather than dressing it up as a result — the ventures page shows what is validated and what is still a hypothesis.',
    link: { label: 'See validation status', to: '/venture' },
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'wechat', 'phone', 'partner', 'hiring', 'download', 'résumé', 'resume', 'cv'],
    answer:
      'Email enidyeh2002@gmail.com, phone +86 18702378098 (WeChat via either). The résumé, portfolio and the REVERIE partnership handbook are all available under “Get my résumé” in the header. What I am looking for: product strategy × global brand growth.',
    link: { label: 'Go to About · Contact', to: '/about#contact' },
  },
]

export const avatarFallback: AvatarReply = {
  answer: 'That is not in my knowledge base yet. For a fuller picture, email me at enidyeh2002@gmail.com.',
  link: { label: 'Get my contact details', to: '/about#contact' },
}

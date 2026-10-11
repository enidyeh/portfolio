// English copy. Mirrors `../avatar.ts` one-to-one.
//
// ⚠️ Implementation boundary (same as the Chinese side): every answer is a LOCAL
// preset matched by keyword. It is not a real AI model, sends no network request
// and stores nothing. The on-screen “Demo · answers come from local presets…”
// line was removed on 2026-10-12 at the owner’s request.

import type { AvatarAnswer, AvatarReply } from '../avatar'

export const avatarIntro = {
  question: 'What can I help with?',
  placeholder: 'Ask me a question…',
  suggestions: [
    'What are you best at?',
    'What projects have you done?',
    'What are you working on now?',
    'How do you think about business?',
    'How can I reach you?',
  ],
}

export const avatarQA: AvatarAnswer[] = [
  {
    id: 'skill',
    keywords: ['best at', 'skill', 'strength', 'good at', 'capab', 'can you do', 'what do you do'],
    answer:
      'I think about capability in three lines. Strategy: market and user insight, opportunity assessment, commercial positioning. Product: prioritisation, user flows, prototypes and AI workflows, validation and iteration. Growth: content and creator ecosystems, channels and conversion, cross-border commercialisation, reading the numbers.',
    link: { label: 'See the cases', to: '/work' },
  },
  {
    id: 'cases',
    keywords: ['case', 'project', 'portfolio', 'work', 'done', 'experience'],
    answer:
      'There are five cases. Product & AI: PHYGITAL BASE (product design and project management). Commercial growth: COMMON GROUND (AI product), SOHO-T, ANNAKIKI and Momo’s Workshop. Together they form a loop — shipping an idea, designing a solution, understanding a market. The specific numbers are still being filled in.',
    link: { label: 'See the cases', to: '/work' },
  },
  {
    id: 'venture',
    keywords: ['working on', 'now', 'venture', 'startup', 'building', 'unseen', 'reverie'],
    answer:
      'I am working on four ventures: REVERIE, UNSEEN, YIXIANG SHOP and ANNAKIKI. Each answers the same six questions: problem, opportunity, solution, business model, validation, next milestone.',
    link: { label: 'See the ventures', to: '/venture' },
  },
  {
    id: 'thinking',
    keywords: ['business', 'judgement', 'judgment', 'think', 'method', 'logic', 'validat'],
    answer:
      'My order is: confirm the user problem is real, find the smallest testable solution, and only then talk about scale and commercialisation. Anything I have not validated I label as an assumption rather than dressing it up as a result.',
    link: { label: 'See validation status', to: '/venture' },
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'wechat', 'résumé', 'resume', 'cv', 'partner', 'hiring', 'download'],
    answer:
      'Contact details and downloads are on the About page: email enidyeh2002@gmail.com, WeChat ENIDYEAH, plus two tailored résumés (commercial and product).',
    link: { label: 'Go to About', to: '/about#resume' },
  },
]

export const avatarFallback: AvatarReply = {
  answer: 'Good question — happy to go into it further here.',
  link: { label: 'Get my contact details', to: '/about#contact' },
}

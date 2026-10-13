// English copy. Mirrors `../ventures.ts` one-to-one.
// 英文文案，与 `../ventures.ts` 一一对应。

import type { Venture } from '../ventures'
import { asset } from '../../lib/base'

export const ventureHead = {
  // 2026-10-12 at the owner’s request: eyebrow removed, title reworded.
  title: 'I’m building things from 0 to 1.',
  lede: 'A slice of what I’m thinking about right now — youth culture and the new consumer context, explored through content and community.',
}

export const ventures: Venture[] = [
  {
    slug: 'reverie',
    name: 'REVERIE',
    en: 'REVERIE',
    image: asset('venture-reverie.webp'),
    tagline: 'Youth Culture · Community · Commercialization',
    oneLiner:
      'Taking youth culture and interest-based communities as the starting point, and exploring how cultural content becomes offline experience, community connection and commercial value.',
    status: 'Creative markets · Themed exhibitions · Cultural exchange',
    xhs: 'https://www.xiaohongshu.com/user/profile/649917aa000000002b008d69?xsec_token=ABfzm1XTVu1UBRen42srLiMcZX1ASBdXjYvvr-wEVlXKg=&xsec_source=pc_search',
    // 2026-10-12: the status chip is replaced by these small tags
    tags: ['Creative markets', 'Themed exhibitions', 'Cultural exchange'],
    // 2026-10-13: full copy supplied by the owner (role / six questions / partnership)
    role: {
      body: [
        '**Founder / brand strategy and commercialisation lead**',
        'I founded and lead REVERIE, a cultural innovation project built around youth culture that brings together themed events, interest communities and brand experiences — planning multi-theme cultural events that connect young consumers, independent creators and commercial brands, and turning taste and interest into offline experiences people can join, share and buy into.',
        'Responsible for positioning, cultural theme planning, event experience design, brand and creator partnerships, venue and supplier coordination, content and ticketing operations — taking the project from concept through to delivery and commercial partnership.',
      ],
    },
    problem: {
      body: [
        '**Interest content is rich, but real connection and experience are not.**',
        'Young people can find interest content online, but there are few offline settings that connect aesthetic identity, self-expression and real social connection. Traditional markets and themed events lean towards selling goods or one-off entertainment, and struggle to satisfy cultural expression, community belonging and ongoing participation at the same time.',
      ],
    },
    opportunity: {
      body: [
        '**Turning youth culture into something people can join, share and commercialise.**',
        'Around youth culture, independent creation and interest communities, exploring a new kind of cultural event that connects consumers, creators and brands. Themed IP, content and offline experience create a differentiated touchpoint, and give brands a more participative marketing setting.',
      ],
    },
    solution: {
      body: ['**Using themed IP as the entry point to build a content × experience × community model.**'],
      items: [
        '**Audience:** young consumers who identify with a particular aesthetic, youth culture or interest community.',
        '**Cultural themes:** themed events built around different interests and cultural styles — girl culture, punk and goth, independent creation and so on.',
        '**Event experience:** themed markets, interactive experiences, creator showcases and community exchange, forming a route that differs from a traditional market.',
        '**Content:** seeding, visual storytelling, creator showcases and event recruitment on Xiaohongshu and similar platforms, connecting online discovery with offline participation.',
      ],
      foot: [
        '**Phase one:** validate whether themed content can effectively attract the target audience and create sustained attendance and spending intent.',
      ],
    },
    businessModel: {
      body: ['**Validating demand through event revenue, extending value through brand partnerships.**'],
      items: [
        '**Ticket buyers:** revenue from tickets and themed experience products.',
        '**Creators and stallholders:** revenue from stall fees and joint event partnerships.',
        '**Brands:** partnership budgets through sponsorship, themed collaborations, product experiences and custom events.',
        '**Spaces and content:** themed event planning, offline experience design and content services for commercial spaces and consumer brands.',
      ],
      foot: [
        'Early on, validate the model through single-event revenue, cost and user feedback, then move towards brand customisation and longer-term partnerships.',
      ],
    },
    validation: {
      body: [
        '**Validating audience appeal and execution through real events.**',
        'Through running themed events, building experience in audience recruitment, ticketing, creator partnerships, venue coordination and on-site delivery, while watching content reach, attendance conversion, spending and user feedback.',
      ],
      foot: [
        'At this stage it matters to separate proven execution capability from commercial assumptions still to be tested: repeat purchase, migration across themes, brand renewal and unit economics all need more data.',
      ],
    },
    nextMilestone: {
      body: ['**From single events to a reusable cultural commercialisation product.**', 'The next phase validates three things:'],
      items: [
        '**Audience growth:** which themes, content and experiences produce valid sign-ups, actual attendance and repeat participation.',
        '**Commercial viability:** single-event revenue, venue and production cost, acquisition cost and break-even point.',
        '**Replicable partnership:** whether brands will keep paying for precise reach, creator connection and immersive experience.',
      ],
      foot: [
        'Plan: bring in brand partners, stable venue resources, strong creators and data support, and gradually build a reusable process for themed events and commercial partnerships.',
      ],
    },
    collab: {
      items: [
        '**Brand Partnership:** sponsorship, product experience, joint marketing and themed collaborations.',
        '**Venue Partnership:** commercial spaces, cultural venues and long-term event space collaboration.',
        '**Creator Ecosystem:** co-creation with independent brands, artists, creators and interest communities.',
        '**Content & Growth:** content planning, social media, audience growth and event performance analysis.',
      ],
    },
    // Partnership handbook (28 pages), same source as the Chinese page
    docPages: { dir: 'reverie', count: 28 },
    // 2026-10-13 site address given by the owner (the 查看网站 button)
    siteUrl: 'https://github.com/enidyeh/REVERIE',
    siteShot: asset('site-reverie.webp'),
    pending: true,
  },
  {
    slug: 'yixiang-shop',
    name: 'REVERIE SHOP',
    en: 'REVERIE SHOP',
    image: asset('venture-yixiang-shop.webp'),
    // Same crop as the Chinese page: awning and shop window, no signage.
    imagePos: '50% 67%',
    tagline: 'Curated Marketplace · Youth Culture · Retail',
    oneLiner:
      'With youth culture as the curatorial thread, turning cultural discovery into a scene you can experience, collect and buy — through themed buying, online retail and quarterly pop-ups.',
    status: 'In preparation',
    badge: 'In preparation',
    xhs: 'https://www.xiaohongshu.com/user/profile/5ee3a7b0000000000101fb9d?xsec_token=ABzYFn55WHC8Qc6kKy2M4nKtvEENs24S9d27ta75NBNsE%3D&xsec_source=pc_search',
    tags: ['Original products', 'Online market', 'Everyday goods'],
    // 2026-10-13: full copy supplied by the owner (role / six questions / partnership)
    role: {
      body: [
        '**Founder / brand strategy and commercialisation lead**',
        'Responsible for the shop’s positioning, cultural theme planning, buying strategy, brand partnerships and business-model design, exploring how the online market and offline themed pop-ups operate together, and taking REVERIE from youth-culture events towards a lasting retail and brand-partnership platform.',
      ],
    },
    problem: {
      body: [
        '**Plenty of product choice, but few curated retail scenes with cultural distinctiveness.**',
        'Traditional e-commerce organises goods by category, price and sales volume, which flattens the cultural context and unique value behind a product; independent brands and niche creators face limited exposure, scattered audiences and few places to sell.',
      ],
    },
    opportunity: {
      body: [
        '**Connecting niche brands, young consumers and retail scenes through cultural curation.**',
        'Around youth subcultures, vintage style, independent creation and emerging lifestyles, exploring a buyer-retail model that differs from traditional e-commerce. Themed buying and content storytelling give consumers an entry point for discovering new brands, and give independent brands a place to show, sell and reach users.',
      ],
    },
    solution: {
      body: ['**Organising buying around quarterly cultural themes, building a content × experience × retail loop.**'],
      items: [
        '**Themed curation:** the front-end experience is not organised by product category but around cultural themes that gather brands and objects — US military culture, vintage techwear, independent publishing, city nightlife.',
        '**Online market:** a digital entry point connecting brand and product showcases, themed content, online sales and event information.',
        '**Quarterly pop-up:** each quarter, one cultural theme integrates selected brands, limited products, a market and offline experiences into a staged commercial event.',
        '**Ecosystem:** linking UNSEEN BOX’s youth-culture observation and content discovery with REVERIE’s offline events and community resources, so cultural insight, on-site experience and product sales feed each other.',
      ],
      foot: [
        '**Phase one:** validate whether themed buying raises interest in niche brands, purchase conversion and repeat visits, and establish a reusable brand-partnership and quarterly curation process.',
      ],
    },
    businessModel: {
      body: ['**Building revenue from curated retail, extending value through themed events and brand partnerships.**'],
      items: [
        '**Product sales:** revenue from consignment commission and the retail margin after wholesale buy-out.',
        '**Brand partnerships:** themed showcases, product launches, joint promotion and limited-edition programmes for independent brands.',
        '**Quarterly pop-up:** revenue from brand partnerships, stall fees and on-site sales.',
        '**Own products:** based on real sales and user feedback, gradually developing REVERIE own-label and collaboration products.',
      ],
      foot: [
        'Early on, prioritise light-inventory consignment and curated partnerships to reduce stock risk; use sales data, user feedback and repeat purchase to decide which brands, categories and own products are worth running long term.',
      ],
    },
    validation: {
      body: [
        '**Building on existing events and brand partnerships, exploring the move from event transactions to ongoing retail.**',
        'Drawing on REVERIE’s existing themed events, building experience in reaching young users, working with independent brands, organising stalls, content and offline selling.',
      ],
      foot: [
        'At this stage it matters to separate existing capability from untested assumptions: themed curation and event execution have a practical base, but the online store’s sustained conversion, the selling efficiency of consignment stock, the reuse value of quarterly themes, repeat purchase across themes and brands’ willingness to renew all still need real trading data.',
      ],
    },
    nextMilestone: {
      body: ['**From a themed buying experiment to a sustainable youth-culture retail system.**'],
      items: [
        '**Buying:** select an initial group of independent brands and distinctive products; test interest, price acceptance and real purchase behaviour under different cultural themes.',
        '**Channels:** build a lightweight online store and run one quarterly pop-up to test how online content, offline experience and product sales convert into each other.',
        '**Commercials:** track product margin, consignment split, inventory turnover, event cost, basket size and repeat purchase to judge sustainability.',
        '**Systems:** establish a brand partner pool, buying standards, a themed curation process and sales data practice, gradually developing the REVERIE ORIGINALS line.',
      ],
    },
    collab: {
      items: [
        '**Independent Brands:** independent designer labels, youth brands, artists and original creators.',
        '**Vintage & Subculture:** vintage clothing, surplus goods, independent publishing and niche products with a strong cultural background.',
        '**Brand Partnership:** themed collaborations, product launches, quarterly curation and joint marketing.',
        '**Retail & Venue:** online retail channels, commercial spaces, concept stores and pop-up venues.',
        '**Content & Community:** youth-culture media, creators, interest communities and co-created offline experiences.',
      ],
    },
    pending: true,
  },
  {
    slug: 'unseen',
    name: 'UNSEEN',
    en: 'UNSEEN',
    image: asset('venture-unseen.webp'),
    tagline: 'AI × Youth Culture × Curated Discovery',
    oneLiner:
      'Cultural exploration for today’s young people, using magazine-style curation to connect city culture, offline experience and personal growth — exploring every side of how young people discover culture today.',
    status: 'In preparation',
    badge: 'In preparation',
    xhs: 'https://www.xiaohongshu.com/user/profile/614dd5e400000000020249dd?xsec_token=AB_Vx9ak1d5jq8Hh5539hbBDYPIReL40PjeHF0THv5KVk%3D&xsec_source=pc_search',
    tags: ['Cultural research', 'Interviews', 'Co-creation'],
    // 2026-10-13: full copy supplied by the owner (role / six questions / partnership / prototype status)
    role: {
      body: [
        '**Founder / cultural curation and commercialisation lead**',
        'I founded and lead UNSEEN BOX, planning monthly themed curation and content distribution around youth culture, city life and diverse interests; responsible for cultural-theme research, narrative, distribution planning and partnerships with creators, cultural events and lifestyle brands — exploring how online content discovery extends into offline experience and consumption. Built on a “theme curation → content distribution → experience participation → commercial conversion” loop, connecting youth culture, the content ecosystem and lifestyle consumption.',
      ],
    },
    problem: {
      body: [
        '**Lots of information, but a life worth experiencing still has to be found by yourself.**',
        'For young people who want to experience Shanghai in depth, existing content platforms offer plenty of guides, recommendations and user notes — yet it is easy to fall into overload and repetitive browsing. There is still a gap between discovering content and taking part for real: what users need is not more information but a filtered, themed experience with a route into action.',
      ],
    },
    opportunity: {
      body: [
        '**As information multiplies, discovery with editorial judgement becomes scarcer.**',
        'UNSEEN explores a product model that differs from the infinite feed: organising city content through themed curation, and turning scattered information into a continuous life experience through selected recommendations, offline events and personal records.',
      ],
    },
    solution: {
      body: ['**Using a monthly theme as the unit of content, connecting discovery, experience and record.**'],
      items: [
        '**DISCOVER:** magazine-style features on city culture, lifestyle and selected content.',
        '**EVENTS:** connecting themed events and offline experiences so discovery turns into action.',
        '**MARKET:** exploring independent brands, creators and themed products through content.',
        '**SPACE:** showing offline spaces and gathering points with a cultural theme.',
        '**IDENTITY:** reserving a product entry point for future personal records, collections and participation.',
      ],
      foot: [
        '**Phase one:** validate whether “one theme a month” helps users find content they care about faster, and creates intent to come back.',
      ],
    },
    businessModel: {
      body: [
        '**Starting from content curation, exploring the link between experience and commercial partnership.**',
        'This version is a product demo prototype and no real transactions take place. Possible models to explore later:',
      ],
      items: [
        '**Brand partnerships:** themed content planning, brand showcases and joint marketing.',
        '**Event revenue:** themed events, workshops and immersive experiences.',
        '**Selected products:** selling or taking commission on independent-brand and themed products.',
        '**Space partnerships:** themed curation, pop-ups and youth-audience reach for commercial spaces.',
      ],
      foot: ['These are all commercial assumptions still to be validated; there is no proven revenue model yet.'],
    },
    validation: {
      body: [
        '**Initial validation: from product concept to a working front-end prototype.**',
        'A locally runnable interactive prototype now exists, showing the product’s information architecture, visual language and how the core pages relate.',
        'Current boundaries:',
      ],
      items: [
        'No login system and no back-end services.',
        'No real transactions, user behaviour data or full content operations.',
        'No formal user interviews, usability testing or retention validation yet.',
        'All page content is illustrative and does not represent real commercial partnerships.',
      ],
      foot: [
        'What is validated at this stage is the presentability of the product concept and the interaction flow — not proven market demand or commercial viability.',
      ],
    },
    nextMilestone: {
      body: ['**From an interactive prototype to real user validation.**'],
      items: [
        '**Content:** define how monthly themes are chosen, where content comes from and how it is edited.',
        '**Experience:** recruit a small group of young people in Shanghai for usability testing, watching whether discovery, event exploration and decision-making feel smooth.',
        '**Return visits:** run consecutive themes and watch whether users come back, and which content actually leads to offline participation.',
        '**Commercial:** once demand is provisionally validated, test brand partnerships, event ticketing and selected products as revenue routes.',
      ],
    },
    collab: {
      items: [
        '**Curators:** co-curating youth culture, city life and themed content.',
        '**Venue & Market Partners:** offline spaces, markets and themed events.',
        '**Creators:** independent brands, artists and young creators.',
        '**Content Partners:** city culture, exhibitions, events and lifestyle content resources.',
      ],
    },
    liveUrl: 'http://localhost:5173',
    liveNote: {
      body: [
        '**Local demo prototype**',
        'This version shows the product idea, page structure and interaction design. No back end, real user data or transaction system is connected yet.',
      ],
    },
  },
  {
    // Added 2026-10-11 at the site owner's request: the fourth brand.
    // The one-liner comes from REALMVIEW's own README (an outbound service site
    // for 0→1 brands); everything else is left for the owner to confirm.
    slug: 'realmview',
    name: 'REALMVIEW',
    en: 'REALMVIEW',
    image: asset('venture-realmview.webp'),
    tagline: 'Cross-Market Growth · AI Marketing · Creator Ecosystem',
    oneLiner:
      'See the world, and everything becomes value. Exploring global brands’ cross-border growth through market insight, content strategy and AI marketing tools.',
    status: 'In preparation',
    badge: 'In preparation',
    xhs: 'https://www.xiaohongshu.com/user/profile/5e3665730000000001000223?xsec_token=ABTbpa8xFFnHQaGi9EOH1bJnblHwxKKHxMtr_pojBPwpU%3D&xsec_source=pc_search',
    tags: ['Brand expansion in and out of China', 'Cultural curation', 'Global marketing resources'],
    // 2026-10-13: full copy supplied by the owner (role / six questions / partnership)
    role: {
      body: [
        '**Founder / brand strategy and commercialisation lead**',
        'REALMVIEW is a brand-marketing project focused on **taking new brands from 0 to 1 and growing consumer brands across borders**, combining brand strategy, content marketing, AI marketing tools and cross-border creator resources to help brands reach new markets, build recognition and convert it commercially.',
      ],
    },
    problem: {
      body: [
        '**Small and mid-sized brands with products and supply chains often lack the ability to turn those resources into market growth.**',
        'Many emerging consumer brands have product, supply-chain or creative strengths, but no clear brand positioning, target-market judgement, content marketing strategy or creator partnerships. For early brands on limited budgets, the cost and complexity of traditional marketing services can also be a barrier to starting.',
      ],
    },
    opportunity: {
      body: [
        '**Entering through lightweight strategy services, exploring an AI-driven brand growth model.**',
        'Cross-border consumer commerce and the digital content ecosystem give brands new ways to reach markets. AI lowers the threshold for some market research, creative production and marketing planning, while creator content gives brands a new channel for connecting with users.',
        'REALMVIEW plans to build client recognition and real business scenarios through services, then turn repeatable marketing processes into AI tools and gradually explore a collaboration network between brands and creators.',
      ],
    },
    solution: {
      body: ['**Using brand growth services as the entry point, gradually building a strategy × AI × creator system.**'],
      items: [
        '**Brand Growth:** brand cold start, market research, content strategy and cross-market entry plans for consumer brands with product or supply-chain foundations — covering brands going global, overseas brands entering China, and domestic growth.',
        '**AI Marketing Agent:** exploring how market analysis, user insight, competitor research, content planning and marketing plan generation can be combined into repeatable AI workflows, cutting the time cost of early marketing planning.',
        '**Creator Network:** focused on beauty and lifestyle, exploring AI-assisted content production, creator collaboration and brand matching to build a sustainable content marketing resource network.',
      ],
      foot: [
        '**Phase one:** enter through a standardised brand-start service, validating real demand, willingness to pay and delivery efficiency — rather than investing heavily in both a tool and a creator network at the same time.',
      ],
    },
    businessModel: {
      body: ['**Validating demand through service revenue, extending long-term value through tools and networks.**'],
      items: [
        '**Brand strategy services:** project revenue from brand diagnosis, market research, brand cold start and market entry plans.',
        '**Marketing execution services:** content planning, creator collaboration and marketing project management, charged per project or service period.',
        '**AI tool products:** once workflows are validated, exploring pay-per-use, subscription or enterprise models.',
        '**Creator commercial partnerships:** once stable creator resources and brand demand exist, exploring creator matching, content production and marketing project management revenue.',
      ],
      foot: [
        'Early on, prioritise lightweight, clearly scoped project services for cash flow, then validate how standardised the service can be before deciding whether to invest in a standalone tool product and creator network.',
      ],
    },
    validation: {
      body: [
        '**Building a testable commercial service from existing project experience.**',
        'The founder has hands-on experience in product design, international study, brand visuals, content planning and event commercialisation, and has built brand partnerships, creator collaboration, community operations and offline project delivery through youth-culture events.',
        'That experience forms REALMVIEW’s initial capability base, but it does not mean REALMVIEW has already validated paid demand for cross-border marketing services.',
        '**The levels to distinguish right now:**',
      ],
      items: [
        '**Existing base:** brand and content planning ability, experience taking projects from concept to execution, and cross-cultural study and market observation.',
        '**To be validated:** willingness of small and mid-sized brands to pay for a standardised growth service, cross-border client acquisition efficiency, delivery margin and client repeat purchase.',
        '**To be developed and validated:** the real usefulness of the AI agent and how much it speeds up planning, plus the matching efficiency and commercial sustainability of the creator network.',
      ],
    },
    nextMilestone: {
      body: ['**From single brand services to a reusable growth system.**', 'The next phase validates three questions:'],
      items: [
        '**Client demand:** which brands have a clear marketing pain point, available budget and real decision-making power? Prioritise lifestyle brands with product, supply-chain or sales foundations.',
        '**Commercial viability:** which service is easiest to sell, has the clearest delivery boundary, and can produce reasonable project margin and repeat purchase?',
        '**Productisation opportunity:** which marketing tasks recur and are standardised enough to become AI agent workflows? Could a creator network further improve delivery efficiency and client value?',
      ],
      foot: [
        '**What is needed:** a first group of paying pilot clients, cross-border market and channel partners, AI product development support, beauty and lifestyle creator resources, and data that can measure project cost and marketing performance.',
      ],
    },
    collab: {
      items: [
        '**Brand Partnership:** consumer brands with product, supply-chain or sales foundations that want a brand cold start, market expansion or cross-border growth.',
        '**Market Entry:** channel partners, marketing teams and localisation agencies that know the Chinese or overseas markets.',
        '**AI Product Development:** joint exploration of AI agent products for marketing research, strategy planning, creative production and delivery management.',
        '**Creator Ecosystem:** creators, content production teams and brand partnership resources in beauty, fragrance, fashion and lifestyle.',
        '**Pilot Projects:** small paid pilots that validate service value, workflow and business model through real projects.',
      ],
    },
    // 2026-10-13 site address given by the owner (the 查看网站 button)
    siteUrl: 'https://github.com/enidyeh/REALMVIEW',
    siteShot: asset('site-realmview.webp'),
    pending: true,
  },
]

export const dataRoom = {
  text: 'Let’s explore and create together.',
}

export const ventureNote =
  'Anything unvalidated is labelled “assumption / to be confirmed” inside each project rather than dressed up as results. Commercially sensitive information is not disclosed on public pages.'

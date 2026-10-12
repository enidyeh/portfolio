// English copy. Mirrors `../works.ts` one-to-one.
// 英文文案，与 `../works.ts` 一一对应。

import type { WorkCase, WorkTrackId } from '../works'
import { asset } from '../../lib/base'

export const worksHead = {
  // 2026-10-12 at the owner’s request: the eyebrow stays off, the lede is back (new copy).
  title: 'Different cases that form one complete loop.',
  lede: 'A selection of cases focused on product design, commercial creativity, and how I think about global growth and commercialisation.',
}

export const workTracks: {
  id: WorkTrackId
  no: string
  en: string
  zh: string
  items: string[]
}[] = [
  {
    id: 'product',
    no: '01',
    en: 'Product & AI',
    zh: 'Product & AI',
    items: ['Deep research into user problems and needs, then product solutions and prototypes'],
  },
  {
    id: 'commercial',
    no: '02',
    en: 'Brand marketing & global growth',
    zh: 'Brand marketing & global growth',
    items: ['Exploring growth through work with real commercial brands, and exploring cross-border commercial culture'],
  },
]

export const works: WorkCase[] = [
  {
    slug: 'phygital-base',
    title: 'Digital Asset Management in the Data-Sovereignty Era',
    featured: true,
    track: 'product',
    // Full project document: 33 pages, supplied by the owner
    docPages: { dir: 'phygital-base', count: 32 },
    // Award badges shown under the case title
    awards: ['Outstanding graduation project (university level)', 'Top 3 in major'],
    // Thesis download, placed under the project-type line in the left column (button only)
    attachment: { label: 'Download thesis', url: asset('thesis.pdf') },
    tags: ['Product design', 'Project management', 'UI design', 'Product strategy'],
    year: 'To be filled',
    role: '',
    type: 'Product design and project management',
    summary:
      'PHYGITAL BASE is a phygital intelligent-product design proposal that works across digital hardware, software design, contextual social features and digital identity — exploring a new approach to digital asset management in the era of data sovereignty.',
    video: { src: asset('work-phygital.mp4'), poster: asset('work-phygital-poster.jpg') },
    // 2026-10-13: the small info rows are gone — their content now lives in the blocks below
    // (project type/topic → project background; core strategy → key decisions; deliverables → outcome).
    // All copy follows the owner’s original text, nothing paraphrased or dropped.
    problem: {
      body: [
        '**Project type**: Smart hardware and software system design',
        '**Project topic**: Phygital intelligent product design in the era of data sovereignty',
      ],
      items: [
        '**Users**: digital-asset collectors — people new to Web3, gamers, NFT collectors, KOLs and gaming-community operators.',
        '**Market problem**: digital assets (game items, NFTs) exist only on-chain or inside purely digital interfaces. They are highly fragmented and lack real-world ceremony and social trust — meeting offline, players struggle to prove their identity and holdings quickly (endless scrolling for screenshots, or verifying an address).',
        '**Why existing options fall short**:',
        'Purely online digital scenes (e.g. OpenSea): no physical carrier, the asset stays abstract and trust is hard to build.',
        'Offline hardware (e.g. smart speakers): fixed functions, no connection to Web3 data, no data sovereignty.',
        '**Opportunity**: the market lacks a product that delivers both “modular physical interaction” and “data sovereignty in practice”.',
      ],
    },
    contribution: [
      '**Project lead & lead product designer**: owned the whole chain — market research, user interviews (five types of target user, e.g. gaming BD and anime KOLs), product definition, concept development, hardware sketches and 3D modelling, UI/UX design, through to the exhibition stand and the commercial plan.',
    ],
    decisions: [
      '**Core strategy**: turn abstract data sovereignty into something you can feel and touch every day — building a complete interaction loop: physical action ➔ software processing ➔ on-chain proof of ownership ➔ hardware feedback.',
      '**Key trade-off**: chose a phone-mounted modular hardware form factor and gave up a standalone handheld device.',
      '**Why**: a standalone device is too much to carry and costs more. Using the phone’s existing compute and screen as a magnetic module keeps the case light while giving Web3 assets a real sense of ownership and social currency through physical touch and on-screen feedback.',
      '**How it was validated**: product-scale research (wrist-to-thumb reach), sketch iteration and a fast 3D-printed prototype, plus complete software interaction screens and hardware modules for several scenarios (asset management, game display, social connection).',
    ],
    outcome: [
      '**Deliverables**: a complete phygital product system — modular hardware, a mobile app and an on-chain record system — plus a commercial outlook.',
      '**Academic recognition**: awarded an Outstanding Graduation Project at Jiangnan University (top 5%).',
      '**Delivered**: a concept taken all the way to a high-fidelity full-chain prototype — industrial design drawings, 3D render models, the full app UI/UX and the exhibition stand.',
      '**User validation**: tested live at the exhibition against the research pain points, confirming the feasibility of touch recognition and NFC social exchange — breaking down the barrier between online assets and offline interaction.',
    ],
    reflection: [
      'If I started again I would focus earlier on validating the **“minimum viable product (MVP)”**. For example, shipping only the “NFC social card”, the sharpest pain point, instead of opening up every “game + social + management” module at once.',
      'On the hardware side I would spend more time testing the stability of the magnetic connection and the battery constraints, to make it easier to land later.',
      'On the commercial side I would calculate the stage-one cold-start acquisition cost (CAC) more precisely and sharpen the route into the market through gaming.',
    ],
  },
  {
    slug: 'common-ground',
    title: 'A US street exhibition enters Italy: a “cultural translation”',
    image: asset('work-common-ground.webp'),
    track: 'commercial',
    // Full project document: 51 pages, supplied by the owner
    docPages: { dir: 'common-ground', count: 51 },
    tags: ['Cross-context culture', 'Global growth', 'Brand partner', 'Event planning'],
    year: 'To be filled',
    role: 'To be filled: your role',
    type: 'Cross-cultural exhibition design and localised brand experience',
    summary:
      'The global expansion of Beyond the Streets, a leading US street-culture brand — turning strongly regional American street culture into a “cultural translation” at the Milan Triennale.',
    // 2026-10-13: the small info rows are gone — the project name is the page title and the
    // project type now opens the project background. Outline items are quoted verbatim.
    problem: {
      body: [
        '**Project type**: Cross-cultural exhibition design and localised brand experience',
        '**Background and pain point (Why)**: US street culture does not travel to Milan by itself.',
        'Beyond the Streets, a leading US street-culture brand, was seeking global expansion and wanted to land at the Milan Triennale. The core challenge: how could a strongly regional American street culture get past cultural barriers, attract a diverse Italian audience and break out in brand awareness?',
      ],
    },
    sections: [
      {
        title: 'Core strategy',
        body: [
          'A “viral migration and cultural translation” approach. Rather than simply moving artworks, the exhibition is rebuilt as a community check-in and sharing event that fits the Milanese context — a localised offline experience people want to visit and spread.',
        ],
      },
      {
        title: 'Design focus and delivery',
        items: [
          '**Spatial narrative through contrast**: raw metal textures and urban street grain set against the refined architecture of the Milan Triennale — strong visual tension and a highly recognisable photo spot.',
          '**Modular and highly interactive**: a modular open structure gives a smoother route and better sightlines, greatly encouraging visitors to interact.',
          '**Sustainable and cost-efficient**: modular re-assembly reduces bespoke structures, keeping the show “underground” and variable while cutting touring costs sharply.',
          '**Process and delivery (What)**: show your floor plan, 3D renders and modular structure sketches.',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'End-to-end exhibition experience planning, site plan and 3D renders, interactive installation design, brand visual system, community sharing marketing plan, merchandise design and brand strategy plan.',
        ],
        foot: [
          '**Core output (Results)**: brand visuals, marketing activities, merchandise design and the full brand strategy.',
        ],
      },
    ],
    contribution: ['Independent curation and exhibition design / cross-cultural planning.'],
    decisions: [
      '**Trade-off 1**: gave up “reproducing the US original” in favour of “local reconstruction”.',
      '**Trade-off 2**: gave up a “closed, high-end exhibition” in favour of “modular + contrast + social check-in”.',
    ],
    outcome: ['To be filled: how it was tested, what the results were, and where it goes next.'],
    reflection: 'If I started again, at which point would I bring local community co-creation in earlier, or measure the conversion rate of the check-in sharing more precisely?',
    pending: true,
  },
  {
    slug: 'soho-t',
    title: 'Building a lifestyle in China with a European womenswear brand',
    image: asset('work-soho-t.webp'),
    track: 'commercial',
    // Full project document: 33 pages, supplied by the owner
    docPages: { dir: 'soho-t', count: 33 },
    tags: ['Market entry strategy', 'Brand marketing', 'Content creation'],
    year: 'To be filled',
    role: 'To be filled: your role',
    type: 'Cross-border brand strategy × localisation for a brand entering China × community marketing',
    summary:
      'The Italian womenswear brand SOHO-T entering China — using an “Italian quality × Eastern soul” fusion strategy for localisation and Xiaohongshu community marketing.',
    // 2026-10-13: the small info rows are gone; outline items quoted verbatim.
    problem: {
      body: [
        '**Project type**: Cross-border brand strategy × localisation for a brand entering China × community marketing',
        '**Go-global challenge (Brief)**: Italian DNA versus the barriers of the Chinese market.',
        'The Italian womenswear brand SOHO-T has excellent Italian design DNA, but faced cultural barriers and a recognition gap when entering the Chinese market. It needed to keep its international tone while speaking precisely to Chinese consumers’ emotional needs and dressing habits.',
      ],
    },
    sections: [
      {
        title: 'Core strategy (localisation and breaking out)',
        body: [
          'A fusion strategy of “Italian quality × Eastern soul — No choice: your Italian qualities, your Eastern soul”. Rather than simply selling product, it distils Italian feminine thinking into an international lifestyle, rebuilding the brand’s competitiveness in China.',
        ],
        items: [
          '**Cultural translation (Strategy)**: show the “Italian minimalism + Eastern Zen” moodboard comparison. (Proving an advanced cross-cultural aesthetic and user insight.)',
        ],
      },
      {
        title: 'Core execution and platform operations (deep integration with Xiaohongshu)',
        items: [
          '**Rebuilding the brand narrative**: fusing Eastern lifestyle with Italian minimalism to rebuild the brand story, then working back from it to optimise the product line.',
          '**Xiaohongshu community sharing**: making Xiaohongshu the core platform for seeding and conversion — planning a “Xiaohongshu everyday-people styling challenge” and co-creating UGC so real users share their outfits and build a high-loyalty brand community.',
          '**Delivery strategy (Execution)**: use a flow diagram to show the full chain “brand story ➔ product optimisation ➔ Xiaohongshu everyday-people styling challenge ➔ community virality”.',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'China entry positioning and story system, lifestyle concept (online and offline space), community activity plan, and a tailored advertising and KOL marketing strategy for Xiaohongshu and other platforms.',
        ],
      },
    ],
    contribution: ['To be filled: brand positioning, content or creator strategy, channel choices, conversion path.'],
    decisions: ['To be filled: one key trade-off, and which metric you used to judge it.'],
    outcome: ['To be filled: publishable growth results; if they cannot be published, label it clearly as an independent research project.'],
    reflection: [
      'Show the online and offline experiences and the community activity plan you designed.',
      'If I started again, how could AI tools scale up the running of the everyday-people challenge?',
    ],
    pending: true,
  },
  {
    slug: 'annakiki',
    title: 'A heritage brand rebuilding its image through cross-border pop-ups',
    image: asset('work-annakiki.webp'),
    track: 'commercial',
    // Full project document: 17 pages, supplied by the owner
    docPages: { dir: 'annakiki', count: 17 },
    tags: ['Brand repositioning', 'Brand collaborations', 'Pop-up events'],
    year: 'To be filled',
    role: 'To be filled: your role',
    type: 'Brand strategy design × retail experience and route planning × cross-brand collaboration (pop-up)',
    summary:
      'Laorentou, founded in 1899, teaming up with ANNAKIKI for a pop-up — using high-contrast collaboration and social-media virality to refresh a century-old brand for a younger female market.',
    // 2026-10-13: the small info rows are gone; outline items quoted verbatim.
    problem: {
      body: [
        '**Project type**: Brand strategy design × retail experience and route planning × cross-brand collaboration (pop-up)',
        '**The opening (Brief)**: how does a century-old brand break into a younger market? (defining the product pain point)',
        'Laorentou, a national footwear brand founded in 1899, faced an ageing brand, a gap in its user base and little international presence. It urgently needed to move past the traditional craftsman story and speak to a young female consumer market.',
      ],
      items: [
        '**Audience and entry point (Target)**: the old brand’s existing audience versus young women looking for a way to express themselves.',
      ],
    },
    sections: [
      {
        title: 'Core strategy (breaking out and localising)',
        body: ['Combining a high-contrast collaboration with social-media sharing into one coordinated move.'],
        items: [
          '**Cross-brand collaboration**: partnering with ANNAKIKI, an avant-garde Chinese independent designer brand, to borrow its strong visual language and break the old stereotype.',
          '**Scene reshaping**: using the location advantage of Milan’s Brera fashion district and a high-contrast, visually strong physical space to reset the brand tone.',
        ],
      },
      {
        title: 'Design focus and delivery (operations and routes)',
        items: [
          'Planning an entirely new visitor route, using spatial design to encourage people to share it themselves.',
          'Planning the opening event, on-site KOL livestream check-ins and interactive experiences, turning offline traffic into social-media reach.',
          '**Visual and space (Solution)**: show the pop-up exterior renders, the internal route diagram and the wayfinding system. (Showing design fundamentals.)',
          '**User journey and marketing (Growth)**: show the loop from “seeing the pop-up” to “walking in” to “creator livestream check-in” to “spreading online”. (Showing operational thinking.)',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'Brand collaboration marketing strategy, full pop-up store design, opening event planning, and a KOL livestream and community communication plan.',
        ],
      },
    ],
    contribution: ['To be filled: what you personally owned in the team.'],
    decisions: [
      '**Strategic trade-off (Choice)**: why ANNAKIKI rather than another fashion label? Why Brera rather than a shopping mall? (Showing commercial decision-making.)',
    ],
    outcome: ['To be filled: verifiable results; if they cannot be published, label it clearly as an independent research project.'],
    reflection: 'If I started again, how could the offline-to-online conversion data be improved?',
    pending: true,
  },
  {
    slug: 'momos-workshop',
    // 2026-10-12: content taken from the portfolio page the owner supplied
    title: 'Cross-border brand planning · Momo’s Workshop',
    image: asset('work-momos-workshop.webp'),
    track: 'commercial',
    docPages: { dir: 'momos-workshop', count: 1 },
    tags: ['Cross-border e-commerce', 'Europe & US markets', 'Content marketing', 'Creator marketing'],
    year: '2025',
    role: 'Overseas PR intern (brand “Momo’s Workshop”)',
    type: 'A Chinese e-commerce brand going global',
    summary:
      'Working with the brand’s categories and market goals, joining the cold start of the beauty brand “Momo’s Workshop” in European, American and Asian markets, and providing creative support for its content promotion.',
    // 2026-10-13: the small info rows are gone; the project type now opens the project background.
    problem: {
      body: [
        '**Project type**: Cross-border e-commerce × global brand localisation marketing × creator ecosystem operations',
        'Momo’s Workshop is a Chinese beauty-tool brand that built strong word of mouth and sales at home on the back of its hero products. With domestic competition intensifying and brand momentum rising, it wanted to open up global markets systematically while keeping its “professional, precise, delightful” DNA — targeting the US, South-East Asia and Europe, and using localisation plus digital marketing to build professional recognition and brand influence among international beauty fans from zero.',
      ],
    },
    sections: [
      {
        title: 'Core strategy',
        body: [
          'A go-global strategy of “brand tone first + creator content virality”, building a precise localised marketing system from 0 to 1.',
        ],
      },
      {
        title: 'Core execution and operations',
        items: [
          '**Social media cold start**: ran the cold start of the official TikTok, Instagram and YouTube accounts, leading visual content planning and publishing and quickly building an initial following (13k+ on a single platform).',
          '**KOL/KOC ecosystem**: built and maintained an overseas creator database (5,000+), working successfully with 500+ creators — sending samples, writing briefs and following up on content to drive UGC virality.',
          '**DTC site and e-commerce loop**: took part in designing, planning and running the overseas DTC site, closing the full commercial loop from social seeding ➔ creator discount codes ➔ DTC / e-commerce conversion.',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'Overseas brand DTC site operations plan, international social media content strategy, an SOP for working with 500+ creators, and full-funnel cross-border e-commerce data analysis and optimisation recommendations.',
        ],
      },
    ],
    contribution: ['Social media presence', 'DTC store', 'Creator partnerships', 'E-commerce pages'],
    decisions: [
      'Approach: start from the brand’s tone and build a brand-led marketing strategy, find strong content creators to work with, build the DTC site and e-commerce platform, and complete the full cross-border chain.',
    ],
    outcome: [
      '**Traffic layer (social media)**: show the TikTok / IG account data (13.5K followers, 420 posts). (Showing the ability to run a content matrix.)',
      '**Trust layer (creator partnerships)**: show KOL video screenshots and discount codes. (Showing creator operations and content virality.)',
      '**Conversion layer (DTC and e-commerce)**: show the Shopify store pages and the Amazon / TikTok Shop pages (with discounts, free shipping and sales). (Showing commercial-loop thinking.)',
      '**Data and review**: sum up the result in one line (for example, “through the creator matrix and the DTC site working together, we achieved a 0-to-1 overseas cold start”).',
    ],
    reflection: '',
  },
]

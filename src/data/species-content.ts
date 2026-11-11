/**
 * Sourced species data for all 10 raven species hub pages.
 * Every cell is cited; uncertain ranges are noted as such.
 * Sources: Wikipedia species articles (citing HBW/BirdLife/Cornell),
 * BirdLife International datasheets, oiseaux-birds.com.
 * Last verified: 2026-11-06
 */

export interface SpeciesContent {
  slug:          string;
  callNum:       string;
  commonName:    string;
  latinName:     string;
  authority:     string;   // taxonomic authority & year
  region:        string;
  regionKey:     string;
  rune:          string;

  /* Quick facts — omit field if no reliable source, never guess */
  lengthCm:      string;   // "56–69" or "56–69 (avg 63)"
  wingspanCm:    string;
  weightG:       string;
  iucn:          string;   // "Least Concern (LC) · BirdLife 2020"
  range:         string;   // one-sentence summary
  habitat:       string;   // key habitats
  diet:          string;   // brief
  voice:         string;   // key call description

  /* Field marks — the fastest ID facts */
  fieldMarks:    string[]; // 3–5 bullet points

  /* Behaviour */
  behaviour:     string;   // 2–3 sentences

  /* Conservation */
  conservation:  string;   // 2–3 sentences

  /* Look-alikes: which other species to compare */
  lookAlikes:    { name: string; slug: string; key: string }[];

  /* Lore cross-link (only if a sourced tradition exists) */
  loreLink?:     { label: string; href: string };

  /* SEO */
  primaryKeyword:    string;
  metaDescription:   string;
  snippet:           string;  // 40–55 word direct answer for featured snippet
  faq:               { q: string; a: string }[];

  /* Sources */
  sources: { id: number; citation: string; url?: string; usedFor: string }[];
}

export const SPECIES_CONTENT: SpeciesContent[] = [

  /* ── SPC·01 Common Raven ──────────────────────────────────────────────── */
  {
    slug:        'common-raven',
    callNum:     'SPC·01',
    commonName:  'Common Raven',
    latinName:   'Corvus corax',
    authority:   'Linnaeus, 1758',
    region:      'North America, Europe, Asia, North Africa',
    regionKey:   'north-america',
    rune:        'ᚺ',

    lengthCm:    '56–69',
    wingspanCm:  '120–150',
    weightG:     '689–1,625 (most 800–1,200)',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'The most widespread raven, found across the Holarctic: North America from Alaska to Central America, all of Europe, and across Asia to the Pacific.',
    habitat:     'Forest, tundra, coast, desert, mountain, farmland, cities — the most habitat-tolerant of all ravens.',
    diet:        'Omnivore: carrion, small vertebrates, invertebrates, berries, grain, human refuse.',
    voice:       'Deep, resonant "kronk" or "pruk"; also a gurgling water-drip call, wooden knocking, and a wide range of imitations.',

    fieldMarks: [
      'Wedge-shaped tail — the clearest in-flight mark; crow tails are fan-shaped.',
      'Shaggy throat hackles, especially visible when calling.',
      'Heavy, arched bill — larger than any crow.',
      'Size: roughly the size of a Buzzard; noticeably larger than a Carrion Crow.',
      'Deep croak rather than a caw.',
    ],

    behaviour: 'Common Ravens are among the most cognitively capable birds studied: they cache food, re-hide caches when watched, barter for future rewards, and form long-term pair bonds. Pairs defend territories year-round; non-breeders gather in communal roosts of up to hundreds of birds.',

    conservation: 'Least Concern globally with an increasing population trend. Once persecuted and extirpated across much of lowland Europe; since legal protection in the mid-20th century they have recolonised much of Britain and Central Europe. They are fully protected in most of their range.',

    lookAlikes: [
      { name: 'Carrion Crow',    slug: 'raven-vs-carrion-crow',      key: 'Rounded tail, smaller, caws.' },
      { name: 'American Crow',   slug: 'common-raven-vs-american-crow', key: 'Smaller, fan tail, nasal caw.' },
      { name: 'Rook',            slug: 'raven-vs-rook',              key: 'Pale face, floppy wingtips, calls.' },
      { name: 'Chihuahuan Raven', slug: 'chihuahuan-raven',          key: 'Smaller, voice differs, SW USA overlap.' },
    ],

    loreLink: { label: 'Huginn & Muninn — Odin\'s ravens in Norse myth', href: '/lore/norse/huginn-and-muninn/' },

    primaryKeyword:  'common raven',
    metaDescription: 'The Common Raven (Corvus corax): field marks, size, range, voice and behaviour — with a side-by-side crow comparison and sourced facts.',
    snippet: 'The Common Raven (Corvus corax) is the largest corvid: 56–69 cm long, with a wingspan of 120–150 cm and a wedge-shaped tail. It lives across the Holarctic — from Alaska to North Africa to Japan — and is Least Concern on the IUCN Red List.',

    faq: [
      { q: 'How big is a Common Raven?', a: 'Common Ravens are 56–69 cm (22–27 in) long with a wingspan of 120–150 cm (47–59 in). They weigh 689–1,625 g (1.5–3.6 lb), making them the largest passerine bird in the world.' },
      { q: 'How can you tell a Common Raven from a crow?', a: 'The quickest mark is the tail: wedge-shaped on a raven, fan-shaped (rounded) on a crow. Ravens are also noticeably larger, have a heavier arched bill, shaggy throat hackles, and call with a deep croak rather than a caw.' },
      { q: 'Where does the Common Raven live?', a: 'Common Ravens are found across the whole Holarctic — North America from Alaska south to Nicaragua, all of Europe, and across Asia to Japan and the Pacific. They occupy almost every habitat from Arctic tundra to desert.' },
      { q: 'Is the Common Raven endangered?', a: 'No. The Common Raven is classified as Least Concern by the IUCN, with a population that is increasing in many areas after persecution ended in the 20th century.' },
      { q: 'How smart is the Common Raven?', a: 'Common Ravens have been shown in controlled experiments to plan for the future, understand what others can and cannot see, and trade tokens for food — cognitive feats once considered unique to great apes. See our raven intelligence chapter for the details.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus corax. The IUCN Red List of Threatened Species 2020: e.T22706068A166517592.', url: 'https://www.iucnredlist.org/species/22706068/166517592', usedFor: 'IUCN status, population trend' },
      { id: 2, citation: 'Madge, S. & Burn, H. (1994). Crows and Jays. Christopher Helm, London.', usedFor: 'size, field marks, range' },
      { id: 3, citation: 'Boarman, W.I. & Heinrich, B. (1999). Common Raven (Corvus corax). In Birds of the World (A.F. Poole, ed.). Cornell Lab of Ornithology.', url: 'https://birdsoftheworld.org/bow/species/comrav/cur/introduction', usedFor: 'behaviour, range, voice' },
    ],
  },

  /* ── SPC·02 Thick-billed Raven ───────────────────────────────────────── */
  {
    slug:        'thick-billed-raven',
    callNum:     'SPC·02',
    commonName:  'Thick-billed Raven',
    latinName:   'Corvus crassirostris',
    authority:   'Rüppell, 1836',
    region:      'Ethiopian Highlands',
    regionKey:   'africa',
    rune:        'ᚦ',

    lengthCm:    '60–70 (avg 64)',
    wingspanCm:  'up to 150',
    weightG:     '1,150–1,500',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Endemic to the highlands of Ethiopia, Eritrea and northern Somalia; largely above 1,500 m.',
    habitat:     'High-altitude grasslands, cliffs, villages and towns in the Ethiopian highlands.',
    diet:        'Omnivore: carrion, offal, invertebrates, plant material; frequently scavenges around human settlements.',
    voice:       'Deep croaking calls similar to Common Raven; also hoarse barks.',

    fieldMarks: [
      'Enormous arched bill — proportionally the largest of any raven, with a white tip.',
      'Pale patch on the back of the neck (nape), visible at close range.',
      'Size: rivals the Common Raven as the world\'s largest corvid.',
      'Deep, resonant croak; often heard before seen at altitude.',
    ],

    behaviour: 'Sociable around towns and refuse sites; pairs year-round. Strongly associated with human settlements in highland Ethiopia, where it has little fear of people. Breeds on cliff ledges.',

    conservation: 'Least Concern. Restricted range but stable population within highland Ethiopia and Eritrea. No major threats identified.',

    lookAlikes: [
      { name: 'Common Raven',   slug: 'common-raven',   key: 'Smaller bill, no white nape patch, broader range.' },
      { name: 'White-necked Raven', slug: 'white-necked-raven', key: 'White collar not just nape, different range.' },
    ],

    primaryKeyword:  'thick-billed raven',
    metaDescription: 'The Thick-billed Raven (Corvus crassirostris): identification, size, range in the Ethiopian highlands, and what makes its bill unique.',
    snippet: 'The Thick-billed Raven (Corvus crassirostris) is a massive corvid — 60–70 cm long, weighing up to 1,500 g — endemic to the highlands of Ethiopia and Eritrea. It is identified by its enormous arched bill with a white tip and a pale nape patch.',

    faq: [
      { q: 'Where does the Thick-billed Raven live?', a: 'The Thick-billed Raven is found only in the highlands of Ethiopia, Eritrea and northern Somalia, mostly above 1,500 m elevation. It is one of the most range-restricted ravens in the world.' },
      { q: 'What makes the Thick-billed Raven\'s bill special?', a: 'Its bill is proportionally the largest of any raven, deeply arched and strongly curved, with a white tip on the upper mandible. This distinguishes it from all other ravens.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus crassirostris. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706090/166517688', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Madge, S. & Burn, H. (1994). Crows and Jays. Christopher Helm, London.', usedFor: 'size, field marks' },
    ],
  },

  /* ── SPC·03 White-necked Raven ───────────────────────────────────────── */
  {
    slug:        'white-necked-raven',
    callNum:     'SPC·03',
    commonName:  'White-necked Raven',
    latinName:   'Corvus albicollis',
    authority:   'Latham, 1790',
    region:      'Eastern and Southern Africa',
    regionKey:   'africa',
    rune:        'ᚹ',

    lengthCm:    '50–54',
    wingspanCm:  '100–120 (estimated)',
    weightG:     '894–1,010',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Eastern and southern Africa from Ethiopia and Kenya south to South Africa; strongly associated with mountains and cliff country.',
    habitat:     'Cliff faces, escarpments, mountains, adjacent open grassland; also increasingly around towns.',
    diet:        'Omnivore: carrion, invertebrates, berries, grain, refuse.',
    voice:       'Harsh, hoarse croaking; described as deeper and rougher than the Common Raven.',

    fieldMarks: [
      'Bold white crescent across the nape and upper breast — unmistakable at close range.',
      'Very heavy, arched bill with a white tip.',
      'All-black body except the white nape; white visible in flight.',
      'Stockier build than Common Raven with shorter tail.',
    ],

    behaviour: 'Pairs and small groups associate with cliff habitats for nesting; often seen soaring on thermals above escarpments. Increasingly uses towns and refuse as food source in East Africa.',

    conservation: 'Least Concern. Widespread and locally common across its African range; no major declines reported.',

    lookAlikes: [
      { name: 'Thick-billed Raven', slug: 'thick-billed-raven', key: 'Pale nape only, no breast patch; Ethiopian highlands.' },
      { name: 'Pied Crow',          slug: 'white-necked-raven-vs-pied-crow', key: 'Pied Crow has white breast extending to belly; smaller.' },
    ],

    primaryKeyword:  'white-necked raven',
    metaDescription: 'White-necked Raven (Corvus albicollis): identification by its white nape and bill tip, range across eastern and southern Africa, size and behaviour.',
    snippet: 'The White-necked Raven (Corvus albicollis) is a large African raven — 50–54 cm long — found on cliffs and escarpments from Ethiopia to South Africa. Its white crescent across the nape and the tip of its heavy arched bill distinguish it from every other African corvid.',

    faq: [
      { q: 'How do you identify a White-necked Raven?', a: 'Look for the bold white crescent on the nape and upper back, plus the white tip on the heavy curved bill. No other large black bird in Africa has this combination.' },
      { q: 'Where does the White-necked Raven live?', a: 'Eastern and southern Africa: from Ethiopia and Kenya through Tanzania, Zimbabwe and Mozambique to South Africa. It strongly favours mountains and cliff country.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus albicollis. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706080/166517635', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Madge, S. & Burn, H. (1994). Crows and Jays. Christopher Helm, London.', usedFor: 'size, field marks, behaviour' },
    ],
  },

  /* ── SPC·04 Chihuahuan Raven ─────────────────────────────────────────── */
  {
    slug:        'chihuahuan-raven',
    callNum:     'SPC·04',
    commonName:  'Chihuahuan Raven',
    latinName:   'Corvus cryptoleucus',
    authority:   'Couch, 1854',
    region:      'US Southwest and Mexico',
    regionKey:   'north-america',
    rune:        'ᚲ',

    lengthCm:    '44–51',
    wingspanCm:  '100–115 (estimated)',
    weightG:     '430–590',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Shortgrass plains and desert scrub of the US Southwest (Texas, New Mexico, Arizona, Colorado) and northern Mexico.',
    habitat:     'Arid and semi-arid grassland, desert scrub, agricultural fields; avoids dense forest and high mountains.',
    diet:        'Omnivore: invertebrates, small vertebrates, carrion, grain, refuse — highly opportunistic.',
    voice:       'Higher-pitched, nasal croak compared to Common Raven; also a rattling "kraa".',

    fieldMarks: [
      'Smaller than Common Raven; size approaches a large American Crow.',
      'Hidden white feather bases on the neck — visible only in strong wind or handling.',
      'Tail slightly rounded to nearly wedge-shaped; less pronounced wedge than Common Raven.',
      'Bill smaller and less arched than Common Raven.',
      'Voice higher and more nasal than Common Raven.',
    ],

    behaviour: 'Often gregarious, forming large flocks outside the breeding season — unlike Common Raven. Roosts communally in numbers exceeding 1,000 at traditional sites. Nests in shrubs, trees, power pylons, more often than on cliffs.',

    conservation: 'Least Concern. Population declined in the late 19th century following extirpation of bison herds; has recovered with cattle ranching providing carcasses.',

    lookAlikes: [
      { name: 'Common Raven',  slug: 'chihuahuan-raven-vs-common-raven', key: 'Larger, more arched bill, deeper voice, more wedge tail.' },
      { name: 'American Crow', slug: 'common-raven-vs-american-crow',    key: 'Smaller, fan tail, different call; range overlaps.' },
    ],

    primaryKeyword:  'chihuahuan raven',
    metaDescription: 'Chihuahuan Raven (Corvus cryptoleucus): how to identify it in the US Southwest, its range, flock behaviour, and how it differs from the Common Raven.',
    snippet: 'The Chihuahuan Raven (Corvus cryptoleucus) is a medium-sized raven — 44–51 cm long — of US Southwest grasslands and Mexican deserts. Smaller than the Common Raven, with a less arched bill and a higher voice; named for the hidden white bases of its neck feathers.',

    faq: [
      { q: 'How do you tell a Chihuahuan Raven from a Common Raven?', a: 'Size is the first clue: Chihuahuan Ravens are noticeably smaller. The bill is less deeply arched. The voice is higher and more nasal. Chihuahuan Ravens often flock in large groups; Common Ravens in the same range are usually solitary or in pairs outside breeding season.' },
      { q: 'Where does the Chihuahuan Raven live?', a: 'Chihuahuan Ravens are found in arid and semi-arid grassland and desert scrub in the US Southwest — Texas, New Mexico, southeast Arizona and south Colorado — and throughout northern and central Mexico.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus cryptoleucus. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706084A166517657', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Bednarz, J.C. & Raitt, R.J. (1999). Chihuahuan Raven (Corvus cryptoleucus). In Birds of the World. Cornell Lab of Ornithology.', url: 'https://birdsoftheworld.org/bow/species/chirav/cur/introduction', usedFor: 'behaviour, population, field marks' },
    ],
  },

  /* ── SPC·05 Brown-necked Raven ───────────────────────────────────────── */
  {
    slug:        'brown-necked-raven',
    callNum:     'SPC·05',
    commonName:  'Brown-necked Raven',
    latinName:   'Corvus ruficollis',
    authority:   'Stanley, 1814',
    region:      'Sahara, Middle East, Central Asia',
    regionKey:   'africa',
    rune:        'ᚱ',

    lengthCm:    '52–56',
    wingspanCm:  '109–130 (estimated)',
    weightG:     '410–560 (estimated)',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Sahara and Sahel from Morocco east to Pakistan; also the Arabian Peninsula and parts of the Middle East.',
    habitat:     'Arid desert, semi-desert, dry steppe and stony plains; avoids dense vegetation.',
    diet:        'Omnivore: carrion, insects, lizards, small mammals, plant material, refuse.',
    voice:       'Nasal, slightly higher-pitched than Common Raven; a hollow "krok".',

    fieldMarks: [
      'Brown-glossed head, neck and back — visible in good light as a warm-brown sheen contrasting with the black wings.',
      'Smaller and slimmer than Common Raven.',
      'Bill lighter and less arched than Common Raven.',
      'Long, narrow wings in flight; often soars high in desert thermals.',
    ],

    behaviour: 'Generally solitary or in pairs; associates with nomadic herders and their livestock carcasses. Nests on cliffs, pylons and large trees in an otherwise treeless landscape.',

    conservation: 'Least Concern. Widespread across a vast arid range; no significant population declines documented.',

    lookAlikes: [
      { name: 'Common Raven',   slug: 'common-raven',              key: 'Larger, blue-black gloss, deeper voice.' },
      { name: 'Fan-tailed Raven', slug: 'fan-tailed-raven-vs-brown-necked-raven', key: 'Much shorter tail, broader wings, overlaps in Middle East.' },
    ],

    primaryKeyword:  'brown-necked raven',
    metaDescription: 'Brown-necked Raven (Corvus ruficollis): identification by its brown neck sheen, Sahara and Middle East range, field marks, and comparison with Common Raven.',
    snippet: 'The Brown-necked Raven (Corvus ruficollis) is a mid-sized desert raven — 52–56 cm long — of the Sahara, Arabian Peninsula and Central Asia. In good light the head, neck and back show a warm brown gloss, contrasting with the blacker wings.',

    faq: [
      { q: 'What makes the Brown-necked Raven different from other ravens?', a: 'The diagnostic feature is the brown iridescence on the head, neck and back, visible in direct sunlight — most ravens appear blue-black or purple-black. It is also smaller and slimmer than the Common Raven.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus ruficollis. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706076A166517614', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Madge, S. & Burn, H. (1994). Crows and Jays. Christopher Helm, London.', usedFor: 'size, field marks, habitat' },
    ],
  },

  /* ── SPC·06 Fan-tailed Raven ─────────────────────────────────────────── */
  {
    slug:        'fan-tailed-raven',
    callNum:     'SPC·06',
    commonName:  'Fan-tailed Raven',
    latinName:   'Corvus rhipidurus',
    authority:   'Hartert, 1918',
    region:      'Middle East, Horn of Africa',
    regionKey:   'africa',
    rune:        'ᚠ',

    lengthCm:    '47',
    wingspanCm:  '102–120',
    weightG:     '340–550',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Arabian Peninsula, Middle East from Israel to Iran; Horn of Africa including Ethiopia, Eritrea and Somalia; isolated population in Chad (Tibesti).',
    habitat:     'Cliff faces, gorges, escarpments; associated with rocky terrain in arid and semi-arid zones.',
    diet:        'Omnivore: carrion, insects, small vertebrates, refuse around settlements.',
    voice:       'High-pitched, shrill calls — markedly different from the deep croak of the Common Raven.',

    fieldMarks: [
      'Very short tail — so short the bird looks almost tailless in flight overhead.',
      'Broad, rounded wings giving a vulture-like silhouette when soaring.',
      'Entirely black plumage with a blue-purple gloss.',
      'Bill heavy for its size but shorter than Common Raven.',
      'High-pitched voice — a good ear-mark.',
    ],

    behaviour: 'Sociable around cliffs; pairs nest on ledges, often in loose colonies. Soars extensively on thermals above cliff faces. Sometimes associates with the larger Brown-necked Raven where their ranges overlap.',

    conservation: 'Least Concern. Locally common on rocky terrain across its range.',

    lookAlikes: [
      { name: 'Brown-necked Raven', slug: 'fan-tailed-raven-vs-brown-necked-raven', key: 'Much longer tail, narrower wings, browner gloss.' },
      { name: 'Common Raven',       slug: 'common-raven', key: 'Much longer tail, deeper voice, larger.' },
    ],

    primaryKeyword:  'fan-tailed raven',
    metaDescription: 'Fan-tailed Raven (Corvus rhipidurus): identified by its very short tail and broad wings, range across the Middle East and Horn of Africa, and cliff-nesting habits.',
    snippet: 'The Fan-tailed Raven (Corvus rhipidurus) is a compact, 47 cm raven of cliff faces in the Middle East and Horn of Africa. Its most distinctive feature is an extremely short, fan-shaped tail that makes it look almost tailless in flight — unlike any other raven.',

    faq: [
      { q: 'Why does the Fan-tailed Raven look tailless?', a: 'Its tail is exceptionally short relative to its wing length, so when soaring overhead it shows a broad, rounded winged shape with almost no visible tail — giving it a silhouette more like a large falcon or small eagle than a typical raven.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus rhipidurus. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706096A166517717', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Madge, S. & Burn, H. (1994). Crows and Jays. Christopher Helm, London.', usedFor: 'size, field marks, behaviour' },
    ],
  },

  /* ── SPC·07 Somali Crow ──────────────────────────────────────────────── */
  {
    slug:        'somali-crow',
    callNum:     'SPC·07',
    commonName:  'Somali Crow',
    latinName:   'Corvus edithae',
    authority:   'Lort Phillips, 1895',
    region:      'Horn of Africa',
    regionKey:   'africa',
    rune:        'ᛊ',

    lengthCm:    '44–46 (estimated)',
    wingspanCm:  'Not reliably published',
    weightG:     'Not reliably published',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Somalia, eastern Ethiopia and Djibouti — a very restricted range in the Horn of Africa.',
    habitat:     'Arid lowland scrub and bush in the Somali-Masai zone; avoids highlands.',
    diet:        'Omnivore; poorly documented due to restricted access to range.',
    voice:       'Poorly documented; likely similar to other small African corvids.',

    fieldMarks: [
      'All-black plumage, similar to other small African corvids.',
      'Smaller than Brown-necked Raven; comparable in size to Chihuahuan Raven.',
      'Despite its name ("Somali Crow"), it is a true raven (Corvus) closely related to Brown-necked Raven.',
      'Relatively slender bill for its size.',
    ],

    behaviour: 'Poorly known due to its remote, politically restricted range. Assumed to be solitary or in pairs, nesting in thorny scrub.',

    conservation: 'Least Concern, though range is restricted to the Horn of Africa. Very little published data exists; listed as Data Deficient by some sources in earlier assessments.',

    lookAlikes: [
      { name: 'Brown-necked Raven', slug: 'brown-necked-raven', key: 'Larger with brown gloss; different range (allopatric).' },
      { name: 'Pied Crow',          slug: 'somali-crow-vs-brown-necked-raven', key: 'Pied Crow has white breast; different shape.' },
    ],

    primaryKeyword:  'somali crow',
    metaDescription: 'Somali Crow (Corvus edithae): identification, restricted range in the Horn of Africa, and why it is a true raven despite its name.',
    snippet: 'The Somali Crow (Corvus edithae) is a little-known, all-black raven — roughly 44–46 cm long — endemic to the arid lowlands of Somalia, eastern Ethiopia and Djibouti. Despite its common name it is a true raven closely related to the Brown-necked Raven.',

    faq: [
      { q: 'Is the Somali Crow actually a crow?', a: 'No. Despite the name, Corvus edithae is classified as a raven within the genus Corvus. Molecular studies place it closest to the Brown-necked Raven (Corvus ruficollis), not to the typical "crows" of the genus.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus edithae. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706078A166517623', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Madge, S. & Burn, H. (1994). Crows and Jays. Christopher Helm, London.', usedFor: 'taxonomy, range, field marks' },
    ],
  },

  /* ── SPC·08 Australian Raven ─────────────────────────────────────────── */
  {
    slug:        'australian-raven',
    callNum:     'SPC·08',
    commonName:  'Australian Raven',
    latinName:   'Corvus coronoides',
    authority:   'Vigors & Horsfield, 1827',
    region:      'Australia',
    regionKey:   'australia',
    rune:        'ᚨ',

    lengthCm:    '46–53',
    wingspanCm:  '100–120 (estimated)',
    weightG:     '560–750',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Most of mainland Australia, except the far north; most common in southeast Australia and around cities.',
    habitat:     'Open woodland, farmland, grassland, coast, cities; the most urban Australian corvid.',
    diet:        'Omnivore: carrion, invertebrates, small vertebrates, grain, refuse.',
    voice:       'Loud, wailing "caw" with a characteristic drawn-out final note — the distinctive "aaah" falling away; unmistakable among Australian corvids.',

    fieldMarks: [
      'White iris — the most reliable field mark; all other large Australian corvids also have white eyes as adults, but the iris colour is diagnostic in context.',
      'Long throat hackles (lance-shaped feathers) — most prominent when calling.',
      'Blue-black gloss; slightly the largest of the three mainland Australian ravens.',
      'Throat hackles visibly longer and more prominent than in Little Raven or Forest Raven.',
      'Diagnostic call: wailing, drawn-out final note.',
    ],

    behaviour: 'Territorial pairs year-round; non-breeders in loose flocks. Well adapted to urban environments; a familiar bird of Australian cities and towns. Builds large stick nests, usually high in a tree.',

    conservation: 'Least Concern. Widespread and common; benefits from agricultural land and urban expansion. Protected under Australian law (Environment Protection and Biodiversity Conservation Act).',

    lookAlikes: [
      { name: 'Little Raven',    slug: 'australian-raven-vs-little-raven',  key: 'Smaller, shorter hackles, different call; flocks more.' },
      { name: 'Forest Raven',    slug: 'forest-raven-vs-australian-raven',  key: 'Heavier bill, shorter tail; Tasmania and SE.' },
      { name: 'Torresian Crow',  slug: 'australian-raven-vs-torresian-crow', key: 'White-based neck feathers visible in wind; northern Australia.' },
    ],

    primaryKeyword:  'australian raven',
    metaDescription: 'Australian Raven (Corvus coronoides): identified by its white eye and wailing call, range across mainland Australia, comparison with Little Raven and Forest Raven.',
    snippet: 'The Australian Raven (Corvus coronoides) is the largest corvid in Australia — 46–53 cm long — found across most of the mainland. It is identified by its white iris, long throat hackles and a distinctive wailing call with a drawn-out final note.',

    faq: [
      { q: 'How do you identify an Australian Raven?', a: 'The easiest mark is the call: a loud, wailing "caw" with the final note dragged out into a falling "aaah". The throat hackles are long and shaggy. The iris is white in adults.' },
      { q: 'Is the Australian Raven the same as the Common Raven?', a: 'No. The Australian Raven (Corvus coronoides) is a distinct species found only in Australia. The Common Raven (Corvus corax) is not found in Australia at all. They share only the name "raven".' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus coronoides. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706106A166517759', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Higgins, P.J., Peter, J.M. & Cowling, S.J. (eds) (2006). Handbook of Australian, New Zealand and Antarctic Birds. Vol 7. Oxford University Press, Melbourne.', usedFor: 'size, field marks, behaviour, voice' },
    ],
  },

  /* ── SPC·09 Forest Raven ─────────────────────────────────────────────── */
  {
    slug:        'forest-raven',
    callNum:     'SPC·09',
    commonName:  'Forest Raven',
    latinName:   'Corvus tasmanicus',
    authority:   'Mathews, 1912',
    region:      'Tasmania and Southeast Australia',
    regionKey:   'australia',
    rune:        'ᚠ',

    lengthCm:    '50–53',
    wingspanCm:  '100–118 (estimated)',
    weightG:     '650–780 (estimated)',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Tasmania (throughout); small isolated population in the Snowy Mountains and northeast Victoria on mainland Australia.',
    habitat:     'Wet and dry sclerophyll forest, woodland, farmland; also coasts in Tasmania.',
    diet:        'Omnivore: invertebrates, small vertebrates, carrion, berries, grain.',
    voice:       'Deep, slow, resonant "korr-korr" — deeper and slower than Australian Raven and Little Raven.',

    fieldMarks: [
      'Heavier, deeper bill than other Australian ravens.',
      'Relatively short tail — shorter than Australian Raven for its body length.',
      'White iris (as in all adult Australian Corvus).',
      'Deep, slow call — the most useful field mark in Tasmania.',
      'Largest corvid in Tasmania.',
    ],

    behaviour: 'Territorial pairs year-round. In Tasmania often seen along roadsides scavenging roadkill. Nests in tall trees or cliff ledges. Molecular studies show Forest Raven and Little Raven are each other\'s closest relatives, not closest to Australian Raven.',

    conservation: 'Least Concern. Common throughout Tasmania; the small mainland population is more restricted. Protected under Australian and Tasmanian law.',

    lookAlikes: [
      { name: 'Australian Raven', slug: 'forest-raven-vs-australian-raven',  key: 'Longer tail, different call, mostly sympatric only in SE mainland.' },
      { name: 'Little Raven',     slug: 'australian-raven-vs-little-raven',   key: 'Smaller, faster call, flocks; different distribution.' },
    ],

    primaryKeyword:  'forest raven',
    metaDescription: 'Forest Raven (Corvus tasmanicus): identification by its heavy bill, short tail and deep slow call; distribution in Tasmania and southeast Australia.',
    snippet: 'The Forest Raven (Corvus tasmanicus) is Tasmania\'s largest corvid — 50–53 cm long — and is identified by its notably heavy bill, shorter tail and deep, slow "korr-korr" call. A small population also survives in the Snowy Mountains on the Australian mainland.',

    faq: [
      { q: 'Is the Forest Raven found outside Tasmania?', a: 'Yes, but just barely. A small, isolated population inhabits the Snowy Mountains area of southeast mainland Australia (northeast Victoria and southern New South Wales). The main population is throughout Tasmania.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus tasmanicus. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706108A166517769', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Higgins, P.J., Peter, J.M. & Cowling, S.J. (eds) (2006). HANZAB Vol 7. Oxford University Press.', usedFor: 'size, field marks, behaviour, voice' },
    ],
  },

  /* ── SPC·10 Little Raven ─────────────────────────────────────────────── */
  {
    slug:        'little-raven',
    callNum:     'SPC·10',
    commonName:  'Little Raven',
    latinName:   'Corvus mellori',
    authority:   'Mathews, 1912',
    region:      'Southeast Australia',
    regionKey:   'australia',
    rune:        'ᛚ',

    lengthCm:    '48–50',
    wingspanCm:  '96–110 (estimated)',
    weightG:     '340–460',
    iucn:        'Least Concern (LC) · BirdLife International 2020',
    range:       'Southeast Australia — southern South Australia, Victoria, the ACT, southern NSW and northeast Tasmania.',
    habitat:     'Open woodland, mallee, alpine and subalpine areas, farmland, urban parks.',
    diet:        'Omnivore: invertebrates, small vertebrates, berries, grain, refuse.',
    voice:       'Shorter, sharper "kar" or "arr" calls — faster and higher than Australian Raven; often rapid "arr-arr-arr".',

    fieldMarks: [
      'Smaller than Australian Raven and Forest Raven — the smallest of the three.',
      'White iris in adults (as all Australian Corvus).',
      'Shorter throat hackles than Australian Raven.',
      'More gregarious — commonly in flocks, sometimes very large; Australian Ravens usually in pairs.',
      'Faster, sharper call without the drawn-out final note of Australian Raven.',
    ],

    behaviour: 'The most sociable of the Australian ravens; flocks of hundreds occur outside the breeding season, and large mixed corvid flocks form at good food sources. Pairs breed but join flocks between seasons. Performs wing-flicks more frequently than other Australian corvids.',

    conservation: 'Least Concern. Common throughout its range. Molecular studies confirm it and Forest Raven are sister species, with Australian Raven as an earlier divergence.',

    lookAlikes: [
      { name: 'Australian Raven', slug: 'australian-raven-vs-little-raven', key: 'Larger, longer hackles, different call, usually in pairs.' },
      { name: 'Little Crow',      slug: 'little-raven-vs-little-crow',      key: 'Little Crow smaller; white feather bases; noisier; more arid range.' },
    ],

    primaryKeyword:  'little raven',
    metaDescription: 'Little Raven (Corvus mellori): how to identify it, its southeast Australia range, gregarious flock behaviour, and comparison with Australian Raven.',
    snippet: 'The Little Raven (Corvus mellori) is the smallest and most social of the Australian ravens — 48–50 cm long — found in southeast Australia. It is identified by its faster, sharper call, shorter throat hackles and habit of forming large flocks, unlike the territorial Australian Raven.',

    faq: [
      { q: 'How do you tell a Little Raven from an Australian Raven?', a: 'Size and behaviour are the first clues: Little Ravens are smaller and usually in flocks, while Australian Ravens are bigger and territorial. The call is the clearest mark: Little Ravens give a fast "arr-arr-arr"; Australian Ravens produce a wailing cry with a drawn-out final note.' },
    ],

    sources: [
      { id: 1, citation: 'BirdLife International (2020). Corvus mellori. IUCN Red List 2020.', url: 'https://www.iucnredlist.org/species/22706110A166517779', usedFor: 'IUCN status, range' },
      { id: 2, citation: 'Higgins, P.J., Peter, J.M. & Cowling, S.J. (eds) (2006). HANZAB Vol 7. Oxford University Press.', usedFor: 'size, field marks, behaviour, voice, taxonomy' },
    ],
  },
];

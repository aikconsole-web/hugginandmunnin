/* ── Chapter / Reading-page data ────────────────────────────────────────── */

export interface ChapterMeta {
  id:         string;
  callNum:    string;        // e.g. NOR·01
  collection: string;
  chapter:    string;        // e.g. "II"
  contentType: string;       // 'saga' | 'chapter' | 'myth' | 'tool'
  claimKind:  string;        // 'lore' | 'science' | 'observation'
  title:      string;
  subtitle:   string;
  reviewer:   string;
  reviewedOn: string;
  status:     'reviewed' | 'draft' | 'awaiting-cultural-review';
  prevLeaf?:  { callNum: string; title: string; href: string };
  nextLeaf?:  { callNum: string; title: string; href: string };
  toc: { id: string; label: string }[];
  terms: { term: string; definition: string }[];
  sideNotes: { label: string; body: string }[];
}

export const THOUGHT_AND_MEMORY: ChapterMeta = {
  id:          'saga-thought-memory',
  callNum:     'NOR·01',
  collection:  'Norse Lore',
  chapter:     'II',
  contentType: 'Saga',
  claimKind:   'lore',
  title:       'Thought & Memory',
  subtitle:    'Huginn and Muninn, the ravens of Odin, in the Eddas and beyond',
  reviewer:    'Old Norse Specialist',
  reviewedOn:  '(DATE)',
  status:      'reviewed',
  prevLeaf: { callNum: 'I · The Species', title: 'The Species', href: '/library' },
  nextLeaf: { callNum: 'NOR·02', title: 'Odin the Raven-God', href: '/read/saga-odin-raven-god' },
  toc: [
    { id: 'two-names',   label: 'Two names' },
    { id: 'poem-says',   label: 'What the poem says' },
    { id: 'raven-god',   label: 'The Raven-God' },
    { id: 'beyond',      label: 'Beyond the poems' },
    { id: 'why-ravens',  label: 'Why ravens?' },
    { id: 'sources-time',label: 'Sources in time' },
    { id: 'check',       label: 'Check your reading' },
    { id: 'sources',     label: 'Sources' },
  ],
  terms: [
    {
      term: 'Edda',
      definition: 'Two medieval Icelandic books of myth: the Poetic Edda (anonymous poems) and Snorri\'s Prose Edda.',
    },
    {
      term: 'Grímnismál',
      definition: '"The Sayings of Grímnir", an Eddic poem spoken by Odin in disguise.',
    },
    {
      term: 'Hrafnaguð',
      definition: '"Raven-God", one of Odin\'s many names.',
    },
    {
      term: 'Kenning',
      definition: 'A poetic name built from images, like "feeding the raven" for fighting.',
    },
  ],
  sideNotes: [
    {
      label: 'The birds behind the myth',
      body:  'The raven of Scandinavia is the Common Raven.',
    },
  ],
};

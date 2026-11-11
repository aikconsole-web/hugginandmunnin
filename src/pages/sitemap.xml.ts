import type { APIRoute } from 'astro';
import { SITE, absolute } from '../config/site';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/species/', priority: '0.9', changefreq: 'monthly' },
  { url: '/species/common-raven/', priority: '0.9', changefreq: 'monthly' },
  { url: '/species/thick-billed-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/white-necked-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/chihuahuan-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/brown-necked-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/fan-tailed-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/somali-crow/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/australian-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/forest-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/little-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/norse/', priority: '0.9', changefreq: 'monthly' },
  { url: '/lore/norse/huginn-and-muninn/', priority: '0.9', changefreq: 'monthly' },
  { url: '/lore/norse/odin-the-raven-god/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/norse/grimnismal-stanza-20/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/norse/ravens-in-the-prose-edda/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/norse/raven-banners/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/norse/raven-floki-and-iceland/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/world/', priority: '0.9', changefreq: 'monthly' },
  { url: '/lore/world/edgar-allan-poe-the-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/', priority: '0.9', changefreq: 'monthly' },
  { url: '/compare/raven-vs-crow/', priority: '0.9', changefreq: 'monthly' },
  { url: '/compare/common-raven-vs-american-crow/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/', priority: '0.9', changefreq: 'monthly' },
  { url: '/questions/how-smart-are-ravens/', priority: '0.9', changefreq: 'monthly' },
  { url: '/questions/how-long-do-ravens-live/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/do-ravens-mate-for-life/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-do-ravens-eat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-is-a-group-of-ravens-called/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-are-odins-ravens-called/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/why-are-ravens-associated-with-death/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/where-do-ravens-live/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/can-ravens-talk/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/how-big-are-ravens/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/do-ravens-migrate/', priority: '0.7', changefreq: 'monthly' },
  { url: '/myths/', priority: '0.8', changefreq: 'monthly' },
  { url: '/myths/are-ravens-bad-luck/', priority: '0.8', changefreq: 'monthly' },
  { url: '/behaviour/', priority: '0.8', changefreq: 'monthly' },
  { url: '/behaviour/raven-intelligence/', priority: '0.9', changefreq: 'monthly' },
  // Species identification sub-pages
  { url: '/species/common-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/thick-billed-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/white-necked-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/chihuahuan-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/brown-necked-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/fan-tailed-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/somali-crow/identification/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/australian-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/forest-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/little-raven/identification/', priority: '0.8', changefreq: 'monthly' },
  // Species range-and-habitat sub-pages
  { url: '/species/common-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/thick-billed-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/white-necked-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/chihuahuan-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/brown-necked-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/fan-tailed-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/somali-crow/range-and-habitat/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/australian-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/forest-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/little-raven/range-and-habitat/', priority: '0.8', changefreq: 'monthly' },
  // Comparison pages
  { url: '/compare/raven-vs-carrion-crow/', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/raven-vs-rook/', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/raven-vs-jackdaw/', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/raven-vs-hooded-crow/', priority: '0.8', changefreq: 'monthly' },
  // Q&A pages
  { url: '/questions/raven-vs-crow-intelligence/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-does-the-bible-say-about-ravens/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-is-the-norse-word-for-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/why-does-the-tower-of-london-keep-ravens/', priority: '0.8', changefreq: 'monthly' },
  // Myths pages
  { url: '/myths/ravens-can-talk/', priority: '0.8', changefreq: 'monthly' },
  { url: '/myths/ravens-bring-death/', priority: '0.8', changefreq: 'monthly' },
  { url: '/myths/ravens-remember-faces/', priority: '0.8', changefreq: 'monthly' },
  { url: '/myths/ravens-are-the-smartest-bird/', priority: '0.8', changefreq: 'monthly' },
  { url: '/myths/ravens-are-crows/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour pages
  { url: '/behaviour/raven-food-caching/', priority: '0.8', changefreq: 'monthly' },
  { url: '/behaviour/raven-social-structure/', priority: '0.8', changefreq: 'monthly' },
  { url: '/behaviour/raven-vocalisation/', priority: '0.8', changefreq: 'monthly' },
  { url: '/behaviour/raven-play/', priority: '0.8', changefreq: 'monthly' },
  // World lore pages
  { url: '/lore/world/noah-and-the-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/world/raven-symbolism/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/world/apollo-and-the-raven/', priority: '0.8', changefreq: 'monthly' },
  // Additional Q&A pages
  { url: '/questions/what-does-the-raven-symbolise-in-poe/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/how-do-ravens-communicate/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/do-ravens-use-tools/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-do-raven-eggs-look-like/', priority: '0.7', changefreq: 'monthly' },
  { url: '/questions/are-ravens-good-or-bad-omens/', priority: '0.8', changefreq: 'monthly' },
  // Additional behaviour pages
  { url: '/behaviour/raven-nesting/', priority: '0.8', changefreq: 'monthly' },
  // Additional world lore pages
  { url: '/lore/world/raven-in-celtic-mythology/', priority: '0.8', changefreq: 'monthly' },
  // Additional myths pages
  { url: '/myths/ravens-steal-shiny-objects/', priority: '0.8', changefreq: 'monthly' },
  // Species diet sub-pages
  { url: '/species/common-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  // Additional comparison pages
  { url: '/compare/raven-vs-magpie/', priority: '0.8', changefreq: 'monthly' },
  // Additional Q&A pages
  { url: '/questions/how-do-ravens-find-food/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-is-a-murder-of-crows-an-unkindness-of-ravens/', priority: '0.8', changefreq: 'monthly' },
  // Additional world lore pages
  { url: '/lore/world/ravens-in-japanese-mythology/', priority: '0.8', changefreq: 'monthly' },
  // Additional behaviour pages
  { url: '/behaviour/raven-and-wolves/', priority: '0.8', changefreq: 'monthly' },
  // Additional Q&A pages
  { url: '/questions/are-ravens-protected/', priority: '0.7', changefreq: 'monthly' },
  // Additional myths pages
  { url: '/myths/ravens-mate-for-life-myth/', priority: '0.8', changefreq: 'monthly' },
  // Additional world lore
  { url: '/lore/world/raven-in-native-american-tradition/', priority: '0.8', changefreq: 'monthly' },
  // Additional comparison pages
  { url: '/compare/chihuahuan-raven-vs-common-raven/', priority: '0.8', changefreq: 'monthly' },
  // Species sub-pages
  { url: '/species/common-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  // Additional behaviour pages
  { url: '/behaviour/raven-cognition-theory-of-mind/', priority: '0.8', changefreq: 'monthly' },
  { url: '/behaviour/raven-and-wolves/', priority: '0.8', changefreq: 'monthly' },
  // Additional Q&A pages
  { url: '/questions/what-sound-does-a-raven-make/', priority: '0.8', changefreq: 'monthly' },
  // Additional Norse lore
  { url: '/lore/norse/valkyries-and-ravens/', priority: '0.8', changefreq: 'monthly' },
  // Additional Q&A pages
  { url: '/questions/are-ravens-related-to-crows/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/how-do-you-tell-a-raven-from-a-crow-in-flight/', priority: '0.8', changefreq: 'monthly' },
  // Additional Norse lore
  { url: '/lore/norse/ravens-in-eddic-kennings/', priority: '0.7', changefreq: 'monthly' },
  // Additional comparison pages
  { url: '/compare/australian-raven-vs-little-raven/', priority: '0.8', changefreq: 'monthly' },
  // Additional behaviour pages
  { url: '/behaviour/raven-migration/', priority: '0.8', changefreq: 'monthly' },
  // Additional Q&A pages
  { url: '/questions/raven-lifespan-in-captivity/', priority: '0.7', changefreq: 'monthly' },
  // Additional world lore
  { url: '/lore/world/ravens-in-heraldry/', priority: '0.7', changefreq: 'monthly' },
  { url: '/library/', priority: '0.7', changefreq: 'monthly' },
  { url: '/read/saga-thought-memory/', priority: '0.6', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/what-does-a-baby-raven-look-like/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/how-many-types-of-ravens-are-there/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/what-eats-ravens/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/how-much-does-a-raven-weigh/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — mind
  { url: '/questions/do-ravens-remember-faces/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/why-do-ravens-follow-wolves/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/why-do-ravens-play/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/why-do-ravens-hide-food/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-pair-bonds/', priority: '0.8', changefreq: 'monthly' },
  { url: '/behaviour/raven-planning-ahead/', priority: '0.9', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/tower-of-london-ravens/', priority: '0.9', changefreq: 'monthly' },
  { url: '/lore/world/ravens-in-the-bible/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-hold-funerals/', priority: '0.8', changefreq: 'monthly' },
  // Comparisons
  { url: '/compare/forest-raven-vs-australian-raven/', priority: '0.8', changefreq: 'monthly' },
  { url: '/compare/fan-tailed-raven-vs-brown-necked-raven/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology continued
  { url: '/questions/where-do-ravens-sleep/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/hrafn-old-norse-word/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour
  { url: '/behaviour/raven-mimicry-and-talking/', priority: '0.8', changefreq: 'monthly' },
  // Species diet sub-pages
  { url: '/species/chihuahuan-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-are-endangered/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — mind continued
  { url: '/questions/are-ravens-smarter-than-crows/', priority: '0.9', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/the-morrigan/', priority: '0.9', changefreq: 'monthly' },
  { url: '/lore/world/corvus-constellation/', priority: '0.8', changefreq: 'monthly' },
  { url: '/lore/world/tower-of-london-ravens/', priority: '0.9', changefreq: 'monthly' },
  // Q&A — biology continued
  { url: '/questions/when-do-ravens-nest/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — mind continued
  { url: '/questions/are-ravens-smarter-than-crows/', priority: '0.9', changefreq: 'monthly' },
  // Comparisons
  { url: '/compare/white-necked-raven-vs-pied-crow/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour
  { url: '/behaviour/raven-social-life-and-roosts/', priority: '0.8', changefreq: 'monthly' },
  // Species diet sub-pages continued
  { url: '/species/australian-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/thick-billed-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/white-necked-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology continued
  { url: '/questions/how-fast-can-ravens-fly/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/elijah-and-the-ravens/', priority: '0.9', changefreq: 'monthly' },
  { url: '/lore/world/ravens-in-slavic-folklore/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — mind continued
  { url: '/questions/do-ravens-have-feelings/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/are-ravens-loyal/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-courtship-and-aerial-displays/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/meaning-of-huginn/', priority: '0.9', changefreq: 'monthly' },
  { url: '/lore/norse/meaning-of-muninn/', priority: '0.9', changefreq: 'monthly' },
  // Species diet sub-pages continued
  { url: '/species/forest-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/little-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-scavenging-strategies/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/bran-the-blessed/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — taxonomy
  { url: '/questions/are-ravens-crows/', priority: '0.9', changefreq: 'monthly' },
  // Species diet sub-pages continued
  { url: '/species/fan-tailed-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/brown-necked-raven/diet/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — identification
  { url: '/questions/what-does-a-raven-look-like/', priority: '0.9', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-shakespeare/', priority: '0.8', changefreq: 'monthly' },
  // Species nesting sub-pages
  { url: '/species/thick-billed-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/chihuahuan-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-have-blue-eyes/', priority: '0.7', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-iceland/', priority: '0.8', changefreq: 'monthly' },
  { url: '/places/ravens-in-the-uk/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — behaviour
  { url: '/questions/do-ravens-make-good-pets/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/ravens-in-skaldic-poetry/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/ravens-and-humans/', priority: '0.8', changefreq: 'monthly' },
  // Places continued
  { url: '/places/', priority: '0.8', changefreq: 'monthly' },
  { url: '/places/ravens-in-yellowstone/', priority: '0.8', changefreq: 'monthly' },
  // Myths continued
  { url: '/myths/ravens-bring-rain/', priority: '0.7', changefreq: 'monthly' },
  // Species diet/nesting continued
  { url: '/species/somali-crow/diet/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/white-necked-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  // Species nesting sub-pages continued
  { url: '/species/australian-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/forest-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/little-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/fan-tailed-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/brown-necked-raven/nesting/', priority: '0.7', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/how-many-eggs-do-ravens-lay/', priority: '0.9', changefreq: 'monthly' },
  { url: '/questions/do-ravens-have-a-sense-of-smell/', priority: '0.8', changefreq: 'monthly' },
  { url: '/questions/how-do-ravens-build-nests/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-territory/', priority: '0.8', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-norway/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/raven-in-chinese-mythology/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/do-ravens-attack-humans/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-juveniles-and-dispersal/', priority: '0.8', changefreq: 'monthly' },
  // Q&A
  { url: '/questions/are-ravens-dangerous/', priority: '0.9', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/raven-banner/', priority: '0.9', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-alaska/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-fairy-tales/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — mind
  { url: '/questions/do-ravens-get-lonely/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/are-ravens-immortal/', priority: '0.8', changefreq: 'monthly' },
  // World lore continued
  { url: '/lore/world/raven-trickster-northwest-coast/', priority: '0.9', changefreq: 'monthly' },
  // Species range sub-pages
  { url: '/species/common-raven/range/', priority: '0.8', changefreq: 'monthly' },
  { url: '/species/chihuahuan-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/white-necked-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/thick-billed-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/australian-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/forest-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/brown-necked-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/fan-tailed-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/little-raven/range/', priority: '0.7', changefreq: 'monthly' },
  { url: '/species/somali-crow/range/', priority: '0.7', changefreq: 'monthly' },
  // Places continued
  { url: '/places/ravens-in-the-sonoran-desert/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — mind continued
  { url: '/questions/do-ravens-recognize-their-owner/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/what-colour-are-raven-eggs/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology continued
  { url: '/questions/do-ravens-have-predators/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-bathing-and-preening/', priority: '0.7', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-australian-aboriginal-culture/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/hrafnsmal/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-are-only-found-in-cold-climates/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/how-do-ravens-raise-their-young/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-persian-and-zoroastrian-tradition/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-object-permanence-and-memory/', priority: '0.9', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/are-ravens-monogamous/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/ravens-in-the-poetic-edda/', priority: '0.9', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-are-black-because-of-a-curse/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — intelligence
  { url: '/questions/do-ravens-have-a-language/', priority: '0.8', changefreq: 'monthly' },
  // Compare
  { url: '/compare/raven-vs-jay/', priority: '0.8', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-the-scottish-highlands/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-tibetan-buddhism/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/what-is-the-wingspan-of-a-raven/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-insight-problem-solving/', priority: '0.9', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/do-ravens-have-a-favourite-food/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-always-travel-in-pairs/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/are-ravens-nocturnal/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/the-raven-in-inuit-and-yupik-culture/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/odin-raven-names/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — intelligence
  { url: '/questions/can-ravens-count/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-deception-and-tactical-deception/', priority: '0.9', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/do-ravens-get-along-with-other-animals/', priority: '0.8', changefreq: 'monthly' },
  // Compare
  { url: '/compare/raven-vs-vulture/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-greco-roman-mythology/', priority: '0.9', changefreq: 'monthly' },
  // Q&A — intelligence
  { url: '/questions/how-do-ravens-learn/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-altruism-and-reciprocity/', priority: '0.9', changefreq: 'monthly' },
  // Q&A — lore/symbolism
  { url: '/questions/what-does-a-raven-symbolise/', priority: '0.9', changefreq: 'monthly' },
  // Q&A — intelligence/behaviour
  { url: '/questions/do-ravens-have-a-sense-of-humour/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — lore
  { url: '/questions/what-do-ravens-symbolise-in-dreams/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/raven-sacrifice-in-norse-culture/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-siberian-shamanism/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-feather-care-and-moult/', priority: '0.7', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-are-solitary-birds/', priority: '0.8', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-the-pyrenees/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/how-do-ravens-see/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-islamic-and-arab-tradition/', priority: '0.9', changefreq: 'monthly' },
  // Compare
  { url: '/compare/raven-vs-raven-species/', priority: '0.9', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-anatomy-and-physical-adaptations/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-celtic-warrior-tradition/', priority: '0.9', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-the-canadian-rockies/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — lore
  { url: '/questions/what-does-it-mean-when-a-raven-visits-you/', priority: '0.9', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-are-bad-omens-of-death/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/huginn-and-muninn-at-ragnarok/', priority: '0.9', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-communication/', priority: '0.9', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-greenland/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/how-long-do-ravens-live-in-captivity/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-german-folklore/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — biology
  { url: '/questions/how-do-ravens-survive-winter/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-population-and-conservation/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — cognition
  { url: '/questions/how-do-ravens-use-tools/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-russian-folklore/', priority: '0.8', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-nesting-site-selection/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-are-aggressive-birds/', priority: '0.8', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-scandinavia/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — lore/symbolism
  { url: '/questions/what-is-the-raven-spirit-animal/', priority: '0.9', changefreq: 'monthly' },
  // Behaviour chapters
  { url: '/behaviour/raven-juveniles-and-learning/', priority: '0.8', changefreq: 'monthly' },
  // Norse lore
  { url: '/lore/norse/hrafnsmal-the-raven-speech/', priority: '0.8', changefreq: 'monthly' },
  // Compare
  { url: '/compare/raven-vs-crow-size/', priority: '0.9', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-zoroastrian-tradition/', priority: '0.8', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-the-mojave-desert/', priority: '0.8', changefreq: 'monthly' },
  // Q&A — flight
  { url: '/questions/how-do-ravens-fly/', priority: '0.8', changefreq: 'monthly' },
  // World lore
  { url: '/lore/world/ravens-in-korean-mythology/', priority: '0.8', changefreq: 'monthly' },
  // Compare
  { url: '/compare/raven-vs-crow-calls/', priority: '0.9', changefreq: 'monthly' },
  // Places
  { url: '/places/ravens-in-the-alps/', priority: '0.8', changefreq: 'monthly' },
  // Myths
  { url: '/myths/ravens-only-eat-carrion/', priority: '0.8', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const lastmod = '2026-11-07';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${absolute(p.url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

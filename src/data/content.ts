// CONTENT LAYER — all study material lives here. Edit/replace this file to update the reviewer.
export interface Card{id:string;topic:string;term:string;front:string;back:string;alt?:string[];opts?:string[];only?:'mc';why?:string}
export interface Topic{id:string;subject:string;title:string;intro:string;remember:string;level:string;note?:string}

export const topics:Topic[]=[
{id:'periods',subject:'Art History',title:'Art Periods & Landmark Works',level:'Medium',
 intro:'Match famous works, artists and features to the period of art history they belong to.',
 remember:'Memorize the pairs: Parthenon → Greek, Pantheon → Roman, Hagia Sophia → Byzantine, Pointed Arches → Gothic, Thick Walls & Massive Structures → Romanesque, Catacombs → Early Christian (about 200–500 A.D.).',
 note:'Your source lists “St. Therese in Ecstasy” under Roman Art. It is kept as written, but it is often classed as Baroque — worth confirming with your instructor.'},
{id:'classical',subject:'Music',title:'The Classical Period in Music',level:'Medium',
 intro:'The era of music from 1750 to 1820 — its context, style, composers and forms.',
 remember:'Sonata form has three parts in order: Exposition → Development → Recapitulation. The Classical orchestra has four sections: strings, woodwind, brass, percussion.'},
{id:'movements',subject:'Art Movements',title:'Classical Art to Pop Art',level:'Medium',
 intro:'Major movements from Classical Art through Baroque, Romanticism, Cubism and Pop Art, with key figures.',
 remember:'Realism rejected Romanticism; Impressionism = visible brush strokes; Expressionism = emotion of color; Cubism = Picasso & Braque; Pop Art = Andy Warhol.'},
{id:'more',subject:'Art Movements',title:'More Art Movements',level:'Easy',
 intro:'Ukiyo-e, Mannerism, Dadaism, Minimalism, Optical Art, Conceptual Art, Fauvism, Body Art, Earth/Land Art and Abstract Art.',
 remember:'Dadaism formed in Zurich during WWI; Fauvism ran about 1905–1910 (Matisse, Derain); Conceptual Art: the idea matters more than the object.'},
{id:'planes',subject:'Art Analysis',title:'Planes of Art Analysis',level:'Easy',
 intro:'Three planes used to analyze a work of art.',
 remember:'Iconic = subjects & presentation. Semiotic = elements, medium, technique, physical properties. Contextual = social & historical context.'}]

const periods:Record<string,string[]>={
'Indian Art':['Taj Mahal','Kaavya Literary Art','Rangoli','Petroglyphs'],
'Renaissance Art':['Michelangelo Buonarroti','Golden Age of Arts',"St. Peter's Basilica",'Vitruvian Man'],
'Romanesque Art':['Gloucester Candlestick','Thick Walls and Massive Structures'],
'Prehistoric Art':['Olmec Heads','Stonehenge','Cave Paintings'],
'Egyptian Art':['Great Sphinx','Pyramid of Giza'],
'Greek Art':['Parthenon','Discus Thrower','Laocoön and His Sons'],
'Roman Art':['Pantheon','St. Therese in Ecstasy'],
'Byzantine Art':['Hagia Sophia'],
'Modern Art':['Abstraction','Al-Burj Dubai'],
'Baroque Art':['Rembrandt van Rijn'],
'Gothic Art':['Pointed Arches'],
'Chinese Art':['Porcelain Vases','Calligraphy','Terracotta Army'],
'Early Christian Art':['Tomb Paintings and Catacombs','Period about 200–500 A.D.']}
let n=0
const periodCards:Card[]=Object.entries(periods).flatMap(([p,ws])=>ws.map(w=>({id:'per'+n++,topic:'periods',term:w,
 front:/^Period/.test(w)?`Which period of art history covers the “${w.toLowerCase()}”?`:`Which period of art history is “${w}” associated with?`,back:p,why:`“${w}” is listed under ${p}.`})))

const clue=(topic:string,rows:[string,string][]):Card[]=>rows.map(([back,front],i)=>({id:topic+i,topic,term:back,front,back}))

const classical=clue('classical',[
['Age of Enlightenment','The Classical era is also called the “____________”.'],
['Classical Period','Generally refers to the post-Baroque and pre-Romantic era of music composed between 1750 and 1820, covering the development of the classical symphony and concerto.'],
['Aristocracy','Cultural life was dominated by the __________, as patrons of musicians and artists who generally influenced the arts.'],
['Alberti Bass','The style of broken-chord accompaniment named after Domenico Alberti.'],
['Melody','Short, clearly defined musical phrases with two or more contrasting themes.'],
['Rhythm','In Classical music it is very defined and regular.'],
['Orchestra','The symphony ________ was organized into four sections: strings, woodwind, brass and percussion.'],
['Franz Joseph Haydn','One of the most prominent composers of the Classical period, known for his “rag-to-riches” story.'],
['Wolfgang Amadeus Mozart','A child prodigy and “the most amazing genius in musical history” who, due to mismanaged finances, lived in poverty, died young and was buried in an unknown grave.'],
['Ludwig van Beethoven','The composer who bridged the late Classical era and the early Romantic era.'],
['Sonata','A multi-movement work for a solo instrument (e.g., keyboard or violin); its name comes from the word “sonare”, to make a sound.'],
['Exposition','The first part of a composition in sonata form; it introduces the theme.'],
['Development','The middle part of the sonata-allegro form, wherein themes are developed.'],
['Recapitulation','The part of sonata form that repeats the themes as they first emerged in the opening exposition.'],
['Concerto','A multi-movement work designed for an instrumental soloist and orchestra.'],
['Sinfonia','A symphony is a multi-movement work for orchestra; the word comes from the term “__________”, literally “a harmonious sounding together”.'],
['Opera','A drama set to music where singers and musicians perform in a theatrical setting.']])
classical.push({id:'classicalEv',topic:'classical',term:'EDSA 1',front:'Which is NOT an important historical event of the Classical period?',back:'EDSA 1',opts:['French Revolution','Napoleonic Wars','American Revolution'],only:'mc',why:'The French Revolution, Napoleonic Wars and American Revolution fall in the Classical period; EDSA 1 does not.'})

const movements=clue('movements',[
['Greeks','Classical Art dates back to as early as 500 BC, developed by the ________.'],
['Roman','Most of the Classical Art that has survived today is ________, not Greek.'],
['Leonardo da Vinci','He was called the archetypal “Renaissance Man”.'],
['Baroque Art','Characterized by rich color, Christian themes, intense shadowing, and highly dramatic, heavily foreshortened scenes.'],
['Rococo','An art much different from Baroque: ornate and playful, often used by nobles to display their wealth.'],
['Romanticism','The ____________ movement originated as a revolt against the Age of Enlightenment and the Scientific Revolution.'],
['Realism','____________ began as a rejection of the imagination and subjectivism of Romanticism, focusing on accurate observation of the ordinary world.'],
['Impressionism','____________ is characterized by small but visible brush strokes, open composition and real-life subject matter.'],
['Expressionism','____________ focused on the emotion of color rather than its reality, and often appeared abstract.'],
['Cubism','Rejecting naturalistic depiction of prior movements, its artists preferred compositions of shapes and forms used in an abstract way.'],
['Pablo Picasso','Along with Georges Braque, often considered a creator of Cubism.'],
['Surrealism','Western art dominated by dark themes such as uncertainty and anxiety.'],
['Pop Art','Art focused on subjects not normally considered art (advertisements, pop culture, consumerism); easily accessible to the average person.'],
['Andy Warhol','A leading figure in the Pop Art movement.']])

const more=clue('more',[
['Ukiyo-e','A style of Japanese woodblock print and painting from the Edo period depicting theater actors, beautiful courtesans, city life, travel in romantic landscapes, and erotic scenes.'],
['Mannerism','From the Italian “maniera” (“style”); sometimes called the “stylish style” for its emphasis on self-conscious artifice over realistic depiction.'],
['Dadaism','An art movement formed during the First World War in Zurich as a negative reaction to the horrors and folly of the war.'],
['Minimalism','Art that extends the abstract idea that art should have its own reality and not be an imitation of something else.'],
['Optical Art','A style of visual art that uses optical illusions; works are abstract, and many well-known pieces are black and white.'],
['Conceptual Art','Art in which the idea behind the work matters more than the finished object; emerged in the 1960s (mid-1960s to mid-1970s).'],
['Fauvism','Work by a group of artists (including Henri Matisse and André Derain) from around 1905 to 1910, characterized by strong colours and fierce brushwork.'],
['Body Art','Art made on, with, or consisting of the human body; most common forms are tattoos and body piercings.'],
['Earth and Land Art','Art made directly in the landscape, sculpting the land into earthworks or building structures from natural materials such as rocks or twigs.'],
['Abstract Art','Art that does not attempt an accurate depiction of visual reality, using shapes, colours, forms and gestural marks instead.']])

const planes=clue('planes',[
['Iconic Plane','The ____________ includes the choice of subjects, presentation of the image in relation to the viewer, positioning of figures and the significations that arise from these.'],
['Semiotic Plane','The basic ____________ covers the elements and the general technical and physical aspects of the work: visual elements, medium and technique, format and other physical properties.'],
['Contextual Plane','The social and historical context of the work; it resituates the work in its context and brings out its full human and social meaning.']])

export const cards:Card[]=[...periodCards,...classical,...movements,...more,...planes]

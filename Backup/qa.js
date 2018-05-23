function random_number(){
  return Math.floor((Math.random() * 500) + 1);
}

const qa1 = [
  {
    q: 'Which of these is often worn during a sporting event?',
    a: [
      {
        'Hockey fez': 0,
        'Cowboy balaclava': 0,
        'Baseball cap': 1,
        'Beer': 0
      }
    ],
    people: [12638, 6632, 1133835, random_number()],
    savage: false
  },
  {
    q: 'Which of these is a common type of building?',
    a: [
      {
        'Skyscraper': 1,
        'Sky Ferreira': 0,
        'Skywalker': 0,
        'Skynet': 0
      }
    ],
    people: [742723, 2359, 5725, random_number()],
    savage: false
  },
  {
    q: 'Soup is typically eaten with what kind of kitchen utensil?',
    a: [
      {
        'Toothpick': 0,
        'Spoon': 1,
        'Meat thermometer': 0,
        'Hammer': 0
      }
    ],
    people: [6647, 1182456, 3504, random_number()],
    savage: false
  },
  {
    q: 'Which of these are you most likely to find in a toolbox?',
    a: [
      {
        'Hammer': 1,
        'MC Hammer': 0,
        'Hammerhead shark': 0,
        'Ham': 0
      }
    ],
    people: [775490, 4273, 1846, random_number()],
    savage: false
  },
  {
    q: 'The audio equipment term \'hi-fi\' is short for what?',
    a: [
      {
        'Hippo Fitting': 0,
        'Hilarious Fiction': 0,
        'High Fidelity': 1,
        'Hidden Financing': 0
      }
    ],
    people: [2446, 3231, 133307, random_number()],
    savage: false
  },
  {
    q: 'Canon, Nikon, and Olympus all specialize in what products?',
    a: [
      {
        'Can openers': 0,
        'Cameras': 1,
        'Candelabras': 0,
        'Memory Cards': 0
      }
    ],
    people: [4253, 669300, 2189, random_number()],
    savage: false
  },
  {
    q: 'Which of these is a common office supply?',
    a: [
      {
        'Clown shoes': 0,
        'Paper clips': 1,
        'Heated asphalt': 0,
        'Slot Machine': 0
      }
    ],
    people: [4313, 696501, 2010, random_number()],
    savage: false
  }
];

const qa2 = [
  {
    q: 'Which home appliance is traditionally used during the summer?',
    a: [
      {
        'Furnace': 0,
        'Space heater': 0,
        'Air conditioner': 1,
        'Flip flops': 0
      }
    ],
    people: [4577, 2971, 1117212, random_number()],
    savage: false
  },
  {
    q: 'Typically, what kind of sauce is on a cheese pizza?',
    a: [
      {
        'Glue': 0,
        'Tomato': 1,
        'Paint': 0,
        'Vsauce': 0
      }
    ],
    people: [1257, 733060, 723, random_number()],
    savage: false
  },
  {
    q: 'The Earth is covered in about 70 percent what?',
    a: [
      {
        'Leather': 0,
        'Water': 1,
        'Frank Ocean': 0,
        'Algebra': 0
      }
    ],
    people: [1128, 1171147, 1567, random_number()],
    savage: false
  },
  {
    q: 'How do you let someone on Tinder know you\'re interested?',
    a: [
      {
        'Swipe right': 1,
        'Draw circle around face': 0,
        'Shake phone': 0,
        'Drop the phone': 0
      }
    ],
    people: [743953, 14279, 5943, random_number()],
    savage: false
  },
  {
    q: 'Of the three states of matter, which keeps its own shape?',
    a: [
      {
        'Liquid': 0,
        'Gas': 0,
        'Solid': 1,
        'Body': 0
      }
    ],
    people: [1235, 1668, 21062, random_number()],
    savage: false
  },
  {
    q: 'What food item is traditionally thrown following a wedding ceremony?',
    a: [
      {
        'Rice': 1,
        'Sushi': 0,
        'Potatoes': 0,
        'Flour': 0
      }
    ],
    people: [629190, 7955, 19664, random_number()],
    savage: false
  },
  {
    q: 'Which of these is the name of the ship that famously brought the Pilgrims to America?',
    a: [
      {
        'Pacific Princess': 0,
        'SS Minnow': 0,
        'Mayflower': 1,
        'Titanic': 0
      }
    ],
    people: [15526, 18584, 651491, random_number()],
    savage: false
  }
];

const qa3 = [
  {
    q: 'According to the USDA, which of these is part of the dairy food group?',
    a: [
      {
        'Eggs': 0,
        'Breakfast sausage': 0,
        'Cheddar cheese': 1,
        'Steamed ham': 0
      }
    ],
    people: [236917, 5817, 858713, random_number()],
    savage: false
  },
  {
    q: 'Which of these words is also a common term in arithmetic?',
    a: [
      {
        'Discord': 0,
        'Dissolution': 0,
        'Division': 1,
        'Diversity': 0
      }
    ],
    people: [15684, 20258, 687812, random_number()],
    savage: false
  },
  {
    q: 'The warning that police give arrested suspects are known as what \"rights\"?',
    a: [
      {
        'Samantha': 0,
        'Miranda': 1,
        'Charlotte': 0,
        'Wilbur': 0
      }
    ],
    people: [20082, 1095873, 42162, random_number()],
    savage: false
  },
  {
    q: 'Which of these is NOT a real animal?',
    a: [
      {
        'Jackalope': 1,
        'Liger': 0,
        'Wholphin': 0,
        'Chihuahua': 0
      }
    ],
    people: [186125, 83235, 452854, random_number()],
    savage: false
  },
  {
    q: 'Which Pixar movie prominently featured a lot of balloons?',
    a: [
      {
        'The Incredibles': 0,
        'Up': 1,
        'Toy Story 2': 0,
        'Mission Impossible': 0
      }
    ],
    people: [359, 112429, 440, random_number()],
    savage: false
  },
  {
    q: 'Which fashion magazine is also the French word for \"she\" or \"her\"?',
    a: [
      {
        'Elle': 1,
        'Vogue': 0,
        'InStyle': 0,
        'Glamour': 0
      }
    ],
    people: [544904, 74702, 1114, random_number()],
    savage: false
  },
  {
    q: 'Which of these states lies farthest west?',
    a: [
      {
        'New Mexico': 1,
        'North Carolina': 0,
        'New Jersey': 0,
        'New York': 0
      }
    ],
    people: [577182, 32503, 29419, random_number()],
    savage: false
  }
]

const qa4 = [
  {
    q: 'The Teenage Mutant Ninja Turtles are all named after famous Italian what?',
    a: [
      {
        'Cities': 0,
        'Artists': 1,
        'Pastas': 0,
        'Turtles': 0
      }
    ],
    people: [25231, 815649, 14448, random_number()],
    savage: false
  },
  {
    q: 'Which of these is a real zodiac sign?',
    a: [
      {
        'Equinox': 0,
        'Taurus': 1,
        'Nova': 0,
        'Samba': 0
      }
    ],
    people: [6262, 673577, 3680, random_number()],
    savage: false
  },
  {
    q: 'In writing, what set of rules regulates the order of words?',
    a: [
      {
        'Spelling': 0,
        'Arithmetic': 0,
        'Syntax': 1,
        'Syncopation': 0
      }
    ],
    people: [223063, 69369, 778708, random_number()],
    savage: false
  },
  {
    q: 'Which of these astronomical objects orbits the Earth?',
    a: [
      {
        'Moon': 1,
        'Milky Way': 0,
        'Sun': 0,
        'Nyan Cat': 0
      }
    ],
    people: [160658, 3864, 16494, random_number()],
    savage: false
  },
  {
    q: 'The jurisdiction of net neutrality falls under what government agency?',
    a: [
      {
        'NEH': 0,
        'DOI': 0,
        'FCC': 1,
        'OMG': 0
      }
    ],
    people: [10367, 8949, 91252, random_number()],
    savage: false
  },
  {
    q: 'Which of these film franchises has the most installments?',
    a: [
      {
        'Underworld': 0,
        'Resident Evil': 1,
        'Pirates of the Caribbean': 0,
        'La La Land': 0
      }
    ],
    people: [38080, 21917, 273302, random_number()],
    savage: false
  },
  {
    q: 'Which of these people was president of the US during the Civil War?',
    a: [
      {
        'Abraham Lincoln': 1,
        'Andrew Jackson': 0,
        'Ulysses S. Grant': 0,
        'Ronald Reagan': 0
      }
    ],
    people: [429853, 54978, 80700, random_number()],
    savage: false
  }
]

const qa5 = [
  {
    q: 'The English logician John Venn is today most known for a type of what?',
    a: [
      {
        'Equation': 0,
        'Diagram': 1,
        'Riddle': 0,
        'Semiconductors': 0
      }
    ],
    people: [113950, 586997, 104468, random_number()],
    savage: false
  },
  {
    q: 'Which Reese Witherspoon movie has gotten a Broadway musical adaptation?',
    a: [
      {
        'Election': 0,
        'Walk the Line': 0,
        'Legally Blonde': 1,
        'Highschool Musical': 0
      }
    ],
    people: [9256, 104183, 548931, random_number()],
    savage: false
  },
  {
    q: 'What landmark did Ronald Reagan famously tell Mikhail Gorbachev to tear down?',
    a: [
      {
        'Great Wall of China': 0,
        'Berlin Wall': 1,
        'Walls of Constantinople': 0,
        'Wall-E': 0
      }
    ],
    people: [23651, 715238, 25166, random_number()],
    savage: false
  },
  {
    q: 'What topic would a herpetologist study?',
    a: [
      {
        'Venereal disease': 0,
        'Mushroom farming': 0,
        'Crocodile teeth': 1,
        'Federal Tax': 0
      }
    ],
    people: [48425, 56422, 51981, random_number()],
    savage: false
  },
  {
    q: 'From which country does goulash originate?',
    a: [
      {
      'Greece': 0,
      'Hungary': 1,
      'Lebanon': 0,
      'Germany': 0
      }
    ],
    people: [7675, 69719, 12736, random_number()],
    savage: false
  },
  {
    q: 'Which of these is the correct pairing of capital city and country?',
    a: [
      {
        'Wellington / New Zealand': 1,
        'Toronto / Canada': 0,
        'Rio de Janeiro / Brazil': 0,
        'Los Angeles / United States': 0
      }
    ],
    people: [74495, 37346, 95883, random_number()],
    savage: false
  },
  {
    q: 'What would you directly learn to do from the Chicago Manual of Style?',
    a: [
      {
        'Punctuate a sentence': 1,
        'Kern a font': 0,
        'Accessorize a dress': 0,
        'Troll Online': 0
      }
    ],
    people: [208384, 54823, 148415, random_number()],
    savage: false
  }
]

const qa6 = [
  {
    q: 'What classic video game series is set in a land known as Hyrule?',
    a: [
      {
        'Final Fantasy': 0,
        'The Legend of Zelda': 1,
        'Pokemon': 0,
        'Pong': 0
      }
    ],
    people: [114567, 439692, 25451, random_number()],
    savage: false
  },
  {
    q: 'As quoted on a US gov\'t website, who said that income tax is \"the hardest thing in the world to understand\"?',
    a: [
      {
        'Albert Einstein': 1,
        'Warren Buffett': 0,
        'Steve Jobs': 0,
        'John Cena': 0
      }
    ],
    people: [82492, 295352, 115508, random_number()],
    savage: true
  },
  {
    q: 'Which of these singers referred to himself as \"the Lizard King\"?',
    a: [
      {
        'Gene Simmons': 0,
        'Steven Tyler': 0,
        'Jim Morrison': 1,
        'George Harrison': 0
      }
    ],
    people: [336107, 131595, 236160, random_number()],
    savage: true
  },
  {
    q: 'Which of these things was created by a person who chose to remain anonymous?',
    a: [
      {
        'Bitcoin': 1,
        'Hoverboards': 0,
        'Fidget spinners': 0,
        'Apple': 0
      }
    ],
    people: [34397, 4508, 11680, random_number()],
    savage: false
  },
  {
    q: 'The character of Syd Barrett in \"Legion\" shares her name with the co-founder of what band?',
    a: [
      {
        'Sex Pistols': 0,
        'The Clash': 0,
        'Pink Floyd': 1 ,
        'Tenacious D': 0
      }
    ],
    people: [30020, 13579, 23082, random_number()],
    savage: true
  },
  {
    q: 'Bebop and Rocksteady are enemies of which cartoon crimefighters?',
    a: [
      {
        'Watchmen': 0,
        'The Avengers': 0,
        'TMNT': 1,
        'Pokemon': 0
      }
    ],
    people: [18019, 26182, 51700, random_number()],
    savage: false
  },
  {
    q: 'Which sport does NOT have a US Open?',
    a: [
      {
        'Tennis': 0,
        'Golf': 0,
        'Handball': 1,
        'Badminton': 0
      }
    ],
    people: [5329, 10249, 194339, random_number()],
    savage: false
  }
]

const qa7 = [
  {
    q: 'Which sport\'s playing field has the smallest total area?',
    a: [
      {
        'NHL rink': 0,
        'NBA court': 1,
        'FIFA soccer field': 0,
        'Lincoln Hall': 0
      }
    ],
    people: [129354, 300312, 6499, random_number()],
    savage: false
  },
  {
    q: 'The name of a facility for mentally ill foes of Batman is taken from a story by what author?',
    a: [
      {
        'HG Wells': 0,
        'HL Menchekn': 0,
        'HP Lovecraft': 1,
        'William Hewlett': 0
      }
    ],
    people: [41211, 14047, 30684, random_number()],
    savage: false
  },
  {
    q: 'What is the nickname of the NHL player with the record for most games ever played?',
    a: [
      {
        'Mr. Goalie': 0,
        'Mr. Hockey': 1,
        'Mr. Invincible': 0,
        'Mr. Rogers': 0
      }
    ],
    people: [15806, 127516, 89013, random_number()],
    savage: false
  },
  {
    q: 'What tech mogul became a billionaire the youngest?',
    a: [
      {
        'Evan Spiegel': 0,
        'Mark Zuckerberg': 1,
        'Larry Page': 0,
        'James Brown': 0
      }
    ],
    people: [6030, 26069, 1934, random_number()],
    savage: false
  },
  {
    q: 'Which of these is the study of inscriptions?',
    a: [
      {
        'Scriptography': 0,
        'Ecritology': 0,
        'Epigraphy': 1,
        'Etymology': 0
      }
    ],
    people: [2720, 4882, 14512, random_number()],
    savage: false
  },
  {
    q: 'Which NBA franchise has the most individual winners in the Slam Dunk Contest? (as of Jan. 2018)',
    a: [
      {
        'Atlanta Hawks': 1,
        'New York Knicks': 0,
        'Chicago Bulls': 0,
        'Philadelphia 76ers': 0
      }
    ],
    people: [22243, 10841, 17791, random_number()],
    savage: false
  },
  {
    q: 'What is the name of the treat that plays a key role in \"The Lion, the Witch and the Wardrobe\"?',
    a: [
      {
        'Turkish delight': 1,
        'Greek surprise': 0,
        'Indian pleasantry': 0,
        'Oreos': 0
      }
    ],
    people: [163317, 11710, 16200, random_number()],
    savage: false
  }
]

const qa8 = [
  {
    q: 'According to the title of a famous Robert Frost poem, nothing can stay what color?',
    a: [
      {
        'Gold': 1,
        'Green': 0,
        'Blue': 0,
        'Space Gray': 0
      }
    ],
    people: [152669, 91698, 55750, random_number()],
    savage: false
  },
  {
    q: 'A 2017 hack of the \"Harvard Crimson\" front page made fun of what celebrity?',
    a: [
      {
        'Malia Obama': 0,
        'Mark Zuckerberg': 1,
        'Natalie Portman': 0,
        'James Spurlock': 0
      }
    ],
    people: [6149, 18756, 6162, random_number()],
    savage: false
  },
  {
    q: 'When referring to cameras, which of these words is part of the acronym DSLR?',
    a: [
      {
        'Light': 0,
        'Direct': 0,
        'Single': 1,
        'Rotary': 0
      }
    ],
    people: [54732, 29115, 39371, random_number()],
    savage: true
  },
  {
    q: 'Which color is NOT represented in the original electronic Simon game?',
    a: [
      {
        'Blue': 0,
        'Orange': 1,
        'Green': 0,
        'Yellow': 0
      }
    ],
    people: [1600, 21669, 2292, random_number()],
    savage: false
  },
  {
    q: 'Which of these dogs is NOT an English breed?',
    a: [
      {
        'Bull terrier': 0,
        'Beagle': 0,
        'Basset Hound': 1,
        'German Shepherd': 0
      }
    ],
    people: [4838, 5089, 3978, random_number()],
    savage: true
  },
  {
    q: 'Which movie director\'s daughter made her directorial debut in 2017?',
    a: [
      {
        'Nancy Meyers': 1,
        'David Lynch': 0,
        'Ridley Scott': 0,
        'Spike Jonze': 0
      }
    ],
    people: [5564, 5963, 10186, random_number()],
    savage: true
  },
  {
    q: 'A \"rack-and-pinion\" assembly relies on what mechanical concept?',
    a: [
      {
        'Hydraulics': 0,
        'Gears': 1,
        'Springs': 0,
        'Magnets': 0
      }
    ],
    people: [52614, 74581, 33931, random_number()],
    savage: false
  }
]

const qa9 = [
  {
    q: 'Which of these is the name of an American car model AND a Mac operating system?',
    a: [
      {
        'Sierra': 1,
        'Mountain Lion': 0,
        'Mustang': 0,
        'Kodiak': 0
      }
    ],
    people: [103955, 16863, 32577, random_number()],
    savage: false
  },
  {
    q: 'Which of these insects is typically the heaviest by far?',
    a: [
      {
        'Giant weta': 0,
        'Goliath beetle': 1,
        'Rhinoceros cockroach': 0,
        'Triceratops': 0
      }
    ],
    people: [4013, 10203, 4532, random_number()],
    savage: false
  },
  {
    q: 'Before \"This American Life,\" Ira Glass was the co-host of an NPR show based in what city?',
    a: [
      {
        'Chicago': 1,
        'Boston': 0,
        'New York City': 0,
        'Ho Chin Minh City': 0
      }
    ],
    people: [22214, 11993, 5952, random_number()],
    savage: false
  },
  {
    q: 'Until it was banned, lithium was a key ingredient in which of these brands?',
    a: [
      {
        'Cracker Jack': 0,
        '7Up': 1,
        'Good and Plenty': 0,
        'Cocoa Puffs': 0
      }
    ],
    people: [2405, 12689, 5918, random_number()],
    savage: false
  },
  {
    q: 'Which Nathaniel Hawthorne novel is written in the first-person?',
    a: [
      {
        'The Blithedale Romance': 1,
        'The Scarlet Letter': 0,
        'House of the 7 Gables': 0,
        'The Catcher in the Rye': 0
      }
    ],
    people: [907, 1821, 981, random_number()],
    savage: false
  },
  {
    q: 'Which of these fitness fads came first?',
    a: [
      {
        'Tae Bo': 0,
        'Jazzercise': 1,
        'Zumba': 0,
        'Chores': 0
      }
    ],
    people: [1253, 3895, 343, random_number()],
    savage: false
  },
  {
    q: 'Which of these is both a body part and the phonetic pronunciation of a letter in the Hebrew alphabet?',
    a: [
      {
        'Gimel': 0,
        'Heel': 0,
        'Shin': 1,
        'Face': 0
      }
    ],
    people: [10797, 22451, 40978, random_number()],
    savage: false
  }
]

const qa10 = [
  {
    q: 'A turkey vulture will protect itself from predators with what peculiar method?',
    a: [
      {
        'Defensive vomiting': 1,
        'High-pitched screeching': 0,
        'Hiding inside carcasses': 0,
        'Barking': 0
      }
    ],
    people: [54056, 29029, 19078, random_number()],
    savage: false
  },
  {
    q: 'Which gulf is NOT located at the northern end of the Red Sea?',
    a: [
      {
        'Aden': 1,
        'Aqaba': 0,
        'Suez': 0,
        'Abba': 0
      }
    ],
    people: [2932, 2049, 5383, random_number()],
    savage: true
  },
  {
    q: 'Which of these actors does NOT have their own brand of wine?',
    a: [
      {
        'Kate Hudson': 0,
        'Anne Hathaway': 1,
        'Drew Barrymore': 0,
        'Cliff Richard': 0
      }
    ],
    people: [4918, 11359, 6109, random_number()],
    savage: false
  },
  {
    q: 'Which brand mascot was NOT a real person?',
    a: [
      {
        'Little Debbie': 0,
        'Sara Lee': 0,
        'Betty Crocker': 1,
        'The Gerber baby': 0
      }
    ],
    people: [4225, 2910, 5443, random_number()],
    savage: false
  },
  {
    q: 'Which of these artists was in the original lineup of the Newport Folk Festival?',
    a: [
      {
        'Peter, Paul and Mary': 0,
        'The Kingston Trio': 1,
        'Ario Guthrie': 0,
        'John Mayer': 0
      }
    ],
    people: [231, 328, 330, random_number()],
    savage: false
  },
  {
    q: 'Which of these countries is NOT a collaborating member on the International Space Station?',
    a: [
      {
        'China': 1,
        'Russia': 0,
        'Canada': 0,
        'United States': 0
      }
    ],
    people: [1753, 335, 1781, random_number()],
    savage: false
  },
  {
    q: 'What classic video game was partly designed by founders of Apple Computer?',
    a: [
      {
        'Defender': 0,
        'Asteroids': 0,
        'Breakout': 1,
        'Solitaire': 0
      }
    ],
    people: [8093, 21539, 11959, random_number()],
    savage: true
  }
]

const qa11 = [
  {
    q: 'When written in English, which of these nations\' capitals has more vowels than consonants?',
    a: [
      {
        'Pakistan': 0,
        'Norway': 0,
        'Vietnam': 1,
        'Nauru': 0
      }
    ],
    people: [15711, 16398, 20807, random_number()],
    savage: false
  },
  {
    q: 'Who was appointed to the US Senate despite being too young to legally serve?',
    a: [
      {
        'Henry Clay Sr.': 1,
        'Stephen A. Douglas': 0,
        'John C. Calhoun': 0,
        'Harry Connick Jr.': 0
      }
    ],
    people: [741, 973, 1362, random_number()],
    savage: true
  },
  {
    q: 'Which game was created by the same mind behind RoboRally?',
    a: [
      {
        'Magic: The Gathering': 1,
        'Settlers of Catan': 0,
        'Hearthstone': 0,
        'Minecraft': 0
      }
    ],
    people: [2882, 3834, 4966, random_number()],
    savage: true
  },
  {
    q: 'Which of these actors was a high school cheerleader?',
    a: [
      {
        'George Clooney': 0,
        'Michael Douglas': 1,
        'John Travolta': 0,
        'Kevin Bacon': 0
      }
    ],
    people: [1576, 1188, 2602, random_number()],
    savage: false
  },
  {
    q: 'Whose resignation during the Velvet Revolution effectively ended Communist rule in Czechoslovakia?',
    a: [
      {
        'Antonin Novotny': 0,
        'Gustav Husak': 0,
        'Milos Jakes': 1,
        'Georgy Malenkov': 0
      }
    ],
    people: [106, 74, 130, random_number()],
    savage: false
  },
  {
    q: 'Guatemala and Mozmbique are the only UN countries with what on their flags?',
    a: [
      {
        'Firearm': 1,
        'Garden tool': 0,
        'Bird': 0,
        'Lines': 0
      }
    ],
    people: [721, 433, 560, random_number()],
    savage: false
  },
  {
    q: 'Which city is NOT a terminus of the Panama Canal?',
    a: [
      {
        'Col&oacute;n': 0,
        'Panama City': 0,
        'La Chorrera': 1,
        'Atlantic': 0
      }
    ],
    people: [3977, 5257, 3493, random_number()],
    savage: true
  }
]

const qa12 = [
  {
    q: 'The most recently ratified amendment to the US Constitution concerns what issue? (as of mid April 2018)',
    a: [
      {
        'Lawmaker salaries': 1,
        'Presidential successions': 0,
        'Voting rights': 0,
        'Dietary issues': 0
      }
    ],
    people: [9066, 5036, 7290, random_number()],
    savage: false
  },
  {
    q: 'The first streaming-only album to win a Grammy takes its title from a kind of what?',
    a: [
      {
        'Liqueur': 0,
        'Children\'s activity': 1,
        'Aristocratic position': 0,
        'Pulitzer': 0
      }
    ],
    people: [155, 530, 147, random_number()],
    savage: false
  },
  {
    q: 'Which of these fashion designers once lost his job because the clothes he designed were too grunge?',
    a: [
      {
        'Marc Jacobs': 1,
        'Rick Owens': 0,
        'Todd Oldham': 0,
        'David Chang': 0
      }
    ],
    people: [1718, 457, 1007, random_number()],
    savage: false
  },
  {
    q: 'If you tunneled through the center of the earth from Honolulu, what country would you end up in?',
    a: [
      {
        'Botswana': 1,
        'Norway': 0,
        'Mongolia': 0,
        'Antarctica': 0
      }
    ],
    people: [313, 405, 377, random_number()],
    savage: false
  },
  {
    q: 'In 1956, all-around champion Viktor Chukarin set which Olympic gymnastics record that still stands?',
    a: [
      {
        'Highest men\'s score': 0,
        'Oldest champion': 1,
        'Youngest champion': 0,
        'Best champion': 0
      }
    ],
    people: [42, 60, 19, random_number()],
    savage: false
  },
  {
    q: 'The Windows 95 startup sound was composed by a former member of what band?',
    a: [
      {
        'They Might Be Giants': 0,
        'Roxy Music': 1,
        'Devo': 0,
        'Backstreet Boys': 0
      }
    ],
    people: [87, 177, 454, random_number()],
    savage: false
  },
  {
    q: 'The element named from the Latin for \"flint\" is typically used to make what?',
    a: [
      {
        'Explosives': 0,
        'Computer chps': 1,
        'Electrical wire': 0,
        'Cigarettes': 0
      }
    ],
    people: [2324, 1008, 781, random_number()],
    savage: false
  }
]

const listofallQA_STORE = [qa1, qa2, qa3, qa4, qa5, qa6, qa7, qa8, qa9, qa10, qa11, qa12];

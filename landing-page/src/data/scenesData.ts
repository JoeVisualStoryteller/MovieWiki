import type { Act, CanonDocument, Character } from '../types/screenplay'

export const acts: Act[] = [
  {
    id: 'act-i',
    title: 'ACT I — ORIGINS AND LOSS',
    sceneCount: 7,
    status: 'complete',
    scenes: [
      {
        id: 1,
        title: 'Princess Meets Joseph',
        location: 'INT. PALACE CORRIDOR – DAY',
        actFile: 'act-i.md',
        themes: ['First Meeting', 'Trust', 'Recognition'],
        characters: ['Cassandra', 'Joseph']
      },
      {
        id: 2,
        title: 'The Field',
        location: 'EXT. OPEN FIELD – LATE AFTERNOON',
        actFile: 'act-i.md',
        themes: ['Intimacy', 'Stillness', 'Peace'],
        characters: ['Cassandra', 'Joseph']
      },
      {
        id: 3,
        title: 'The Dragon',
        location: 'EXT. KINGDOM OUTSKIRTS – NIGHT',
        actFile: 'act-i.md',
        themes: ['Death Magic', 'Revelation', 'Protection'],
        characters: ['Cassandra', 'Joseph']
      },
      {
        id: 4,
        title: 'The Grand Healer',
        location: 'INT. GRAND HEALER\'S CHAMBER – NIGHT',
        actFile: 'act-i.md',
        themes: ['Lore', 'Understanding', 'Cost'],
        characters: ['Cassandra', 'Joseph', 'Grand Healer']
      },
      {
        id: 5,
        title: 'Court Defense',
        location: 'INT. COURT CHAMBER – DAY',
        actFile: 'act-i.md',
        themes: ['Defense', 'Political Stand', 'Loyalty'],
        characters: ['Cassandra', 'Joseph', 'Noble']
      },
      {
        id: 6,
        title: 'Dismissal',
        location: 'INT. THRONE CHAMBER – DAY',
        actFile: 'act-i.md',
        themes: ['Exile', 'Obedience', 'Duty'],
        characters: ['Joseph', 'King']
      },
      {
        id: 7,
        title: 'What He Leaves Behind',
        location: 'INT. QUEEN\'S CHAMBER – NIGHT',
        actFile: 'act-i.md',
        themes: ['Symbol', 'Weight', 'Promise'],
        characters: ['Cassandra']
      }
    ]
  },
  {
    id: 'act-ii',
    title: 'ACT II — EXILE, RETURN, AND RECKONING',
    sceneCount: 8,
    status: 'complete',
    scenes: [
      {
        id: 8,
        title: 'Exile and Rumors',
        location: 'INT. WAR COUNCIL CHAMBER – NIGHT',
        actFile: 'act-ii.md',
        themes: ['War', 'Trust', 'Rumors'],
        characters: ['Cassandra', 'Scout']
      },
      {
        id: 9,
        title: 'The Wedding',
        location: 'EXT. CATHEDRAL COURTYARD – DAY',
        actFile: 'act-ii.md',
        themes: ['Loss', 'Witness', 'Sorrow'],
        characters: ['Cassandra', 'Joseph', 'King Consort']
      },
      {
        id: 10,
        title: 'Return at the Gates',
        location: 'EXT. CASTLE FIELDS – DUSK',
        actFile: 'act-ii.md',
        themes: ['Battle', 'Return', 'Sacrifice'],
        characters: ['Cassandra', 'Joseph', 'Skeletal Commander']
      },
      {
        id: 11,
        title: 'The Twelve',
        location: 'EXT. FIELD – NIGHT',
        actFile: 'act-ii.md',
        themes: ['Revelation', 'Extinction', 'Death Knights'],
        characters: ['Joseph', 'Skeletal Commander']
      },
      {
        id: 12,
        title: 'Grand Healer\'s Warning',
        location: 'INT. HEALER\'S CHAMBER – NIGHT',
        actFile: 'act-ii.md',
        themes: ['Cost', 'Warning', 'Shared Burden'],
        characters: ['Cassandra', 'Grand Healer']
      },
      {
        id: 13,
        title: 'Throne Room: God Standoff',
        location: 'INT. THRONE ROOM – NIGHT',
        actFile: 'act-ii.md',
        themes: ['Confrontation', 'God', 'Sacrifice'],
        characters: ['Joseph', 'Necrotic King', 'Grand Maester']
      },
      {
        id: 14,
        title: 'Feeding Revealed',
        location: 'INT. THRONE ROOM – CONTINUOUS',
        actFile: 'act-ii.md',
        themes: ['Truth', 'Debt', 'Feeding'],
        characters: ['Joseph', 'Necrotic King', 'Death Knight', 'Cassandra']
      },
      {
        id: 15,
        title: 'Aftermath',
        location: 'INT. THRONE ROOM – LATER',
        actFile: 'act-ii.md',
        themes: ['Resolution', 'Planning', 'Hope'],
        characters: ['Cassandra', 'Joseph']
      }
    ]
  },
  {
    id: 'act-iii',
    title: 'ACT III — CONSEQUENCE AND CHOICE',
    sceneCount: 8,
    status: 'complete',
    scenes: [
      {
        id: 16,
        title: 'The First Sin',
        location: 'INT. GRAND MAESTER\'S CHAMBER – NIGHT',
        actFile: 'act-iii.md',
        themes: ['Confession', 'Past', 'Sin'],
        characters: ['Grand Maester', 'Joseph']
      },
      {
        id: 17,
        title: 'The Debt is Named',
        location: 'INT. THRONE ROOM – MORNING',
        actFile: 'act-iii.md',
        themes: ['Confrontation', 'Debt', 'Feeding'],
        characters: ['Cassandra', 'Joseph']
      },
      {
        id: 18,
        title: 'If I Let Go',
        location: 'EXT. CASTLE WALLS – NIGHT',
        actFile: 'act-iii.md',
        themes: ['Restraint', 'Breaking', 'Power'],
        characters: ['Joseph']
      },
      {
        id: 19,
        title: 'The Anchor',
        location: 'INT. JOSEPH\'S CHAMBER – NIGHT',
        actFile: 'act-iii.md',
        themes: ['Anchor', 'Love', 'Restraint'],
        characters: ['Cassandra', 'Joseph']
      },
      {
        id: 20,
        title: 'What I Carried Alone',
        location: 'INT. THRONE ROOM – DAY',
        actFile: 'act-iii.md',
        themes: ['Acceptance', 'Understanding', 'Truth'],
        characters: ['King Consort', 'Joseph']
      },
      {
        id: 21,
        title: 'Before the Door Closes',
        location: 'INT. PRIVATE CHAMBER – EVENING',
        actFile: 'act-iii.md',
        themes: ['Intimacy', 'Choice', 'Love'],
        characters: ['Cassandra', 'Joseph']
      },
      {
        id: 22,
        title: 'By Morning',
        location: 'EXT. CASTLE WALLS – DAWN',
        actFile: 'act-iii.md',
        themes: ['Miracle', 'Power', 'Statement'],
        characters: ['Joseph', 'Cassandra']
      },
      {
        id: 23,
        title: 'Those Who Still Stand',
        location: 'INT. GREAT HALL – DAY',
        actFile: 'act-iii.md',
        themes: ['Convocation', 'Nations', 'Alliance'],
        characters: ['Cassandra', 'Joseph', 'Survivors']
      }
    ]
  },
  {
    id: 'act-iv',
    title: 'ACT IV — PALADIN WAR AND RECKONING',
    sceneCount: 19,
    status: 'complete',
    scenes: [
      {
        id: 24,
        title: 'The Paladin Returns',
        location: 'EXT. OUTER ROAD TO THE CAPITAL — DUSK',
        actFile: 'act-iv.md',
        themes: ['Threat', 'Zealotry', 'Hatred'],
        characters: ['The Paladin']
      },
      {
        id: 25,
        title: 'Unbound',
        location: 'INT. QUIET GUEST CHAMBER — NIGHT',
        actFile: 'act-iv.md',
        themes: ['Choice', 'Intimacy', 'Freedom'],
        characters: ['Joseph', 'Cassandra']
      },
      {
        id: 26,
        title: 'Measures',
        location: 'INT. GREAT HALL — LATE NIGHT',
        actFile: 'act-iv.md',
        themes: ['Leadership', 'Teaching', 'Duty'],
        characters: ['Cassandra', 'King Consort', 'Joseph']
      },
      {
        id: 27,
        title: 'The Cost of Purity',
        location: 'INT. CASTLE — NIGHT',
        actFile: 'act-iv.md',
        themes: ['Violence', 'Sacrifice', 'Death'],
        characters: ['Joseph', 'The Paladin', 'King Consort', 'Death Knights']
      },
      {
        id: 28,
        title: 'Where the Living Cannot Follow',
        location: 'INT. GRAND MAESTER\'S CHAMBER — NIGHT',
        actFile: 'act-iv.md',
        themes: ['Failure', 'Crypt', 'Desperation'],
        characters: ['Cassandra', 'Joseph', 'Grand Maester']
      },
      {
        id: 29,
        title: 'What Was Broken First',
        location: 'INT. THE CRYPT — CONTINUOUS',
        actFile: 'act-iv.md',
        themes: ['Healing', 'Truth', 'Love'],
        characters: ['Joseph', 'Cassandra']
      },
      {
        id: 30,
        title: 'The First Morning',
        location: 'INT. ROYAL CHAMBER — MORNING',
        actFile: 'act-iv.md',
        themes: ['Recovery', 'Choice', 'Future'],
        characters: ['Cassandra', 'Joseph']
      },
      {
        id: 31,
        title: 'Doctrine Rewritten',
        location: 'INT. GRAND MAESTER\'S CHAMBER — DAY',
        actFile: 'act-iv.md',
        themes: ['History', 'Truth', 'Doctrine'],
        characters: ['Grand Maester']
      },
      {
        id: 32,
        title: 'Scene 9',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 33,
        title: 'Scene 10',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 34,
        title: 'Scene 11',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 35,
        title: 'Scene 12',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 36,
        title: 'Scene 13',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 37,
        title: 'Scene 14',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 38,
        title: 'Scene 15',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 39,
        title: 'Scene 16',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 40,
        title: 'Scene 17',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 41,
        title: 'Scene 18',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      },
      {
        id: 42,
        title: 'Scene 19',
        location: 'TBD',
        actFile: 'act-iv.md',
        themes: [],
        characters: []
      }
    ]
  },
  {
    id: 'act-v',
    title: 'ACT V — THE FINAL RECKONING',
    sceneCount: 17,
    status: 'in-progress',
    scenes: [
      {
        id: 43,
        title: 'The Return to Position',
        location: 'INT. GREAT HALL — MORNING',
        actFile: 'act-v.md',
        themes: ['Preparation', 'Beginning'],
        characters: []
      }
    ]
  }
]

export const canonDocuments: CanonDocument[] = [
  { id: 'rules', title: 'Canon Rules', file: 'canon/canon-rules.md' },
  { id: 'bible', title: 'Story Bible', file: 'canon/story-bible.md' },
  { id: 'scenes', title: 'Script Scenes Overview', file: 'canon/script-scenes.md' },
  { id: 'full', title: 'Full Canon Document', file: 'canon/full-canon.txt' }
]

export const characters: Character[] = [
  {
    id: 'joseph',
    name: 'Joseph',
    title: 'Last Living Death Knight',
    description: 'Finite, restrained, mortal. Not undead. Trained in death magic through sacrifice. Former honor guard to Cassandra. Core conflict: Restraint vs Dominion.',
    appearances: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30]
  },
  {
    id: 'cassandra',
    name: 'Cassandra',
    title: 'The Queen',
    description: 'Political and emotional anchor. Roman-inspired, olive-skinned, brown hair. Grounded, realistic authority with quiet composure. Fully human.',
    appearances: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 14, 15, 17, 19, 21, 22, 23, 25, 26, 28, 29, 30]
  },
  {
    id: 'necrotic-king',
    name: 'Necrotic King',
    title: 'Death-Aligned God',
    description: 'God of attrition and dominion. Seeks to convert Joseph. Represents death without restraint. Removes choice and agency.',
    appearances: [13, 14]
  },
  {
    id: 'grand-maester',
    name: 'Grand Maester',
    title: 'Former Death Knight',
    description: 'Last survivor who ran. Keeper of knowledge. Provides crucial support in battle against the Necrotic King.',
    appearances: [13, 16, 28, 31]
  },
  {
    id: 'grand-healer',
    name: 'Grand Healer',
    title: 'Healer',
    description: 'Understands the nature of Death Knights. Explains their purpose and cost.',
    appearances: [4, 12]
  },
  {
    id: 'king-consort',
    name: 'King Consort',
    title: 'Cassandra\'s Husband',
    description: 'Political marriage. Learns leadership from Joseph. Accepts the truth of Cassandra and Joseph\'s bond.',
    appearances: [9, 20, 26, 27]
  },
  {
    id: 'paladin',
    name: 'The Paladin',
    title: 'Zealot',
    description: 'Leader of holy order remnants. Hatred sharpened into clarity. Represents purity through violence.',
    appearances: [24, 27]
  },
  {
    id: 'death-knights',
    name: 'Death Knights',
    title: 'The Remaining Eleven',
    description: 'Skeletal knights who feed Joseph their time. Once thousands, now only twelve including Joseph.',
    appearances: [10, 11, 14, 27]
  }
]

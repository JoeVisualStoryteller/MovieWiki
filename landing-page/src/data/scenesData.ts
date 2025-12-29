import type { Act, CanonDocument, Character } from '../types/screenplay'

// Helper function to generate scene data for an act
function generateActScenes(actNumber: number, sceneCount: number) {
  const scenes = []
  for (let i = 1; i <= sceneCount; i++) {
    scenes.push({
      id: (actNumber - 1) * 20 + i,
      title: `Scene ${i}`,
      location: 'See screenplay file',
      actFile: `scenes/Act_${actNumber}_Scene_${i}.txt`,
      themes: [],
      characters: []
    })
  }
  return scenes
}

export const acts: Act[] = [
  {
    id: 'act-i',
    title: 'ACT I — THE ILLUSION OF CHOICE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(1, 20)
  },
  {
    id: 'act-ii',
    title: 'ACT II — DELAY',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(2, 20)
  },
  {
    id: 'act-iii',
    title: 'ACT III — BEFORE THE WORLD BROKE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(3, 20)
  },
  {
    id: 'act-iv',
    title: 'ACT IV — COUNSEL AND CONSEQUENCE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(4, 20)
  },
  {
    id: 'act-v',
    title: 'ACT V — THE ORDER THE WORLD KILLED',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(5, 20)
  },
  {
    id: 'act-vi',
    title: 'ACT VI — THE EAST OPENS',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(6, 20)
  },
  {
    id: 'act-vii',
    title: 'ACT VII — THE CHOICE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(7, 20)
  },
  {
    id: 'act-viii',
    title: 'ACT VIII — THE PRICE OF THE CHOICE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(8, 20)
  },
  {
    id: 'act-ix',
    title: 'ACT IX — WHAT REMAINS',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(9, 20)
  },
  {
    id: 'act-x',
    title: 'ACT X — THE COST OF CONTINUANCE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(10, 20)
  },
  {
    id: 'act-xi',
    title: 'ACT XI — THE WALLS LISTEN',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(11, 20)
  },
  {
    id: 'act-xii',
    title: 'ACT XII — PRESSURE FRACTURES',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(12, 20)
  },
  {
    id: 'act-xiii',
    title: 'ACT XIII — THE BRIDGE OF CONSEQUENCE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(13, 20)
  },
  {
    id: 'act-xiv',
    title: 'ACT XIV — THE PRICE OF TRUTH',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(14, 20)
  },
  {
    id: 'act-xv',
    title: 'ACT XV — THE INTIMACY OF WAR',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(15, 20)
  },
  {
    id: 'act-xvi',
    title: 'ACT XVI — DRAWING THE LINE',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(16, 20)
  },
  {
    id: 'act-xvii',
    title: 'ACT XVII — THE SIEGE OF WILL',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(17, 20)
  },
  {
    id: 'act-xviii',
    title: 'ACT XVIII — THE OFFER',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(18, 20)
  },
  {
    id: 'act-xix',
    title: 'ACT XIX — THE BREAKING POINT',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(19, 20)
  },
  {
    id: 'act-xx',
    title: 'ACT XX — THE SEARCH AND THE DUEL',
    sceneCount: 20,
    status: 'complete',
    scenes: generateActScenes(20, 20)
  }
]

export const canonDocuments: CanonDocument[] = [
  { id: 'bible', title: 'Story Bible', file: 'canon/story-bible.md' },
  { id: 'beats', title: 'Master Screenplay Beats', file: 'screenplay/master-beats.md' }
]

export const characters: Character[] = [
  {
    id: 'joseph',
    name: 'Joseph',
    title: 'Last Living Death Knight',
    description: 'Finite, restrained, mortal. Not undead. Trained in death magic through sacrifice. Cassandra\'s stolen betrothed turned protector. Core conflict: Restraint vs Dominion.',
    appearances: []
  },
  {
    id: 'cassandra',
    name: 'Cassandra',
    title: 'The Queen',
    description: 'Political and emotional anchor. Astraean royalty, olive-skinned, dark-haired. Grounded, realistic authority with quiet composure. Joseph\'s anchor and secret wife.',
    appearances: []
  },
  {
    id: 'necrotic-king',
    name: 'Necrotic King',
    title: 'Death-Aligned God',
    description: 'Former Second Death Knight who lost restraint and became a god through dominion. Seeks to convert Joseph. Represents death without consent.',
    appearances: []
  },
  {
    id: 'grand-maester',
    name: 'Grand Maester',
    title: 'First Death Knight',
    description: 'Over 1,000 years old. Founded the Order, witnessed its extinction. Kidnapped Joseph from his betrothal to Cassandra. Keeper of knowledge and guilt.',
    appearances: []
  }
]

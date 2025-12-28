export interface Scene {
  id: number
  title: string
  location: string
  actFile: string
  individualFile?: string
  startLine?: number
  endLine?: number
  themes: string[]
  characters: string[]
}

export interface Act {
  id: string
  title: string
  sceneCount: number
  status: 'complete' | 'in-progress' | 'placeholder'
  scenes: Scene[]
}

export interface CanonDocument {
  id: string
  title: string
  file: string
}

export interface Character {
  id: string
  name: string
  title: string
  description: string
  appearances: number[]
}

export type ViewMode = 'screenplay' | 'wiki'
export type WikiSection = 'canon-rules' | 'story-bible' | 'characters' | 'scene-directory'

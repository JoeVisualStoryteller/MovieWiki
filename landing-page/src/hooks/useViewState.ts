import { useState, useCallback, useEffect } from 'react'
import type { ViewMode, WikiSection } from '../types/screenplay'

interface ViewState {
  viewMode: ViewMode
  selectedAct: string
  selectedScene: number | null
  wikiSection: WikiSection
}

interface ViewStateActions {
  setViewMode: (mode: ViewMode) => void
  setSelectedAct: (act: string) => void
  setSelectedScene: (scene: number | null) => void
  setWikiSection: (section: WikiSection) => void
}

export function useViewState(): ViewState & ViewStateActions {
  const [viewMode, setViewModeState] = useState<ViewMode>('screenplay')
  const [selectedAct, setSelectedActState] = useState<string>('act-i')
  const [selectedScene, setSelectedSceneState] = useState<number | null>(null)
  const [wikiSection, setWikiSectionState] = useState<WikiSection>('canon-rules')

  // Initialize from URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const view = params.get('view') as ViewMode
    const act = params.get('act')
    const scene = params.get('scene')
    const section = params.get('section') as WikiSection

    if (view === 'screenplay' || view === 'wiki') {
      setViewModeState(view)
    }
    if (act) {
      setSelectedActState(act)
    }
    if (scene) {
      setSelectedSceneState(parseInt(scene, 10))
    }
    if (section) {
      setWikiSectionState(section)
    }
  }, [])

  // Update URL params when state changes
  const updateURL = useCallback((updates: Partial<ViewState>) => {
    const params = new URLSearchParams(window.location.search)

    if (updates.viewMode !== undefined) {
      params.set('view', updates.viewMode)
    }
    if (updates.selectedAct !== undefined) {
      params.set('act', updates.selectedAct)
    }
    if (updates.selectedScene !== undefined && updates.selectedScene !== null) {
      params.set('scene', updates.selectedScene.toString())
    } else if (updates.selectedScene === null) {
      params.delete('scene')
    }
    if (updates.wikiSection !== undefined) {
      params.set('section', updates.wikiSection)
    }

    const newURL = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newURL)
  }, [])

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode)
    updateURL({ viewMode: mode })
  }, [updateURL])

  const setSelectedAct = useCallback((act: string) => {
    setSelectedActState(act)
    updateURL({ selectedAct: act })
  }, [updateURL])

  const setSelectedScene = useCallback((scene: number | null) => {
    setSelectedSceneState(scene)
    updateURL({ selectedScene: scene })
  }, [updateURL])

  const setWikiSection = useCallback((section: WikiSection) => {
    setWikiSectionState(section)
    updateURL({ wikiSection: section })
  }, [updateURL])

  return {
    viewMode,
    selectedAct,
    selectedScene,
    wikiSection,
    setViewMode,
    setSelectedAct,
    setSelectedScene,
    setWikiSection
  }
}

import { useViewState } from './hooks/useViewState'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/Hero'
import { ScreenplayView } from './components/screenplay/ScreenplayView'
import { WikiView } from './components/wiki/WikiView'
import { StoryStructureView } from './components/story-structure/StoryStructureView'
import { Footer } from './components/layout/Footer'
import './App.css'

function App() {
  const {
    viewMode,
    selectedAct,
    selectedScene,
    wikiSection,
    setViewMode,
    setSelectedAct,
    setSelectedScene,
    setWikiSection
  } = useViewState()

  const handleReadClick = () => {
    setViewMode('screenplay')
    setSelectedAct('act-i')
  }

  const handleExploreClick = () => {
    setViewMode('wiki')
    setWikiSection('canon-rules')
  }

  return (
    <div className="app">
      <Navigation viewMode={viewMode} onViewChange={setViewMode} />

      <Hero onReadClick={handleReadClick} onExploreClick={handleExploreClick} />

      {viewMode === 'screenplay' ? (
        <ScreenplayView
          selectedAct={selectedAct}
          onActChange={setSelectedAct}
          selectedScene={selectedScene}
          onSceneChange={setSelectedScene}
        />
      ) : viewMode === 'story-structure' ? (
        <StoryStructureView />
      ) : (
        <WikiView
          section={wikiSection}
          onSectionChange={setWikiSection}
        />
      )}

      <Footer />
    </div>
  )
}

export default App

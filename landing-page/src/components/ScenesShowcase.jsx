import { useState } from 'react'
import './ScenesShowcase.css'

const scenes = [
  {
    id: 1,
    title: "Scene 1: Council of War",
    description: "Throne room, stone architecture, Roman-inspired banners. The Queen listens to a war progress briefing. She remains composed and emotionally guarded. After a measured pause, she calmly orders deployment of her honor guard—no dramatics, just authority.",
    prompt: "Cinematic establishing shot of a Roman-inspired throne room with stone architecture and war banners. The Queen, an olive-skinned noblewoman with brown hair, listens intently to council members. Camera slowly pushes in as she delivers calm orders. Natural lighting, realistic, somber tone."
  },
  {
    id: 2,
    title: "Scene 2: The Shore",
    description: "Desolate beach at dusk near a partially destroyed stick-built coastal house. A homeless man sits alone. Knights approach; he does not acknowledge them. Soft female narration: \"I married for the crown… and left him to the tide.\"",
    prompt: "Wide shot of desolate beach at dusk, cold blue tones. A weathered homeless man sits motionless near a destroyed coastal house. Knights approach in background. Female voice-over. Slow dolly, natural lighting, melancholic atmosphere."
  },
  {
    id: 3,
    title: "Scene 3: Death of the King",
    description: "Back in the throne room. The Queen learns the King has been killed in battle. The room goes silent. She absorbs the news without collapsing; breathing tightens. She rises—now Queen.",
    prompt: "Close-up on The Queen's face as she receives devastating news. Silence. Subtle breathing changes, controlled emotion. Camera slowly pulls back as she rises to full height. Dark, intimate lighting. Emotional realism, no music swell."
  },
  {
    id: 4,
    title: "Scene 4: The Weight of Rule",
    description: "War chambers and corridors. The Queen issues frantic orders. Voice remains firm but quickens; restraint fractures in subtle ways (trembling hand, slight pause). She stands alone inside power.",
    prompt: "Tracking shot through war chambers. The Queen moves with purpose, issuing orders. Camera catches details: trembling hand on map, slight pause mid-sentence. Torch-lit corridors, realistic shadows. Controlled performance, building tension."
  },
  {
    id: 5,
    title: "Scene 5: The Revelation",
    description: "Forest at night. The homeless man is revealed wearing obsidian-black armor: Joseph, a knight trained in death magic. Memories surface; grief overtakes discipline. Eyes glow faintly; a restrained death-magic shockwave kills trees and life around him. No scream.",
    prompt: "Night forest. Reveal of Joseph in obsidian-black death-magic armor with glowing sigils. Slow push on his face as eyes begin to glow. Restrained magical shockwave ripples outward—trees wilt, no sound. Realistic VFX, grounded magic, tragic not monstrous."
  },
  {
    id: 6,
    title: "Scene 6: March of the Dead",
    description: "Castle corridors. Joseph marches toward the throne room. Torches extinguish, plants wilt. Guards recoil. Camera pans to his face; eyes glow brighter. Without breaking stride, he blows the throne room doors apart and continues forward.",
    prompt: "Tracking shot following Joseph through castle corridors. Torches extinguish in his wake, plants die. Guards step back. Slow pan to glowing eyes. Invisible force violently destroys throne room doors. Continuous movement, grounded supernatural elements."
  },
  {
    id: 7,
    title: "Scene 7: Reunion",
    description: "Throne room ruins. Council freezes. The Queen recognizes Joseph; composure shatters. She runs to him, tears streaming, clutching and kissing his armor. He lifts his helmet just enough to kiss her back—soft, painful, everything unsaid. No dialogue.",
    prompt: "Medium shot in ruined throne room. The Queen's composure breaks—tears, running. Close-up on hands clutching armor, faces meeting through raised helmet. Soft, painful kiss. No dialogue. Natural lighting through destruction, raw emotion, silence speaks."
  },
  {
    id: 8,
    title: "Scene XX1: Authority and Instinct",
    description: "Throne room, stabilized but war-worn. The Queen commands with confidence; Joseph stands beside her, silent and protective. A knight reports the King's killer is an enemy Paladin. Before she responds, Joseph moves toward the doors, saying: \"I'll handle this. Captain Varro—guard the Queen.\" The Queen reaches out to stop Joseph but he is already gone.",
    prompt: "Two-shot: The Queen on throne, Joseph beside her. Knight enters with report. Joseph immediately moves—dialogue: 'I'll handle this. Captain Varro—guard the Queen.' The Queen's hand reaches but he's already at the doors. Camera lingers on her reaction: concern, trust, inevitability. War-worn throne room, natural light."
  }
]

function ScenesShowcase() {
  const [selectedScene, setSelectedScene] = useState(scenes[0])
  const [showPrompt, setShowPrompt] = useState(false)

  return (
    <section id="scenes" className="scenes-showcase">
      <div className="container">
        <h2 className="section-title">Scene Breakdown</h2>
        <p className="section-subtitle">
          Eight cinematic moments crafted for Sora AI — from duty to love, betrayal to reunion
        </p>

        <div className="scenes-grid">
          <div className="scenes-list">
            {scenes.map((scene) => (
              <div
                key={scene.id}
                className={`scene-card ${selectedScene.id === scene.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedScene(scene)
                  setShowPrompt(false)
                }}
              >
                <h3>{scene.title}</h3>
              </div>
            ))}
          </div>

          <div className="scene-detail">
            <h3 className="scene-title">{selectedScene.title}</h3>
            <div className="scene-placeholder">
              <div className="placeholder-content">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <p>Video clip placeholder</p>
              </div>
            </div>
            <p className="scene-description">{selectedScene.description}</p>

            <button
              className="toggle-prompt-btn"
              onClick={() => setShowPrompt(!showPrompt)}
            >
              {showPrompt ? 'Hide' : 'Show'} Sora Prompt
            </button>

            {showPrompt && (
              <div className="sora-prompt">
                <h4>Sora Generation Prompt:</h4>
                <p>{selectedScene.prompt}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScenesShowcase

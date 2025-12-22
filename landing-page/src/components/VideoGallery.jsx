import { useState } from 'react'
import './VideoGallery.css'

const videoClips = [
  {
    id: 1,
    title: "Council of War",
    scene: "Scene 1",
    thumbnail: null,
    duration: "0:45"
  },
  {
    id: 2,
    title: "The Shore",
    scene: "Scene 2",
    thumbnail: null,
    duration: "1:20"
  },
  {
    id: 3,
    title: "Death of the King",
    scene: "Scene 3",
    thumbnail: null,
    duration: "0:55"
  },
  {
    id: 4,
    title: "The Weight of Rule",
    scene: "Scene 4",
    thumbnail: null,
    duration: "1:10"
  },
  {
    id: 5,
    title: "The Revelation",
    scene: "Scene 5",
    thumbnail: null,
    duration: "1:30"
  },
  {
    id: 6,
    title: "March of the Dead",
    scene: "Scene 6",
    thumbnail: null,
    duration: "1:15"
  },
  {
    id: 7,
    title: "Reunion",
    scene: "Scene 7",
    thumbnail: null,
    duration: "1:40"
  },
  {
    id: 8,
    title: "Authority and Instinct",
    scene: "Scene XX1",
    thumbnail: null,
    duration: "1:25"
  }
]

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section id="gallery" className="video-gallery">
      <div className="container">
        <h2 className="section-title">Sora Generated Clips</h2>
        <p className="section-subtitle">
          AI-generated cinematic moments bringing the Queen & Joseph story to life
        </p>

        <div className="gallery-grid">
          {videoClips.map((clip) => (
            <div
              key={clip.id}
              className="video-card"
              onClick={() => setSelectedVideo(clip)}
            >
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="video-duration">{clip.duration}</span>
              </div>
              <div className="video-info">
                <h3>{clip.title}</h3>
                <p>{clip.scene}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="video-modal" onClick={() => setSelectedVideo(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedVideo(null)}>
                ×
              </button>
              <div className="modal-video">
                <div className="video-player-placeholder">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <p>Video Player Placeholder</p>
                  <p className="placeholder-note">Replace with actual video file</p>
                </div>
              </div>
              <div className="modal-info">
                <h3>{selectedVideo.title}</h3>
                <p className="modal-scene">{selectedVideo.scene}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default VideoGallery

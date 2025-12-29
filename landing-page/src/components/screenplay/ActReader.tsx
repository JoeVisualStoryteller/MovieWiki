import { useState, useEffect } from 'react'
import { acts } from '../../data/scenesData'
import './ActReader.css'

interface ActReaderProps {
  actId: string
}

export function ActReader({ actId }: ActReaderProps) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const currentAct = acts.find((act) => act.id === actId)

  useEffect(() => {
    if (!currentAct) {
      setError(new Error('Act not found'))
      setLoading(false)
      return
    }

    const actNumber = acts.indexOf(currentAct) + 1

    // Load all scenes for the act
    const loadScenes = async () => {
      setLoading(true)
      setError(null)

      try {
        const scenePromises = []
        for (let i = 1; i <= currentAct.sceneCount; i++) {
          scenePromises.push(
            fetch(`/content/scenes/Act_${actNumber}_Scene_${i}.txt`).then(res => res.text())
          )
        }

        const scenes = await Promise.all(scenePromises)
        setContent(scenes.join('\n\n'))
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    loadScenes()
  }, [actId, currentAct])

  if (loading) {
    return (
      <div className="act-reader loading">
        <div className="spinner"></div>
        <p>Loading screenplay...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="act-reader error">
        <h3>Error Loading Act</h3>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="act-reader">
      <pre className="screenplay-container">{content}</pre>
    </div>
  )
}

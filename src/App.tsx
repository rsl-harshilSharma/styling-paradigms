import { useState } from 'react'
import Dashboard from './exercise-1/Dashboard'
import Showcase from './exercise-2/Showcase'

export default function App() {
  const [exercise, setExercise] = useState<'dashboard' | 'library'>('dashboard')

  return (
    <div className="min-h-screen bg-canvas">
      <div className="flex justify-center gap-2 border-b border-line bg-white px-4 py-2.5">
        <button
          aria-pressed={exercise === 'dashboard'}
          className={`rounded-full px-4 py-2 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${exercise === 'dashboard' ? 'bg-brand-600 text-white' : 'text-muted hover:bg-brand-50 hover:text-brand-700'}`}
          onClick={() => setExercise('dashboard')}
          type="button"
        >
          Exercise 1 · Tailwind
        </button>
        <button
          aria-pressed={exercise === 'library'}
          className={`rounded-full px-4 py-2 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${exercise === 'library' ? 'bg-brand-600 text-white' : 'text-muted hover:bg-brand-50 hover:text-brand-700'}`}
          onClick={() => setExercise('library')}
          type="button"
        >
          Exercise 2 · Vanilla Extract
        </button>
      </div>
      {exercise === 'dashboard' ? <Dashboard /> : <Showcase />}
    </div>
  )
}

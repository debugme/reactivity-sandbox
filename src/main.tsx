import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExampleOne } from './components/exampleOne/ExampleOne'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="flex flex-col gap-4 p-4">
      <ExampleOne />
      <hr />
    </main>
  </StrictMode>,
)

import { createFileRoute } from '@tanstack/react-router'
import { DragonPage } from '/src/pages/dragonsPages/dragonPage.jsx'
export const Route = createFileRoute('/_layoutmain/dragon/')({
  component: () => <DragonPage />,
})

import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '../../../pages/aboutPage/aboutPage'
export const Route = createFileRoute('/_layoutmain/about/')({
  component: () => <AboutPage />,
})

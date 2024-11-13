import { createFileRoute } from '@tanstack/react-router'
import { MainPage } from '../../pages/mainPages/mainPage'
export const Route = createFileRoute('/(main)/')({
  component: () => <MainPage />,
})

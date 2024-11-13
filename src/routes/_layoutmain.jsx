import { Header } from '/src/components/header/header.jsx'
import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layoutmain')({
  component: () => (
    <div className="w-full h-screen relative">
      <Header />
      <Outlet />
    </div>
  ),
})


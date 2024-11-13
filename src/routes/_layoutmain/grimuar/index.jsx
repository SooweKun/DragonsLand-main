import { createFileRoute } from '@tanstack/react-router'
import { GrimuarPage } from '../../../pages/grimuarPages/grimuarPage'
export const Route = createFileRoute('/_layoutmain/grimuar/')({
  component: () => <GrimuarPage />,
})

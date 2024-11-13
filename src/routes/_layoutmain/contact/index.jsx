import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '../../../pages/contactPages/contactPage'
export const Route = createFileRoute('/_layoutmain/contact/')({
  component: () => <ContactPage />,
})

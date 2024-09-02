'use client'

import { usePathname } from 'next/navigation'
 
export default function NotFound(request) {
  //const headersList = headers()
  //const domain = headersList.get('host')
  const path = usePathname()
  //const data = await getSiteData(domain)
  return (
    <div>
      <h2>Not Found: {path}</h2>
      <p>Could not find requested resource</p>
    </div>
  )
}
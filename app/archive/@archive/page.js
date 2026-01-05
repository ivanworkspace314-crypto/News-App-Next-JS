import { getAvailableNewsYears } from "@/lib/new"
import Link from "next/link"


const ArchivePage = () => {
  const links=getAvailableNewsYears()
  console.log(links)
  return (
    <header id="archive-header">

      <nav>
        <ul>
          {links.map(link => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default ArchivePage
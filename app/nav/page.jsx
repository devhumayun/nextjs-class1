import Link from 'next/link'
import './nav.scss'

export default function nav() {
  return (
    <div className='menuBar'>
      <div className="menu-container">
        <div className="logo">
            <h2> DevZone </h2>
        </div>
        <div className='menu'>
            <ul>
                <li> <Link href="/"> Home </Link> </li>
                <li> <Link href="/about"> About </Link> </li>
                <li> <Link href="/contact"> Contact </Link> </li>
                <li> <Link href="/blog"> Blog </Link> </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import './error.scss'

export default function notFound() {
  return (
    <div className="errorPage">
        <div className="erro-box">
            <h1> Oops </h1>
            <h4> 404-Page Not Found </h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fugiat inventore consequuntur, mollitia quis dignissimos suscipit ex adipisci reprehenderit! Asperiores.</p>
            <Link href="/"> Go to Home Page </Link>
        </div>
    </div>
  )
}

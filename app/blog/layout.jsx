import Link from "next/link";
import './layout.scss'

export default function layout({children}) {
  return (
    <>

        <div className="breadcome">
            <div className="content">
                <div className="back-link">
                    <Link href="/">Home</Link>
                    <span>/ Blog </span>
                </div>
                <h3>Latest news are on top all times</h3>
            </div>
        </div>

    { children }      
    </>
  )
}

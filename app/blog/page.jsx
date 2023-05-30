import "./blog.scss";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineCalendar,
  AiOutlineEye,
} from "react-icons/ai";

export default function page() {
  return (
    <div className="blog-page">
      <div className="blog-wraper">
        <div className="blog-area">
          <div className="blog-content">
            <div className="all-blog">
              <div className="blog-item">
                <img
                  src="https://sorobindu.com/wp-content/uploads/2023/01/326774861_1385782128831406_676587587340994961_n-480x260.png"
                  alt="featured photo"
                />
                <div className="metadata">
                  <div className="data">
                    <span>
                      <AiOutlineCalendar />
                    </span>
                    <span className="info">January 31, 2023</span>
                  </div>
                  <div className="data">
                    <span>
                      <AiOutlineEye />
                    </span>
                    <span className="info"> 104 views </span>
                  </div>
                </div>
                <div className="content">
                  <h2> স্বরবিন্দুর পথচলার ৩ বছর </h2>
                  <p>
                    কে জানি বলেছিলেন মানুষ তার স্বপ্নের সমান বড়! সবাই আমরা বড়
                    …
                  </p>
                </div>
                <div className="button">
                  <Link href="#"> Read more </Link>
                </div>
              </div>
              <div className="blog-item">
                <img
                  src="https://sorobindu.com/wp-content/uploads/2023/01/326774861_1385782128831406_676587587340994961_n-480x260.png"
                  alt="featured photo"
                />
                <div className="metadata">
                  <div className="data">
                    <span>
                      <AiOutlineCalendar />
                    </span>
                    <span className="info">January 31, 2023</span>
                  </div>
                  <div className="data">
                    <span>
                      <AiOutlineEye />
                    </span>
                    <span className="info"> 104 views </span>
                  </div>
                </div>
                <div className="content">
                  <h2> স্বরবিন্দুর পথচলার ৩ বছর </h2>
                  <p>
                    কে জানি বলেছিলেন মানুষ তার স্বপ্নের সমান বড়! সবাই আমরা বড়
                    …
                  </p>
                </div>
                <div className="button">
                  <Link href="#"> Read more </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="side-wraper">
              <div className="title">
                <h4>Search</h4>
              </div>
              <div className="searchbar">
                <input type="text" placeholder="Search" />
                <span>
                  {" "}
                  <AiOutlineSearch />{" "}
                </span>
              </div>
              <div className="title">
                <h4>Category</h4>
              </div>
              <div className="category">
                <ul>
                  <li>
                    <Link href="#"> Achievement </Link>
                    <span> (1) </span>
                  </li>
                  <li>
                    <Link href="#"> DNS </Link>
                    <span> (1) </span>
                  </li>
                  <li>
                    <Link href="#"> Freelancing </Link>
                    <span> (1) </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

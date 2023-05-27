import { Inter } from "next/font/google";
import Link from "next/link";
import "./nav/nav.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="menuBar">
          <div className="menu-container">
            <div className="logo">
              <h2> DevZone </h2>
            </div>
            <div className="menu">
              <ul>
                <li>
                  {" "}
                  <Link href="/"> Home </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/about"> About </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/contact"> Contact </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/blog"> Blog </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}

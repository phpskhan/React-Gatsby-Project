import * as React from "react"
import Layout from "../components/layout"
import * as styles from '../styles/home.module.css'
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section>

        <div>
          <h2 className={styles.header}>Home Page</h2>
          <h3 className="header">Sabih Khan</h3>
          <p>Gatsby App</p>
          <Link className={styles.btn} to="/services">Our Services</Link>
        </div>
      </section>
    </Layout>
  )
}

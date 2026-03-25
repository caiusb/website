import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as styles from "./index.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)

export const Head = () => (
  <>
    <title>Caius Brindescu, PhD - Principal Engineer</title>
    <meta name="description" content="Caius Brindescu, PhD — Principal Engineer. Backend systems, big data, and infrastructure-as-code. PhD in software engineering." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Caius Brindescu, PhD - Principal Engineer" />
    <meta property="og:description" content="Principal Engineer. Backend systems, big data, and infra-as-code." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/pics/headshot.jpg" />
    <meta property="og:url" content="https://caius.brindescu.com/" />
  </>
)

const IndexPage = () => (
  <Layout>
    <h1>About me</h1>
    <div>
      <div className={styles.avatar}>
        <img src="/pics/headshot.jpg" alt="Headshot" />
      </div>

      <p>
        I am a Principal Engineer at <a href="https://www.etleap.com">Etleap</a>.
        I earned my Ph.D. at <a href="http://eecs.oregonstate.edu">Oregon State University,</a> under the mentorship of <a href="https://web.engr.oregonstate.edu/~sarmaa/">Dr. Anita Sarma</a> and <a href="https://educationalinnovation.ucsd.edu/about/jensen-bio.html">Dr. Carlos Jensen</a>.
        Originally from <a href="http://en.wikipedia.org/wiki/Timisoara">Timisoara, Romania</a>, I completed my B.Sc. in Computer and Information Technology at the <a href="https://www.upt.ro">"Politehnica" University of Timisoara</a>, under the guidance of <a href="https://staff.cs.upt.ro/~radum/">Radu Marinescu</a>.
        My research focused on understanding where tools fail developers, with a focus on Merge Conflict Resolution.
        More details can be found in my <a href="CaiusBrindescuPhDThesis.pdf">thesis,</a> and on my <Link to="/research">research page</Link>.
      </p>
      <p>
        I have over 15 years of experience with Java and related technologies.
        My current work focuses on developing and maintaining Java backends, working with Hadoop, Spark, Flink, and managed AWS services.
        I have experience maintaining infrastructure as code with both Terraform and CloudFormation.
        I also have extensive experience in Scala, Python, Go, C, Bash, TypeScript and JavaScript.
      </p>
      <p>
        My full CV is available <a href="CV-CaiusBrindescu.pdf">here</a>, and my resume <a href="CaiusBrindescu-Resume.pdf">here</a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage

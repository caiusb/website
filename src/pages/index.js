import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as styles from "./index.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)

const IndexPage = () => (
  <Layout>
    <h1>About me</h1>
    <div>
      <div className={styles.avatar}>
        <img src="/pics/headshot.jpg" alt="Headshot" />
      </div>

      <p>
        I am a Principal Enginneer at <a href="https://www.etleap.com">Etleap</a>.
        I got my Ph.D. Degree at <a href="http://eecs.oregonstate.edu">Oregon State University,</a> under the mentorship for <a href="https://web.engr.oregonstate.edu/~sarmaa/">Dr. Anita Sarma</a> and <a href="https://educationalinnovation.ucsd.edu/about/jensen-bio.html">Dr. Carlos Jensen</a>.
        Originally from <a href="http://en.wikipedia.org/wiki/Timisoara">Timisoara, Romania</a>, I did my B.Sc. in Computer and Information Technology at the <a href="https://www.upt.ro">"Politehnica" University of Timisoara</a>, under the guidance of <a href="https://staff.cs.upt.ro/~radum/">Radu Marinescu</a>.
        My research focused on understanding where tools fail developers, with a focus on Merge Conflict Resolution.
        More details can be found in my <a href="CaiusBrindescuPhDThesis.pdf">thesis,</a> and under on my <Link to="/research">research page</Link>.
      </p>
      <p>
        I have over 15 years experience using Java, and related technologies.
        My current work focuses developing and maintaing Java a backend, and working with Hadoop, Spark, Flink, and managed AWS services.
        I have experience in maintaing infrastructure as code with both Terraform and CloudFormation.
        Finally, I also have extensive experience in Scala, Python, Go, C, Bash, TypeScript and JavaScript.
      </p>
      <p>
        My full CV is available <a href="CV-CaiusBrindescu.pdf">here</a>, and my resume <a href="CaiusBrindescu-Resume.pdf">here</a>.
      </p>
      <p>
        My partner is <a href="https://www.physicswithheather.com/">Heather Hill</a>.
      </p>
      <p>
        If you'd like to send me an encrypted email, you can use <a href="caius-brindescu-com-gpg.txt">this GPG key</a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage

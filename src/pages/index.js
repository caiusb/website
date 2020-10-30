import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = () => (
  <div>
    <h1>About me</h1>
    <div>
      <img className={styles.avatar} src="/pics/me_niagara_falls.jpeg" />

      <p>
      I am a software enginneer at <a href="https:/www.etleap.com">Etleap</a>. I got my Ph.D. Degree at <a href="http://eecs.oregonstate.edu">Oregon State University,</a> under the mentorship for Dr. Anita Sarma and Dr. Carlos Jensen.
      Originally from <a href="http://en.wikipedia.org/wiki/Timisoara">Timisoara, Romania</a>, I did my B.Sc. in Computer and Information Technology at the <a href="https://www.upt.ro">"Politehnica" University of Timisoara</a>, under the guidance of <a href="http://bigfoot.cs.upt.ro/~radum/">Radu Marinescu</a>.
      My research focused on understanding where tools fail developers, with a focus on Merge Conflict Resolution.
      More details can be found in my <a href="CaiusBrindescuPhDThesis.pdf">thesis,</a> and under on my <a href="/research">research page.</a>
      </p>
      <p>
      I have over 15 years experience using Java, and related technologies.
      My current work focuses developing and maintaing Java a backend, and working with Hadoop, Spark, and managed AWS services.
      I have experience in maintaing infrastructure as code with both Terraform and CloudFormation.
      Finally, I also have extensive experience in Scala, Python, Go, C, Bash, TypeScript and JavaScript.
      </p>
      <p>
      My full CV is available <a href="CV-CaiusBrindescu.pdf">here</a>.
      </p>
    </div>
  </div>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = () => (
  <div>
    <h1>About me</h1>
    <div>
      <img className={styles.avatar} src="/pics/me_niagara_falls.jpeg" />

      <p>
      I am a PhD Candidate at <a href="http://eecs.oregonstate.edu">Oregon State University</a>.
      I am originaly from <a href="http://en.wikipedia.org/wiki/Timisoara">Timisoara, Romania</a>.
      I did my B.Sc. in Computer and Information Technology at the "Politehnica" University of Timisoara.
      My advisor was <a href="http://bigfoot.cs.upt.ro/~radum/">Radu Marinescu</a>.
      My area of interest is Software Engineering with an accent on Software Evolution and Version Control.
      </p>
      <p>
      I am part of the <a href="http://eecs.oregonstate.edu/node/268">Software Engineering, Usability, and Programming Languages group</a>.
      I work with <a href="http://eecs.oregonstate.edu/people/jensen-carlos">Carlos Jensen</a> and <a href="http://eecs.oregonstate.edu/people/sarma-anita">Anita Sarma</a>.
      </p>
      <p>
      My CV is available <a href="CV-CaiusBrindescu.pdf">here</a>.
      </p>
    </div>
  </div>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = () => (
  <div>
    <h1>About me</h1>
    <div>
      <img className={styles.avatar} src="/pics/me_niagara_falls.jpeg" />

      <p>
      I am a software enginneer at <a href="https:/www.etleap.com">Etleap</a> and a Ph.D. Candidate at <a href="http://eecs.oregonstate.edu">Oregon State University</a>.
      Originally from <a href="http://en.wikipedia.org/wiki/Timisoara">Timisoara, Romania</a>, I did my B.Sc. in Computer and Information Technology at the <a href="https://www.upt.ro">"Politehnica" University of Timisoara</a>, under the guidance of <a href="http://bigfoot.cs.upt.ro/~radum/">Radu Marinescu</a>.
      My research interests include Software Engineering, Refactorings, Program Transformations, Program Analysis and Developer Processes.
      I aim to make developers' lives easier by building tools that better suit their needs.
      </p>
      <p>
      I am part of the <a href="http://eecs.oregonstate.edu/node/268">Software Engineering, Usability, and Programming Languages group</a>.
      I am currently advised by <a href="http://eecs.oregonstate.edu/people/jensen-carlos">Carlos Jensen</a> and <a href="http://eecs.oregonstate.edu/people/sarma-anita">Anita Sarma</a>.
      </p>
      <p>
      My CV is available <a href="CV-CaiusBrindescu.pdf">here</a>.
      </p>
    </div>
  </div>
)

export default IndexPage

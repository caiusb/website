import React from 'react'
import Link from 'gatsby-link'
import common from './common.module.css'

const ProjectsPage = () => (
  <div>
    <h1>Research</h1>

    <h2>Research Statement</h2>
    <p>
    Currently, source code is treated like plain text. I think this is wrong.
    Treating it like text poses great problems when it comes to understanding it.
    A developer first needs to understand the code, before they can start making changes.
    My goal is to change this.
    </p>
    <p>
    My current work is on improving parallel software development.
    I am looking at merging practices with the hopes of reducing conflicts and
    improving their resolution. I am also interested in software testing,
    especially mutation testing.
    </p>

    <h2>Publications</h2>
    <ul>
      <li>
        <i>An Empirical Examination of the Relationship Between Code Smells and Merge Conflicts</i><br />

        Iftekhar Ahmed, <i>Caius Brindescu</i>, Umme Ayda Mannan, Carlos Jensen, Anita Sarma<br />

        ESEM 2017: 11th International Symposium on Empirical Software Engineering and Measurement<br />

        (<a href='/papers/AhmedBrindescuESEM2017.pdf'>Preprint</a>)
        (<a href='/slides/slides-ESEM17.pdf'>Slides</a>)
      </li>
      <li>
        <i>Can Testedness be Effectively Measured?</i><br />

        Iftekhar Ahmed, Rahul Gopinath, <i>Caius Brindescu</i>, Alex Groce, Carlos Jensen<br />

        FSE 2016: The 24th ACM SIGSOFT International Symposium on the Foundations of Software Engineering<br />

        (<a href='/papers/AhmedFSE2016.pdf'>Preprint</a>)
      </li>
      <li>
        <i>How Do Centralized and Distributed Version Control Systems Impact Software Changes?</i><br />

        <i>Caius Brindescu</i>, Mihai Codoban, Sergii Shmarkatiuk, Danny Dig<br />

        ICSE 2014: 36th International Conference on Software Engineering <br />

        (<a href='/papers/BrindescuICSE2014.pdf'>Preprint</a>)
        (<a href='http://hdl.handle.net/1957/44927'>Tech Report</a>)
        (<a href='/slides/slides-ICSE14.pdf'>Slides</a>)
      </li>
    </ul>
  </div>
)

export default ProjectsPage

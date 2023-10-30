import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ProjectsPage = () => (
  <Layout>
    <h1>Research</h1>

    <h2>Research Statement</h2>
    <p>
    Currently, source code is treated like plain text. 
    I think this is wrong.
    Treating it like text poses great problems when it comes to understanding it.
    A developer first needs to understand the code, before they can start making changes.
    My goal is to change this.
    </p>
    <p>
    My work focused on improving parallel software development.
    By looking at the merging practices, I made strides in understanding why merge conflict are a problem from both a code perpective, and from the developers' perpective. 
    I also conducted research in software testing, especially mutation testing.
    </p>

    <h2>Publications</h2>
    <ul>
      <li>
        <i>Using Relative Lines of Code to Guide Automated Test Generation for Python</i><br />
        Josie Holmes, Iftekhar Ahmed, <i>Caius Brindescu</i>, Rahul Gopinath, He Zhang, Alex Groce<br />
        ACM Transactions on Software Engineering (TOSEM), Volume 29, Issue 4.
      </li>
      <li>
        <i>Lifting the Curtain on Merge Conflict Resolution: A Sensemaking Perspective</i><br />
        <i>Caius Brindescu</i>, Yenifer Ramirez, Anita Sarma, Carlos Jensen<br />
        ICSME 2020: 36th IEEE International Conference on Software Maintenance and Evolution
      </li>
      <li>
        <i>Planning for untangling: Predicting the Difficulty of Merge Conflicts</i><br />
        <i>Caius Brindescu</i>, Iftekhar Ahmed, Rafael Leano, Anita Sarma<br />
        ICSE 2020, The 42nd International Conference on Software Engineering 
      </li>
      <li>
        <i>An Empirical Investigation into Merge Conflicts and Their Effect on Software Quality</i><br />
        <i>Caius Brindescu</i>, Iftekhar Ahmed, Carlos Jensen, Anita Sarma<br />
        Empirical Software Engineering, Volume 25, Issue 1
      </li>
      <li>
        <i>The Life-Cycle of Merge Conflicts: Processes, Barriers, and Strategies</i><br />
        Nicholas Nelson, <i>Caius Brindescu</i>, Shane McKee, Anita Sarma, Danny Dig <br />
        Empirical Software Engineering, Volume 24, Issue 4.
      </li>
      <li>
        <i>An Empirical Examination of the Relationship Between Code Smells and Merge Conflicts</i><br />

        Iftekhar Ahmed, <i>Caius Brindescu</i>, Umme Ayda Mannan, Carlos Jensen, Anita Sarma<br />

        ESEM 2017: 11th International Symposium on Empirical Software Engineering and Measurement<br />

        (<a href='/papers/AhmedBrindescuESEM2017.pdf'>Preprint</a>)
        (<a href='/slides/slides-ESEM17.pdf'>Slides</a>)
        (<Link to='/research/mc-classification'>Companion Website</Link>)
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
  </Layout>
)

export default ProjectsPage

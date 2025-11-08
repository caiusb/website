import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectsPage = () => (
  <Layout>
    <h1>Projects</h1>

    <h2>3D Printing</h2>
    <p>
      My 3D printing projects are freely available on <a href="https://www.printables.com/@CaiusBrindescu_29693">Printables</a>.
    </p>

    <h2>Software</h2>

    <ul>
      <li>
        <h3><a href="https://github.com/caiusb/website">This website <FontAwesomeIcon icon={["fa-brands", "fa-square-github"]} /></a></h3>
        <p>
          A simple Gatsby website, nothing fancy.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/caiusb/JDTFacade">JDT Facade <FontAwesomeIcon icon={["fa-brands", "fa-square-github"]} /></a></h3>
        <p>
          A Scala wrap of the Eclipse JDT compiler, without Eclipse. An easy way
          to parse Java files, and get the corresponding AST. It also enhances
          the JDT interfaces for easier manipulation.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/caiusb/gumtree-facade">GumTree facade <FontAwesomeIcon icon={["fa-brands", "fa-square-github"]} /></a></h3>
        <p>
          A Scala Facade build around the <a href="https://github.com/GumTreeDiff/gumtree">GumTree</a> diff
          tool. It makes it easy to get an AST tree difference between to Java
          files.
        </p>
      </li>
    </ul>
  </Layout>
)

export default ProjectsPage

import React from 'react'
import Layout from '../components/layout'

const ProjectsPage = () => (
  <Layout>
    <h1>Projects</h1>

    <h2>Software</h2>

    <ul>
      <li>
        <h3><a href="https://github.com/caiusb/website">This website <i className='fa fa-github-square'></i></a></h3>
        <p>
          A simple Gatsby website, nothing fancy.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/caiusb/JDTFacade">JDT Facade <i className='fa fa-github-square'></i></a></h3>
        <p>
          A Scala wrap of the Eclipse JDT compiler, without Eclipse. An easy way
          to parse Java files, and get the corresponding AST. It also enhances
          the JDT interfaces for easier manipulation.
        </p>
      </li>
      <li>
        <h3><a href="https://github.com/caiusb/gumtree-facade">GumTree facade <i className='fa fa-github-square'></i></a></h3>
        <p>
          A Scala Facade build around the <a href="https://github.com/GumTreeDiff/gumtree">GumTree</a> diff
          tool. It makes it easy to get and AST difference between to Java
          files.
        </p>
      </li>
    </ul>
  </Layout>
)

export default ProjectsPage

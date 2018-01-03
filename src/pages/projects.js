import React from 'react'
import Link from 'gatsby-link'
import common from './common.module.css'

const ProjectsPage = () => (
  <div>
    <h1>Stuff I built</h1>

    <ul>
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
  </div>
)

export default ProjectsPage

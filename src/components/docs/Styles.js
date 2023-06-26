import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const Styles = () => {
  return (
    <>
      <SectionTitle title="Styles" />
      <p>First we need to include Atropos stylesheet:</p>
      <Pre lang="html">{`
          <link rel="stylesheet" href="path/to/atropos.css" />
          `}</Pre>
      <p>
        With bundler (like webpack) you can import styles directly from
        JavaScript:
      </p>
      <Pre lang="js">{`
          // main.js

          import 'atropos/css'
          `}</Pre>
      <p>
        If you use SCSS preprocessor you can import Atropos's styles from SCSS
        in the following way:
      </p>
      <Pre lang="scss">{`
          // main.scss

          @import 'atropos/scss'
          `}</Pre>
      <p>
        Atropos comes with stylesheets in different formats. The following files
        are available:
      </p>
      <ul>
        <li>
          <code>atropos.css</code> (exported as <code>atropos/css</code>) - all
          Atropos styles
        </li>
        <li>
          <code>atropos.min.css</code> (exported as <code>atropos/css/min</code>
          ) - minified Atropos styles
        </li>
        <li>
          <code>atropos.scss</code> (exported as <code>atropos/scss</code>) -
          Atropos styles in SCSS syntax
        </li>
        <li>
          <code>atropos.less</code> (exported as <code>atropos/less</code>) -
          Atropos styles in LESS syntax
        </li>
      </ul>
    </>
  );
};

import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const Styles = () => {
  return (
    <>
      <SectionTitle title="Styles" />
      <p>First we need to include Mariko stylesheet:</p>
      <Pre lang="html">{`
          <link rel="stylesheet" href="path/to/mariko.css" />
          `}</Pre>
      <p>
        With bundler (like webpack) you can import styles directly from
        JavaScript:
      </p>
      <Pre lang="js">{`
          // main.js

          import 'mariko/css'
          `}</Pre>
      <p>
        If you use SCSS preprocessor you can import Mariko's styles from SCSS in
        the following way:
      </p>
      <Pre lang="scss">{`
          // main.scss

          @import 'mariko/scss'
          `}</Pre>
      <p>
        Mariko comes with stylesheets in different formats. The following files
        are available:
      </p>
      <ul>
        <li>
          <code>mariko.css</code> (exported as <code>mariko/css</code>) - all
          Mariko styles
        </li>
        <li>
          <code>mariko.min.css</code> (exported as <code>mariko/css/min</code>)
          - minified Mariko styles
        </li>
        <li>
          <code>mariko.scss</code> (exported as <code>mariko/scss</code>) -
          Mariko styles in SCSS syntax
        </li>
        <li>
          <code>mariko.less</code> (exported as <code>mariko/less</code>) -
          Mariko styles in LESS syntax
        </li>
      </ul>
    </>
  );
};

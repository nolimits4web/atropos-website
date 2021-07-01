import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const Initialize = () => {
  return (
    <>
      <SectionTitle title="Initialize Mariko" />
      <p>Now we need to initialize Mariko:</p>
      <Pre lang="js">{
        /* javascript */ `
            // import Mariko library
            import Mariko from 'mariko';

            // Initialize
            const myMariko = Mariko({
              el: '.my-mariko',
              // rest of parameters
            });
          `
      }</Pre>
      <p>
        If you use it in environment without ES modules, you can add Mariko
        library via <code>{`<script>`}</code> tag:
      </p>
      <Pre lang="html">{
        /* html */ `
            <script src="path/to/mariko.min.js"></script>
            <script>
              const myMariko = Mariko({
                el: '.my-mariko',
                // rest of parameters
              });
            </script>
          `
      }</Pre>
      <p>
        In addition to Mariko's main CSS styles, we may need to add some custom
        styles, for example to set Mariko size:
      </p>
      <Pre lang="css">{
        /* css */ `
          .my-mariko {
            width: 320px;
            height: 160px;
          }
          `
      }</Pre>
    </>
  );
};

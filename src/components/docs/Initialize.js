import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const Initialize = () => {
  return (
    <>
      <SectionTitle title="Initialize Atropos" />
      <p>Now we need to initialize Atropos:</p>
      <Pre lang="js">{
        /* javascript */ `
            // import Atropos library
            import Atropos from 'atropos';

            // Initialize
            const myAtropos = Atropos({
              el: '.my-atropos',
              // rest of parameters
            });
          `
      }</Pre>
      <p>
        If you use it in environment without ES modules, you can add Atropos
        library via <code>{`<script>`}</code> tag:
      </p>
      <Pre lang="html">{
        /* html */ `
            <script src="path/to/atropos.min.js"></script>
            <script>
              const myAtropos = Atropos({
                el: '.my-atropos',
                // rest of parameters
              });
            </script>
          `
      }</Pre>
      <p>
        In addition to Atropos's main CSS styles, we may need to add some custom
        styles, for example to set Atropos size:
      </p>
      <Pre lang="css">{
        /* css */ `
          .my-atropos {
            width: 320px;
            height: 160px;
          }
          `
      }</Pre>
    </>
  );
};

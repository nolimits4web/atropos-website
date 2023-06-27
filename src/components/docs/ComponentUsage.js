import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const ComponentUsage = ({ framework = 'react' }) => {
  return (
    <>
      <SectionTitle title="Component Usage" />
      {framework === 'react' && (
        <Pre lang="jsx">{
          /* jsx */ `
          // import Atropos component
          import Atropos from 'atropos/react';
  
          export default function App () {
            return (
              <div id="app">
                {/* Atropos */}
                <Atropos className="my-atropos">
                  {/* ... */}
                </Atropos>
              </div>
            )
          }
        `
        }</Pre>
      )}
      {framework === 'element' && (
        <Pre lang="html">{
          /* html */ `
          <script>
            // import Atropos component
            import AtroposComponent from 'atropos/element';
            // register Atropos component
            customElements.define('atropos-component', AtroposComponent);
          </script>
          <atropos-component class="my-atropos">
              <!-- ... -->
          </atropos-component>
        `
        }</Pre>
      )}

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

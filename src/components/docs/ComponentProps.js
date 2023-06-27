import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import { ParamsTable } from '../tables/ParamsTable';

export const ComponentProps = ({ framework = 'react' }) => {
  return (
    <>
      <SectionTitle title={framework === 'element' ? 'Component Attributes' : 'Component Props'} />
      <ParamsTable framework={framework} />
      <p>For example:</p>
      {framework === 'react' && (
        <Pre lang="jsx">{
          /* jsx */ `
          import Atropos from 'atropos/react';

          export default function App () {
            return (
              <div id="app">
                <Atropos
                  activeOffset={40}
                  shadowScale={1.05}
                  onEnter={() => console.log('Enter')}
                  onLeave={() => console.log('Leave')}
                  onRotate={(x, y) => console.log('Rotate', x, y)}
                >
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
            import AtroposComponent from 'atropos/element';
            customElements.define('atropos-component', AtroposComponent);
          </script>
          <atropos-component class="my-atropos"
            active-offset="40"
            shadow-scale="1.05"
          >
          </atropos-component>
          <script>
            const atroposComponent = document.querySelector('.my-atropos');
            atroposComponent.addEventListener('enter', function() {
              console.log('Enter');
            });
            atroposComponent.addEventListener('leave', function() {
              console.log('Leave');
            });
            atroposComponent.addEventListener('rotate', function(event) {
              console.log('Rotate', event.detail);
          </script>
        `
        }</Pre>
      )}
    </>
  );
};

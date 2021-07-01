import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const ComponentUsage = ({ framework = 'react' }) => {
  return (
    <>
      <SectionTitle title="Component Usage" />
      {framework === 'react' && (
        <Pre lang="jsx">{
          /* jsx */ `
          // import Mariko component
          import Mariko from 'mariko/react';
  
          export default function App () {
            return (
              <div id="app">
                {/* Mariko */}
                <Mariko className="my-mariko">
                  {/* ... */}
                </Mariko>
              </div>
            )
          }
        `
        }</Pre>
      )}
      {framework === 'vue' && (
        <Pre lang="html">{
          /* html */ `
          <template>
            <div id="app">
              <mariko class="my-mariko">
                <!-- ... -->
              </mariko>
            </div>
          </template>
          <script>
            // import Mariko component
            import Mariko from 'mariko/vue';

            export default {
              // register Mariko component
              components: {
                Mariko,
              }
            }
          </script>
        `
        }</Pre>
      )}

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

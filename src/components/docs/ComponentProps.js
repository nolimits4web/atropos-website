import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import { ParamsTable } from '../tables/ParamsTable';

export const ComponentProps = ({ framework = 'react' }) => {
  return (
    <>
      <SectionTitle title="Component Props" />
      <ParamsTable framework={framework} />
      <p>For example:</p>
      {framework === 'react' && (
        <Pre lang="jsx">{
          /* jsx */ `
          import Mariko from 'mariko/react';

          export default function App () {
            return (
              <div id="app">
                <Mariko
                  activeOffset={40}
                  shadowScale={1.05}
                  onEnter={() => console.log('Enter')}
                  onLeave={() => console.log('Leave')}
                  onRotate={(x, y) => console.log('Rotate', x, y)}
                >
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
              <mariko>
                :active-offset="40"
                :shadow-scale="1.05"
                @enter="onEnter"
                @leave="onLeave"
                @rotate="onRotate"
              </mariko>
            </div>
          </template>
          <script>
            import Mariko from 'mariko/vue';
            
            export default {
              components: {
                Mariko,
              },
              setup() {
                const onEnter = () => console.log('Enter');
                const onLeave = () => console.log('Leave');
                const onRotate = (x, y) => console.log('Rotate', x, y);
                return {
                  onEnter,
                  onLeave,
                  onRotate,
                }
              }
            }
          </script>
        `
        }</Pre>
      )}
    </>
  );
};

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

      {framework === 'vue' && (
        <Pre lang="html">{
          /* html */ `
          <template>
            <div id="app">
              <atropos>
                :active-offset="40"
                :shadow-scale="1.05"
                @enter="onEnter"
                @leave="onLeave"
                @rotate="onRotate"
              </atropos>
            </div>
          </template>
          <script>
            import Atropos from 'atropos/vue';
            
            export default {
              components: {
                Atropos,
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
      {framework === 'svelte' && (
        <Pre lang="jsx">{
          /* html */ `
          <script>
            import Atropos from 'atropos/svelte';
          </script>
          <div id="app">
            <Atropos
              activeOffset={40}
              shadowScale={1.05}
              on:enter={() => console.log('Enter')}
              on:leave={() => console.log('Leave')}
              on:rotate={(e) => console.log('Rotate', e.detail.x, e.detail.y)}
            >
              ...
            </Atropos>
          </div>
        `
        }</Pre>
      )}
    </>
  );
};

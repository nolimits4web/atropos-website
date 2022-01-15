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
      {framework === 'vue' && (
        <Pre lang="html">{
          /* html */ `
          <template>
            <div id="app">
              <atropos class="my-atropos">
                <!-- ... -->
              </atropos>
            </div>
          </template>
          <script>
            // import Atropos component
            import Atropos from 'atropos/vue';

            export default {
              // register Atropos component
              components: {
                Atropos,
              }
            }
          </script>
        `
        }</Pre>
      )}
      {framework === 'svelte' && (
        <Pre lang="html">{
          /* html */ `
          <script>
            // import Atropos component
            import Atropos from 'atropos/svelte';
          </script>
          <div id="app">
            <Atropos class="my-atropos">
              <!-- ... -->
            </Atropos>
          </div>
        `
        }</Pre>
      )}
      {framework === 'angular' && (
        <Pre lang="ts">{
          /* ts */ `
          import { Component } from '@angular/core';
          
          import { AtroposOptions } from 'atropos/atropos';
  
          @Component({
            selector: 'app-root',
            template: \`
                <Atropos class="my-atropos">
                </Atropos>
                \`,
            styles: [\`
              .my-atropos {
                width: 320px;
                height: 160px;
              }
            \`]
          })
          export class AppComponent {
          }
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

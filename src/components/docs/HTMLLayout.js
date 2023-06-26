import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const HTMLLayout = () => {
  return (
    <>
      <SectionTitle title="HTML Layout" />
      <p>Now, we need to add basic Atropos layout to our app:</p>
      <Pre lang="html">{
        /* html */ `
        <!-- main Atropos container (required), add your custom class here -->
        <div class="atropos my-atropos">
          <!-- scale container (required) -->
          <div class="atropos-scale">
            <!-- rotate container (required) -->
            <div class="atropos-rotate">
              <!-- inner container (required) -->
              <div class="atropos-inner">
                <!-- put your custom content here -->
              </div>
            </div>
          </div>
        </div>
        `
      }</Pre>
    </>
  );
};

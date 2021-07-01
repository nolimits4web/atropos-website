import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const HTMLLayout = () => {
  return (
    <>
      <SectionTitle title="HTML Layout" />
      <p>Now, we need to add basic Mariko layout to our app:</p>
      <Pre lang="html">{
        /* html */ `
        <!-- main Mariko container (required), add your custom class here -->
        <div class="mariko my-mariko">
          <!-- scale container (required) -->
          <div class="mariko-scale">
            <!-- rotate container (required) -->
            <div class="mariko-rotate">
              <!-- inner container (required) -->
              <div class="mariko-inner">
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

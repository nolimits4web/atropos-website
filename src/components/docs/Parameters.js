import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import { ParamsTable } from '../tables/ParamsTable';

export const Parameters = () => {
  return (
    <>
      <SectionTitle title="Parameters" />
      <ParamsTable />
      <p>For example:</p>
      <Pre lang="js">{`
        const myAtropos = Atropos({
          el: '.my-atropos',
          activeOffset: 40,
          shadowScale: 1.05,
          onEnter() {
            console.log('Enter');
          },
          onLeave() {
            console.log('Leave');
          },
          onRotate(x, y) {
            console.log('Rotate', x, y);
          }
        });
      `}</Pre>
    </>
  );
};

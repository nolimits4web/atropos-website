import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';
import { InstancePropsTable } from '../tables/InstancePropsTable';

export const InstanceProperties = () => {
  return (
    <>
      <SectionTitle title="Instance Properties" />
      <p>
        After we initialize Mariko we have its initialized instance with some
        helpful methods and properties:
      </p>
      <InstancePropsTable />
      <p>For example:</p>
      <Pre lang="js">{`
        // init Mariko
        const myMariko = Mariko({
          el: '.my-mariko',
          activeOffset: 40,
        });

        setTimeout(() => {
          // destroy it when needed
          myMariko.destroy();
        }, 10000)
      `}</Pre>
    </>
  );
};

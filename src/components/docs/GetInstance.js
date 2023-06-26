/* eslint-disable react/function-component-definition */
import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';


export const GetInstance = () => {
  return (
    <>
      <SectionTitle title="Get Instance" />
      <p>
        We can access Atropos instance as follows:
      </p>
      <Pre lang="js">{`
        const atroposComponent = document.querySelector('atropos-component');
        const atroposInstance = atroposComponent.atroposRef;
      `}</Pre>
    </>
  );
};

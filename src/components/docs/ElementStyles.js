import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const ElementStyles = () => {
  return (
    <>
      <SectionTitle title="Styles" />
      <p>To style Atropos Component, you can target and customize various parts of the component
         using the part attribute. The following parts are available for styling:
      </p>
      <ul>
        <li>
          scale: This part represents the container for scaling the component. 
          You can apply styles to this part to control the scaling behavior.
        </li>
        <li>
          rotate: This part represents the container for rotating the component.
          You can target this part to apply styles related to rotation.
        </li>
        <li>
          inner: This part represents the inner content of the component.
          You can style this part to modify the appearance of the inner content.
        </li>
      </ul>
      <p>Here's an example of how you can write CSS rules to style the inner part of the atropos-component:</p>
      <Pre lang="css">{`
          atropos-component::part(inner) {
            /* Your styles for the inner part */
          }
          `}</Pre>
    </>
  );
};

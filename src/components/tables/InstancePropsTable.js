export const InstancePropsTable = () => {
  return (
    <table className="methods-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>el</td>
          <td>HTMLElement</td>
          <td>Main container HTML element</td>
        </tr>
        <tr>
          <td>isActive</td>
          <td>boolean</td>
          <td>Indicates whether the Atropos is active (hovered) or not</td>
        </tr>
        <tr>
          <td>params</td>
          <td>object</td>
          <td>
            Atropos parameters used for initialization (extended with defaults)
          </td>
        </tr>
        <tr>
          <td>destroy()</td>
          <td>function</td>
          <td>Method to destroy the Atropos and detach all event listeners</td>
        </tr>
        <tr>
          <td>destroyed</td>
          <td>boolean</td>
          <td>Indicates whether the Atropos was destroyed or not</td>
        </tr>
      </tbody>
    </table>
  );
};

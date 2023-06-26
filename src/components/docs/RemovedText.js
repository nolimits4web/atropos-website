import Link from 'next/link';

export const RemovedText = () => {
  return (
    <p>
      The Atropos Vue component was removed in Atropos v2 in favor of the
      <Link href="/docs/element">Atropos Web Component</Link>, which is now recommended to be used instead.
    </p>
  );
};

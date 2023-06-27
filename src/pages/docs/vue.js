import Link from 'next/link';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

import { DocsNav } from '../../components/DocsNav';

import { FrameworkSwitch } from '../../components/FrameworkSwitch';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';

export default function DocsVue() {
  return (
    <TitlesContextProvider>
      <Nav className="bg-primary" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <FrameworkSwitch inline />
          <h1>Atropos Vue Documentation</h1>

          <div  style={{ minHeight: '100vh' }}>
            <p>
              The Atropos Vue component was removed in Atropos v2 in favor of the{' '}
              <Link href="/docs/element">Atropos Web Component</Link>, which is now recommended to be used instead.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
DocsVue.title = 'Atropos Vue Documentation';

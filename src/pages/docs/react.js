import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';

import { DocsNav } from '../../components/DocsNav';
import { FrameworkSwitch } from '../../components/FrameworkSwitch';

import { BrowserCompat } from '../../components/docs/BrowserCompat';
import { Installation } from '../../components/docs/Installation';
import { Styles } from '../../components/docs/Styles';
import { ComponentUsage } from '../../components/docs/ComponentUsage';
import { ComponentProps } from '../../components/docs/ComponentProps';
import { ControlElementsOffsets } from '../../components/docs/ControlElementsOffsets';
import { WhatsNext } from '../../components/docs/WhatsNext';

export default function DocsReact() {
  return (
    <TitlesContextProvider>
      <Nav className="bg-primary" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <FrameworkSwitch inline />

          <h1>Atropos React Documentation</h1>

          <BrowserCompat />
          <Installation />
          <Styles />
          <ComponentUsage framework="react" />
          <ComponentProps framework="react" />
          <ControlElementsOffsets framework="react" />
          <WhatsNext />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
DocsReact.title = 'Atropos React Documentation';

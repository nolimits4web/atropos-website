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

export default function DocsAngular() {
  return (
    <TitlesContextProvider>
      <Nav className="bg-primary" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <FrameworkSwitch inline />

          <h1>Atropos Angular Documentation</h1>

          <BrowserCompat />
          <Installation />
          <Styles framework="angular" />
          <ComponentUsage framework="angular" />
          <ComponentProps framework="angular" />
          <ControlElementsOffsets framework="angular" />
          <WhatsNext />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
DocsAngular.title = 'Atropos Angular Documenation';

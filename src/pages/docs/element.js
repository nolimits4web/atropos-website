import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

import { DocsNav } from '../../components/DocsNav';

import { BrowserCompat } from '../../components/docs/BrowserCompat';
import { Installation } from '../../components/docs/Installation';
import { ElementStyles } from '../../components/docs/ElementStyles';
import { ComponentUsage } from '../../components/docs/ComponentUsage';
import { ComponentProps } from '../../components/docs/ComponentProps';
import { ControlElementsOffsets } from '../../components/docs/ControlElementsOffsets';
import { WhatsNext } from '../../components/docs/WhatsNext';
import { FrameworkSwitch } from '../../components/FrameworkSwitch';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { GetInstance } from '../../components/docs/GetInstance';


export default function DocsElement() {
  return (
    <TitlesContextProvider>
      <Nav className="bg-primary" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
            <FrameworkSwitch inline />
            <h1>Atropos Element Documentation</h1>

            <BrowserCompat />
            <Installation />
            <ElementStyles />
            <ComponentUsage framework="element"/>
            <ComponentProps framework="element"/>
            <GetInstance />
            <ControlElementsOffsets framework="element" />
            <WhatsNext />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
DocsElement.title = 'Atropos Element Documentation';
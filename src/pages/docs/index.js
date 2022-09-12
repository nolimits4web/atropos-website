import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';

import { DocsNav } from '../../components/DocsNav';
import { FrameworkSwitch } from '../../components/FrameworkSwitch';

import { BrowserCompat } from '../../components/docs/BrowserCompat';
import { Installation } from '../../components/docs/Installation';
import { Styles } from '../../components/docs/Styles';
import { HTMLLayout } from '../../components/docs/HTMLLayout';
import { Initialize } from '../../components/docs/Initialize';
import { Parameters } from '../../components/docs/Parameters';
import { InstanceProperties } from '../../components/docs/InstanceProperties';
import { ControlElementsOffsets } from '../../components/docs/ControlElementsOffsets';
import { WhatsNext } from '../../components/docs/WhatsNext';

export default function Docs() {
  return (
    <TitlesContextProvider>
      <Nav className="bg-primary" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <DocsNav />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <FrameworkSwitch inline />
          <h1>Documentation</h1>

          <BrowserCompat />
          <Installation />
          <Styles />
          <HTMLLayout />
          <Initialize />
          <Parameters />
          <InstanceProperties />
          <ControlElementsOffsets />
          <WhatsNext />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
Docs.title = 'Atropos Documentation';

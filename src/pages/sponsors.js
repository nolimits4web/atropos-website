import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { SponsorsIntro } from '../components/SponsorsIntro';
import { HomeSponsors } from '../components/HomeSponsors';

export default function Sponsors() {
  return (
    <div className="bg-page-dark-bg text-white">
      <Nav />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-lg text-center py-16">
        <h1 className="text-4xl font-bold sm:text-5xl mb-10">
          Atropos Sponsors
        </h1>
        <SponsorsIntro />
        <HomeSponsors showPlaceholders showTitles />
      </div>
      <Footer />
    </div>
  );
}
Sponsors.title = 'Atropos Sponsors';

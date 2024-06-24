'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image'
import enmaxLogo from "./providerLogos/enmax_logo.png"
import directEnergyLogo from "./providerLogos/direct_energy_logo.png"
import atcoLogo from "./providerLogos/atco-logo.jpg"

interface Provider {
  name: string;
  logo: StaticImageData;
}

const providers: Provider[] = [
  { name: 'ENMAX', logo: enmaxLogo },
  { name: 'Direct Energy', logo: directEnergyLogo },
  { name: 'ATCO', logo: atcoLogo },
];

const UtilityProvider: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl mt-4 mb-10">Who is your current utility provider?</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {providers.map((provider) => (
          <div key={provider.name} className="flex flex-col mt-5 items-center p-4 border-2 rounded-lg cursor-pointer hover:shadow-lg">
            {provider.logo && (
              <Image className="p-2" src={provider.logo} alt={provider.name} width={100} height={100} />
            )}
            {!provider.logo && (
              <div className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-500">Image</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UtilityProvider;

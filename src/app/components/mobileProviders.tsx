// components/MobileProvider.tsx
'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image'
import bellLogo from "./providerLogos/bell_logo.png"
import chatrLogo from "./providerLogos/chatr_logo.png"
import eastlinkLogo from "./providerLogos/eastlink_logo.png"
import fidoLogo from "./providerLogos/fido_logo.png"
import fizzLogo from "./providerLogos/fizz_logo.png"
import freedomLogo from "./providerLogos/freedom_logo.png"
import koodoLogo from "./providerLogos/koodo_logo.png"
import rogersLogo from "./providerLogos/rogers_logo.png"
import telusLogo from "./providerLogos/telus_logo.png"



interface Provider {
  name: string;
  logo: StaticImageData;
}

const providers: Provider[] = [
  { name: 'Bell', logo: bellLogo },
  { name: 'Chatr', logo: chatrLogo },
  { name: 'Eastlink', logo: eastlinkLogo },
  { name: 'Fido', logo: fidoLogo },
  { name: 'Fizz', logo: fizzLogo },
  { name: 'Freedom', logo: freedomLogo },
  { name: 'Koodo', logo: koodoLogo },
  { name: 'Rogers', logo: rogersLogo },
  { name: 'Telus', logo: telusLogo },
];

const MobileProvider: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-2xl mt-4 mb-10">Who is your current mobile provider?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {providers.map((provider) => (
          <div key={provider.name} className="flex flex-col mt-5 items-center p-4 border-2 rounded-lg cursor-pointer hover:shadow-lg">
            <Image className="p-2" src={provider.logo} alt = {provider.name} width={100} height={100}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProvider;

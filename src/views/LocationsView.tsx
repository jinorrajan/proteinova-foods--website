import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Mail, Building2 } from 'lucide-react';

export const LocationsView: React.FC = () => {
  const verifiedLocations = [
    {
      id: 'namakkal-hq',
      name: 'Proteinova Food Products Pvt. Ltd. (HQ)',
      type: 'HEADQUARTERS (HQ) & CENTRAL PROCESSING',
      isHq: true,
      address: '141/40c, Kurinji Tower, Salem Road, Namakkal, Tamil Nadu - 637001',
      phone: '+91 9791220001',
      email: 'connect@proteinova.in',
      hours: 'Mon – Sat: 8:00 AM – 7:00 PM',
      mapUrl: 'https://maps.google.com/?q=141/40c+Kurinji+Tower+Salem+Road+Namakkal+Tamil+Nadu+637001',
    },
    {
      id: 'salem-hub',
      name: 'Salem Regional Cold Logistics Depot',
      type: 'Regional Cold Chain & Crating Point',
      isHq: false,
      address: 'Salem Highway Logistics Corridor, Salem, Tamil Nadu 636005',
      phone: '+91 9791220001',
      email: 'connect@proteinova.in',
      hours: 'Mon – Sat: 7:00 AM – 7:00 PM',
      mapUrl: 'https://maps.google.com/?q=Salem+Tamil+Nadu',
    },
    {
      id: 'coimbatore-hub',
      name: 'Coimbatore & Western Distribution Point',
      type: 'Commercial Sourcing & Food-Service Fleet',
      isHq: false,
      address: 'Avinashi Road Commercial Depot, Coimbatore, Tamil Nadu 641014',
      phone: '+91 9791220001',
      email: 'connect@proteinova.in',
      hours: 'Mon – Sat: 8:00 AM – 6:30 PM',
      mapUrl: 'https://maps.google.com/?q=Coimbatore+Tamil+Nadu',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-28 space-y-16 max-w-7xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E5A900] font-semibold block">
          DISTRIBUTION & SUPPLY HUBS
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#26362C] leading-tight">
          Find ProteinOva <br />
          <span className="text-[#E5A900]">Near You.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#717B74] font-normal leading-relaxed">
          Headquartered in Namakkal, Tamil Nadu — India's premier poultry hub — with organized cold-chain logistics serving families, supermarkets, and B2B commercial buyers.
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {verifiedLocations.map((loc) => (
          <div
            key={loc.id}
            className={`rounded-3xl p-8 shadow-xs flex flex-col justify-between space-y-6 transition-all ${
              loc.isHq
                ? 'bg-white border-2 border-[#E5A900] shadow-md ring-4 ring-[#E5A900]/10'
                : 'bg-white border border-[#26362C]/10 hover:border-[#E5A900]/40 hover:shadow-md'
            }`}
          >
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className={`text-[10px] uppercase font-bold tracking-wider inline-block px-2.5 py-1 rounded-full ${
                  loc.isHq
                    ? 'bg-[#E5A900]/15 text-[#E5A900]'
                    : 'bg-[#26362C]/06 text-[#717B74]'
                }`}>
                  {loc.type}
                </span>
                <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">
                  {loc.name}
                </h3>
              </div>

              <div className="space-y-3 text-xs text-[#26362C] pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E5A900] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#546258]">{loc.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E5A900] shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-[#E5A900] font-medium text-[#26362C]">
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E5A900] shrink-0" />
                  <a href={`mailto:${loc.email}`} className="hover:text-[#E5A900] text-[#546258]">
                    {loc.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E5A900] shrink-0" />
                  <span className="text-[#546258]">{loc.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#26362C]/08">
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#F4F7F4] hover:bg-[#26362C] hover:text-white text-[#26362C] border border-[#26362C]/08 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions & Map</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

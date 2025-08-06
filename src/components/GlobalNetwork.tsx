import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MapPin, Globe } from 'lucide-react';

const GlobalNetwork = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showInput, setShowInput] = useState(true);

  // Miki Sangyo global locations
  const locations = [
    {
      name: 'MIKI &CO., LTD.',
      city: 'Tokyo',
      country: 'Japan',
      coordinates: [139.6917, 35.6895],
      type: 'headquarters',
      address: '3-15-5 Nihonbashi, Chuo-ku, Tokyo (2nd Miki Building)',
      phone: '03-3271-4186',
      established: 'Head Office'
    },
    {
      name: 'MIKI SANGYO (USA) INC.',
      city: 'Parsippany',
      country: 'New Jersey, USA',
      coordinates: [-74.4288, 40.8576],
      type: 'subsidiary',
      address: '400 INTERPACE PARKWAY, PARSIPPANY, NEW JERSEY 07054, U.S.A.',
      phone: '(1) 973-263-4111',
      fax: '(1) 973-263-1325',
      established: 'February 1973'
    },
    {
      name: 'MIKI (EUROPE) GmbH',
      city: 'Düsseldorf',
      country: 'Germany',
      coordinates: [6.7735, 51.2277],
      type: 'subsidiary',
      address: 'IMMERMANNSTR. 35, 40210 DÜSSELDORF, F.R. GERMANY',
      phone: '(49) 211-3230618',
      fax: '(49) 211-1332860',
      established: 'October 1980'
    },
    {
      name: 'MIKI (THAILAND) LTD.',
      city: 'Bangkok',
      country: 'Thailand',
      coordinates: [100.5018, 13.7563],
      type: 'subsidiary',
      address: '121/72, RS TOWER, 23rd FLOOR, RATCHADAPISEK ROAD, KWANG DINDAENG, KHET DINDAENG, BANGKOK 10400, THAILAND',
      phone: '(66) 2-6412213',
      fax: '(66) 2-6412217',
      established: 'February 1988'
    },
    {
      name: 'MIKI (SHANGHAI) CO., LTD.',
      city: 'Shanghai',
      country: 'China',
      coordinates: [121.4737, 31.2304],
      type: 'subsidiary',
      address: 'ROOM 1408, BUILDING A FAR EAST INTERNATIONAL PLAZA, No.319 XIANXIA ROAD, CHANGNING DISTRICT, SHANGHAI 200051, CHINA',
      phone: '(86) 21-6235-0070',
      fax: '(86) 21-6235-0119',
      established: 'March 2003'
    },
    {
      name: 'PT. MIKI INDONESIA',
      city: 'Jakarta',
      country: 'Indonesia',
      coordinates: [106.8456, -6.2088],
      type: 'subsidiary',
      address: 'PALMA TOWER, LEVEL 17 UNIT D, JL. RA KARTINI II-S KAV. 6, JAKARTA SELATAN 12310, INDONESIA',
      phone: '(62) 21-75930446',
      fax: '(62) 21-75930447',
      established: 'March 2013'
    }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'mercator',
        zoom: 2,
        center: [-74.4288, 40.8576], // Centered on Miki USA (Parsippany, NJ)
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        // Add markers for each location
        locations.forEach((location) => {
          // Create custom marker element
          const markerEl = document.createElement('div');
          markerEl.className = 'custom-marker';
          markerEl.style.cssText = `
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: ${location.type === 'headquarters' ? '#dc2626' : '#ea580c'};
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: transform 0.2s ease;
          `;

          // Add hover effect
          markerEl.addEventListener('mouseenter', () => {
            markerEl.style.transform = 'scale(1.2)';
          });
          markerEl.addEventListener('mouseleave', () => {
            markerEl.style.transform = 'scale(1)';
          });

          // Create popup
          const popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: false,
          }).setHTML(`
            <div class="p-4 max-w-sm">
              <h3 class="font-semibold text-primary mb-2">${location.name}</h3>
              <p class="text-sm text-muted-foreground mb-2">${location.city}, ${location.country}</p>
              ${location.address ? `<p class="text-xs text-muted-foreground mb-2">${location.address}</p>` : ''}
              ${location.phone ? `<p class="text-xs"><strong>Phone:</strong> ${location.phone}</p>` : ''}
              ${location.fax ? `<p class="text-xs"><strong>Fax:</strong> ${location.fax}</p>` : ''}
              ${location.established ? `<p class="text-xs mt-1"><strong>Established:</strong> ${location.established}</p>` : ''}
              <span class="inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                location.type === 'headquarters' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-orange-100 text-orange-700'
              }">
                ${location.type === 'headquarters' ? 'Headquarters' : 'Subsidiary'}
              </span>
            </div>
          `);

          // Add marker to map
          new mapboxgl.Marker(markerEl)
            .setLngLat(location.coordinates as [number, number])
            .setPopup(popup)
            .addTo(map.current!);
        });

        // Add connecting lines (optional)
        const headquarters = locations.find(l => l.type === 'headquarters');
        if (headquarters) {
          const lineFeatures = locations
            .filter(l => l.type === 'subsidiary')
            .map(location => ({
              type: 'Feature' as const,
              geometry: {
                type: 'LineString' as const,
                coordinates: [headquarters.coordinates, location.coordinates]
              },
              properties: {}
            }));

          map.current!.addSource('connection-lines', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: lineFeatures
            }
          });

          map.current!.addLayer({
            id: 'connection-lines',
            type: 'line',
            source: 'connection-lines',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': 'hsl(var(--primary))',
              'line-width': 2,
              'line-opacity': 0.6
            }
          });
        }
      });

      setShowInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Invalid Mapbox token. Please check your token and try again.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      initializeMap(apiKey.trim());
    }
  };

  return (
    <section className="py-24 section-primary" id="global-network">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Global Network</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our company has local subsidiaries in five locations in the United States, Germany, Thailand, China, and Indonesia, 
            and continues to make rapid progress on the global stage.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With our extensive international network, we provide seamless chemical supply services across continents, 
            ensuring local expertise with global standards.
          </p>
        </div>

        {showInput && (
          <div className="max-w-md mx-auto mb-8 p-6 card-enhanced">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Enter Mapbox Token
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              To display the interactive map, please enter your Mapbox public token. 
              Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="pk.eyJ1IjoiY..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Load Interactive Map
              </Button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="card-enhanced overflow-hidden">
              <div 
                ref={mapContainer} 
                className="w-full h-[500px] bg-muted rounded-lg flex items-center justify-center"
              >
                {showInput && (
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Enter your Mapbox token to view the interactive global network map</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            {locations.map((location, index) => (
              <div key={index} className="card-enhanced p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                    location.type === 'headquarters' ? 'bg-red-500' : 'bg-orange-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1">{location.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{location.city}, {location.country}</p>
                    {location.address && (
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{location.address}</p>
                    )}
                    <div className="space-y-1 mb-2">
                      {location.phone && (
                        <p className="text-xs"><span className="font-medium">Phone:</span> {location.phone}</p>
                      )}
                      {location.fax && (
                        <p className="text-xs"><span className="font-medium">Fax:</span> {location.fax}</p>
                      )}
                      {location.established && (
                        <p className="text-xs"><span className="font-medium">Established:</span> {location.established}</p>
                      )}
                    </div>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      location.type === 'headquarters' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' 
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
                    }`}>
                      {location.type === 'headquarters' ? 'Headquarters' : 'Subsidiary'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
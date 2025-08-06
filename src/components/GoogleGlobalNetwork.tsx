import React, { useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MapPin, Globe } from 'lucide-react';

// Declare global google maps types
declare global {
  interface Window {
    google: typeof google;
  }
}

const GoogleGlobalNetwork = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Miki Sangyo global locations
  const locations = [
    {
      name: 'MIKI &CO., LTD.',
      city: 'Tokyo',
      country: 'Japan',
      coordinates: { lat: 35.6895, lng: 139.6917 },
      type: 'headquarters'
    },
    {
      name: 'MIKI SANGYO (USA) INC.',
      city: 'New York',
      country: 'USA',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      type: 'subsidiary'
    },
    {
      name: 'MIKI (SHANGHAI) CO., LTD.',
      city: 'Shanghai',
      country: 'China',
      coordinates: { lat: 31.2304, lng: 121.4737 },
      type: 'subsidiary'
    },
    {
      name: 'MIKI (THAILAND) LTD.',
      city: 'Bangkok',
      country: 'Thailand',
      coordinates: { lat: 13.7563, lng: 100.5018 },
      type: 'subsidiary'
    },
    {
      name: 'PT. MIKI INDONESIA',
      city: 'Jakarta',
      country: 'Indonesia',
      coordinates: { lat: -6.2088, lng: 106.8456 },
      type: 'subsidiary'
    },
    {
      name: 'MIKI (EUROPE) GmbH',
      city: 'Frankfurt',
      country: 'Germany',
      coordinates: { lat: 50.1109, lng: 8.6821 },
      type: 'subsidiary'
    },
    {
      name: 'MIKI SANGYO (INDIA) PVT. LTD.',
      city: 'Mumbai',
      country: 'India',
      coordinates: { lat: 19.0760, lng: 72.8777 },
      type: 'subsidiary'
    }
  ];

  const initializeGoogleMap = async (apiKeyValue: string) => {
    if (!mapContainer.current) return;

    setIsLoading(true);

    try {
      const loader = new Loader({
        apiKey: apiKeyValue,
        version: 'weekly',
        libraries: ['places', 'geometry']
      });

      const google = await loader.load();

      // Initialize map centered on Miki USA
      const mapInstance = new google.maps.Map(mapContainer.current, {
        center: { lat: 40.7128, lng: -74.0060 }, // Centered on New York (Miki USA)
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
          }
        ]
      });

      setMap(mapInstance);

      // Create info window
      const infoWindow = new google.maps.InfoWindow();

      // Add markers for each location
      const markers: google.maps.Marker[] = [];
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: location.coordinates,
          map: mapInstance,
          title: location.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: location.type === 'headquarters' ? '#dc2626' : '#ea580c',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 3
          }
        });

        // Add click listener for info window
        marker.addListener('click', () => {
          const content = `
            <div class="p-3 min-w-[200px]">
              <h3 class="font-semibold text-blue-600 mb-1">${location.name}</h3>
              <p class="text-sm text-gray-600 mb-2">${location.city}, ${location.country}</p>
              <span class="inline-block px-2 py-1 text-xs rounded-full ${
                location.type === 'headquarters' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-orange-100 text-orange-700'
              }">
                ${location.type === 'headquarters' ? 'Headquarters' : 'Subsidiary'}
              </span>
            </div>
          `;
          infoWindow.setContent(content);
          infoWindow.open(mapInstance, marker);
        });

        markers.push(marker);
      });

      // Add connecting lines from headquarters to subsidiaries
      const headquarters = locations.find(l => l.type === 'headquarters');
      if (headquarters) {
        locations.filter(l => l.type === 'subsidiary').forEach(location => {
          new google.maps.Polyline({
            path: [headquarters.coordinates, location.coordinates],
            geodesic: true,
            strokeColor: 'hsl(220, 85%, 57%)',
            strokeOpacity: 0.6,
            strokeWeight: 2,
            map: mapInstance
          });
        });
      }

      setShowInput(false);
      setIsLoading(false);

    } catch (error) {
      console.error('Error loading Google Maps:', error);
      alert('Error loading Google Maps. Please check your API key and try again.');
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      initializeGoogleMap(apiKey.trim());
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
            Our company has local subsidiaries in six locations in the United States, Germany, Thailand, China, Indonesia, and India, 
            and continues to make rapid progress on the global stage.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With our extensive international network, we provide seamless chemical distribution services across continents, 
            ensuring local expertise with global standards.
          </p>
        </div>

        {showInput && (
          <div className="max-w-md mx-auto mb-8 p-6 card-enhanced">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Enter Google Maps API Key
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              To display the interactive map, please enter your Google Maps API key. 
              Get yours at <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="AIzaSyC..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full"
                disabled={isLoading}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Loading Map...' : 'Load Google Maps'}
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
                {showInput && !isLoading && (
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Enter your Google Maps API key to view the interactive global network map</p>
                  </div>
                )}
                {isLoading && (
                  <div className="text-center text-muted-foreground">
                    <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p>Loading Google Maps...</p>
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
                  <div className={`w-4 h-4 rounded-full mt-1 ${
                    location.type === 'headquarters' ? 'bg-red-500' : 'bg-orange-500'
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{location.name}</h4>
                    <p className="text-sm text-muted-foreground">{location.city}, {location.country}</p>
                    <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
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

        <div className="mt-12 p-6 card-enhanced bg-muted/30">
          <h3 className="text-lg font-semibold mb-4">How to get Google Maps API Key:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Go to the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a></li>
            <li>Create a new project or select an existing one</li>
            <li>Enable the "Maps JavaScript API" and "Places API"</li>
            <li>Go to "Credentials" and create an API key</li>
            <li>Restrict the API key to your domain for security</li>
            <li>Copy and paste the API key above</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GoogleGlobalNetwork;
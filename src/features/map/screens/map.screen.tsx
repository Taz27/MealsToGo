import React, { useContext, useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styled from 'styled-components/native';
import { Search } from '../components/search.component';

import { LocationContext } from '../../../services/location/location.context';
import { RestuarantsContext } from '../../../services/restaurants/restaurants.context';
import { RestuarantTransformed } from '../../../services/restaurants/mock/types';
import { MapCallout } from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen: React.FC = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestuarantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location || {};

  useEffect(() => {
    const northeastLat = viewport?.northeast?.lat || 0;
    const southwestLat = viewport?.southwest?.lat || 0;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat || 0,
          longitude: lng || 0,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant: RestuarantTransformed) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

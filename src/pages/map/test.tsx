import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');
  const mapRef = useRef<object>();

  const router = useRouter();

  useEffect(() => {
    const { latitude, longitude } = router.query;
    if (latitude && longitude)
      setCurrentLocation({
        latitude,
        longitude,
      });
  }, [router.query]);

  console.log('currentLocation:', currentLocation);

  useEffect(() => {
    if (typeof currentLocation !== 'string') {
      const position = [currentLocation.latitude, currentLocation.longitude];
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(position[0], position[1]),
      });
    }
  }, [mapRef, currentLocation]);

  return (
    <StyledWrapper>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
      <Head>
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4j1lhi6lfj"
        ></script>
      </Head>
    </StyledWrapper>
  );
};

export default Map;

const StyledWrapper = styled.div``;

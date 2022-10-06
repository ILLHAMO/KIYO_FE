import React, { useCallback, useEffect, useRef } from 'react';
import Script from 'next/script';
import styled from 'styled-components';
import { LatLng } from './gis';
import { useRouter } from 'next/router';
import { queryToNumber } from './query';
// 대한민국 대충 중심 어딘가
export const DEFAULT_LATITUDE = 35.95;
export const DEFAULT_LONGITUDE = 128.25;

export default function Map() {
  const router = useRouter();
  const { latitude, longitude, currentLocation } = router.query;

  const mapRef = useRef<naver.maps.Map>();

  const latLng: LatLng = {
    lat: queryToNumber(latitude, DEFAULT_LATITUDE),
    lng: queryToNumber(longitude, DEFAULT_LONGITUDE),
  };

  const handleClickCurrentLocation = () => {
    if (!mapRef.current) return;
    mapRef.current.setCenter(new naver.maps.LatLng(latLng.lat, latLng.lng));
    searchCoordinateAddress(latLng.lat, latLng.lng);
  };

  const searchCoordinateAddress = useCallback((lat: number, lng: number) => {
    if (!mapRef.current) return;
    const center = mapRef.current.getCenter();
    naver.maps.Service.reverseGeocode(
      {
        coords: center,
        orders: [
          naver.maps.Service.OrderType.ADDR,
          naver.maps.Service.OrderType.ROAD_ADDR,
        ].join(','),
      },
      (status, response) => {
        // if (status === naver.maps.Service.Status.ERROR)
        //   window.ReactNativeWebView.postMessage(
        //     JSON.stringify({
        //       status,
        //     })
        //   );
        // else
        //   window.ReactNativeWebView.postMessage(
        //     JSON.stringify({
        //       status,
        //       coords: new naver.maps.LatLng(lat, lng),
        //       jibunAddress: response.v2.address.jibunAddress,
        //       roadAddress: response.v2.address.roadAddress,
        //       area: response?.v2.results[0].region.area3.name,
        //     })
        //   );
      }
    );
  }, []);

  useEffect(() => {
    mapRef.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(latLng.lat, latLng.lng),
    });
    searchCoordinateAddress(latLng.lat, latLng.lng);
  }, [mapRef, latLng]);

  useEffect(() => {
    if (!mapRef.current) return;
    naver.maps.Event.addListener(mapRef.current, 'touchend', (e) => {
      searchCoordinateAddress(e.coord._lat, e.coord._lng);
    });
  });

  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tdkgjlzq9m&submodules=geocoder`}
      ></Script>
      <MapContainer id="map">
        {currentLocation && (
          <div
            className="current-location-button"
            onClick={handleClickCurrentLocation}
          >
            <img src="/images/gps.svg" />
          </div>
        )}
      </MapContainer>
    </>
  );
}

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  .current-location-button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1 !important;
    border-radius: 100%;
    bottom: 44px;
    right: 24px;
    width: 44px;
    height: 44px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    transition: all 200ms;

    &:active {
      opacity: 0.5;
    }
  }
`;

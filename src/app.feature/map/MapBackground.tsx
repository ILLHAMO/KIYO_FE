import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGetLocation } from 'app.store/location/store.loaction';

const MapBackground = () => {
  const { latitude, longitude, loading } = useGetLocation();

  const getKakaoMap = async () => {
    kakao.maps.load(async () => {
      let mapContainer = document.getElementById('map');
      let map = new kakao.maps.Map(mapContainer, {
        center: new kakao.maps.LatLng(latitude, longitude),
      });

      kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
        var latlng = mouseEvent.latLng;
        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';

        console.log(message);
      });
    });
  };

  useEffect(() => {
    if (!loading) getKakaoMap();
  }, [loading]);

  if (loading) return <div>지도를 불러오고 있습니다.</div>;
  return <StyledWrapper className="map-background" id="map"></StyledWrapper>;
};

export default MapBackground;

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  z-index: 0;
`;

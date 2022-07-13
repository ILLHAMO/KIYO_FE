import create from 'zustand';

export const useStoreLocation: any = create((set) => ({
  location: {
    latitude: 0,
    longitude: 0,
    loading: true,
    geocoder: null,
  },

  setLocation: async (nav) => {
    await nav.geolocation.getCurrentPosition(async (position) => {
      let geocoder = new kakao.maps.services.Geocoder();
      let latlng = new kakao.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      geocoder.coord2RegionCode(
        latlng.getLng(),
        latlng.getLat(),
        async (result, status) => {
          await set((state) => ({
            ...state,
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              loading: false,
              geocoder: result,
            },
          }));
        }
      );
    });
  },
}));

export const useGetLocation = () => {
  return useStoreLocation((state) => state.location);
};

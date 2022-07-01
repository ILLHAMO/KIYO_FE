import React, { useEffect } from 'react';
import styled from 'styled-components';
import API from 'app.modules/api';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

const HomeBanner = () => {
  const getUser = useGetUser();

  const requestStore = async () => {
    try {
      const res = await API.GET({
        url: '/api/store',
        data: {},
        headers: {
          Application: `Bearer ${getUser.token}`,
        },
      });
      console.log('res', res);
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    console.log('asdfasdf');
    requestStore();
  }, []);

  return (
    <StyledWrapper className="home-banner">
      <img
        src="images/sample/home_banner.jpeg"
        className="home-banner__image"
      />
    </StyledWrapper>
  );
};

export default HomeBanner;

const StyledWrapper = styled.div`
  margin: 8px auto 12px;
  width: calc(100% - 16px);
  height: 100%;
  background-color: #ffe9ef;
  border-radius: 10px;

  .home-banner__image {
    border-radius: 10px;
  }
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavigationBar from 'app.components/NavigationBar/NavigationBar';
import HomeHeader from 'app.feature/home/HomeHeader';
import HomeBanner from 'app.feature/home/HomeBanner';
import HomeCategoryFilter from 'app.feature/home/HomeCategoryFilter';
import HomeStoreList from 'app.feature/home/HomeStoreList';
import HomeConvenienceFilter from 'app.feature/home/HomeConvenienceFilter';
import RegisterModal from 'app.feature/register/RegisterModal';
import { Offcanvas } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

const PageHome = () => {
  const [isConvenienceFilterVisible, setIsConvenienceFilterVisible] =
    useState(false);

  const methods = useForm();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const watchCategory = watch('category');

  const onValidRegisterForm = (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = handleSubmit(onValidRegisterForm);

  const handleConvenienceFilterVisibleShow = () => {
    setIsConvenienceFilterVisible(true);
  };

  const handleConvenienceFilterVisibleClose = () => {
    setIsConvenienceFilterVisible(false);
  };

  useEffect(() => {
    onSubmit();
  }, [watchCategory]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <StyledWrapper>
          <HomeHeader />
          <HomeBanner />
          <HomeCategoryFilter onClick={handleConvenienceFilterVisibleShow} />
          <HomeStoreList />
          <StyledOffcanvas
            show={isConvenienceFilterVisible}
            onHide={handleConvenienceFilterVisibleClose}
            placement="bottom"
          >
            <HomeConvenienceFilter
              onSubmit={onSubmit}
              handleConvenienceFilterVisible={
                handleConvenienceFilterVisibleClose
              }
            />
          </StyledOffcanvas>
          {/* <RegisterModal />*/}
        </StyledWrapper>
      </form>
    </FormProvider>
  );
};

export default PageHome;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 80px;

  .home-convenience-filter {
    display: flex;
    justify-content: center;
  }
`;

const StyledOffcanvas = styled(Offcanvas)`
  &.offcanvas-bottom {
    height: auto;
  }
`;

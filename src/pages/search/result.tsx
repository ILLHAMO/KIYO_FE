import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Offcanvas } from 'react-bootstrap';
import { useRouter } from 'next/router';
import SearchHeader from 'app.feature/search/SearchHeader';
import SearchFilter from 'app.feature/search/SearchFilter/SearchFilter';
import SearchFilterOtherModal from 'app.feature/search/SearchFilter/SearchFilterOtherModal';
import SearchFilterLocalModal from 'app.feature/search/SearchFilter/SearchFilterLocalModal';
import SearchStoreList from 'app.feature/search/SearchStoreList';
import { FormProvider, useForm } from 'react-hook-form';

const PageSearchResult = () => {
  const methods = useForm({
    defaultValues: {
      categoryIds: [],
      convenienceIds: [],
    },
  });
  const router = useRouter();
  const { handleSubmit, watch } = methods;
  const { keyword } = router.query;

  const [filter, setFilter] = useState(null);
  const [isOtherFilterVisible, setIsOtherFilterVisible] = useState(false);
  const [isLocalFilterVisible, setIsLocalFilterVisible] = useState(false);

  const handleOtherFilterVisibleShow = () => {
    setIsOtherFilterVisible(!isOtherFilterVisible);
  };

  const handleLocalFilterVisibleShow = () => {
    setIsLocalFilterVisible(!isLocalFilterVisible);
  };

  const watchCategory = watch('categoryIds');
  const watchConvenience = watch('convenienceIds');

  const onValidSearchForm = (data) => {
    try {
      setFilter(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = handleSubmit(onValidSearchForm);

  useEffect(() => {
    onSubmit();
  }, [watchCategory, watchConvenience]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <StyledWrapper>
          <SearchHeader keyword={keyword} />
          <SearchFilter
            otherFilterOnClick={handleOtherFilterVisibleShow}
            localFilterOnClick={handleLocalFilterVisibleShow}
          />
          <SearchStoreList keyword={keyword} filter={filter} />
          <StyledOtherOffcanvas
            className="other-modal"
            show={isOtherFilterVisible}
            onHide={handleOtherFilterVisibleShow}
            placement="bottom"
          >
            <SearchFilterOtherModal
              onSubmit={onSubmit}
              handleOtherFilterVisibleShow={handleOtherFilterVisibleShow}
            />
          </StyledOtherOffcanvas>
          <StyledLocalOffcanvas
            className="local-modal"
            show={isLocalFilterVisible}
            onHide={handleLocalFilterVisibleShow}
            placement="bottom"
          >
            <SearchFilterLocalModal
              handleLocalFilterVisibleShow={handleLocalFilterVisibleShow}
            />
          </StyledLocalOffcanvas>
        </StyledWrapper>
      </form>
    </FormProvider>
  );
};

export default PageSearchResult;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const StyledOtherOffcanvas = styled(Offcanvas)`
  &.offcanvas-bottom {
    height: 70%;
  }
`;

const StyledLocalOffcanvas = styled(Offcanvas)`
  &.offcanvas-bottom {
    height: 50%;
  }
`;

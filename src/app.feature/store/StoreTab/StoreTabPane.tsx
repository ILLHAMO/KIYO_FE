import { API_STORE_INFO } from 'app.modules/api/keyFactory';
import { useRouter } from 'next/router';
import React from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import StoreTabPaneAbout from './StoreTabPaneAbout';
import StoreTabPaneMenu from './StoreTabPaneMenu';
import StoreTabPaneReview from './StoreTabPaneReview';

type TProps = {
  setAboutScroll: (scroll: number) => void;
  setMenuScroll: (scroll: number) => void;
  setReviewScroll: (scroll: number) => void;
};

const StoreTabPane: React.FC<TProps> = ({
  setAboutScroll,
  setMenuScroll,
  setReviewScroll,
}) => {
  const router = useRouter();
  const { storeId } = router.query;

  const queryClient = useQueryClient();
  const storeDetailInfo = queryClient.getQueryData([API_STORE_INFO(storeId)]);

  return (
    <StyledWrapper className="store-tab-pane">
      <StoreTabPaneAbout
        setAboutScroll={setAboutScroll}
        storeDetailInfo={storeDetailInfo}
      />
      <StoreTabPaneMenu setMenuScroll={setMenuScroll} />
      <StoreTabPaneReview setReviewScroll={setReviewScroll} />
    </StyledWrapper>
  );
};

export default StoreTabPane;

const StyledWrapper = styled.div``;

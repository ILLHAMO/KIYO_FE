// auth 관련
export const API_AUTH_LOGOUT = '/auth/logout';
export const API_AUTH_REFRESH = '/auth/refresh';
export const API_USER_NICKNAME = '/api/user/nickname';

/**
 * 메인 페이지
 **/
export const API_CATEGORY = '/api/category';

// 스토어 리스트 받아오기
export const API_STORES = '/api/stores';
export const API_STORE_INFO = (storeId) => `/api/store/${storeId}`;

// 북마크
export const API_STORE_BOOKMARK = '/api/store/bookmark';
export const API_BOOKMARK = (storeId) => `/api/store/${storeId}/bookmark`;

// 마이페이지
export const API_USER_PROFILE = '/api/user/profile';

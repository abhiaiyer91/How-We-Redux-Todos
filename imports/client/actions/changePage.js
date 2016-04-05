export default function changePage(currentPageNumber) {
  return {
    type: 'CHANGE_PAGE',
    currentPageNumber
  };
};

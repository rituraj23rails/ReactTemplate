export const fetchPostsRequest = async (pageCount: any) => {
    /* istanbul ignore next */
    try {
      let response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageCount}`
      );
      let json = await response.json();
      return json;
    } catch (error) {
    }
  };

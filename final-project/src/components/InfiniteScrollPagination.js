import React, { useState, useEffect } from "react";

const INFINITE_SCROLL_PAGE_SIZE = 6;

const InfiniteScrollPagination = ({ items, renderItem }) => {
  const [page, setPage] = useState(0);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const startIndex = page * INFINITE_SCROLL_PAGE_SIZE;
    const endIndex = startIndex + INFINITE_SCROLL_PAGE_SIZE;

    // Get the items for the current page.
    const pageItems = items.slice(startIndex, endIndex);

    // Append the items for the current page to the list of displayed items.
    setDisplayedItems([...displayedItems, ...pageItems]);
  }, [page, items, displayedItems]);

  const handleScroll = () => {
    // Get the current scroll position.
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

    // Get the height of the window.
    const clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    // Get the height of the document.
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    // If we have scrolled to the bottom of the page, load the next page of items.
    if (scrollTop + clientHeight >= documentHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {displayedItems.map(renderItem)}
      {displayedItems.length < items.length && <div>Loading more items...</div>}
    </>
  );
};

export default InfiniteScrollPagination;

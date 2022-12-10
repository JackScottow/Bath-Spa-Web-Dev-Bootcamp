import React from "react";
import InfiniteScrollPagination from "./InfiniteScrollPagination";

const Contact = () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 5" },
    { id: 5, name: "Item 6" },
    { id: 6, name: "Item 7" },
    { id: 7, name: "Item 8" },
    { id: 8, name: "Item 9" },
    { id: 9, name: "Item 10" },
    { id: 10, name: "Item 11" },
    { id: 11, name: "Item 12" },
  ];

  const renderItem = (item) => <div key={item.id}>{item.name}</div>;

  return (
    <div>
      <InfiniteScrollPagination items={items} renderItem={renderItem} />
    </div>
  );
};

export default Contact;

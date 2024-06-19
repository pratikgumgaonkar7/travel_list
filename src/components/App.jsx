import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import Stats from "./Stats";
import "./app.css";
import PackingList from "./PackingList";



export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
  }
  return (
    <div>
      <div>
        <Logo />
        <Form onAddItem={handleAddItem} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearItems}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}

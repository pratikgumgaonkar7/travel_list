import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  let sortedItems
  const [sortBy, setSortBy] = useState("input")
  if (sortBy === "input") sortedItems = items
  if (sortBy === "description") sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.drescription))
  if (sortBy === "packed") sortedItems = items.slice().sort((a,b)=> Number(a.packed) - Number(b.packed))
  return (
    <div className="list-dropdown">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        ))}
      </ul>
      <div className="sort-list">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>{" "}
        <button onClick={()=>onClearList()}>clear list</button>
      </div>
    </div>
  );
}

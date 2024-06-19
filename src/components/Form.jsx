import { useState } from "react";

export default function Form( { onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e){
    e.preventDefault()
    if (!description) return
    const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
    }
    onAddItem(newItem)
    setDescription("")
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you want to add in your list?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

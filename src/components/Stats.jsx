export default function Stats({ items }) {
  if (!items.length)
    return <h3 className="stats">Start packing items for your journey 👜</h3>;
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <div className="stats">
      <h3>
        You have {numItems} items and you have packed {packedItems} (
        {percentage}%)
      </h3>
    </div>
  );
}

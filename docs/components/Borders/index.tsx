export const Borders = () => {
  const arr = ["top", "right", "bottom", "left"];
  return (
    <>
      <div className="border">
        {arr.map((item, key) => (
          <div key={key} className={`theme border-${item}`} />
        ))}
      </div>
    </>
  );
};

const TestBox = ({ changeColor }) => {
  return (
    <div className="" style={{ textAlign: "center" }}>
      <input
        onChange={changeColor}
        type="text"
        style={{ marginTop: "2px",padding: "3px" }}
        placeholder="#ColorRGB"
      />
    </div>
  );
};

export default TestBox;

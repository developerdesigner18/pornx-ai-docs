export default function Highlight({ children, color = "#008847" }) {
  return (
    <span
      style={{
        color,
        fontSize: "28px",
        fontWeight: 900,
      }}
    >
      {children}
    </span>
  );
}

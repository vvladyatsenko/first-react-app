export default function Input({ text, onClick, placeholder, onChange }) {
  return (
    <div>
      <h1>Input Component</h1>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        style={{ margin: '10px 0', padding: '10px' }}
      />
      <button onClick={onClick} style={{ padding: '10px 20px' }}>
        {text}
      </button>
    </div>
  );
}

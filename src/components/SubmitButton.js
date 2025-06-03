import './SubmitButton.css'

export default function SubmitButton({ text = "Submit", onClick }) {
  return (
    <button className="submit-button" onClick={onClick}>
      {text}
    </button>
  );
}

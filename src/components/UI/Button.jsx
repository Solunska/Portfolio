import './Button.css';

export default function Button({ children, buttonClass, handleClick }) {
    return <button onClick={handleClick} className={buttonClass}>{children}</button>
}
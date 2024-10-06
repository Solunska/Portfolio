import './Button.css';

export default function Button({ children, buttonClass, handleClick, linkto }) {
    return <button onClick={handleClick} className={buttonClass}><a href={linkto}>{children}</a></button>
}
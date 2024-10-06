export default function IconButton({ img, alt, imgClasses, link }) {
    return <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} className={imgClasses} />
    </a>
}
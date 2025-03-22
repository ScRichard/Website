

const Button = ({ text, href, icon }) => {
    return (
        <a href={href}>
            <i className={icon}></i>
            <span>{text}</span>
        </a>
    );
}

export default Button;

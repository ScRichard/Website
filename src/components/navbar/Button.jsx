import { BUTTON_STYLES } from '../../assets/Styles';

const Button = ({ text, href }) => {
    return (
        <button onClick={() => {
            if (href === 'hero') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            const element = document.getElementById(`${href}`);
            element.scrollIntoView({
                top: element.offsetTop,
                behavior: 'smooth'
            }); 
            }} className={BUTTON_STYLES.primary}>
            {text}
        </button>
    );
}

export default Button;
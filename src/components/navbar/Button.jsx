

const Button = ({ text, href, icon }) => {
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
                top: element.offsetTop + 20,
                behavior: 'smooth'
            }); 
            }} className="px-5 py-3 text-white font-medium rounded-md justify-center items-center bg-[rgba(99,101,241,0.07)] hover:text-white transition-all flex gap-2 duration-300 border-[rgba(99,101,241,0)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:border-[rgba(99,102,241,.70)] border">
            <i className={icon}></i>
            <span>{text}</span>
        </button>
    );
}

export default Button;

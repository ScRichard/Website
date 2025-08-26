const Footer = () => {
    return(
        <div className="w-full flex items-center justify-center p-4">
            <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Richard Schmidt. All rights reserved. Created with React.
            </p>
        </div>
    );
}
export default Footer;
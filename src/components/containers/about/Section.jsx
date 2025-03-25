
// toto je Sekcia do About.jsx
// name, body sú premeny ktoré dokážem nahradiť
const Section = ({ name, body }) => {
    return (
        <div className="py-3 px-1">
            <p className="text-lg font-bold font-sans">{name}.java</p>
            <div className="text-sm py-2 font-mono">{body}</div>
        </div>
    );
}
export default Section;
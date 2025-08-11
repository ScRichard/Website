import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Message sent!");
        setForm({ email: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full px-20 max-[700px]:px-3">
            <label className="block text-gray-800 mb-2 font-semibold font-roboto-mono" htmlFor="email">
                Email
            </label>
            <input
                className="w-full px-4 py-2 rounded-lg outline-2 outline-gray-300"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
            />
            <label className="block text-gray-800 mb-2 font-semibold font-roboto-mono mt-2" htmlFor="email">
                Message
            </label>
            <textarea
                className="w-full px-4 py-2 rounded-lg outline-2 outline-gray-300 focus:ring-2 "
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Type your message here..."
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white mt-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-400 focus:shadow-blue-400 focus:outline-none"
            >
                Send
            </button>
        </form>
    );
};

export default Contact;
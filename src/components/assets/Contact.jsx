import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_ewdy9de', 'template_4jhb3wp', form.current, {
            publicKey: '4EUBqO8avT36mjapC',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error);
            },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="w-full px-20 max-[700px]:px-3">
            <label className="block text-gray-800 mb-2 font-semibold font-roboto-mono" htmlFor="name">
                Name
            </label>
            <input
                className="w-full px-4 py-2 rounded-lg outline-2 outline-gray-300 text-gray-700"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Janko Hrasko"
            />
            <label className="block text-gray-800 mb-2 font-semibold font-roboto-mono" htmlFor="email">
                Email
            </label>
            <input
                className="w-full px-4 py-2 rounded-lg outline-2 outline-gray-300 text-gray-700"
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
            />
            <label className="block text-gray-800 mb-2 font-semibold font-roboto-mono mt-2" htmlFor="email">
                Message
            </label>
            <textarea
                className="w-full px-4 py-2 rounded-lg outline-2 outline-gray-300 text-gray-700 focus:ring-2 "
                id="message"
                type="text"
                name="message"
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
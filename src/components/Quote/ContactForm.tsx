import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

const QuoteForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    console.log(formData)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, subject, message } = formData;

        // Basic field validation
        if (!firstName || !lastName || !email || !phone || !subject || !message) {
            alert("All fields are required.");
            return;
        }

        // Send email using EmailJS
        // emailjs
        //     .sendForm(
        //         'service_cjw2wzg',
        //         'template_zig4bu8',
        //         form.current!,
        //         '87jRwiR9NiFT7oUgY'
        //     )
        //     .then((res: { status: number; text: string }) => {
        //         console.log('EmailJS Response:', res);
        //         alert('Email sent successfully!');

        //         // Reset form data
        //         setFormData({
        //             firstName: '',
        //             lastName: '',
        //             email: '',
        //             phone: '',
        //             subject: '',
        //             message: '',
        //         });
        //     })
        //     .catch((err: string) => {
        //         console.error('EmailJS Error:', err);
        //         alert('Something went wrong while sending the email.');
        //     });
    };

    return (
        <div>
            <section className="w-full bg-gray-100 py-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-2">Request a Quote</h2>
                </div>
                <div className="mx-10 border border-gray-200 shadow-2xl">
                    <div className="flex md:flex-nowrap flex-wrap justify-between gap-12 items-start">

                        {/* Right Column - Map and Info */}
                        <div className='flex-2 bg-white p-8'>
                            <form className="space-y-6" onSubmit={handleSubmit} ref={form}>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">
                                            First Name
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            value={formData.firstName}
                                            id="firstName"
                                            name='firstName'
                                            placeholder="Enter your first name"
                                            className="border w-full p-2 rounded-lg border-[#181818]/20 focus:border-[#181818]"
                                        />
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">
                                            Last Name
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            value={formData.lastName}
                                            id="lastName"
                                            name='lastName'
                                            placeholder="Enter your last name"
                                            className="border w-full p-2 rounded-lg border-[#181818]/20 focus:border-[#181818]"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email Address
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            value={formData.email}
                                            id="email"
                                            type="email"
                                            name='email'
                                            placeholder="Enter your email address"
                                            className="border w-full p-2 rounded-lg border-[#181818]/20 focus:border-[#181818]"
                                        />
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">
                                            Phone Number
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            value={formData.phone}
                                            id="phone"
                                            name='phone'
                                            placeholder="Enter your phone number"
                                            className="border w-full p-2 rounded-lg border-[#181818]/20 focus:border-[#181818]"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Company
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            value={formData.subject}
                                            id="subject"
                                            name='subject'
                                            placeholder="What is this regarding?"
                                            className="border w-full p-2 rounded-lg border-[#181818]/20 focus:border-[#181818]"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Service
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            value={formData.subject}
                                            id="subject"
                                            name='subject'
                                            placeholder="What is this regarding?"
                                            className="border w-full p-2 rounded-lg border-[#181818]/20 focus:border-[#181818]"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        onChange={handleChange}
                                        value={formData.message}
                                        rows={4}
                                        id="message"
                                        name='message'
                                        placeholder="How can we help you?"
                                        className="border rounded-lg p-2 w-full border-[#181818]/20 focus:border-[#181818]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-fit gap-1 mx-auto px-8 shadow-lg shadow-[#181818]/20 transition-all flex justify-center items-center p-2 hover:shadow-xl hover:shadow-[#181818]/30 cursor-pointer bg-gray-800 font-semibold text-white"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QuoteForm
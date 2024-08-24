import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// Initialize form state
const INITIAL_STATE = Object.fromEntries(
    Object.keys(config.contact.form).map((input) => [input, ""])
);

const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [form, setForm] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Construct the request payload
        const requestBody = {
            data: {
                name: form.name,
                email: form.email,
                message: form.message,
            },
        };

        try {
            // Hit the API endpoint to send the email
            const response = await fetch("https://centralized-api-production.up.railway.app/api/email/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const responseData = await response.json(); // Get the response data
                alert(responseData.message || "Email sent successfully!"); // Show success message
                setForm(INITIAL_STATE); // Reset form to initial state
            } else {
                const errorData = await response.json(); // Get error data
                console.error('Email sending error:', errorData);
                alert(errorData.error || "Something went wrong. Please try again."); 
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    return (
        <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="bg-black-100 flex-[0.75] rounded-2xl p-8"
            >
                <Header useMotion={false} {...config.contact} />

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    {Object.keys(config.contact.form).map(input => {
                        const { span, placeholder } = config.contact.form[input as keyof typeof config.contact.form];
                        const Component = input === "message" ? "textarea" : "input";

                        return (
                            <label key={input} className="flex flex-col">
                                <span className="mb-4 font-medium text-white">{span}</span>
                                <Component
                                    type={input === "email" ? "email" : "text"}
                                    name={input}
                                    value={form[input]} // Access form values
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                                    {...(input === "message" && { rows: 7 })}
                                />
                            </label>
                        );
                    })}
                    <button
                        type="submit"
                        className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");

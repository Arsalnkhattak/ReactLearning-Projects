import React from 'react'
import { useState } from 'react'

export default function HandleForms() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        country: ""
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formData);
        alert("Form Submitted Successfully!");
    }




    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-[450px]"
            >
                <h1 className="text-2xl font-bold text-center mb-6">
                    Registration Form
                </h1>

                {/* First Name */}
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mb-4"
                />

                {/* Last Name */}
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mb-4"
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mb-4"
                />

                {/* Gender */}
                <h3 className="font-semibold mb-2">Gender</h3>

                <label className="mr-4">
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                    />
                    <span className="ml-2">Male</span>
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                    />
                    <span className="ml-2">Female</span>
                </label>

                {/* Country */}
                <div className="mt-5">
                    <label className="font-semibold">Country</label>

                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-2"
                    >
                        <option value="">Select Country</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                    </select>
                </div>

                {/* Checkbox */}
                <div className="mt-5">
                    <label>
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                        />

                        <span className="ml-2">
                            I agree to the Terms & Conditions
                        </span>
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white w-full mt-6 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}


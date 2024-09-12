// src/pages/Signup.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import NavItem from '../components/NavItem';
import { LogIn } from 'lucide-react';

// Define a Zod schema for Signup form validation
const signupSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Password confirmation is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
});

// Define form values based on schema
type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data: SignupFormValues) => {
        console.log(data); // Handle signup logic here
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-2  space-y-4">
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register('email')}
                        className="border p-2 w-full"
                    />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        {...register('password')}
                        className="border p-2 w-full"
                    />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...register('confirmPassword')}
                        className="border p-2 w-full"
                    />
                    {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    Signup
                </button>
                <NavItem
                    icon={<LogIn />}
                    label="Already have an account?"
                    to='/signup'
                    disableHover={true}
                    className=' bg-pink-300 inline-flex justify-center gap-3'
                />
        </form>
    </div >
  );
};

export default Signup;
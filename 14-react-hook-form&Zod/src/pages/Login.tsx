import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import NavItem from '../components/NavItem';
import { LogIn, PencilLine } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Define a Zod schema for validation
const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

// Define form values based on schema
type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log(data); // Handle login logic here
        navigate("/dashboard");
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-2 space-y-4">
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
                <button type="submit" className="bg-blue-500 text-white p-2 w-full inline-flex justify-center gap-3">
                    <LogIn /> Login
                </button>
                <NavItem
                    icon={<PencilLine />}
                    label="Don't have an account?"
                    to='/signup'
                    disableHover={true}
                    className=' bg-pink-300 inline-flex justify-center gap-3' />
            </form>
        </div>
    );
};


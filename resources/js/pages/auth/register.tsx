import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4">

            {/* <Head title="Register"  /> */}

            <div className="gap-10 overflow-hidden flex items-center flex-col md:flex-row w-full max-w-5xl">
                <div className="md:w-1/2 w-full flex items-center justify-center p-6">
                    <img
                        src="/images/bglogin.png"
                        alt="register"
                        className="w-auto h-auto max-w-[300px] md:max-w-md"
                    />
                </div>
                {/* buat shadow belom ok */}
                <div className="md:w-[420px] w-80 mx-auto p-8 bg-gradient-to-b from-[#E8F3FF] to-[#F7FAFF] dark:bg-none dark:bg-[#1E293B] shadow-lg rounded-3xl">
                    <h2 className="text-[#1C398E] dark:text-[#F1F5F9] text-3xl font-semibold mb-5">Register</h2>
                    <Form
                        {...store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors,  }) => (
                            <>
                                <div className="grid gap-6 font-normal">
                                    <div className="grid gap-2">
                                        <Input className="border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] dark:border-b-[#94A3B8] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Full name"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Input className="border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] dark:border-b-[#94A3B8] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@example.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="relative">
                                            <Input
                                                className="pr-10 border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] dark:border-b-[#94A3B8] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                required
                                                tabIndex={3}
                                                autoComplete="new-password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((s) => !s)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1C398E] dark:text-[#94A3B8] cursor-pointer hover:text-blue-500 transition-colors"
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="relative">
                                            <Input
                                                className="pr-10 border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] dark:border-b-[#94A3B8] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
                                                id="password_confirmation"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                required
                                                tabIndex={4}
                                                autoComplete="new-password"
                                                name="password_confirmation"
                                                placeholder="Confirm password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((s) => !s)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1C398E] cursor-pointer dark:text-[#94A3B8] hover:text-blue-500 transition-colors"
                                                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                                            >
                                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        <InputError
                                            message={errors.password_confirmation}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 w-full bg-[#1C398E] text-white hover:bg-[#294db7] dark:text-[#1C398E] dark:bg-[#CFE6FF] dark:hover:bg-blue-300 border-none rounded-xl cursor-pointer"
                                        tabIndex={5}
                                        data-test="register-user-button"

                                    >
                                        {processing && <Spinner />}
                                        Create account
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-[#6a6c6e] dark:text-[#F1F5F9]">
                                    Already have an account?{' '}
                                    <TextLink href={login()} tabIndex={6} className='text-[#1C398E] dark:text-[#CFE6FF]'>
                                        Log in
                                    </TextLink>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}

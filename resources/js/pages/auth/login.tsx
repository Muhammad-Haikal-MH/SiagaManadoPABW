import { login, register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4">
            <Head title="Login" />

            <div className="gap-10 overflow-hidden flex items-center flex-col md:flex-row w-full max-w-5xl">
                {/* LEFT IMAGE */}
                <div className="md:w-1/2 w-full flex items-center justify-center p-6">
                    <img
                        src="/images/bglogin.png"
                        alt="login"
                        className="w-auto h-auto max-w-[300px] md:max-w-md"
                    />
                </div>

                {/* CARD */}
                <div className="md:w-[420px] w-80 h-fit mx-auto p-8 bg-gradient-to-b from-[#E8F3FF] to-[#F7FAFF] shadow-lg rounded-3xl">
                    <h2 className="text-[#1C398E] text-3xl font-semibold mb-5">
                        Login
                    </h2>

                    <Form
                        {...store.form()}
                        resetOnSuccess={['password']}
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6 font-normal">
                                    {/* EMAIL */}
                                    <div className="grid gap-2">
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            className="border-0 border-b border-b-[#1C398E] text-[#1C398E]
                                                focus:rounded-lg focus:border-b-blue-400
                                                transition-all duration-200
                                                focus:outline-none focus:ring-0
                                                focus-visible:ring-0 focus-visible:ring-offset-0"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="grid gap-2">
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="Password"
                                            className="border-0 border-b border-b-[#1C398E] text-[#1C398E]
                                                focus:rounded-lg focus:border-b-blue-400
                                                transition-all duration-200
                                                focus:outline-none focus:ring-0
                                                focus-visible:ring-0 focus-visible:ring-offset-0"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    {/* REMEMBER + FORGOT */}
                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center gap-2 text-[#1C398E]">
                                            <Checkbox
                                                name="remember"
                                                tabIndex={3}
                                            />
                                            Remember me
                                        </label>

                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                tabIndex={4}
                                                className="text-[#1C398E]"
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>

                                    {/* BUTTON */}
                                    <Button
                                        type="submit"
                                        className="mt-2 w-full bg-[#1C398E] text-white hover:bg-[#294db7] rounded-xl"
                                        tabIndex={5}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing && <Spinner />}
                                        Log in
                                    </Button>
                                </div>

                                {/* REGISTER LINK */}
                                {canRegister && (
                                    <div className="text-center text-sm text-[#6a6c6e]">
                                        Don't have an account?{' '}
                                        <TextLink
                                            href={register()}
                                            tabIndex={6}
                                            className="text-[#1C398E]"
                                        >
                                            Sign up
                                        </TextLink>
                                    </div>
                                )}
                            </>
                        )}
                    </Form>

                    {status && (
                        <div className="mt-4 text-center text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

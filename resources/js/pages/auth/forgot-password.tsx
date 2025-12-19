// Components
import { login } from '@/routes';
import { email } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <div>
            <Head title="Forgot password" />

            <div className="w-full min-h-screen flex items-center justify-center p-4">
                <div className="gap-10 overflow-hidden flex items-center flex-col md:flex-row w-full max-w-5xl">

                    {/* LEFT IMAGE */}
                    <div className="md:w-1/2 w-full flex items-center justify-center p-6">
                        <img
                            src="/images/lupapw.png"
                            alt="forgot password"
                            className="w-auto h-auto max-w-[300px] md:max-w-lg"
                        />
                    </div>

                    {/* CARD */}
                    <div className="md:w-[420px] w-80 mx-auto p-8 bg-gradient-to-b from-[#E8F3FF] to-[#F7FAFF] shadow-lg rounded-3xl">
                        <h2 className="text-[#1C398E] text-3xl font-semibold mb-2">
                            Forgot Password
                        </h2>

                        <p className="text-sm text-[#6a6c6e] mb-6">
                            Enter your email to receive a password reset link
                        </p>

                        {status && (
                            <div className="mb-4 text-center text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <Form {...email.form()} className="flex flex-col gap-6">
                            {({ processing, errors }) => (
                                <>
                                    <div className="grid gap-6 font-normal">
                                        <div className="grid gap-2">
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                autoFocus
                                                autoComplete="off"
                                                placeholder="email@example.com"
                                                className="
                                                    border-0 border-b border-b-[#1C398E]
                                                    focus:rounded-lg
                                                    text-[#1C398E]
                                                    focus:border-b-blue-400
                                                    transition-all duration-200
                                                    focus:outline-none
                                                    focus:ring-0
                                                    focus-visible:ring-0
                                                    focus-visible:ring-offset-0
                                                "
                                            />
                                            <InputError message={errors.email} />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="mt-2 w-full bg-[#1C398E] text-white hover:bg-[#294db7] rounded-xl"
                                            disabled={processing}
                                            data-test="email-password-reset-link-button"
                                        >
                                            {processing && (
                                                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                            )}
                                            Email password reset link
                                        </Button>
                                    </div>

                                    <div className="text-center text-sm text-[#6a6c6e]">
                                        Remember your password?{' '}
                                        <TextLink href={login()} className="text-[#1C398E]">
                                            Log in
                                        </TextLink>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

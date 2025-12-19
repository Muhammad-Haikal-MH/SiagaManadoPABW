import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { send } from '@/routes/verification';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Form, Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { edit } from '@/routes/profile';
import Layout from '../components/Layout';
import { swalCancelled, swalConfirm, swalSuccess } from '../components/Alert';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: edit().url,
    },
];

export default function Profile({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const { auth } = usePage<SharedData>().props;


    return (
        <Layout>
            <Head title="Profile settings" />

            <div className="gap-10 overflow-hidden flex items-center flex-col md:flex-row w-full mx-auto max-w-5xl">
                <div className="md:w-1/2 px-4 py-8 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href="/homepage"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Kembali</span>
                    </Link>

                    <div className="space-y-8">
                        {/* Profile Information Section */}
                        <div className="space-y-6">
                            <HeadingSmall
                                title="Profile information"
                                description="Update your name and email address"
                            />

                            <Form
                                {...ProfileController.update.form()}
                                options={{
                                    preserveScroll: true,
                                }}
                                onSuccess={() => swalSuccess("Your profile has been updated.")}
                                className="space-y-6"
                            >
                                {({ processing, recentlySuccessful, errors }) => (
                                    <>
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>

                                            <Input
                                                id="name"
                                                className="border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                defaultValue={auth.user.name}
                                                name="name"
                                                required
                                                autoComplete="name"
                                                placeholder="Full name"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.name}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email address</Label>

                                            <Input
                                                id="email"
                                                type="email"
                                                className="border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                defaultValue={auth.user.email}
                                                name="email"
                                                required
                                                autoComplete="username"
                                                placeholder="Email address"
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>

                                        {mustVerifyEmail &&
                                            auth.user.email_verified_at === null && (
                                                <div>
                                                    <p className="-mt-4 text-sm text-muted-foreground">
                                                        Your email address is
                                                        unverified.{' '}
                                                        <Link
                                                            href={send()}
                                                            as="button"
                                                            className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                                        >
                                                            Click here to resend the
                                                            verification email.
                                                        </Link>
                                                    </p>

                                                    {status ===
                                                        'verification-link-sent' && (
                                                        <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-500">
                                                            A new verification link has
                                                            been sent to your email
                                                            address.
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                        <div className="flex items-center gap-4">
                                            <Button
                                                disabled={processing}
                                                data-test="update-profile-button"
                                                className='bg-blue-300 rounded-xl cursor-pointer border-none hover:bg-blue-400 text-white'
                                            >
                                                Save
                                            </Button>



                                            {/* <Transition
                                                show={recentlySuccessful}
                                                enter="transition ease-in-out"
                                                enterFrom="opacity-0"
                                                leave="transition ease-in-out"
                                                leaveTo="opacity-0"
                                            >
                                                <p className="text-sm text-muted-foreground">
                                                    Saved
                                                </p>
                                            </Transition> */}
                                        </div>
                                    </>
                                )}
                            </Form>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border" />

                        {/* Delete User Section */}
                        <DeleteUser />
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex items-center justify-center p-6">
                    <img
                        src="/images/profile.png"
                        alt="profile"
                        className="w-auto h-auto max-w-[300px] md:max-w-md"
                    />
                </div>
            </div>
        </Layout>
    );
}





// import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
// import { send } from '@/routes/verification';
// import { type BreadcrumbItem, type SharedData } from '@/types';
// import { Transition } from '@headlessui/react';
// import { Form, Head, Link, usePage } from '@inertiajs/react';

// import DeleteUser from '@/components/delete-user';
// import HeadingSmall from '@/components/heading-small';
// import InputError from '@/components/input-error';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import AppLayout from '@/layouts/app-layout';
// import SettingsLayout from '@/layouts/settings/layout';
// import { edit } from '@/routes/profile';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Profile settings',
//         href: edit().url,
//     },
// ];

// export default function Profile({
//     mustVerifyEmail,
//     status,
// }: {
//     mustVerifyEmail: boolean;
//     status?: string;
// }) {
//     const { auth } = usePage<SharedData>().props;

//     return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//             <Head title="Profile settings" />

//             <SettingsLayout>
//                 <div className="space-y-6">
//                     <HeadingSmall
//                         title="Profile information"
//                         description="Update your name and email address"
//                     />

//                     <Form
//                         {...ProfileController.update.form()}
//                         options={{
//                             preserveScroll: true,
//                         }}
//                         className="space-y-6"
//                     >
//                         {({ processing, recentlySuccessful, errors }) => (
//                             <>
//                                 <div className="grid gap-2">
//                                     <Label htmlFor="name">Name</Label>

//                                     <Input
//                                         id="name"
//                                         className="mt-1 block w-full"
//                                         defaultValue={auth.user.name}
//                                         name="name"
//                                         required
//                                         autoComplete="name"
//                                         placeholder="Full name"
//                                     />

//                                     <InputError
//                                         className="mt-2"
//                                         message={errors.name}
//                                     />
//                                 </div>

//                                 <div className="grid gap-2">
//                                     <Label htmlFor="email">Email address</Label>

//                                     <Input
//                                         id="email"
//                                         type="email"
//                                         className="mt-1 block w-full"
//                                         defaultValue={auth.user.email}
//                                         name="email"
//                                         required
//                                         autoComplete="username"
//                                         placeholder="Email address"
//                                     />

//                                     <InputError
//                                         className="mt-2"
//                                         message={errors.email}
//                                     />
//                                 </div>

//                                 {mustVerifyEmail &&
//                                     auth.user.email_verified_at === null && (
//                                         <div>
//                                             <p className="-mt-4 text-sm text-muted-foreground">
//                                                 Your email address is
//                                                 unverified.{' '}
//                                                 <Link
//                                                     href={send()}
//                                                     as="button"
//                                                     className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
//                                                 >
//                                                     Click here to resend the
//                                                     verification email.
//                                                 </Link>
//                                             </p>

//                                             {status ===
//                                                 'verification-link-sent' && (
//                                                 <div className="mt-2 text-sm font-medium text-green-600">
//                                                     A new verification link has
//                                                     been sent to your email
//                                                     address.
//                                                 </div>
//                                             )}
//                                         </div>
//                                     )}

//                                 <div className="flex items-center gap-4">
//                                     <Button
//                                         disabled={processing}
//                                         data-test="update-profile-button"
//                                     >
//                                         Save
//                                     </Button>

//                                     <Transition
//                                         show={recentlySuccessful}
//                                         enter="transition ease-in-out"
//                                         enterFrom="opacity-0"
//                                         leave="transition ease-in-out"
//                                         leaveTo="opacity-0"
//                                     >
//                                         <p className="text-sm text-neutral-600">
//                                             Saved
//                                         </p>
//                                     </Transition>
//                                 </div>
//                             </>
//                         )}
//                     </Form>
//                 </div>

//                 <DeleteUser />
//             </SettingsLayout>
//         </AppLayout>
//     );
// }

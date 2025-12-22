import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { send } from '@/routes/verification';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Form, Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Eye, MoreVertical } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { edit } from '@/routes/profile';
import Layout from '../components/Layout';
import { swalCancelled, swalConfirm, swalDetailLaporan, swalSuccess } from '../components/Alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: edit().url,
    },
];

export default function Profile({
    mustVerifyEmail,
    status,
    laporans,
}: {
    mustVerifyEmail: boolean;
    status?: string;
    laporans: {
        data: any[];
        current_page: number;
        last_page: number;
        links: any[];
};
}) {
    const { auth } = usePage<SharedData>().props;

const handleDetail = (laporan: any) => {
  swalDetailLaporan(laporan);
};

    return (
        <Layout>
            <Head title="Profile settings" />

            <div className="gap-10 overflow-hidden flex items-center flex-col md:flex-row w-full mx-auto max-w-5xl">
                <div className="md:w-1/2 px-4 py-8 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Button
                        onClick={() => window.history.back()}
                        className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Kembali</span>
                    </Button>

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
                                                className="border-0 border-b border-b-[#1C398E] dark:border-b-[#F1F5F9] focus:rounded-lg text-[#1C398E] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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
                                                className="border-0 border-b border-b-[#1C398E] dark:border-b-[#F1F5F9] focus:rounded-lg text-[#1C398E] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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
                                                className='bg-blue-300 rounded-xl dark:bg-[#3B82F6] dark:text-[#F1F5F9] cursor-pointer border-none hover:bg-blue-400 text-white'
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
                    {laporans.data.length > 0 ? (
                        <Card className="border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20 w-full">
                        <CardHeader>
                            <CardTitle className="text-[#1C398E] dark:text-[#F1F5F9]">
                            Data Pelaporan
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="border-b border-blue-300 dark:border-[#1C398E]">
                                    <th className="text-left py-3 px-4 text-sm font-semibold">
                                    Name Pelapor
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold">
                                    Jenis Bencana
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold">
                                    Lokasi
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold">
                                    Status
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold">
                                    Date
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold">
                                    Actions
                                    </th>
                                </tr>
                                </thead>

                                <tbody>
                                {laporans.data.map((row: any) => (
                                    <tr
                                    key={row.id}
                                    className="border-b border-[#CFE6FF] hover:bg-gray-50 dark:hover:bg-[#1C398E]/30 dark:border-[#1C398E]"
                                    >
                                    <td className="py-3 px-4 text-sm">{row.nama}</td>
                                    <td className="py-3 px-4 text-sm">{row.jenis}</td>
                                    <td className="py-3 px-4 text-sm">{row.lokasi}</td>
                                    <td className="py-3 px-4">
                                        <span
                                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            row.status === "menunggu"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : row.status === "diverifikasi"
                                            ? "bg-blue-100 text-blue-800"
                                            : row.status === "diproses"
                                            ? "bg-purple-100 text-purple-800"
                                            : row.status === "selesai"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                        }`}
                                        >
                                        {row.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-sm">{row.tanggal}</td>
                                    <td className="py-3 px-4">
                                        <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="sm" variant="ghost">
                                            <MoreVertical size={16} />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            <DropdownMenuItem
                                            onClick={() => handleDetail(row)}
                                            className="cursor-pointer"
                                            >
                                            <Eye size={16} className="mr-2" />
                                            Detail
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>

                            <Pagination className="mt-6">
                            <PaginationContent>
                                {/*balik */}
                                <PaginationItem>
                                <PaginationPrevious
                                    href={
                                    laporans.current_page > 1
                                        ? `?page=${laporans.current_page - 1}`
                                        : undefined
                                    }
                                />
                                </PaginationItem>

                                {/* halaman sih kayanya */}
                                {Array.from({ length: laporans.last_page }).map((_, i) => {
                                const page = i + 1;
                                return (
                                    <PaginationItem key={page} >
                                    <PaginationLink
                                        href={`?page=${page}`}
                                        isActive={page === laporans.current_page}
                                        className='rounded-xl'
                                    >
                                        {page}
                                    </PaginationLink>
                                    </PaginationItem>
                                );
                                })}

                                {/* lanjut */}
                                <PaginationItem>
                                <PaginationNext
                                    href={
                                    laporans.current_page < laporans.last_page
                                        ? `?page=${laporans.current_page + 1}`
                                        : undefined
                                    }
                                />
                                </PaginationItem>
                            </PaginationContent>
                            </Pagination>
                        </CardContent>
                        </Card>
                    ) : (
                        <img
                        src="/images/profile.png"
                        alt="profile illustration"
                        className="w-auto h-auto max-w-[300px] md:max-w-md"
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}



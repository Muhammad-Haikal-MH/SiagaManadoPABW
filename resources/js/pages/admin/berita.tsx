import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import { CheckCircle, Eye, FileText, MoreVertical, Trash2 } from 'lucide-react';
import { useState } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import Swal from 'sweetalert2';
import {
    swalCancelled,
    swalConfirm,
    swalDetailBerita,
    swalSuccess,
} from '../components/Alert';
import BeritaModal from '../components/beritaModal';
import AdminSidebar from '../components/Sidebar';
import { adminMenus } from './admin.constant';

interface propss {
    stats: {
        totalBerita: number;
        beritaDraft: number;
        beritaPublished: number;
    };
    beritas: Array<any>;
    chart: {
        total: { bulan: number; total: number }[];
        published: { bulan: number; total: number }[];
    };
}

const DashboardBerita = (pros: propss) => {
    const { stats, beritas, chart } = pros;
    const [search, setSearch] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [open, setOpen] = useState(false);

    const filteredNews = beritas.filter((berita) => {
        return berita.judul.toLowerCase().includes(search.toLowerCase());
    });

    // Data untuk cards
    const statsData = [
        { title: 'Total Berita', value: stats.totalBerita, icon: FileText },
        { title: 'Berita Draft', value: stats.beritaDraft, icon: FileText },
        {
            title: 'Berita Published',
            value: stats.beritaPublished,
            icon: CheckCircle,
        },
    ];

    const bulanMap = [
        '',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Okt',
        'Nov',
        'Des',
    ];

    const chartTotalBerita = chart.total.map((item) => ({
        name: bulanMap[item.bulan],
        value: item.total,
    }));

    const chartBeritaPublished = chart.published.map((item) => ({
        name: bulanMap[item.bulan],
        value: item.total,
    }));

    const handleUpdate = async (id: number) => {
        const result = await swalConfirm(
            'Are you sure to publish this berita?',
        );

        if (result.isConfirmed) {
            router.patch(
                `/admin/berita/${id}/status`,
                { status: 'published' },
                {
                    onSuccess: () => {
                        swalSuccess('Berita berhasil dipublish!');
                    },
                    onError: () => {
                        Swal.fire('Error', 'Gagal mempublish berita', 'error');
                    },
                },
            );
        } else {
            swalCancelled();
        }
    };

    const handleDetail = (berita: any) => {
        swalDetailBerita(berita);
    };

    const handleDelete = async (id: number) => {
        const result = await swalConfirm('Are you sure to remove this berita?');

        if (result.isConfirmed) {
            router.delete(`/admin/berita/${id}`, {
                onSuccess: () => {
                    swalSuccess('Berita berhasil dihapus!');
                },
                onError: () => {
                    Swal.fire('Error', 'Gagal meghapus berita', 'error');
                },
            });
        } else {
            swalCancelled();
        }
    };

    return (
        <div className="relative h-screen">
            {/* Sidebar */}
            <AdminSidebar menus={adminMenus} onToggle={setSidebarOpen} />

            {/* Main Content */}
            <main
                className={cn(
                    "transition-all duration-300 min-h-screen",
                    sidebarOpen
                    ? "ml-0 md:ml-64"
                    : "ml-20"
                )}
            >
                <div className="p-8">
                    {/* Stats Cards */}
                    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {statsData.map((stat, index) => (
                            <Card
                                key={index}
                                className="border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="mb-1 font-medium text-[#1C398E] dark:text-[#F1F5F9]">
                                                {stat.title}
                                            </p>
                                            <h3 className="text-2xl font-bold text-[#1C398E] dark:text-[#F1F5F9]">
                                                {stat.value}
                                            </h3>
                                        </div>
                                        <div className={`rounded-lg p-3`}>
                                            <stat.icon
                                                size={24}
                                                className="text-[#1C398E] dark:text-[#F1F5F9]"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Charts */}
                    <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <Card className="border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20">
                            <CardHeader>
                                <CardTitle className="text-[#1C398E] dark:text-[#F1F5F9]">
                                    Statistik Total Berita
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={chartTotalBerita}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis allowDecimals={false} />
                                        <Tooltip labelClassName="text-[#1C398E]" />
                                        <Bar
                                            dataKey="value"
                                            fill="#3b82f6"
                                            radius={[8, 8, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20">
                            <CardHeader>
                                <CardTitle className="text-[#1C398E] dark:text-[#F1F5F9]">
                                    Statistik Berita di Publish
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={chartBeritaPublished}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis allowDecimals={false} />
                                        <Tooltip labelClassName="text-[#1C398E]" />
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#8b5cf6"
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Table */}
                    <Card className="border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20">
                        <CardHeader>
                            <CardTitle className="px-2 text-[#1C398E] dark:text-[#F1F5F9]">
                                Data Berita
                            </CardTitle>
                            <div className="flex flex-col md:flex-row justify-between py-3 gap-4 ">
                                <Input
                                    type="search"
                                    className="w-full md:w-52 rounded-2xl text-[#1C398E] placeholder:text-blue-500 dark:text-[#F1F5F9] dark:placeholder:text-[#F1F5F9]"
                                    placeholder="cari berita"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <Button
                                    className="cursor-pointer rounded-xl bg-[#CFE6FF] px-4 py-5 text-[#1C398E] hover:bg-blue-300 dark:bg-[#1E293B] dark:text-[#F1F5F9] dark:hover:bg-[#1C398E]"
                                    onClick={() => setOpen(true)}
                                >
                                    Tambahkan Berita
                                </Button>
                                <BeritaModal open={open} onClose={setOpen} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-blue-300 dark:border-[#1C398E]">
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">
                                                Judul Berita
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">
                                                lokasi
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">
                                                jenis
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">
                                                Status
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">
                                                Tanggal
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredNews.length > 0 ? (
                                            filteredNews.map((row) => (
                                                <tr
                                                    key={row.id}
                                                    className="border-b border-[#CFE6FF] transition-colors duration-200 hover:bg-gray-50 dark:border-[#1C398E] dark:hover:bg-[#1C398E]/30"
                                                >
                                                    <td className="px-4 py-3 text-sm text-[#1C398E] dark:text-[#F1F5F9]">
                                                        {row.judul}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-[#1C398E] dark:text-[#F1F5F9]">
                                                        {row.lokasi}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-[#1C398E] dark:text-[#F1F5F9]">
                                                        {row.jenis}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span
                                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                                row.status ===
                                                                'draft'
                                                                    ? 'bg-yellow-100 text-yellow-800'
                                                                    : row.status ===
                                                                        'published'
                                                                      ? 'bg-green-100 text-green-800'
                                                                      : 'bg-red-100 text-red-800'
                                                            }`}
                                                        >
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-[#1C398E] dark:text-[#F1F5F9]">
                                                        {row.tanggal}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center gap-2">
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={() =>
                                                                    handleUpdate(
                                                                        row.id,
                                                                    )
                                                                }
                                                                className="cursor-pointer rounded-xl bg-[#CFE6FF] text-[#1C398E] hover:bg-blue-300 dark:bg-[#1E293B] dark:text-[#F1F5F9] dark:hover:bg-[#1C398E]"
                                                            >
                                                                <CheckCircle
                                                                    size={16}
                                                                />
                                                                <span>
                                                                    Publish
                                                                </span>
                                                            </Button>

                                                            <DropdownMenu
                                                                modal={false}
                                                            >
                                                                <DropdownMenuTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        size="sm"
                                                                        variant="ghost"
                                                                        className="rounded-2xl hover:bg-blue-100 dark:hover:bg-white/10"
                                                                    >
                                                                        <MoreVertical
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                    </Button>
                                                                </DropdownMenuTrigger>
                                                                <DropdownMenuContent
                                                                    align="start"
                                                                    className="z-50 w-40 rounded-xl border-none bg-white/80"
                                                                >
                                                                    <DropdownMenuItem
                                                                        onClick={() =>
                                                                            handleDetail(
                                                                                row,
                                                                            )
                                                                        }
                                                                        className="cursor-pointer text-[#1C398E] focus:rounded-xl focus:bg-blue-300 focus:text-white"
                                                                    >
                                                                        <Eye
                                                                            size={
                                                                                16
                                                                            }
                                                                            className="mr-2"
                                                                        />
                                                                        Detail
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                row.id,
                                                                            )
                                                                        }
                                                                        className="cursor-pointer text-red-400 focus:rounded-xl focus:bg-red-400 focus:text-white"
                                                                    >
                                                                        <Trash2
                                                                            size={
                                                                                16
                                                                            }
                                                                            className="mr-2"
                                                                        />
                                                                        Delete
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={6}
                                                    className="py-10 text-center text-gray-400 italic"
                                                >
                                                    Berita dengan kata kunci "
                                                    {search}" tidak ditemukan.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default DashboardBerita;

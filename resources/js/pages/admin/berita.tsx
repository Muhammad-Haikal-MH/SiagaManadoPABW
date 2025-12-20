import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Home, Users, FileText, Settings, Menu, X, CheckCircle, XCircle, MoreVertical, Eye, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import { swalCancelled, swalConfirm, swalDetailBerita, swalSuccess } from '../components/Alert';
import Swal from 'sweetalert2';
import AdminSidebar from '../components/Sidebar';
import { adminMenus } from './admin.constant';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import BeritaModal from '../components/beritaModal';

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
    }
}

const DashboardBerita = (pros: propss) => {
    const { stats, beritas, chart  } = pros;
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [open, setOpen] = useState(false);


  // Data untuk cards
  const statsData = [
  { title: 'Total Berita', value: stats.totalBerita, icon: FileText },
  { title: 'Berita Draft', value: stats.beritaDraft, icon: FileText },
  { title: 'Berita Published', value: stats.beritaPublished, icon: CheckCircle },
];



  const bulanMap = [
    "", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
  ];

    const chartTotalBerita = chart.total.map(item => ({
        name: bulanMap[item.bulan],
        value: item.total,
    }));

    const chartBeritaPublished = chart.published.map(item => ({
        name: bulanMap[item.bulan],
        value: item.total,
    }));


  const handleUpdate = async (id: number) => {
    const result = await swalConfirm("Are you sure to publish this berita?");

    if (result.isConfirmed) {
        router.patch(
        `/admin/berita/${id}/status`,
        { status: 'published' },
        {
            onSuccess: () => {
            swalSuccess("Berita berhasil dipublish!");
            },
            onError: () => {
            Swal.fire("Error", "Gagal mempublish berita", "error");
            },
        }
        );
    } else {
        swalCancelled();
    }
  };


const handleDetail = (berita: any) => {
  swalDetailBerita(berita);
};

  const handleDelete = async (id: number) => {

    const result = await swalConfirm("Are you sure to remove this berita?");

    if (result.isConfirmed) {
        router.delete(
        `/admin/berita/${id}`,
        {
            onSuccess: () => {
            swalSuccess("Berita berhasil dihapus!");
            },
            onError: () => {
            Swal.fire("Error", "Gagal meghapus berita", "error");
            },
        }
        );
    } else {
        swalCancelled();
    }

  };


  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <AdminSidebar menus={adminMenus} onToggle={setSidebarOpen} />

      {/* Main Content */}
      <main className={cn(
        " transition-all duration-300 w-full",
          sidebarOpen
          ? "md:ml-0 "
          : "md:ml-20"
      )}>
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <Card key={index} className='border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20'>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#1C398E] dark:text-[#F1F5F9] mb-1">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-[#1C398E] dark:text-[#F1F5F9]">{stat.value}</h3>
                    </div>
                    <div className={`p-3 rounded-lg`}>
                      <stat.icon size={24} className="text-[#1C398E] dark:text-[#F1F5F9]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className='border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20'>
              <CardHeader>
                <CardTitle className='text-[#1C398E] dark:text-[#F1F5F9]'>Statistik Total Berita</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartTotalBerita} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip labelClassName='text-[#1C398E]' />
                    <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className='border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20'>
              <CardHeader>
                <CardTitle className='text-[#1C398E] dark:text-[#F1F5F9]'>Statistik Berita di Publish</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartBeritaPublished}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip labelClassName='text-[#1C398E]' />
                    <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          

          {/* Table */}
          <Card className='border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20'>
            <CardHeader >
              <CardTitle className='text-[#1C398E] px-2 dark:text-[#F1F5F9]'>Data Berita</CardTitle>
              <div className='flex justify-between pr-10 py-3'>
                <Input type='search' className='w-52 rounded-2xl text-[#1C398E] dark:text-[#F1F5F9] placeholder:text-blue-500 dark:placeholder:text-[#F1F5F9]' placeholder='cari berita' />
                <Button className='px-4 py-5 bg-[#CFE6FF] text-[#1C398E] dark:text-[#F1F5F9] dark:bg-[#1E293B] cursor-pointer hover:bg-blue-300 dark:hover:bg-[#1C398E] rounded-xl ' onClick={() => setOpen(true)}>Tambahkan Berita</Button>
                <BeritaModal open={open} onClose={setOpen} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-300 dark:border-[#1C398E]">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Judul Berita</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">lokasi</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">jenis</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Tanggal</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beritas.map((row) => (
                      <tr key={row.id} className="border-b border-[#CFE6FF] dark:border-[#1C398E] hover:bg-gray-50 dark:hover:bg-[#1C398E]/30 transition-colors duration-200">
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.judul}</td>
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.lokasi}</td>
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.jenis}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            row.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : row.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'

                        }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.tanggal}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleUpdate(row.id)}
                              className=" text-[#1C398E] dark:text-[#F1F5F9] bg-[#CFE6FF] dark:bg-[#1E293B] hover:bg-blue-300 dark:hover:bg-[#1C398E] cursor-pointer rounded-xl"
                            >
                              <CheckCircle size={16} />
                              <span>Publish</span>
                            </Button>

                            <DropdownMenu modal={false}>
                              <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost" className="hover:bg-blue-100 dark:hover:bg-white/10  rounded-2xl">
                                  <MoreVertical size={16} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="start" className='w-40 rounded-xl z-50 bg-white/80 border-none'>
                                <DropdownMenuItem onClick={() => handleDetail(row)} className='cursor-pointer text-[#1C398E]  focus:bg-blue-300 focus:text-white focus:rounded-xl'>
                                  <Eye size={16} className="mr-2" />
                                  Detail
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleDelete(row.id)}
                                  className="text-red-400 focus:bg-red-400 focus:text-white focus:rounded-xl cursor-pointer"
                                >
                                  <Trash2 size={16} className="mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))}
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

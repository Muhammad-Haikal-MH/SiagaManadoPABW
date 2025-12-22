    import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Home, Users, FileText, Settings, Menu, X, CheckCircle, XCircle, MoreVertical, Eye, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { swalCancelled, swalConfirm, swalDetailLaporan, swalSuccess } from '../components/Alert';
import { router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import BpbdSidebar from '../components/SidebarBpbd';
import { FcProcess } from "react-icons/fc";
import { useState } from 'react';
import { cn } from '@/lib/utils';


interface propss {
    stats: {
        totalLaporan: number;
        laporanBaru: number;
        laporanDiproses: number;
        laporanSelesai: number;
    };
    laporans: Array<any>;
    chart: {
    total: { bulan: number; total: number }[];
    selesai: { bulan: number; total: number }[];
    }
}

const DashboardBpbd = (props:propss) => {
    const { stats, laporans, chart  } = props;
    const [sidebarOpen, setSidebarOpen] = useState(true);


const statsData = [
  { title: 'Total Laporan', value: stats.totalLaporan, icon: Users },
  { title: 'Laporan Baru', value: stats.laporanBaru, icon: FileText },
  { title: 'Laporan Diproses', value: stats.laporanDiproses, icon: FileText },
  { title: 'Laporan Selesai', value: stats.laporanSelesai, icon: CheckCircle },
];

const bulanMap = [
    "", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
  ];

const chartTotalLaporan = chart.total.map(item => ({
    name: bulanMap[item.bulan],
    value: item.total,
}));

const chartLaporanSelesai = chart.selesai.map(item => ({
     name: bulanMap[item.bulan],
    value: item.total,
}));

 const BpbdMenus = [
    { label: "Dashboard", href: "/bpbd/homepage", icon: Home },
];

 const handleSelesai = async (id: number) => {
    const result = await swalConfirm("Are you sure you want to complete this report ?");

    if (result.isConfirmed) {
        router.patch(
        `/bpbd/laporan/${id}/status`,
        { status: 'selesai' },
        {
            onSuccess: () => {
            swalSuccess("Laporan berhasil diselesaikan!");
            },
            onError: () => {
            Swal.fire("Error", "Gagal menyelesaikan laporan", "error");
            },
        }
        );
    } else {
        swalCancelled();
    }
  };

 const handleDiProses = async (id: number) => {
    const result = await swalConfirm("Are you sure you want to process this report ?");

    if (result.isConfirmed) {
        router.patch(
        `/bpbd/laporan/${id}/status`,
        { status: 'diproses' },
        {
            onSuccess: () => {
            swalSuccess("Laporan berhasil diproses!");
            },
            onError: () => {
            Swal.fire("Error", "Gagal memproses laporan", "error");
            },
        }
        );
    } else {
        swalCancelled();
    }
  };

const handleDetail = (laporan: any) => {
  swalDetailLaporan(laporan);
};


  return (
    <div className="relative h-screen ">
      {/* Sidebar */}
      <BpbdSidebar menus={BpbdMenus} onToggle={setSidebarOpen}  />

      {/* Main Content */}
      <main className={cn(
                "transition-all duration-300 min-h-screen",
                sidebarOpen
                ? "ml-0 md:ml-64"
                : "ml-20"
            )}>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <Card key={index} className='border-none shadow-xl shadow-[#CFE6FF] dark:shadow-black/20'>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#1C398E] mb-1 dark:text-[#F1F5F9]">{stat.title}</p>
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
                <CardTitle className='text-[#1C398E] dark:text-[#F1F5F9]'>Laporan Baru</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartTotalLaporan} >
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
                <CardTitle className='text-[#1C398E] dark:text-[#F1F5F9]'>Laporan Selesai</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartLaporanSelesai}>
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
            <CardHeader>
              <CardTitle className='text-[#1C398E] dark:text-[#F1F5F9]'>Data Pelaporan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-300 dark:border-[#1C398E]">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Name Pelapor</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Jenis Bencana</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Lokasi</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E] dark:text-[#F1F5F9]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laporans.map((row) => (
                      <tr key={row.id} className="border-b border-[#CFE6FF] hover:bg-gray-50 dark:hover:bg-[#1C398E]/30 dark:border-[#1C398E]">
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.nama}</td>
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.jenis}</td>
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.lokasi}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                row.status === 'diverifikasi'
                                ? 'bg-blue-100 text-blue-800'
                                : row.status === 'diproses'
                                ? 'bg-purple-100 text-purple-800'
                                : row.status === 'selesai'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-[#1C398E] dark:text-[#F1F5F9]">{row.tanggal}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">

                            <DropdownMenu modal={false}>
                              <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost" className="hover:bg-blue-100 rounded-2xl  cursor-pointer hover:text-[#1C398E] dark:hover:bg-white/10 dark:hover:text-[#F1F5F9]">
                                  <MoreVertical size={16} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="start" className='w-40 rounded-xl z-50 bg-white/80 border-none'>
                                <DropdownMenuItem onClick={() => handleDetail(row)} className='cursor-pointer text-[#1C398E] focus:bg-blue-300 focus:text-white focus:rounded-xl'>
                                  <Eye size={16} className="mr-2" />
                                  Detail
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                  onClick={() => handleDiProses(row.id)}
                                  className="text-[#1C398E] focus:bg-blue-300 focus:text-white focus:rounded-xl cursor-pointer"
                                >
                                  <FcProcess  size={16} className="mr-2" />
                                  Diproses
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                  onClick={() => handleSelesai(row.id)}
                                  className="text-[#1C398E] focus:bg-blue-300 focus:text-white focus:rounded-xl cursor-pointer"
                                >
                                  <CheckCircle size={16} className="mr-2" />
                                  Selesai
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

export default DashboardBpbd;

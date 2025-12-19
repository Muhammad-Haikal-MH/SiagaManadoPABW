import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Home, Users, FileText, Settings, Menu, X, CheckCircle, XCircle, MoreVertical, Eye, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { router } from '@inertiajs/react';
import { swalCancelled, swalConfirm, swalDetailLaporan, swalSuccess } from '../components/Alert';
import Swal from 'sweetalert2';
import AdminSidebar from '../components/Sidebar';

interface propss {
    stats: {
        totalUsers: number;
        totalLaporan: number;
        laporanBaru: number;
        laporanSelesai: number;
    };
    laporans: Array<any>;
    chart: {
    total: { bulan: number; total: number }[];
    selesai: { bulan: number; total: number }[];
    }
}

const DashboardAdmin = (pros: propss) => {
    const { stats, laporans, chart  } = pros;

  // Data untuk cards
  const statsData = [
  { title: 'Total Users', value: stats.totalUsers, icon: Users },
  { title: 'Total Laporan', value: stats.totalLaporan, icon: FileText },
  { title: 'Laporan Baru', value: stats.laporanBaru, icon: FileText },
  { title: 'Laporan Selesai', value: stats.laporanSelesai, icon: CheckCircle },
];


  // Data untuk chart
//   const chartData = [
//     { name: 'Jan', value: 4000, revenue: 2400 },
//     { name: 'Feb', value: 3000, revenue: 1398 },
//     { name: 'Mar', value: 2000, revenue: 9800 },
//     { name: 'Apr', value: 2780, revenue: 3908 },
//     { name: 'May', value: 1890, revenue: 4800 },
//     { name: 'Jun', value: 2390, revenue: 3800 },
//     { name: 'Jul', value: 3490, revenue: 4300 }
//   ];

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


    const adminMenus = [
        { label: "Dashboard", href: "/admin", icon: Home },
        { label: "Laporan", href: "/admin/laporan", icon: FileText },
        { label: "Users", href: "/admin/users", icon: Users },
    ];

  const handleVerify = async (id: number) => {
    const result = await swalConfirm("Are you sure to verify this laporan?");

    if (result.isConfirmed) {
        router.patch(
        `/admin/laporan/${id}/status`,
        { status: 'diverifikasi' },
        {
            onSuccess: () => {
            swalSuccess("Laporan berhasil diverifikasi!");
            },
            onError: () => {
            Swal.fire("Error", "Gagal memverifikasi laporan", "error");
            },
        }
        );
    } else {
        swalCancelled();
    }
  };


  const handleReject = async (id: number) => {
        const result = await swalConfirm("Are you sure to reject this laporan?");

    if (result.isConfirmed) {
        router.patch(
        `/admin/laporan/${id}/status`,
        { status: 'ditolak' },
        {
            onSuccess: () => {
            swalSuccess("Laporan berhasil ditolak!");
            },
            onError: () => {
            Swal.fire("Error", "Gagal memverifikasi laporan", "error");
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

  const handleDelete = async (id: number) => {

    const result = await swalConfirm("Are you sure to remove this laporan?");

    if (result.isConfirmed) {
        router.delete(
        `/admin/laporan/${id}`,
        {
            onSuccess: () => {
            swalSuccess("Laporan berhasil dihapus!");
            },
            onError: () => {
            Swal.fire("Error", "Gagal meghapus laporan", "error");
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
      <AdminSidebar menus={adminMenus} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <Card key={index} className='border-none shadow-xl shadow-[#CFE6FF]'>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#1C398E] mb-1">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-[#1C398E]">{stat.value}</h3>
                    </div>
                    <div className={`p-3 rounded-lg`}>
                      <stat.icon size={24} className="text-[#1C398E]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className='border-none shadow-xl shadow-[#CFE6FF]'>
              <CardHeader>
                <CardTitle className='text-[#1C398E]'>Statistik Total Laporan</CardTitle>
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

            <Card className='border-none shadow-xl shadow-[#CFE6FF]'>
              <CardHeader>
                <CardTitle className='text-[#1C398E]'>Statistik laporan Selesai</CardTitle>
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
          <Card className='border-none shadow-xl shadow-[#CFE6FF]'>
            <CardHeader>
              <CardTitle className='text-[#1C398E]'>Data Pelaporan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-300">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E]">Name Pelapor</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E]">Jenis Bencana</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E]">Lokasi</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E]">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E]">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-[#1C398E]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laporans.map((row) => (
                      <tr key={row.id} className="border-b border-[#CFE6FF] hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-[#1C398E]">{row.nama}</td>
                        <td className="py-3 px-4 text-sm text-[#1C398E]">{row.jenis}</td>
                        <td className="py-3 px-4 text-sm text-[#1C398E]">{row.lokasi}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            row.status === 'menunggu'
                            ? 'bg-yellow-100 text-yellow-800'
                            : row.status === 'diverifikasi'
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
                        <td className="py-3 px-4 text-sm text-[#1C398E]">{row.tanggal}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleVerify(row.id)}
                              className=" text-[#1C398E] bg-[#CFE6FF] hover:bg-blue-300 cursor-pointer rounded-xl"
                            >
                              <CheckCircle size={16} />
                              <span>Verifikasi</span>
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleReject(row.id)}
                              className="text-[#1C398E] bg-red-300 hover:bg-red-400 cursor-pointer rounded-xl"
                            >
                              <XCircle size={16} />
                              <span>Tolak</span>
                            </Button>
                            <DropdownMenu modal={false}>
                              <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost" className="hover:bg-blue-100 rounded-2xl">
                                  <MoreVertical size={16} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="start" className='w-40 rounded-xl z-50 bg-white/80 border-none'>
                                <DropdownMenuItem onClick={() => handleDetail(row)} className='cursor-pointer text-[#1C398E] focus:bg-blue-300 focus:text-white focus:rounded-xl'>
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

export default DashboardAdmin;

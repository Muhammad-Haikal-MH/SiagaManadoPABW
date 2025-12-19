<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Laporan;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
     public function index()
    {
        $laporanPerBulan = Laporan::select(
            DB::raw("MONTH(tanggal) as bulan"),
            DB::raw("COUNT(*) as total")
        )->groupBy('bulan')->orderBy('bulan')->get();

        $laporanSelesaiPerBulan = Laporan::select(
            DB::raw("MONTH(tanggal) as bulan"),
            DB::raw("COUNT(*) as total")
        )->where('status', 'selesai')->groupBy('bulan')->orderBy('bulan')->get();

        return Inertia::render('admin/homepage', [
            'stats' => [
                'totalUsers' => User::count(),
                'totalLaporan' => Laporan::count(),
                'laporanBaru' => Laporan::where('status', 'menunggu')->count(),
                'laporanSelesai' => Laporan::where('status', 'selesai')->count(),
            ],
            'laporans' => Laporan::latest()->get(),
            'chart' => [
                'total' => $laporanPerBulan,
                'selesai' => $laporanSelesaiPerBulan,
            ],
        ]);
    }

    public function updateStatus(Laporan $laporan)
    {
        request()->validate([
            'status' => 'required|in:menunggu,diverifikasi,ditolak,diproses,selesai'
        ]);

        $laporan->update([
            'status' => request('status')
        ]);

        return back()->with('success', 'Status diperbarui');
    }

    public function destroy(Laporan $laporan)
    {
        $laporan->delete();
        return back()->with('success', 'Laporan dihapus');
    }
}

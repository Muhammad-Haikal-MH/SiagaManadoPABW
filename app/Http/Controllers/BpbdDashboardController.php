<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BpbdDashboardController extends Controller
{
    public function index()
    {

        $laporanPerBulan = Laporan::select(
            DB::raw("MONTH(tanggal) as bulan"),
            DB::raw("COUNT(*) as total")
        )->where('status', 'diverifikasi')->groupBy('bulan')->orderBy('bulan')->get();

        $laporanSelesaiPerBulan = Laporan::select(
            DB::raw("MONTH(tanggal) as bulan"),
            DB::raw("COUNT(*) as total")
        )->where('status', 'selesai')->groupBy('bulan')->orderBy('bulan')->get();

        return Inertia::render('bpbd/index', [
            'stats' => [
                'totalLaporan'    => Laporan::whereIn('status', [
                    'diverifikasi',
                    'diproses',
                    'selesai'
                ])->count(),
                'laporanBaru'     => Laporan::where('status', 'diverifikasi')->count(),
                'laporanDiproses'  => Laporan::where('status', 'diproses')->count(),
                'laporanSelesai'   => Laporan::where('status', 'selesai')->count(),
            ],

            // BPBD LIHAT SEMUA LAPORAN YANG SUDAH DIVERIFIKASI
            'laporans' => Laporan::whereIn('status', [
                'diverifikasi',
                'diproses',
                'selesai'
            ])->latest()->get(),


            'chart' => [
                'total' => $laporanPerBulan,
                'selesai' => $laporanSelesaiPerBulan,
            ],
        ]);
    }

    public function updateStatus(Request $request, Laporan $laporan)
    {
        //  TOLAK JIKA BELUM DIVERIFIKASI
        if ($laporan->status !== 'diverifikasi' && $laporan->status !== 'diproses') {
            abort(403, 'Laporan belum diverifikasi');
        }

        $request->validate([
            'status' => 'required|in:diproses,selesai',
        ]);

        if ($laporan->status === 'diverifikasi' && $request->status !== 'diproses') {
            abort(403, 'Status tidak valid');
        }

        if ($laporan->status === 'diproses' && $request->status !== 'selesai') {
            abort(403, 'Status tidak valid');
        }

        $laporan->update([
            'status' => $request->status,
        ]);

        return back()->with('success', 'Status laporan diperbarui');
    }
}

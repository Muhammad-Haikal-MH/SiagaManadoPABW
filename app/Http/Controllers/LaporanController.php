<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class LaporanController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nama'     => 'required|string|max:255',
            'no_telp'  => 'required|string|max:20',
            'lokasi'   => 'required|string',
            'jenis'    => 'required|string',
            'tanggal'  => 'required|date',
            'deskripsi' => 'required|string',
            'foto'     => 'nullable|image|max:2048',
        ]);

        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->store('laporan', 'public');
        }

        $laporan = Laporan::create([
            'nama'      => $request->nama,
            'telp'      => $request->no_telp,
            'lokasi'    => $request->lokasi,
            'jenis'     => $request->jenis,
            'tanggal'   => $request->tanggal,
            'deskripsi' => $request->deskripsi,
            'foto'      => $fotoPath,

            //  AMBIL USER LOGIN
            'user_id'   => Auth::id(),

            'petugas_id'=> null,
            'status'    => 'menunggu',
        ]);

        if ($request->expectsJson() || $request->is('api/*')) {
            return response()->json([
                'message' => 'Laporan berhasil dikirim melalui API',
                'data' => $laporan
            ], 201);
        }

        return back()->with('success', 'Laporan berhasil dikirim');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class LaporanController extends Controller
{
    public function store(Request $request)
    {
        // VALIDASI MANUAL (biar JSON)
        $validator = Validator::make($request->all(), [
            'nama'      => 'required|string|max:255',
            'no_telp'   => 'required|string|max:20',
            'lokasi'    => 'required|string',
            'jenis'     => 'required|string',
            'tanggal'   => 'required|date',
            'deskripsi' => 'required|string',
            'foto'      => 'nullable|image|max:2048',
        ], [
            'nama.required' => 'Nama wajib diisi',
            'no_telp.required' => 'Nomor telepon wajib diisi',
            'lokasi.required' => 'Lokasi wajib diisi',
            'jenis.required' => 'Jenis bencana wajib diisi',
            'tanggal.required' => 'Tanggal wajib diisi',
            'deskripsi.required' => 'Deskripsi wajib diisi',
        ]);

        // KALAU VALIDASI GAGAL → RETURN JSON
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validasi gagal',
                'errors'  => $validator->errors()
            ], 422);
        }

        // UPLOAD FOTO
        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->store('laporan', 'public');
        }

        // SIMPAN DATA
        $laporan = Laporan::create([
            'nama'      => $request->nama,
            'telp'      => $request->no_telp,
            'lokasi'    => $request->lokasi,
            'jenis'     => $request->jenis,
            'tanggal'   => $request->tanggal,
            'deskripsi' => $request->deskripsi,
            'foto'      => $fotoPath,
            'user_id'   => Auth::id(),
            'petugas_id'=> null,
            'status'    => 'menunggu',
        ]);

        // RESPONSE SUKSES JSON
        return response()->json([
            'success' => true,
            'message' => 'Laporan berhasil dikirim',
            'data'    => $laporan
        ], 201);
    }

    public function index()
    {
        $laporans = Laporan::latest()->get();
        return response()->json([
            'success' => true,
            'data' => $laporans
        ]);
    }
}

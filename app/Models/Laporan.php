<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Berita;


class Laporan extends Model
{
    protected $table = 'laporans';

    protected $fillable = [
        'foto',
        'lokasi',
        'deskripsi',
        'user_id',
        'petugas_id',
        'nama',
        'telp',
        'jenis',
        'tanggal',
        'status'
    ];

     // pelapor
    public function pelapor()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // petugas bpbd
    public function petugas()
    {
        return $this->belongsTo(User::class, 'petugas_id');
    }

    public function berita()
    {
        return $this->hasOne(Berita::class);
    }



}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    protected $fillable = [
        'judul',
        'deskripsi',
        'foto',
        'lokasi',
        'jenis',
        'tanggal',
        'status',
        'user_id',
    ];


    public function admin()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

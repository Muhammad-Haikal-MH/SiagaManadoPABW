<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('laporans', function (Blueprint $table) {
                $table->id();

                $table->string('foto')->nullable();
                $table->string('lokasi');
                $table->text('deskripsi');

                $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
                $table->foreignId('petugas_id')->nullable()->constrained('users')->nullOnDelete();;

                $table->string('nama');
                $table->string('telp');

                $table->string('jenis');
                $table->dateTime('tanggal');

                $table->enum('status', ['menunggu', 'diverifikasi', 'ditolak', 'diproses','selesai'])->default('menunggu');

                $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laporans');
    }
};

<?php

namespace App\Http\Controllers;
use App\Models\Berita;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BeritaController extends Controller
{
    
    public function store(Request $request)
{
    $validated = $request->validate([
        'judul' => 'required|string|max:255',
        'deskripsi' => 'required|string',
        'lokasi' => 'required|string',
        'jenis' => 'required|string',
        'tanggal' => 'required|date',
        'foto' => 'nullable|image|max:2048',
    ]);

    $validated['foto'] =
        $request->file('foto')?->store('berita', 'public');

    $validated['status'] = 'draft';
    $validated['user_id'] = auth()->id();

    Berita::create($validated);

    return back()->with('success', 'Berita ditambahkan (draft)');
}



    public function updateStatus(Berita $berita)
    {
        $berita->update([
            'status' => $berita->status === 'draft'
                ? 'published'
                : 'draft',
        ]);

        return back();
    }

    public function destroy(Berita $berita)
    {
        $berita->delete();

        return back()->with('success', 'Berita dihapus');
    }

    public function index()
    {
        $totalBerita = Berita::select(
            DB::raw("MONTH(tanggal) as bulan"),
            DB::raw("COUNT(*) as total")
        )->groupBy('bulan')->orderBy('bulan')->get();

        $beritaDipublish = Berita::select(
            DB::raw("MONTH(tanggal) as bulan"),
            DB::raw("COUNT(*) as total")
        )->where('status', 'published')->groupBy('bulan')->orderBy('bulan')->get();

        return Inertia::render('admin/berita', [
            'stats' => [
                'totalBerita' => Berita::count(),
                'beritaDraft' => Berita::where('status', 'draft')->count(),
                'beritaPublished' => Berita::where('status', 'published')->count(),
            ],
            'beritas' => Berita::latest()->get(),
            'chart' => [
                'total' => $totalBerita,
                'published' => $beritaDipublish,
            ],
        ]);
    }

    public function indexUser() {
        return Inertia::render('berita', [
            'beritas' => Berita::where('status', 'published')
                ->latest()
                ->get(),
        ]);
    }

}

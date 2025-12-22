import Swal from "sweetalert2";


export const swalConfirm = (text: string) => {
  return Swal.fire({
    title: "Are you sure?",
    text: text,
    icon: "warning",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Confirm !",
    showCancelButton: true,
    cancelButtonText: "No, cancel!",
    reverseButtons: true,
  });
};

export const swalSuccess = (text:string) => {
  return Swal.fire({
    title: "Saved!",
    text: text,
    icon: "success",
  });
};

export const swalCancelled = () => {
  return Swal.fire({
    title: "Cancelled",
    text: "Your data is safe 🙂",
    icon: "error",
  });
};


export const swalDetailLaporan = (laporan: any) => {
  return Swal.fire({
    title: "Detail Laporan",
    width: 600,
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
      popup: "rounded-2xl ",
    },
    html: `
      <div class="text-left text-sm text-slate-700 space-y-4">

        <!-- Header -->
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-[#1C398E]">
            Informasi Laporan
          </h2>
          <span class="
            px-3 py-1 rounded-full text-xs font-semibold
            ${
              laporan.status === "menunggu"
                ? "bg-yellow-100 text-yellow-800"
                : laporan.status === "diverifikasi"
                ? "bg-blue-100 text-blue-800"
                : laporan.status === "diproses"
                ? "bg-purple-100 text-purple-800"
                : laporan.status === "selesai"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }
          ">
            ${laporan.status}
          </span>
        </div>

        <!-- Grid info -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="text-xs text-slate-500">Nama Pelapor</p>
            <p class="font-medium">${laporan.nama}</p>
          </div>

          <div>
            <p class="text-xs text-slate-500">No Telp</p>
            <p class="font-medium">${laporan.telp}</p>
          </div>

          <div>
            <p class="text-xs text-slate-500">Jenis Bencana</p>
            <p class="font-medium">${laporan.jenis}</p>
          </div>

          <div>
            <p class="text-xs text-slate-500">Tanggal</p>
            <p class="font-medium">${laporan.tanggal}</p>
          </div>
        </div>

        <div>
          <p class="text-xs text-slate-500">Lokasi</p>
          <p class="font-medium">${laporan.lokasi}</p>
        </div>

        <!-- Deskripsi -->
        <div>
          <p class="text-xs text-slate-500 mb-1">Deskripsi</p>
          <div class="bg-slate-100 rounded-xl p-3 text-sm leading-relaxed">
            ${laporan.deskripsi}
          </div>
        </div>

        <!-- Foto -->
        ${
          laporan.foto
            ? `
              <div>
                <p class="text-xs text-slate-500 mb-2">Foto Laporan</p>
                <img
                  src="/storage/${laporan.foto}"
                  alt="Foto laporan"
                  class="w-full rounded-xl border object-cover"
                />
              </div>
            `
            : `
              <div class="text-center text-slate-400 italic">
                Tidak ada foto
              </div>
            `
        }

      </div>
    `,
  });
};

export const swalDetailBerita = (berita: any) => {
  return Swal.fire({
    title: "Detail Berita",
    width: 600,
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
      popup: "rounded-2xl",
    },
    html: `
      <div class="text-left text-sm text-slate-700 space-y-4">

        <!-- Header -->
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-[#1C398E]">
            Informasi Laporan
          </h2>
          <span class="
            px-3 py-1 rounded-full text-xs font-semibold
            ${
              berita.status === "draft"
                ? "bg-yellow-100 text-yellow-800"
                : berita.status === "published"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }
          ">
            ${berita.status}
          </span>
        </div>

        <!-- Grid info -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="text-xs text-slate-500">Judul Berita</p>
            <p class="font-medium">${berita.judul}</p>
          </div>

          <div>
            <p class="text-xs text-slate-500">Jenis Bencana</p>
            <p class="font-medium">${berita.jenis}</p>
          </div>

          <div>
            <p class="text-xs text-slate-500">Tanggal</p>
            <p class="font-medium">${berita.tanggal}</p>
          </div>
        </div>

        <div>
          <p class="text-xs text-slate-500">Lokasi</p>
          <p class="font-medium">${berita.lokasi}</p>
        </div>

        <!-- Deskripsi -->
        <div>
          <p class="text-xs text-slate-500 mb-1">Deskripsi</p>
          <div class="bg-slate-100 rounded-xl p-3 text-sm leading-relaxed">
            ${berita.deskripsi}
          </div>
        </div>

        <!-- Foto -->
        ${
          berita.foto
            ? `
              <div>
                <p class="text-xs text-slate-500 mb-2">Foto Berita</p>
                <img
                  src="/storage/${berita.foto}"
                  alt="Foto berita"
                  class="w-full rounded-xl border object-cover"
                />
              </div>
            `
            : `
              <div class="text-center text-slate-400 italic">
                Tidak ada foto
              </div>
            `
        }

      </div>
    `,
  });
};

export const swalDetailBeritaUser = (berita: any) => {
  return Swal.fire({
    width: 700,
    showCloseButton: true,
    showConfirmButton: false,
    padding: "0",
    customClass: {
      popup: "rounded-3xl overflow-hidden",
    },

    didRender: () => {
      const btnTutup = document.getElementById("btn-tutup-berita");
      if (btnTutup) {
        btnTutup.addEventListener("click", () => {
          Swal.close();
        });
      }
    },
    html: `
      <div class="text-left font-sans">
        ${berita.foto ? `
          <div class="w-full h-[300px] relative ">
            <img src="/storage/${berita.foto}" class="w-full h-full object-cover" />
            <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span class="absolute bottom-4 left-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">${berita.jenis}</span>
          </div>` : '<div class="h-4 bg-slate-100"></div>'
        }

        <div class="px-8 pt-8 pb-8">
          <div class="flex items-center justify-between gap-3 text-slate-500 text-xs mb-4">
             <span>${berita.tanggal}</span>  <span>${berita.lokasi}</span>
          </div>
          <h1 class="text-3xl font-bold text-slate-900 leading-tight mb-6">${berita.judul}</h1>

          <div class="text-slate-700 leading-relaxed text-base space-y-4 text-justify mb-10">
            ${berita.deskripsi.split('\n').map((p: string) => `<p>${p}</p>`).join('')}
          </div>

          <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">SM</div>
                  <span class="text-xs text-slate-400 italic font-medium">Siaga Manado</span>
              </div>

              <button
                id="btn-tutup-berita"
                type="button"
                class="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-all text-sm active:scale-95 cursor-pointer"
              >
                Selesai Membaca
              </button>
          </div>
        </div>
      </div>
    `,
  });
};

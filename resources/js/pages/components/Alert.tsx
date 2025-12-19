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

//   return Swal.fire({
//     title: "Detail Laporan",
//     width: 600,
//     heightAuto: true,
//     showCloseButton: true,
//     showConfirmButton: false,
//     html: `
//       <div style="text-align:left; font-size:14px">
//         <p><b>Nama Pelapor:</b> ${laporan.nama}</p>
//         <p><b>No Telp:</b> ${laporan.telp}</p>
//         <p><b>Jenis Bencana:</b> ${laporan.jenis}</p>
//         <p><b>Lokasi:</b> ${laporan.lokasi}</p>
//         <p><b>Tanggal:</b> ${laporan.tanggal}</p>
//         <p><b>Status:</b>
//           <span style="
//             padding:4px 8px;
//             border-radius:6px;
//             background:#e0e7ff;
//             color:#1C398E;
//             font-weight:600
//           ">
//             ${laporan.status}
//           </span>
//         </p>

//         <p><b>Deskripsi:</b></p>
//         <p style="background:#f3f4f6;padding:10px;border-radius:8px">
//           ${laporan.deskripsi}
//         </p>

//         ${
//           laporan.foto
//             ? `<img
//                 src="/storage/${laporan.foto}"
//                 alt="Foto laporan"
//                 style="margin-top:12px;border-radius:10px;width:100%"
//               />`
//             : `<p style="margin-top:10px;color:#9ca3af">Tidak ada foto</p>`
//         }
//       </div>
//     `,
//   });
// };

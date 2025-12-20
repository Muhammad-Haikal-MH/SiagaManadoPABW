import { IoLocationOutline, } from "react-icons/io5";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import { swalDetailBeritaUser } from "./components/Alert";

interface Props {
  auth: any;
  beritas: Array<any>;
}

const Berita = (props: Props) => {
  const { auth, beritas } = props;

  const DetailBerita = (berita: any) => {
    swalDetailBeritaUser(berita);
  }

  return (
    <>
      <Navbar auth={auth} />
      <Layout>
        {/* WEATHER SECTION */}
        <div className="px-6 md:px-14 mt-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden border border-slate-100 dark:border-slate-700">
            <Weather />
          </div>
        </div>

        {/* BERITA GRID */}
        <div className="px-6 md:px-14 mt-10 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Berita Terkini</h1>
            <span className="text-sm text-slate-500">{beritas.length} Artikel ditemukan</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritas.map((berita: any) => (
              <article
                key={berita.id}
                className=" bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={`/storage/${berita.foto}`}
                    alt={berita.judul}
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {berita.jenis}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 text-slate-500 dark:text-slate-400 text-xs mb-3">
                    <span>{berita.tanggal}</span>
                    <span className="flex items-center gap-1">
                      <IoLocationOutline height={50} width={50} className="text-lg font-semibold" />
                      {berita.lokasi}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {berita.judul}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 truncate mb-6 flex-grow">
                    {berita.deskripsi}
                  </p>

                  <button className="w-full py-3 px-4 cursor-pointer bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    onClick={() => DetailBerita(berita)}
                    >
                    Lihat Detail
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Berita;

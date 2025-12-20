import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";

const Berita = ({ auth }: any) => {
    
  return (
    <>
      <Navbar auth={auth} />
      <Layout>

        {/* WEATHER */}
        <div className="px-6 md:px-14 mt-6">
          <Weather />
        </div>

        {/* BERITA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-6 md:px-14">
          <div className="bg-[#CFE6FF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-md">
            <h3 className="text-[#1C398E] font-semibold text-xl mb-4">
              Listrik Padam 19 Jam, Antrean Panjang Terjadi di SPBU
            </h3>
            <img src="/images/rb_54213.png" className="w-56" />
          </div>

          <div className="bg-[#CFE6FF] p-4 rounded-2xl shadow-md">
            <h3 className="text-[#1C398E] font-semibold text-xl mb-4">
              Kebakaran KM Gurita di Dermaga 3 Pelabuhan Manado
            </h3>
            <img src="/images/kebakaran.svg" className="w-56" />
          </div>
        </div>

      </Layout>
    </>
  );
};

export default Berita;

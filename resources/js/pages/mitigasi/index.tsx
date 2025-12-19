import { Link } from "@inertiajs/react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { mitigasiList } from "./mitigasi.constant"

const mitigasi = ({ auth }: any) => {

    
  return (
    <>
    <Navbar auth={auth} />
          <Layout>

                <div className="container mx-auto text-center px-4 pt-10 justify-items-center">
                    <h1 className="text-3xl font-bold text-[#1C398E]">Mitigasi Bencana Alam</h1>
                    <section className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-20 mt-8 justify-evenly ">
                        {mitigasiList.map((item) => (

                            <Link href={`/mitigasi/${item.slug}`} className="bg-[#CFE6FF] p-6 h-60 w-64 rounded-2xl hover:scale-110 transition-transform duration-300">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                                    <IoIosArrowDroprightCircle size={45} className="text-[#1C398E]"/>

                                </div>
                                <div className="justify-end flex mt-8">
                                    <img src={`${item.image}`} className=" h-32 w-full" />
                                </div>
                            </Link>
                        ))}


                    </section>
                </div>
          </Layout>
          <Footer />
    </>
  )
}

export default mitigasi

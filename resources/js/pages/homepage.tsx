import { Form, Link } from "@inertiajs/react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { FaEnvelope, FaFacebook, FaInstagram, FaPersonRunning, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { kontakDarurat } from "./items/kontakdarurat";
import Footer from "./components/Footer";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import InputError from "@/components/input-error";
import { Input } from "@/components/ui/input";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import LaporModal from "./components/LaporModal";

export default function Homepage({ auth }: any) {

    const [open, setOpen] = useState(false);
    const user = auth?.user;
    return (
        <>

        <Navbar auth={auth} />
        <Layout>

            <section>
                <div className="container mx-auto text-center px-4 py-16">
                    <img
                        src="/images/Beranda.svg"
                        alt=""
                        className="w-72 mt-3 mx-auto"
                    />

                    <p className="text-2xl md:text-4xl font-bold text-[#1C398E] dark:text-[#CFE6FF]">
                        Ayo tanggap bencana,
                    </p>
                    <p className="text-2xl md:text-4xl font-bold pt-2 text-[#1C398E] dark:text-[#CFE6FF]">
                        Bersama selamatkan Manado
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
                        <img
                            src="/images/Beranda3.svg"
                            alt=""
                            className="w-72 md:w-96"
                        />

                        {user ? (
                            <>
                                <Button
                                    className="bg-[#1C398E] dark:bg-[#CFE6FF] dark:text-[#1C398E] hover:bg-blue-300 text-white md:text-lg font-bold md:py-7 md:px-8 py-2 px-4 rounded-full cursor-pointer"
                                    onClick={() => setOpen(true)}
                                >
                                    Laporkan
                                </Button>
                                <LaporModal open={open} onClose={setOpen} />
                            </>

                        ) : (
                            <Link
                                href="/login"
                                className="bg-[#1C398E] hover:bg-blue-300 text-white md:text-lg font-bold md:py-4 md:px-8 py-2 px-4 rounded-full"
                            >
                                Laporkan
                            </Link>
                        )}

                        <img
                            src="/images/Beranda2.svg"
                            alt=""
                            className="w-72 md:w-96"
                        />
                    </div>
                </div>
            </section>

            {/* MENU CARD */}
            <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-7 mt-8 mx-4 max-w-[1224px] xl:mx-auto">
                <Link
                    href="/mitigasi"
                    className="bg-[#CFE6FF] dark:bg-[#162035] dark:text-[#EEF4FF] p-6 w-3/4 rounded-4xl hover:scale-105 transition-transform duration-300"
                >
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-[#1C398E] dark:text-[#EEF4FF]">Mitigasi</h1>
                        <IoIosArrowDroprightCircle size={45} className="text-[#1C398E] dark:text-[#EEF4FF]"/>
                    </div>
                        <div className="justify-end flex mt-8 text-[#1C398E] dark:text-[#EEF4FF]">
                            <FaPersonRunning size={45} />
                        </div>
                </Link>

                <Link
                    href="/berita"
                    className="bg-[#CFE6FF] p-6 w-3/4 rounded-4xl hover:scale-105 transition-transform duration-300"
                >
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-[#1C398E]">Berita</h1>
                        <IoIosArrowDroprightCircle size={45} className="text-[#1C398E]"/>
                    </div>
                        <div className="justify-end flex mt-8 text-[#1C398E]">
                            <IoNewspaperOutline size={45} />
                        </div>
                </Link>
            </section>

            {/* KONTAK DARURAT */}
            <section>
                <div className="container mx-auto p-20">
                    <h1
                        className="text-4xl font-bold text-center mt-10 text-[#1C398E]"
                        id="kontak"
                    >
                        Kontak Darurat
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 xl:mx-auto max-w-[1224px] gap-10">
                    {kontakDarurat.map((item) => (
                        <div
                            key={item.title}
                            className="bg-[#CFE6FF] p-6 w-full h-72 rounded-4xl hover:scale-105 transition duration-300 cursor-pointer"
                        >
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-semibold text-[#1C398E] ">
                                    {item.title}
                                </h1>
                                <IoIosArrowDroprightCircle size={45} className="text-[#1C398E]"/>
                            </div>

                            <div className="flex justify-end mt-8">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-40"
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        <section className="mt-24 container mx-auto max-w-6xl p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>
            <h1 className="text-2xl font-bold text-[#1C398E] mb-4">
                Lebih Dekat
            </h1>

            <p className="text-[#1C398E] mb-6 leading-relaxed">
                Ayo lebih dekat dengan kita Siaga Manado, berikan saran dan
                feedback agar aplikasi ini menjadi lebih baik.
            </p>

            <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-3xl text-[#1C398E] mr-3" />
                <div>
                <p className="font-bold text-[#1C398E]">Alamat</p>
                <p>Bojongsoang, Bandung, Indonesia</p>
                </div>
            </div>

            <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-3xl text-[#1C398E] mr-3" />
                <div>
                <p className="font-bold text-[#1C398E]">No. Telepon</p>
                <p className="text-[#1C398E]">+123-456-7890</p>
                </div>
            </div>

            <div className="flex items-center mb-6">
                <FaEnvelope className="text-3xl text-[#1C398E] mr-3" />
                <div>
                <p className="font-bold text-[#1C398E]">Email</p>
                <p className="text-[#1C398E]">siagamanado@telkomuniversity.com</p>
                </div>
            </div>

            <p className="font-bold text-[#1C398E] mb-2">Ikuti Kami:</p>
            <div className="flex space-x-4 text-2xl text-[#1C398E]">
                <FaFacebook className="hover:text-blue-300 cursor-pointer" />
                <FaTwitter className="hover:text-blue-300 cursor-pointer" />
                <FaInstagram className="hover:text-blue-300 cursor-pointer" />
                <FaYoutube className="hover:text-blue-300 cursor-pointer" />
            </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#CFE6FF] p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Kirim Pesan
            </h2>

            <Form className="space-y-4" disableWhileProcessing>
                {({ processing, errors,  }) => (

                <div className="grid gap-6 font-normal">
                    <div className="grid gap-2 px-10">
                        <Input className="border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                            id="name" type="text" required autoFocus tabIndex={1} autoComplete="name" name="name" placeholder="Full name"/>
                        <InputError message={errors.deskripsi} className="mt-2" />
                    </div>

                    <div className="grid gap-2 px-10">
                        <Input className="border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                            id="email" type="email" required autoFocus tabIndex={2} autoComplete="email" name="email" placeholder="Email"/>
                        <InputError message={errors.deskripsi} className="mt-2" />
                    </div>

                    <div className="grid gap-2 px-10">
                        <textarea className="border-0 border-b border-b-[#1C398E] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                            id="deskripsi"  required autoFocus tabIndex={2} autoComplete="deskripsi" name="deskripsi" placeholder="deskripsi"/>
                        <InputError message={errors.deskripsi} className="mt-2" />
                    </div>

                    <Button type="submit" className="mt-2 w-full bg-[#1C398E] text-white hover:bg-[#294db7] border-none rounded-xl cursor-pointer" tabIndex={5}
                        data-test="feedback-user-button"
                    >
                        {processing && <Spinner />}
                            Kirim
                    </Button>

                </div>

                )}

            </Form>
            </div>

        </div>
        </section>

        <Footer />

    </Layout>
    </>
    );
}

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FileUpload from "./uploadFile";
import { useState } from "react";
import InputError from "@/components/input-error";
import { swalSuccess } from "./Alert";



export default function BeritaModal({ open, onClose }: any) {
    const [file, setFile] = useState<File | null>(null);
    return (
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="max-w-xl md:w-[420px] md:h-[650px] p-5 rounded-xl bg-[#CFE6FF] dark:bg-[#1E293B] border-none">
                    <DialogHeader>
                        <DialogTitle className="text-[#1C398E] dark:text-[#F1F5F9]">Form Laporan Bencana</DialogTitle>
                    </DialogHeader>

                    <Form method="post" action="/berita"
                        onSuccess={() => {
                            swalSuccess("laporan berhasil dikirim !");
                            onClose(false);

                        }

                    }
                     >
                        {({ processing, errors }) => (
                            <div className="space-y-4 px-10">
                                <Input name="judul" placeholder="Judul"
                                    className="border-0 border-b border-b-[#1C398E] dark:border-b-[#F1F5F9] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 dark:text-[#F1F5F9] transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                                <InputError
                                    message={errors.judul}
                                    className="mt-2"
                                />

                                <Input name="lokasi" placeholder="Lokasi"
                                    className="border-0 border-b border-b-[#1C398E] dark:border-b-[#F1F5F9] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 dark:text-[#F1F5F9] transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                                <InputError
                                    message={errors.lokasi}
                                    className="mt-2"
                                />

                                <Select name="jenis">
                                    <SelectTrigger className="border-0 border-b border-b-[#1C398E] dark:border-b-[#F1F5F9] cursor-pointer focus:rounded-lg text-[#1C398E] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                                        <SelectValue placeholder="Pilih jenis bencana" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#CFE6FF] dark:bg-[#1C398E]  border-none rounded-xl ">
                                        <SelectItem value="banjir">Banjir</SelectItem>
                                        <SelectItem value="longsor">Longsor</SelectItem>
                                        <SelectItem value="gempa">Gempa</SelectItem>
                                        <SelectItem value="kebakaran">Kebakaran</SelectItem>
                                    </SelectContent>
                                </Select>
                                <InputError
                                    message={errors.jenis}
                                    className="mt-2"
                                />

                                <Input type="datetime-local" name="tanggal"
                                    className="border-0 border-b border-b-[#1C398E] dark:border-b-[#F1F5F9] focus:rounded-lg text-[#1C398E] dark:text-[#F1F5F9] focus:border-b-blue-400 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                                <InputError
                                    message={errors.tanggal}
                                    className="mt-2"
                                />

                                <textarea
                                    name="deskripsi"
                                    className="w-full border-0 border-b border-b-[#1C398E] dark:border-b-[#F1F5F9] focus:rounded-lg text-[#1C398E] focus:border-b-blue-400 dark:text-[#F1F5F9] dark:placeholder:text-[#F1F5F9] transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    placeholder="  Detail kejadian"
                                />
                                <InputError
                                    message={errors.deskripsi}
                                    className="mt-2"
                                />

                                <FileUpload onChange={setFile} />
                                <InputError
                                    message={errors.foto}
                                    className="mt-2"
                                />


                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="mt-2 w-full bg-[#1C398E] dark:bg-[#CFE6FF] dark:hover:bg-blue-300 dark:text-[#1C398E] text-white hover:bg-[#294db7] border-none rounded-xl cursor-pointer"
                                >
                                    {processing && <Spinner />}
                                    Kirim
                                </Button>
                            </div>
                        )}
                    </Form>
                </DialogContent>
            </Dialog>

    );
}

import { Image } from "@radix-ui/react-avatar"

const Footer = () => {
  return (
    <footer id="footer" className="mt-36">
            <div className=" py-8 ">
              <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" id="kontak">


                  <div>
                    <img src="/images/SiagaManadoDark.png" className="dark:hidden" alt="Logo" />
                    <img src="/images/SiagaManadoLight.png" className="dark:block hidden" alt="Logo" />
                  </div>


                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#1C398E] dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Manado</h3>
                        <ul className="space-y-2">
                          <li><a href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">BMKG</a></li>
                          <li><a href="https://manadokota.go.id/" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Pemerintah Manado</a></li>
                          <li><a href="https://manadokota.bps.go.id/id" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Badan Pusat Statistik Manado</a></li>
                          <li><a href="https://manado.tribunnews.com/" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Tribun Manado</a></li>
                          <li><a href="https://www.manadonews.co.id/" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Manado News</a></li>
                          <li><a href="https://manado.basarnas.go.id/" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Basarnas Manado</a></li>
                        </ul>
                      </div>


                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#1C398E] dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Social Media</h3>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <ul className="space-y-2">
                          <li><a href="https://www.instagram.com/muhammad.haikal_07?igsh=N3VhZWE2YXF0YjNo" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">@muhammad.haikal_07</a></li>
                          <li><a href="" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">@rakalazuardyy_</a></li>
                          <li><a href="" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">@nreymliev_</a></li>
                          <li><a href="" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">@nthntp</a></li>
                        </ul>
                      </div>


                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#1C398E] dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Our Team</h3>
                        <ul className="space-y-2">
                          <li><a href="#" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Muhammad Haikal</a></li>
                          <li><a href="#" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Muhammad Raka Lazuardy</a></li>
                          <li><a href="#" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Andre Aqil Syafiq</a></li>
                          <li><a href="#" className="text-[#1C398E] hover:text-blue-300 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]">Nathan togu</a></li>
                        </ul>
                      </div>
                    </div>


                    <div className="mt-8 text-center text-[#1C398E] text-sm font-semibold dark:text-[#94A3B8]">
                      <p>&copy; 2024 Manado keras. All rights reserved.</p>
                      <p><a href="#" className="text-[#1C398E] dark:text-[#94A3B8]">Terms of Use Notice</a> | <a href="#" className="text-[#1C398E] dark:text-[#94A3B8]">Kebijakan Privasi</a></p>
                    </div>
                  </div>
                </div>
        </footer>
  )
}

export default Footer

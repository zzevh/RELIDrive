"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Shield, FileText, Scale, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function RegulaminPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
          >
            RELIDrive
          </Link>
          <Link
            href="/w-trakcie-budowy"
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
          >
            <img src="/logo.png" alt="RELIDrive Logo" className="h-20 w-auto" />
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-red-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)]" />

        <motion.div
          className="container mx-auto px-6 text-center z-10 relative"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="p-4 bg-orange-500/20 rounded-full">
              <Scale className="h-12 w-12 text-orange-500" />
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Regulamin</span>
            <br />
            Świadczenia Usług
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Warunki korzystania z usług RELIDrive - aktualne od 16 czerwca 2025
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Ostatnia aktualizacja: 16.06.2025
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Wersja 1.0
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Informacje Ogólne</h2>
                </div>
                <div className="text-gray-300 space-y-4 text-center">
                  <p>
                    Niniejszy regulamin określa zasady świadczenia usług przez RELIDrive, prowadzony przez AureoTrade Mariusz Krupka, NIP: 9491004152, zwany dalej „Usługodawcą”.
                  </p>
                  <p>
                    Usługodawca działa jako pośrednik marketingowy – nie jest właścicielem, sprzedawcą ani stroną transakcji dotyczącej oferowanych pojazdów (np. skuterów, motocykli, samochodów).
                  </p>
                  <p>
                    RELIDrive świadczy wyłącznie usługę rezerwacji wybranego pojazdu u zewnętrznego sprzedawcy, za zgodą i we współpracy z tym sprzedawcą.
                  </p>
                  <p>
                    Korzystanie z naszych usług oznacza akceptację wszystkich postanowień zawartych w niniejszym
                    Regulaminie.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-8">
              {[
                {
                  title: "§1 Zakres usługi",
                  content: [
                    "1. Usługa polega na czasowym zarezerwowaniu pojazdu oferowanego przez niezależny sklep lub sprzedawcę, na rzecz konkretnego klienta.",
                    "2. W ramach usługi klient otrzymuje:",
                    "- Gwarancję, że wybrany pojazd nie zostanie sprzedany osobie trzeciej przez określony czas (np. 24–48h),",
                    "- Informacje kontaktowe oraz dane do odbioru pojazdu.",
                  ],
                },
                {
                  title: "§2 Warunki płatności",
                  content: [
                    "1. Opłata rezerwacyjna wynosi (np. 250 zł) i jest płatna z góry przez klienta.",
                    "2. Płatność odbywa się za pomocą bramki płatności lub przelewu bankowego na dane podane przez Usługodawcę.",
                    "3. Po otrzymaniu opłaty rezerwacyjnej Usługodawca niezwłocznie dokonuje rezerwacji wybranego pojazdu.",
                    "4. Klient potwierdza, że zna cenę katalogową pojazdu oraz akceptuje różnicę cenową jako opłatę za usługę rezerwacyjną.",
                  ],
                },
                {
                  title: "§3 Brak odpowiedzialności",
                  content: [
                    "1. Usługodawca nie ponosi żadnych odpowiedzialności za stan techniczny pojazdu, jego historię ani przebieg transakcji zakupu między klientem a sprzedawcą.",
                    "2. Usługodawca nie odpowiada za decyzję klienta o zakupie, transport pojazdu, płatność końcową ani rezygnację sprzedawcy.",
                    "3. Usługodawca odpowiada wyłącznie za poprawne wykonanie usługi rezerwacyjnej – tj. przekazanie sprzedawcy informacji o rezerwacji i zablokowanie pojazdu na czas wskazany.",
                  ],
                },
                {
                  title: "§4 Odstąpienie od umowy i zwroty",
                  content: [
                    "1. Klient, będący konsumentem, wyraża zgodę na **natychmiastowe wykonanie usługi** (rezerwacji) przed upływem terminu odstąpienia od umowy.",
                    "2. W związku z powyższym klient traci prawo do odstąpienia od umowy zgodnie z art. 38 pkt 1 ustawy o prawach konsumenta.",
                    "3. Opłata rezerwacyjna jest **bezzwrotna**, z wyjątkiem sytuacji, gdy Usługodawca nie wykonał usługi.",
                  ],
                },
                {
                  title: "§5 Dane osobowe",
                  content: [
                    "1. Administratorem danych osobowych jest Usługodawca.",
                    "2. Dane osobowe (np. imię, numer telefonu, e-mail) są przetwarzane wyłącznie w celu realizacji usługi.",
                    ,
                  ],
                },
                {
                  title: "§6 Reklamacje",
                  content: [
                    "1. Reklamacje należy składać mailowo na adres: aureotradecompany@gmail.com",
                    "2. Usługodawca odpowiada w ciągu 14 dni roboczych.",
                    "3. Reklamacje dotyczące samego pojazdu należy kierować do jego sprzedawcy.",
                  ],
                },
                {
                  title: "§7 Postanowienia końcowe",
                  content: [
                    "1. Regulamin obowiązuje od dnia publikacji.",
                    "2. Usługodawca zastrzega sobie prawo do modyfikacji niniejszych warunków w dowolnym czasie.",
                    "3. W przypadku sporów zawartych w niniejszym regulaminie, Usługodawca zastrzega sobie prawo do zmiany warunków w dowolnym czasie.",
                    "4. Nieważność pojedynczych postanowień nie wpływa na ważność pozostałych warunków.",
                    "5. W sprawach nieuregulowanych zastosowanie mają przepisy Kodeksu cywilnego oraz ustawy o prawach konsumenta.",
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/30 border-gray-800 hover:border-orange-500/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-white mb-6 text-center">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                          {section.title}
                        </span>
                      </h3>
                      <div className="space-y-4 text-gray-300">
                        {section.content.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-center leading-relaxed">
                            {item?.split("**").map((part, partIndex) =>
                              partIndex % 2 === 1 ? (
                                <span key={partIndex} className="font-semibold text-orange-400">
                                  {part}
                                </span>
                              ) : (
                                part
                              ),
                            )}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/30">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      Kontakt
                    </span>
                  </h3>
                  <div className="text-gray-300 space-y-2">
                    <p>
                      <strong>RELIDrive by AureoTrade</strong>
                    </p>
                    <p>Email: aureotradecompany@gmail.com</p>
                    <p>WhatsApp: +48 507 196 331</p>
                    <p>Numer kontaktowy telefoniczny: +48 507 196 331</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/w-trakcie-budowy">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Powrót do strony głównej
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              RELIDrive
            </div>
            <p className="text-gray-400">© 2025 RELIDrive. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

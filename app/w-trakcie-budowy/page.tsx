"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-orange-500/20 rounded-full">
              <Construction className="h-16 w-16 text-orange-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Strona w trakcie budowy
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Przepraszamy za niedogodność. Nasza strona główna jest obecnie w trakcie modernizacji.
            Zapraszamy wkrótce!
          </p>

          <Link href="/regulamin">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Powrót do regulaminu
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 
"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail size={36} className="text-purple-600" />,
      title: "Email",
      detail: "DestaNovitadw@gmail.com",
    },
    {
      icon: <Phone size={36} className="text-blue-600" />,
      title: "Telepon",
      detail: "+62 895-4147-78595",
    },
    {
      icon: <MapPin size={36} className="text-green-600" />,
      title: "Alamat",
      detail: "Jatinangor, Indonesia",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          📩 Hubungi Kami
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 💡 Informasi Kontak */}
          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/50 p-6 rounded-3xl shadow-xl flex items-center gap-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <div className="bg-white p-4 rounded-full shadow-md">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 📝 Formulir Kontak */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-6">
              💬 Kirim Pesan Anda
            </h3>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Alamat Email"
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                placeholder="Subjek Pesan"
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                placeholder="Tulis pesan Anda..."
                rows={5}
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition duration-300 shadow-lg"
              >
                <Send size={20} /> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

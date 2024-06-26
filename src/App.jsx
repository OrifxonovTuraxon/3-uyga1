import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/src/img/logo.svg" alt="Liber Logo" className="w-8 h-8" />
          <div className="text-xl font-bold">Liber</div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="relative flex items-center">
            <button className="bg-gray-200 px-4 py-2 rounded-l flex items-center space-x-2">
              <img src="/src/img/heder-center.svg" alt="Ruknlar" className="w-4 h-4" />
              <span>Рукнлар</span>
            </button>
            <input
              type="text"
              placeholder="Қидириш"
              className="border p-2 rounded-r w-64"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
              <img src="/src/img/header_right.svg" alt="Kirish" className="w-4 h-4" />
              <span>Кириш</span>
            </button>
            <button className="border p-2 rounded flex items-center space-x-2">
              <img src="/src/img/header_right1.svg" alt="Language" className="w-4 h-4" />
              <span>Ўз</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mt-4">
        <section className="relative bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Кун ўқилаётганлар</h2>
          <div className="flex space-x-4 overflow-x-scroll">
            <img src="/src/img/top1-img.svg" alt="1984" className="w-40 h-60" />
            <img src="/src/img/top3-img.svg" alt="Code 8" className="w-40 h-60" />
            <img src="/src/img/top2-img.svg" alt="Rich Dad Poor Dad" className="w-40 h-60" />
          </div>
          <img src="/mnt/data/Liber/Mask group.png" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        </section>

        <section className="bg-white shadow-md rounded p-4 mb-4">
          <div className="flex justify-between space-x-4">
            <div className="w-1/4 p-4 bg-gray-200 rounded text-center">
              <div className="text-lg font-bold mb-2">Тезкор етказиш</div>
              <p>Маълумотлар</p>
            </div>
            <div className="w-1/4 p-4 bg-gray-200 rounded text-center">
              <div className="text-lg font-bold mb-2">Тўлов химояси</div>
              <p>Маълумотлар</p>
            </div>
            <div className="w-1/4 p-4 bg-gray-200 rounded text-center">
              <div className="text-lg font-bold mb-2">Юқори сифат</div>
              <p>Маълумотлар</p>
            </div>
            <div className="w-1/4 p-4 bg-gray-200 rounded text-center">
              <div className="text-lg font-bold mb-2">Энг сара китоблар</div>
              <p>Маълумотлар</p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Рукнлар</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div
              className="w-40 h-60 bg-cover bg-center flex items-center justify-center text-white font-bold"
              style={{ backgroundImage: "url('/src/img/section_center_img1.svg')" }}
            >
              Жаҳон адабиёти
            </div>
            <div
              className="w-40 h-60 bg-cover bg-center flex items-center justify-center text-white font-bold"
              style={{ backgroundImage: "url('/src/img/section_center_img2.svg')" }}
            >
              Ўзбек адабиёти
            </div>
            <div
              className="w-40 h-60 bg-cover bg-center flex items-center justify-center text-white font-bold"
              style={{ backgroundImage: "url('/src/img/section_center_img3.svg')" }}
            >
              Бизнес ва психология
            </div>
            <div
              className="w-40 h-60 bg-cover bg-center flex items-center justify-center text-white font-bold"
              style={{ backgroundImage: "url('/src/img/section_center_img4.svg')" }}
            >
              Болалар адабиёти
            </div>
            <div
              className="w-40 h-60 bg-cover bg-center flex items-center justify-center text-white font-bold"
              style={{ backgroundImage: "url('/src/img/section_center_img5.svg')" }}
            >
              Детективлар
            </div>
            <div
              className="w-40 h-60 bg-cover bg-center flex items-center justify-center text-white font-bold"
              style={{ backgroundImage: "url('/src/img/section_center_img6.svg')" }}
            >
              Фантастика
            </div>
          </div>
        </section>

        <section className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Янги қўшилганлар</h2>
          <div className="flex space-x-4 overflow-x-scroll">
            <img src="/src/img/top1-img.svg" alt="1984" className="w-40 h-60" />
            <img src="/src/img/top2-img.svg" alt="Rich Dad Poor Dad" className="w-40 h-60" />
            <img src="/src/img/top3-img.svg" alt="Code 8" className="w-40 h-60" />
            <img src="/src/img/top4-img.svg" alt="Daniel Keyes" className="w-40 h-60" />
            <img src="/src/img/top5-img.svg" alt="Mark Manson" className="w-40 h-60" />
          </div>
        </section>

        <section className="bg-white shadow-md rounded p-4">
          <h2 className="text-2xl font-bold mb-4">Аудио китоблар</h2>
          <div className="flex space-x-4 overflow-x-scroll">
            <img src="/src/img/bottom1-img.svg" alt="Ego is the Enemy" className="w-40 h-60" />
            <img src="/src/img/bottom2-img.svg" alt="Rocket" className="w-40 h-60" />
            <img src="/src/img/top5-img.svg" alt="Mark Manson" className="w-40 h-60" />
            <img src="/src/img/bottom3-img.svg" alt="Satellite" className="w-40 h-60" />
            <img src="/src/img/bottom4-img.svg" alt="City on the Edge" className="w-40 h-60" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
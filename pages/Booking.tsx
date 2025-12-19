
import React from 'react';

const Booking = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-20 px-4">
      {/* Background with blurry photos */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-full p-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-cover bg-center rounded-lg grayscale sepia mix-blend-luminosity h-full" style={{ backgroundImage: `url('https://picsum.photos/id/${i+100}/800/1200')` }}></div>
            ))}
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
           <div className="relative">
              <span className="absolute -top-12 -left-12 text-6xl text-primary/10 animate-pulse-soft material-symbols-outlined transform -rotate-12">queue_music</span>
              <h1 className="font-headline text-5xl md:text-7xl leading-[0.9] tracking-tight text-white drop-shadow-xl uppercase italic">
                CONTRATACIONES <br/>
                <span className="text-primary">Y COLABORACIONES</span>
              </h1>
           </div>
           <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
             Contrata a la orquesta. <br/>
             <span className="text-primary font-bold">Pongamos a bailar a Google.</span>
           </p>
           <div className="hidden lg:flex gap-6 mt-4">
              {['SEO Técnico', 'Content Marketing', 'Link Building'].map(tag => (
                <div key={tag} className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase font-bold">
                   <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                   <span>{tag}</span>
                </div>
              ))}
           </div>
        </div>

        {/* The Napkin Form */}
        <div className="flex-1 w-full max-w-md relative">
           <div className="absolute -top-6 -right-6 z-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
           <div className="absolute -bottom-10 -left-10 z-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
           
           <div className="relative bg-[#f4ecd8] p-1 pb-1 pr-1 rounded-sm rotate-1 transform hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <div className="border-2 border-dashed border-ink/10 h-full w-full absolute top-0 left-0 pointer-events-none m-1 rounded-sm"></div>
              <div className="bg-[#fcf8f0] p-8 md:p-10 rounded-sm shadow-inner relative overflow-hidden flex flex-col gap-8">
                <div className="text-center border-b-2 border-ink/40 pb-4 mb-2 border-double">
                   <h2 className="font-headline font-bold text-3xl text-ink tracking-tight uppercase italic">Petición de Canción</h2>
                   <p className="text-ink/60 text-[10px] font-bold uppercase tracking-widest mt-1 font-mono italic">La Fiesta Club • EST 1978</p>
                </div>
                
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="flex flex-col gap-1">
                      <label className="text-ink text-[10px] font-black uppercase tracking-widest font-mono flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">person</span>
                        Tu Nombre (El Promotor)
                      </label>
                      <input className="w-full bg-transparent border-0 border-b-2 border-ink/20 text-ink placeholder:text-ink/20 focus:ring-0 focus:border-primary px-0 py-2 text-lg font-display italic transition-colors" placeholder="Ej. Héctor Lavoe" type="text" />
                   </div>
                   <div className="flex flex-col gap-1">
                      <label className="text-ink text-[10px] font-black uppercase tracking-widest font-mono flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Tu Email
                      </label>
                      <input className="w-full bg-transparent border-0 border-b-2 border-ink/20 text-ink placeholder:text-ink/20 focus:ring-0 focus:border-primary px-0 py-2 text-lg font-display italic transition-colors" placeholder="tu@email.com" type="email" />
                   </div>
                   <div className="flex flex-col gap-1">
                      <label className="text-ink text-[10px] font-black uppercase tracking-widest font-mono flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">queue_music</span>
                        ¿Qué ritmo necesitas?
                      </label>
                      <textarea className="w-full bg-transparent border-2 border-ink/5 rounded-lg text-ink placeholder:text-ink/20 focus:ring-0 focus:border-primary px-3 py-3 text-lg font-display italic leading-snug resize-none mt-2" placeholder="Cuéntame sobre tu proyecto..." rows={3}></textarea>
                   </div>

                   <button className="mt-4 w-full bg-primary hover:bg-black text-white font-headline text-2xl py-5 rounded-lg shadow-[4px_4px_0px_0px_#2a1e1e] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined text-3xl">play_circle</span>
                      ¡DALE MAMBO!
                   </button>
                </form>

                <div className="text-center mt-2">
                   <p className="text-ink/30 text-[9px] italic font-mono uppercase tracking-tighter">* Al presionar el botón, aceptas unirte a la rumba.</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

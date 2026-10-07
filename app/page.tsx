import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Obraksa Solano | Obras y reformas en Mallorca",
  description:
    "Obras y reformas para viviendas y locales en Mallorca. Calidad, compromiso y atención personalizada para cada proyecto.",
};

const whatsappUrl =
  "https://wa.me/34667898566?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20para%20una%20reforma.";

const services = [
  {
    number: "01",
    title: "Reformas integrales",
    description: "Renovamos tu vivienda o local de principio a fin, coordinando cada fase de la obra.",
    icon: "M3 21h18M5 21V7l8-4 6 3v15M9 21v-7h6v7M16 8h.01M9 8h.01",
  },
  {
    number: "02",
    title: "Reformas de baños",
    description: "Espacios más cómodos y funcionales, con soluciones cuidadas hasta el último detalle.",
    icon: "M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4ZM6 12V6a2 2 0 0 1 4 0v1M4 20v1m16-1v1",
  },
  {
    number: "03",
    title: "Reformas de cocinas",
    description: "Mejoramos la distribución, los acabados y el día a día de uno de los espacios clave de casa.",
    icon: "M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M4 10h16M8 6v1m4-1v1m4-1v1M8 14h3v3H8zM15 14h2",
  },
  {
    number: "04",
    title: "Albañilería",
    description: "Tabiques, reparaciones y trabajos de obra ejecutados con rigor y buenos acabados.",
    icon: "M3 7h18M3 12h18M3 17h18M7 7v5m10 0v5M12 7v5M7 12v5",
  },
  {
    number: "05",
    title: "Pintura",
    description: "Preparamos y renovamos paredes y techos para dar una nueva vida a cada estancia.",
    icon: "m14 4 6 6M5 19l3-.6L19 7a2.1 2.1 0 0 0-3-3L5 15l-1 4ZM4 21h16",
  },
  {
    number: "06",
    title: "Fontanería",
    description: "Instalaciones, sustituciones y reparaciones para un funcionamiento fiable y duradero.",
    icon: "M7 3v5m4-5v5M5 8h8v3a4 4 0 0 1-4 4h0v6m6-7h4m-2-2v4",
  },
  {
    number: "07",
    title: "Electricidad",
    description: "Instalaciones y mejoras eléctricas adaptadas a las necesidades de cada espacio.",
    icon: "M13 2 4 14h7l-1 8 10-12h-7l1-8Z",
  },
  {
    number: "08",
    title: "Suelos y revestimientos",
    description: "Colocación y renovación de superficies para un resultado sólido, limpio y armonioso.",
    icon: "M3 3h18v18H3zM3 9h18M9 3v6m6-6v6M6 9v6m6-6v6m6-6v6M3 15h18",
  },
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`inline-flex items-center gap-2.5 text-xl font-semibold tracking-[0.02em] ${light ? "text-white" : "text-[#171714]"}`}
      aria-label="Obraksa Solano, ir al inicio"
    >
      <Image
        src="/images/image.png"
        alt=""
        width={96}
        height={98}
        className="size-10 shrink-0 rounded-sm object-cover"
      />
      <span>Obraksa<span className="font-normal"> Solano</span></span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="relative z-20 border-b border-black/8 bg-white">
        <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Wordmark />
          <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex xl:gap-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#171714] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#38352e]">
              Consulta por WhatsApp <span aria-hidden="true" className="ml-2 text-[#d0af6d]">↗</span>
            </a>
          </nav>
          <details className="group relative lg:hidden">
            <summary className="grid size-11 cursor-pointer list-none place-items-center border border-black/15 text-[#171714] [&::-webkit-details-marker]:hidden" aria-label="Abrir menú de navegación">
              <span className="flex w-5 flex-col gap-1.25 group-open:gap-0">
                <span className="h-px w-5 bg-current transition-transform group-open:translate-y-px group-open:rotate-45" />
                <span className="h-px w-5 bg-current transition-transform group-open:-translate-y-px group-open:-rotate-45" />
              </span>
            </summary>
            <nav aria-label="Navegación móvil" className="absolute right-0 top-[calc(100%+12px)] flex w-[min(19rem,calc(100vw-2.5rem))] flex-col border border-black/10 bg-white p-2 shadow-xl">
              <a href="tel:667898566" className="mt-1 bg-[#171714] px-4 py-3 text-sm font-medium text-white">Llamar al 667898566</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section id="inicio" className="overflow-hidden bg-[#171714] text-white">
          <div className="mx-auto grid min-h-155 max-w-360 lg:min-h-172.5 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 xl:px-14">
              <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#d0af6d]">
                <span className="h-px w-9 bg-[#c8a45c]" /> Obras y reformas · Mallorca
              </p>
              <h1 className="max-w-none text-[clamp(2.8rem,5vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.055em]">
                Obraksa<span className="text-[#d0af6d]"> Solano</span>
              </h1>
              <h2 className="mt-7 max-w-147.5 text-2xl font-medium leading-tight sm:text-3xl lg:text-[2.55rem]">
                Obras y reformas con calidad, compromiso y confianza.
              </h2>
              <p className="mt-5 max-w-125 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Realizamos trabajos de construcción y reforma para viviendas y locales. Cuéntanos tu proyecto; nos ocupamos de cada detalle.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#c8a45c] px-6 text-sm font-semibold text-[#171714] transition-colors hover:bg-[#dfc483]">
                  Consulta por WhatsApp <span aria-hidden="true" className="text-lg">↗</span>
                </a>
                <a href="tel:667898566" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:border-[#c8a45c] hover:text-[#e2c681]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-[#d0af6d]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" /></svg>
                  Llamar ahora
                </a>
              </div>
              <div className="mt-12 flex items-center gap-3 text-sm text-white/55">
                <span className="grid size-9 place-items-center rounded-full border border-[#c8a45c]/50 text-[#d0af6d]" aria-hidden="true">⌖</span>
                <span>Atendemos en Mallorca</span>
              </div>
            </div>
            <div
              role="img"
              aria-label="Interior luminoso renovado con materiales naturales y acabados cuidados"
              className="relative min-h-90 bg-cover bg-center sm:min-h-115 lg:min-h-full"
              style={{ backgroundImage: "linear-gradient(90deg, #171714 0%, rgba(23,23,20,.46) 23%, rgba(23,23,20,.05) 100%), linear-gradient(0deg, rgba(23,23,20,.32), transparent 48%), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85')" }}
            >
              <div className="absolute bottom-7 right-5 border-l border-[#d0af6d] bg-[#171714]/80 px-5 py-4 backdrop-blur-sm sm:bottom-10 sm:right-8 sm:px-7 sm:py-5 lg:right-12">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#d0af6d]">Espacios para vivir mejor</p>
                <p className="mt-1.5 text-base font-medium text-white sm:text-lg">Reformas hechas con oficio</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-3 px-5 py-5 text-[11px] uppercase tracking-[0.15em] text-white/45 sm:px-8 lg:px-12">
              <span>Trabajo profesional</span><span className="text-[#c8a45c]">/</span>
              <span>Atención personalizada</span><span className="text-[#c8a45c]">/</span>
              <span>Acabados cuidados</span>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-8 bg-[#f7f7f5] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7839]">Lo que hacemos</p>
                <h2 className="text-3xl font-medium tracking-[-0.035em] text-[#171714] sm:text-4xl lg:text-5xl">Nuestros servicios</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#686861]">
                Soluciones para renovar, reparar y mejorar cada rincón de tu vivienda o local.
              </p>
            </div>
            <div className="grid grid-cols-1 border-l border-t border-[#deded8] sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.number} className="group min-h-59 border-b border-r border-[#deded8] bg-white p-6 transition-colors hover:bg-[#f0ede5] sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center border border-[#c8a45c]/55 text-[#9a7839] transition-colors group-hover:bg-[#c8a45c] group-hover:text-[#171714]" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d={service.icon} />
                      </svg>
                    </span>
                    <span className="text-xs tabular-nums text-[#a2a198]">{service.number}</span>
                  </div>
                  <h3 className="mt-7 text-lg font-semibold text-[#20201c]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#73736c]">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="scroll-mt-8 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7839]">Obraksa Solano · Mallorca</p>
              <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.035em] text-[#171714] sm:text-4xl lg:text-[3.4rem]">
                Construimos, reformamos y transformamos espacios
              </h2>
              <div className="mt-8 h-px w-16 bg-[#c8a45c]" />
            </div>
            <div className="lg:pt-2">
              <p className="text-lg leading-8 text-[#44443e]">
                Cada obra empieza escuchando a quien la va a disfrutar. En Obraksa Solano cuidamos el proceso de principio a fin: entendemos tus necesidades, te orientamos con claridad y trabajamos con atención en cada acabado.
              </p>
              <p className="mt-5 text-base leading-7 text-[#73736c]">
                Apostamos por materiales de calidad, presupuestos claros y una comunicación cercana. Coordinamos los trabajos con compromiso para que el resultado responda a lo acordado y a la forma en que quieres vivir o trabajar tu espacio.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-[#e5e4df] pt-7 sm:grid-cols-2">
                {["Trabajo profesional", "Materiales de calidad", "Atención personalizada", "Cumplimiento de plazos", "Presupuestos claros", "Acabados cuidados"].map((value) => (
                  <div key={value} className="flex items-center gap-3 text-sm font-medium text-[#30302b]">
                    <span className="grid size-6 shrink-0 place-items-center border border-[#c8a45c] text-[11px] text-[#9a7839]" aria-hidden="true">✓</span>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#171714] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="pointer-events-none absolute -right-20 -top-40 size-107.5 rounded-full border border-[#c8a45c]/15 sm:right-[-8%] sm:size-140" />
          <div className="pointer-events-none absolute -right-6 -top-24 size-77.5 rounded-full border border-[#c8a45c]/10 sm:right-[-3%] sm:size-107.5" />
          <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-9 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d0af6d]">Empezamos cuando tú quieras</p>
              <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">¿Tienes un proyecto en mente?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">Cuéntanos qué necesitas y te ayudaremos a hacerlo realidad.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#c8a45c] px-6 text-sm font-semibold text-[#171714] transition-colors hover:bg-[#dfc483]">
                Consulta por WhatsApp <span aria-hidden="true" className="text-lg">↗</span>
              </a>
              <a href="tel:667898566" className="inline-flex min-h-14 items-center justify-center border border-white/30 px-6 text-sm font-medium text-white transition-colors hover:border-[#c8a45c] hover:text-[#e2c681]">
                Llamar ahora
              </a>
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-8 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7839]">Obraksa Solano · Mallorca</p>
              <h2 className="text-3xl font-medium tracking-[-0.035em] text-[#171714] sm:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-[#686861]">Cuéntanos qué necesitas y te orientaremos sobre los próximos pasos.</p>
            </div>
            <div className="flex flex-col justify-between gap-5 border-t border-[#deded8] pt-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9a7839]">Llámanos</p>
                <a href="tel:667898566" className="mt-2 block text-2xl font-medium text-[#171714] transition-colors hover:text-[#9a7839]">667 898 566</a>
                <p className="mt-1 text-sm text-[#77776f]">Mallorca</p>
              </div>
              <a href="tel:667898566" aria-label="Llamar a Obraksa Solano al 667 898 566" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#171714] px-5 text-sm font-medium text-white transition-colors hover:bg-[#38352e]">
                Llamar ahora <span aria-hidden="true" className="text-[#d0af6d]">↗</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#171714] px-5 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/12 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-14">
          <div>
            <Wordmark light />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">Obras y reformas para viviendas y locales, con calidad, compromiso y confianza.</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d0af6d]">Contacto</h2>
            <a href="tel:667898566" className="mt-4 block text-sm text-white/75 transition-colors hover:text-white">667898566</a>
            <p className="mt-2 text-sm text-white/55">Mallorca</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© Obraksa Solano. Todos los derechos reservados.</p>
          <p>Obras y reformas · Mallorca</p>
        </div>
      </footer>
    </>
  );
}

import api from './lib/api';

export const metadata = {
  title: 'Grupos de WhatsApp de Torino',
};

export default async function Home() {
  const data: any = await api.list();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 sm:mb-8">
        Grupos de WhatsApp de Torino
      </h1>
      <p>Grupos de whatsapp de Torino e Italia en general para latinos</p>
      <section className="mx-auto">
        {data.map((item: any) => (
          <div
            key={item.link}
            className="flex items-center justify-between hover:bg-slate-300 cursor-default p-2 rounded-lg mb-4 sm:mb-0"
          >
            <div className="flex-grow overflow-hidden truncate">{item.name}</div>
            <a
              className="px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none dark:bg-green-500 dark:hover:bg-green-600"
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              Unirme
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}

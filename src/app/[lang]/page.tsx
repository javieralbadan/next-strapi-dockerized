import Banner from '@/components/Banner';
import ClientLogos from '@/components/ClientLogos';

export default async function HomePage({ params }: {
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  console.log('🚀 ~ [lang]/page lang:', lang);

  return (
    <div>
      <Banner />
      <ClientLogos lang={lang} />
    </div>
  );
};

// app/[lang]/contact/page.tsx

export default async function Contact ({ params }: { 
  params: Promise<{ lang: string }>
}) {
  const lang = (await params).lang;
  console.log('🚀 ~ [lang]/contact:', lang);
  // const content = await getContent('contact', lang)

  return (
    <div>
      <h1>Contacto</h1>
    </div>
  )
}

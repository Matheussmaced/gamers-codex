
export default function CardComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-700 py-4 px-6 font-bold rounded-xl">
      {children}
    </main>
  )
}
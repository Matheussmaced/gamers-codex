export default function MainCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-3xl rounded-md py-8 px-6 m-auto border-purple-700 border-2" style={{ backgroundColor: "rgba(31, 41, 55, 0.9)" }}>
      {children}
    </div>
  )
}
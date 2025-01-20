import NavBar from "./_components/NavBar";

export default function JoinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main> {children}</main>
    </>
  );
}

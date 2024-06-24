import MobileNav from "@/components/MobileNav";
import Siderbar from "@/components/Siderbar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstname: 'Aaditya', lastname: 'Pitroda' };

  return (
    <main className="flex h-screen w-full font-inter">
        <Siderbar user = {loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="FinFlow Logo" width={30} height={30}/>
            <div>
              <MobileNav user = {loggedIn} />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}

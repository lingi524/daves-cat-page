import Header from "@/components/Header";
import Main from "@/components/Main";
export default function Home() {
  return (
    <main className="flex items-center justify-start flex-col p-12 gap-10 relative">
      <Header />
      <Main />
      {/* Footer */}
    </main>
  );
}

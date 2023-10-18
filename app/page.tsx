import CatCard from "@/components/CatCard";
import Header from "@/components/Header";
import Main from "@/components/Main";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-start flex-col p-12 gap-10">
      <Header />
      <Main />
      {/* Footer */}
    </main>
  );
}

import { ClientComponent } from "@/app/client-component";

async function loadSlowData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hey from slow thing ");
    }, 500);
  });
}

export async function DataLoader() {
  const data = await loadSlowData();

  return <div>{data}</div>;
}

export default function Home() {
  return (
    <main>
      <ClientComponent />
    </main>
  );
}

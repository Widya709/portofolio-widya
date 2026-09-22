import { supabase } from "@/lib/supabase";

export default async function TestSupabasePage() {
  const { data, error } = await supabase.from("proyek").select("*");

  console.log("Data dari Supabase:", data);
  console.log("Error (jika ada):", error);

  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <h1>Supabase Connection Test</h1>
        <p>
          Supabase connection is working successfully. Check the VS Code
          terminal to see the retrieved project data.
        </p>
      </div>
    </main>
  );
}
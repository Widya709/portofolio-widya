import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

interface HapusProyekPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function hapusProyekAction(formData: FormData) {
  "use server";

  const id = String(formData.get("id") ?? "");

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("proyek")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Gagal menghapus proyek:", error.message);
    return;
  }

  revalidatePath("/admin/proyek");
  revalidatePath("/proyek");

  redirect("/admin/proyek");
}

export default async function HapusProyekPage({
  params,
}: HapusProyekPageProps) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();

  const { data: proyek } = await supabase
    .from("proyek")
    .select("id, judul")
    .eq("id", id)
    .single();

  if (!proyek) {
    redirect("/admin/proyek");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "rgba(12, 27, 38, 0.82)",
          border: "1px solid rgba(239, 68, 68, 0.18)",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.18)",
            color: "#fca5a5",
            fontSize: "20px",
            fontWeight: 700,
            marginBottom: "22px",
          }}
        >
          !
        </div>

        <p
          style={{
            margin: "0 0 8px",
            color: "#f87171",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Delete Project
        </p>

        <h1
          style={{
            margin: 0,
            color: "#f4f8fb",
            fontSize: "28px",
            lineHeight: 1.25,
            fontWeight: 700,
          }}
        >
          Delete this project?
        </h1>

        <p
          style={{
            margin: "16px 0 8px",
            color: "#9fb2bf",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          You are about to delete:
        </p>

        <div
          style={{
            padding: "15px 16px",
            marginBottom: "16px",
            borderRadius: "11px",
            background: "rgba(5, 17, 26, 0.7)",
            border: "1px solid rgba(120, 201, 245, 0.1)",
            color: "#edf7fc",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          {proyek.judul}
        </div>

        <p
          style={{
            margin: "0 0 28px",
            color: "#fca5a5",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          This action cannot be undone. The project will also be removed
          from the public Projects page.
        </p>

        <form
          action={hapusProyekAction}
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <input
            type="hidden"
            name="id"
            value={proyek.id}
          />

          <button
            type="submit"
            style={{
              border: "none",
              borderRadius: "10px",
              padding: "13px 20px",
              background: "#dc2626",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Yes, Delete
          </button>

          <a
            href="/admin/proyek"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: "10px",
              padding: "13px 20px",
              background: "rgba(120, 201, 245, 0.07)",
              border: "1px solid rgba(120, 201, 245, 0.14)",
              color: "#9fb8c7",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            Cancel
          </a>
        </form>
      </section>
    </main>
  );
}
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

interface EditProyekPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function editProyekAction(formData: FormData) {
  "use server";

  const id = String(formData.get("id") ?? "");

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("proyek")
    .update({
      judul: String(formData.get("judul") ?? ""),
      kategori: String(formData.get("kategori") ?? ""),
      deskripsi: String(formData.get("deskripsi") ?? ""),
      teknologi: String(formData.get("teknologi") ?? ""),
      gambar: String(formData.get("gambar") ?? ""),
      link: String(formData.get("link") ?? "") || null,
    })
    .eq("id", id);

  if (error) {
    console.error("Gagal mengedit proyek:", error.message);
    return;
  }

  revalidatePath("/admin/proyek");
  revalidatePath("/proyek");

  redirect("/admin/proyek");
}

export default async function EditProyekPage({
  params,
}: EditProyekPageProps) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();

  const { data: proyek } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", id)
    .single();

  if (!proyek) {
    redirect("/admin/proyek");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 24px 100px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "#78c9f5",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Project Management
          </p>

          <h1
            style={{
              margin: 0,
              color: "#f4f8fb",
              fontSize: "36px",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            Edit Project
          </h1>

          <p
            style={{
              margin: "12px 0 0",
              color: "#8fa4b3",
              fontSize: "14px",
            }}
          >
            Update the information of your portfolio project.
          </p>
        </div>

        <section
          style={{
            background: "rgba(12, 27, 38, 0.78)",
            border: "1px solid rgba(120, 201, 245, 0.12)",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <form
            action={editProyekAction}
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <input
              type="hidden"
              name="id"
              value={proyek.id}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "18px",
              }}
            >
              <div>
                <label
                  htmlFor="edit-judul"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#d9e6ee",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Project Title
                </label>

                <input
                  id="edit-judul"
                  name="judul"
                  defaultValue={proyek.judul}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px 14px",
                    borderRadius: "10px",
                    border:
                      "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(5, 17, 26, 0.75)",
                    color: "#edf7fc",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="edit-kategori"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#d9e6ee",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Category
                </label>

                <input
                  id="edit-kategori"
                  name="kategori"
                  defaultValue={proyek.kategori ?? ""}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px 14px",
                    borderRadius: "10px",
                    border:
                      "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(5, 17, 26, 0.75)",
                    color: "#edf7fc",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="edit-deskripsi"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#d9e6ee",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Description
              </label>

              <textarea
                id="edit-deskripsi"
                name="deskripsi"
                defaultValue={proyek.deskripsi ?? ""}
                required
                rows={5}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: "10px",
                  border:
                    "1px solid rgba(148, 163, 184, 0.2)",
                  background: "rgba(5, 17, 26, 0.75)",
                  color: "#edf7fc",
                  fontSize: "14px",
                  resize: "vertical",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "18px",
              }}
            >
              <div>
                <label
                  htmlFor="edit-teknologi"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#d9e6ee",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Technologies
                </label>

                <input
                  id="edit-teknologi"
                  name="teknologi"
                  defaultValue={proyek.teknologi ?? ""}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px 14px",
                    borderRadius: "10px",
                    border:
                      "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(5, 17, 26, 0.75)",
                    color: "#edf7fc",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="edit-gambar"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#d9e6ee",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Image Path
                </label>

                <input
                  id="edit-gambar"
                  name="gambar"
                  defaultValue={proyek.gambar ?? ""}
                  required
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px 14px",
                    borderRadius: "10px",
                    border:
                      "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(5, 17, 26, 0.75)",
                    color: "#edf7fc",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="edit-link"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#d9e6ee",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Project Link
              </label>

              <input
                id="edit-link"
                name="link"
                type="url"
                defaultValue={proyek.link ?? ""}
                placeholder="https://github.com/..."
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: "10px",
                  border:
                    "1px solid rgba(148, 163, 184, 0.2)",
                  background: "rgba(5, 17, 26, 0.75)",
                  color: "#edf7fc",
                  fontSize: "14px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "8px",
              }}
            >
              <button
                type="submit"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  padding: "13px 20px",
                  background:
                    "linear-gradient(135deg, #a7ddfa, #62bff0)",
                  color: "#07131d",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Save Changes
              </button>

              <a
                href="/admin/proyek"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  borderRadius: "10px",
                  padding: "13px 20px",
                  background: "rgba(120, 201, 245, 0.07)",
                  border:
                    "1px solid rgba(120, 201, 245, 0.14)",
                  color: "#9fb8c7",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Cancel
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
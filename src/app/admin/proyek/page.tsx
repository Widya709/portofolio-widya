import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getProyek, createProyek } from "../../../services/proyek";

export default async function AdminProyekPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const proyek = await getProyek();
  const latestProject =
    proyek.length > 0 ? proyek[proyek.length - 1] : null;

  async function logoutAction() {
    "use server";

    const supabase = await createSupabaseServerClient();

    await supabase.auth.signOut();

    redirect("/admin/login");
  }

  async function createAction(formData: FormData) {
    "use server";

    const supabase = await createSupabaseServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/admin/login");
    }

    await createProyek({
      judul: String(formData.get("judul") || ""),
      kategori: String(formData.get("kategori") || ""),
      deskripsi: String(formData.get("deskripsi") || ""),
      teknologi: String(formData.get("teknologi") || ""),
      gambar: String(formData.get("gambar") || ""),
      link: String(formData.get("link") || "") || null,
    });

    revalidatePath("/proyek");
    revalidatePath("/admin/proyek");

    redirect("/admin/proyek");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07131d",
        color: "#edf7fc",
        paddingBottom: "80px",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(120, 201, 245, 0.12)",
          background: "#07131d",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div>
          <strong
            style={{
              color: "#78c9f5",
              fontSize: "13px",
              letterSpacing: "0.08em",
            }}
          >
            PORTFOLIO ADMIN
          </strong>

          <p
            style={{
              color: "#8fa4b3",
              fontSize: "12px",
              margin: "5px 0 0",
            }}
          >
            {user.email}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a
            href="/admin/proyek"
            style={{
              color: "#dceaf2",
              textDecoration: "none",
              fontSize: "13px",
              padding: "9px 13px",
              borderRadius: "9px",
              border: "1px solid rgba(120, 201, 245, 0.15)",
            }}
          >
            Projects
          </a>

          <form action={logoutAction}>
            <button
              type="submit"
              style={{
                border: "1px solid rgba(248, 113, 113, 0.3)",
                background: "rgba(248, 113, 113, 0.06)",
                color: "#fca5a5",
                padding: "9px 14px",
                borderRadius: "9px",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </header>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 24px",
        }}
      >
        <p
          style={{
            color: "#78c9f5",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            margin: 0,
          }}
        >
          DASHBOARD
        </p>

        <h1
          style={{
            fontSize: "40px",
            margin: "8px 0",
          }}
        >
          Project Management
        </h1>

        <p
          style={{
            color: "#8fa4b3",
            margin: 0,
          }}
        >
          Manage your portfolio projects.
        </p>

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "35px",
          }}
        >
          <div style={statCardStyle}>
            <p style={statLabelStyle}>TOTAL PROJECTS</p>

            <strong style={statValueStyle}>
              {proyek.length}
            </strong>
          </div>

          <div style={statCardStyle}>
            <p style={statLabelStyle}>ADMIN ACCOUNT</p>

            <strong
              style={{
                display: "block",
                marginTop: "12px",
                fontSize: "15px",
                color: "#edf7fc",
                wordBreak: "break-word",
              }}
            >
              {user.email}
            </strong>
          </div>

          <div style={statCardStyle}>
            <p style={statLabelStyle}>LATEST PROJECT</p>

            <strong
              style={{
                display: "block",
                marginTop: "12px",
                fontSize: "15px",
                color: "#edf7fc",
              }}
            >
              {latestProject
                ? latestProject.judul
                : "No project yet"}
            </strong>
          </div>
        </section>

        <section
          style={{
            marginTop: "30px",
            padding: "28px",
            borderRadius: "20px",
            background: "#0c1b26",
            border: "1px solid rgba(120, 201, 245, 0.12)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
            }}
          >
            Add New Project
          </h2>

          <form
            action={createAction}
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <input
              name="judul"
              required
              placeholder="Project title"
              style={inputStyle}
            />

            <input
              name="kategori"
              required
              placeholder="Category"
              style={inputStyle}
            />

            <textarea
              name="deskripsi"
              required
              placeholder="Description"
              rows={4}
              style={inputStyle}
            />

            <input
              name="teknologi"
              required
              placeholder="Technology"
              style={inputStyle}
            />

            <input
              name="gambar"
              required
              placeholder="/gambar-project.jpg"
              style={inputStyle}
            />

            <input
              name="link"
              placeholder="Project link"
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                padding: "13px",
                border: "none",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg, #a7ddfa, #62bff0)",
                color: "#07131d",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Add Project
            </button>
          </form>
        </section>

        <section
          style={{
            marginTop: "30px",
            padding: "28px",
            borderRadius: "20px",
            background: "#0c1b26",
            border: "1px solid rgba(120, 201, 245, 0.12)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
            }}
          >
            Your Projects
          </h2>

          <div style={{ marginTop: "20px" }}>
            {proyek.length === 0 ? (
              <p
                style={{
                  color: "#8fa4b3",
                  margin: 0,
                }}
              >
                No projects available.
              </p>
            ) : (
              proyek.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "18px 0",
                    borderBottom:
                      "1px solid rgba(120, 201, 245, 0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      {item.judul}
                    </strong>

                    <div
                      style={{
                        color: "#78c9f5",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      {item.kategori}
                    </div>

                    <div
                      style={{
                        color: "#8fa4b3",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      {item.teknologi}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexShrink: 0,
                    }}
                  >
                    <a
                      href={`/admin/proyek/edit/${item.id}`}
                      style={{
                        color: "#78c9f5",
                        textDecoration: "none",
                        border:
                          "1px solid rgba(120, 201, 245, 0.2)",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    >
                      Edit
                    </a>

                    <a
                      href={`/admin/proyek/hapus/${item.id}`}
                      style={{
                        color: "#fca5a5",
                        textDecoration: "none",
                        border:
                          "1px solid rgba(248, 113, 113, 0.2)",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "13px",
  borderRadius: "10px",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  background: "#07131d",
  color: "#edf7fc",
};

const statCardStyle = {
  padding: "22px",
  borderRadius: "18px",
  background: "#0c1b26",
  border: "1px solid rgba(120, 201, 245, 0.12)",
};

const statLabelStyle = {
  margin: 0,
  color: "#78c9f5",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.12em",
};

const statValueStyle = {
  display: "block",
  marginTop: "10px",
  fontSize: "32px",
  color: "#edf7fc",
};
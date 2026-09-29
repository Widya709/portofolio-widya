import { createSupabaseServerClient } from "../../../lib/supabase-server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function logoutAction() {
    "use server";

    const supabase = await createSupabaseServerClient();

    await supabase.auth.signOut();

    redirect("/admin/login");
  }

  if (!user) {
    return children;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07131d",
        color: "#edf7fc",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(120, 201, 245, 0.12)",
          background: "rgba(7, 19, 29, 0.96)",
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "#78c9f5",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Portfolio Admin
            </p>

            <p
              style={{
                margin: "5px 0 0",
                color: "#9fb2bf",
                fontSize: "13px",
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
                border: "1px solid rgba(120, 201, 245, 0.12)",
              }}
            >
              Projects
            </a>

            <form action={logoutAction}>
              <button
                type="submit"
                style={{
                  border: "1px solid rgba(248, 113, 113, 0.25)",
                  background: "rgba(248, 113, 113, 0.06)",
                  color: "#fca5a5",
                  padding: "9px 13px",
                  borderRadius: "9px",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
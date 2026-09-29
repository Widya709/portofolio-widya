import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  async function loginAction(formData: FormData) {
    "use server";

    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      redirect("/admin/login?error=Email%20atau%20password%20salah");
    }

    redirect("/admin/proyek");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07131d",
        color: "#edf7fc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <form
        action={loginAction}
        autoComplete="off"
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "32px",
          borderRadius: "20px",
          background: "#0c1b26",
          border: "1px solid rgba(120, 201, 245, 0.15)",
        }}
      >
        <p
          style={{
            color: "#78c9f5",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Portfolio Admin
        </p>

        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "32px",
          }}
        >
          Welcome back
        </h1>

        <p
          style={{
            color: "#8fa4b3",
            fontSize: "14px",
            marginBottom: "28px",
          }}
        >
          Sign in to manage your projects.
        </p>

        <label
          htmlFor="email"
          style={{
            display: "block",
            fontSize: "13px",
            marginBottom: "8px",
          }}
        >
          Email
        </label>

        <input
  id="email"
  name="email"
  type="email"
  autoComplete="off"
  required
  placeholder="Enter your email"
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "13px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    background: "#07131d",
    color: "#fff",
  }}
        />

        <label
          htmlFor="password"
          style={{
            display: "block",
            fontSize: "13px",
            marginBottom: "8px",
          }}
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          placeholder="Enter your password"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "13px",
            marginBottom: "22px",
            borderRadius: "10px",
            border: "1px solid rgba(148, 163, 184, 0.2)",
            background: "#07131d",
            color: "#fff",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #a7ddfa, #62bff0)",
            color: "#07131d",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
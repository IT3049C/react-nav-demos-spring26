import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from.pathname || `/`;

  return (
    <section>
      <h2>Login</h2>

      <button
        onClick={() => {
          login();
          navigate(from);
        }}
      >
        Sign In
      </button>
    </section>
  );
}

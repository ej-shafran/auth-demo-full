import { useAuth } from "@hilma/auth";
import { Link } from "react-router-dom";

export default () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <Link to="/login">לכניסה</Link>
      <Link to="/register">להרשמה</Link>
      <Link to="/admin">אדמין בלבד</Link>
      <Link to="/user">יוזרים</Link>
      {isAuthenticated && <button onClick={() => logout()}>ליציאה</button>}
    </div>
  );
};

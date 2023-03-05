import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link to="/register">להרשמה</Link>
      <br />
      <Link to="/login">לכניסה</Link>
      <br />
      <Link to="admin">לארמין בלבד</Link>
      <br />
      <Link to="/user">למשתמש בלבד</Link>
      <br />

      {/*TODO: add a log out button here */}
    </div>
  );
};

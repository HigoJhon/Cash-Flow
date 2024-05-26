import { useState } from "react";
import FormePassword from "./formePessword";
import FormePerfil from "./formPerfil";

import "../style/pages/newUser.css"
import "../style/components/editPerfil.css"
import { useLocation, useNavigate } from "react-router-dom";
import { putRequests } from "../Service/Request";

function EditPerfil() {
  const [userForme, setUserForme] = useState({ name: '', telephone: '', email: '' });
  const [password, setPassword] = useState({ password: '', confirmPassword: '' });
  const [editPassword, setEditPassword] = useState(true)
  const [error, setError] = useState('');

  const location = useLocation()
  const navigate = useNavigate();

  const handleProfile = async () => {
    if (password.password !== password.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.password.length < 6) {
      setError('Password must have at least 6 characters');
      return;
    }

    try {
      const userId = location.state.userId;
      
      await putRequests(`/User/${userId}`, {
        nameId: userId,
        name: userForme.name, 
        telephone: userForme.telephone, 
        email: userForme.email, 
        password: password.password 
      });

      localStorage.clear();

      navigate("/");
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <main style={{width: '100%'}}>
      <form className="form-newUser" style={{background: "#b2c7b3"}}>
          {
            editPassword ?
            <>
              <h1>Edit Profile</h1>
              <br />
              <div className="div-input-newUser">
                <FormePerfil 
                    userForme={userForme}
                    setUserForme={setUserForme}
                    />
              </div>
              <p className="p-edit">
                Update password ?
                <span className="span-edit" onClick={() => setEditPassword(false)} > here !</span>
              </p>
            </>
              : 
              <>
                <h2>Update password</h2>
                <br />
                <FormePassword 
                    password={password}
                    setPassword={setPassword}
                />
                <br />
                <p style={ { color:"red"}} >
                  {error && <p className="error-message">{error}</p>}
                </p>
                <br />
                <p className="p-edit">
                 Update profile ?
                <span className="span-edit" onClick={() => setEditPassword(true)} > here !</span>
                </p>
            </>
          }
          <br />
          <button className="create_button" type="button" onClick={() => handleProfile()} >
                New Profile
              </button>
      </form>
    </main>
  );
}

export default EditPerfil;
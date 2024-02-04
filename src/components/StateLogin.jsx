
import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value)=> isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value)=> hasMinLength(value, 6));

  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // })

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false
  // });

  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  // const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  // const handleInputChange = name => event => {
  //   setEnteredValues(prevValues => ({
  //     ...prevValues,
  //     [name]: event.target.value
  //   }))
  //   // update blur on change input
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [name]: false
  //   }))
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier]: true
  //   }))
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password!'}
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={handleInputChange('email')}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handleInputChange('password')} value={enteredValues.password} />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

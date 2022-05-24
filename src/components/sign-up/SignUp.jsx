import "./sign-up.css";

function SignUp() {
  return (
    <>
      <div className='signup'>
        <div className='signcontainer'>
          <img src='./images/anywaka1.jpg' alt='logo' className='logo-image' />
          <div className='nav-items'>
            <span className='login'>Login</span>
            <span className='login'>See events</span>
            <span className='login'>Help</span>
          </div>
        </div>
      </div>
      <div className='sign-body'>
        <div className='bodycontainer row'>
          <img
            src='./images/sign-image.jpg'
            alt='/'
            className='sign-image col-6'
          />
          <div className='sign-form col-6'> 
            <h1>Sign Up</h1>

            <form action='' method='post' className='form-input mt-4'>
              <input
                type='text'
                id='name'
                class='form-control form-control-lg w-50 m-auto'
                name='name'
                placeholder='Name'
              />
              <br />
              <input
                type='email'
                id='email'
                class='form-control form-control-lg w-50 m-auto'
                name='email'
                placeholder='Email'
              />
              <br />
              <input
                type='password'
                id='password'
                class='form-control form-control-lg w-50 m-auto'
                name='password'
                placeholder='Password'
              />
              <br />
              <input
                type='submit'
                id='sign-up'
                class='form-control form-control-lg w-50 m-auto text-bg-danger'
                name='sign-up'
                value='SIGN UP'
              />
            </form>
            <div className='login-alt mt-4'>
              <p className='login-write text-secondary'> 
                Already have an account? <span className="text-danger">Login</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

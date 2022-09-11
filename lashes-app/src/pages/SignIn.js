const Signin = () => {

  return(
    <div class="container">
    <div class="welcome">
      <div class="box">
        <div class="signup nodisplay">
          <h1>register</h1>
          <form autocomplete="off">
            <input type="text" placeholder="username"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="confirm password"/>
            <button class="button submit">create account </button>
          </form>
        </div>
        <div class="signin">
          <h1>sign in</h1>
          <form class="more-padding" autocomplete="off">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <div class="checkbox">
              <input type="checkbox" id="remember" /><label for="remember">remember me</label>
            </div>
  
            <button class="button submit">login</button>
          </form>
        </div>
      </div>
      <div class="leftbox">
        <h2 class="title"><span>WELCOME</span><br/>BACK</h2>
        <p class="desc">Checkout you rewards!</p>
        <img class="lashes signin" src="https://cdn.shopify.com/s/files/1/0554/8775/8543/files/Hnet-image_a8d68191-2dd8-48a1-8376-0841009ea407_480x480.gif?v=1650286878" alt="1357d638624297b" border="0"/>
        <p class="account">have an account?</p>
        <button class="button" id="signin" href="/signin">login</button>
      </div>
      <div class="rightbox">
        <h2 class="title"><span>HELLO</span><br/>GORGEOUS</h2>
        <p class="desc">Join us for some awesome rewards! </p>
        <img class="lashes signup" src="https://cdn.shopify.com/s/files/1/0554/8775/8543/files/Hnet.com-image_2_480x480.gif?v=1650287578"/>
        <p class="account">don't have an account?</p>
        <button class="button" id="signup" href="/register">sign up</button>
      </div>
    </div>
   </div>
  )
  }
  export default Signin;
<header>
  <div class="container-nav">
    <a href="/"><img class="logo" src="logoD1.png" alt="Logo" /> </a>
    <div class="miau">DATAHEALTH</div>

    <nav>
      <ul>
        <li><a href="/">INICIO</a></li>
        <li><a href="/database">DATABASE</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .logo {
    margin-top: 15px;
    height: 75px;
    flex-grow: 0;
  }
  header {
    z-index: 1;
    background: #2f5968;
    opacity: 0.8;
    color: #ffffff;
    padding: 15px;
    padding: 5px 40px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 120px;
  }
  .miau {
    flex: auto;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 30px;
  }
  nav {
    text-align: right;
  }
  .container-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header a {
    color: #ffffff;
    text-decoration: none;
  }
  nav ul {
    margin: 0;
    margin-right: 70px;
    padding: 0;
    list-style: none;
  }
  nav ul li {
    display: inline-block;
  }
  nav ul li a {
    display: block;
    padding: 10px 50px;
    transition: all 0.5s linear;
    border-radius: 5px;
  }
  nav ul li a:hover {
    color: #fff;
    background-color: #3a4182;
  }
</style>

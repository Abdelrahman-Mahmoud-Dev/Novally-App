<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
      <div class="container">
        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <span><img src="@/assets/img/core-img/logo.png" alt="logo" /></span>
          Novally</a
        >

        <!-- Toggler/collapsibe Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link
                to="/"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                >Discover</router-link
              >
              <div class="dropdown-menu">
                <router-link class="dropdown-item" to="/auctions"
                  >Live Auctions</router-link
                >

                <router-link class="dropdown-item" to="/discover"
                  >Discover</router-link
                >
                <router-link class="dropdown-item" to="itemDetails"
                  >Item Details</router-link
                >
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/activity"
                >Activity</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <router-link
                to="/"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                >Pages</router-link
              >
              <div class="dropdown-menu">
                <router-link class="dropdown-item" to="/walletConnect"
                  >Wallet Connect</router-link
                >
                <router-link class="dropdown-item" to="/createItem"
                  >Create Item</router-link
                >
                <router-link class="dropdown-item" to="/authors"
                  >Authors</router-link
                >
                <router-link class="dropdown-item" to="/profile"
                  >Author Profile</router-link
                >
                <router-link class="dropdown-item" to="/login"
                  >Login</router-link
                >
                <router-link class="dropdown-item" to="/signup"
                  >Sign Up</router-link
                >
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cotactus">Contact</router-link>
            </li>
            <li class="lh-55px">
              <base-button route="/walletConnect" mode="btn login-btn ml-50">
                Connect wallet
              </base-button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<script>
export default {
  components: {},
  methods: {
    whenSroll() {
      if (document.documentElement.scrollTop > 86) {
        document.getElementById("banner").classList.add("shrink");
      } else {
        document.getElementById("banner").classList.remove("shrink");
      }
    },
    collapse() {
      const links = document.querySelectorAll(
        ".dropdown-item , .nav-link:not(.dropdown-toggle)"
      );
      console.log(links);
      const navbarCollapse = document.querySelector(".navbar-collapse");
      links.forEach((link) => {
        link.addEventListener("click", function () {
          navbarCollapse.classList.remove("show");
        });
      });
    },
  },

  mounted() {
    window.addEventListener("scroll", this.whenSroll);
    this.collapse();
  },
};
</script>



<style scoped>
html {
  height: 2000px;
}
nav {
  transition: all 0.5s ease-in;
}
.login-btn {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 12px !important;
  text-transform: uppercase;
  line-height: 33px;
  padding: 0 20px;
  min-width: 100px;
  color: #fff !important;
  background-color: rgba(116, 80, 254, 0.7);
  height: 35px;
  border-radius: 50px;
  letter-spacing: 1px;
}
.navbar-brand {
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
}
.lh-55px {
  line-height: 55px;
}
.navbar-nav .nav-item .nav-link {
  padding: 20px 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
}
.navbar-nav .nav-item .nav-link:hover {
  color: #ff8abd;
}
.navbar-expand-md .navbar-nav .dropdown-menu {
  border-top: 3px solid #fed136;
}
.dropdown-item:hover {
  background-color: #543cbd;
  color: #fff;
}
nav {
  -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
  -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
  transition: padding-top 0.3s, padding-bottom 0.3s;
  border: none;
}

.shrink {
  animation: 0.3s ease-in-out;
  animation-name: fadeInDown;
  background-color: rgb(215, 223, 239);
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.navbar-white .navbar-brand:hover {
  color: #fff;
}
.navbar-dark .navbar-brand:hover {
  color: #333;
}

/* mobile view */
@media (max-width: 500px) {
  .navbar {
    background: rgb(215, 223, 239);
  }
  .navbar-nav {
    border-top: 1px solid #fed136;
    color: #fff;
    z-index: 1;
    margin-top: 5px;
  }
  .navbar-nav .nav-item .nav-link {
    padding: 0.7em 1em !important;
    font-size: 100%;
    font-weight: 500;
  }
}
.navbar-dark .navbar-toggler,
.navbar-white .navbar-toggler,
.navbar-cyan .navbar-toggler {
  background: #086bfe;
  border-color: #333;
}
.navbar-white .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
@media (max-width: 992px) {
  .shrink {
    animation: none;
  }
  .login-btn {
    margin-left: 15px !important;
    margin-top: 15px !important;
  }
  .navbar-collapse .navbar-nav .nav-item .nav-link {
    padding: 5px 12px;
    color: #333;
  }
  .navbar-expand-lg.navbar-dark {
    background: rgb(215, 223, 239);
  }
  .navbar-collapse {
    padding-top: 20px;
    background: rgb(215, 223, 239);
  }
}
.navbar-white.shrink .navbar-brand,
.shrink .navbar-nav .nav-item .nav-link {
  color: #333;
}

.navbar-dark .navbar-brand,
.navbar-dark .navbar-nav .nav-item .nav-link {
  color: #333;
}

.navbar-cyan .navbar-brand,
.navbar-cyan .navbar-nav .nav-item .nav-link {
  color: #04d0ff;
}
.navbar-collapse {
  justify-content: flex-end;
}
</style>
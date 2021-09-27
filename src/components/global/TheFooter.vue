<template>
  <footer class="main-footer text-center">
    <!--Widgets Section-->
    <div class="widgets-section padding-top-small padding-bottom-small">
      <div class="container">
        <div class="row clearfix">
          <!--Footer Column-->
          <div class="footer-column col-md-4 col-sm-6 col-xs-12">
            <div class="footer-widget about-widget">
              <h3 class="has-line-center">About Us</h3>
              <div class="widget-content">
                <div class="text">
                  At the end of the day, going forward, a new normal that has
                  evolved generation X is on the runway heading towards a
                  streamlined cloud solution.
                </div>
                <ul class="social-links">
                  <social-box font="fab" social="facebook-f"> </social-box>
                  <social-box font="fab" social="twitter"></social-box>

                  <social-box font="fab" social="google-plus-g"> </social-box>
                  <social-box font="fab" social="linkedin-in"> </social-box>
                  <social-box font="fab" social="instagram"> </social-box>
                </ul>
              </div>
            </div>
          </div>
          <!--End Footer Column-->

          <!--Footer Column-->
          <div class="footer-column col-md-4 col-sm-6 col-xs-12">
            <div class="footer-widget contact-widget">
              <h3 class="has-line-center">Contact Us</h3>
              <div class="widget-content">
                <ul class="contact-info">
                  <li>
                    <div class="icon">
                      <span class="flaticon-support"></span>
                    </div>
                  </li>
                  <li>10, Mc Donald Avenue, Sunset Park, Newyork</li>
                  <li>+99 999 9999</li>
                  <li>info@yourdomain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <!--End Footer Column-->

          <!--Footer Column-->
          <div class="footer-column col-md-4 col-sm-12 col-xs-12">
            <div class="footer-widget newsletter-widget">
              <h3 class="has-line-center">Newsletter</h3>
              <div class="widget-content">
                <div class="text">
                  Stay Updated with our latest news. We promise not to spam
                </div>
                <div class="newsletter-form">
                  <form method="post">
                    <div class="form-group">
                      <input
                        type="email"
                        name="field-name"
                        value=""
                        placeholder="Your Email"
                        required=""
                      />
                      <button type="submit" class="send-btn">
                        <fa :icon="['far', 'paper-plane']"></fa>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!--End Footer Column-->
        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="copyright-text">Copyright ©. All Rights Reserved</div>
      </div>
    </div>
  </footer>
</template>
<script>
import SocialBox from "../Helper/SocialBox.vue";
export default {
  components: {
    SocialBox,
  },
};
</script>
<style scoped>
.main-footer {
  position: relative;
  background: #020c31;
}
.main-footer .has-line-center:after {
  width: 30px;
  background: #b06ab3;
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  margin: 15px auto;
}
.main-footer h3 {
  color: #fff;
  font-size: 20px;
  margin: 30px 0 25px;
  position: relative;
}
.main-footer .widgets-section {
  position: relative;
  color: #bbbbbb;
  padding: 50px 0 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: url("~@/assets/img/core-img/map-pattern-footer.png") center 75%
    no-repeat;
}

.main-footer .footer-widget {
  position: relative;
}
.main-footer .about-widget .text {
  position: relative;
  margin-bottom: 25px;
  font-size: 14px;
  line-height: 1.9em;
}

.main-footer .newsletter-widget .text {
  position: relative;
  font-size: 14px;
  margin-bottom: 25px;
  line-height: 1.9em;
}

.social-links {
  position: relative;
}

.social-links li {
  position: relative;
  display: inline-block;
  margin-right: 5px;
}

.social-links li {
  margin: 0px 2px;
}

.social-links li a {
  position: relative;
  display: block;
  line-height: 38px;
  width: 38px;
  height: 38px;
  text-align: center;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.05);
  color: #bbbbbb;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  transition: all 500ms ease;
}

.social-links li a:hover {
  color: #ffffff;
}

.main-footer .about-widget .contact-info {
  margin-bottom: 30px;
}

.main-footer .contact-info li {
  position: relative;
  display: block;
  font-size: 14px;
  margin-bottom: 7px;
  line-height: 24px;
}

.main-footer .contact-info li .icon {
  position: relative;
  font-size: 32px;
  margin: 0 auto 20px;
  line-height: 36px;
  color: #b06ab3;
}

.main-footer .contact-info li:last-child {
  margin-bottom: 0px;
}

.main-footer .footer-bottom {
  position: relative;
  padding: 18px 0px;
  color: #ccc;
  background: #020a27;
  line-height: 24px;
  text-align: center;
}

.main-footer .newsletter-widget {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
}

.main-footer .newsletter-widget .form-group {
  position: relative;
  margin: 0px;
}

.main-footer .newsletter-widget input[type="email"] {
  display: block;
  width: 100%;
  line-height: 24px;
  padding: 10px 40px 10px 25px;
  height: 48px;
  font-size: 14px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: none;
  border-radius: 24px;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  transition: all 500ms ease;
}

.main-footer .newsletter-widget .send-btn {
  position: absolute;
  right: 10px;
  top: 0px;
  width: 50px;
  height: 48px;
  outline: none;
  border: none;
  line-height: 48px;
  text-align: center;
  color: #b06ab3;
  font-size: 16px;
  background: none;
  cursor: pointer;
}

.main-footer .links-widget .list li {
  position: relative;
  margin-bottom: 12px;
}

.main-footer .links-widget .list li a {
  position: relative;
  display: block;
  line-height: 24px;
  padding: 0px 0px 0px 25px;
  color: #aaaaaa;
  text-transform: capitalize;
}
</style>
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import LogIn from "../pages/Auth/Login.vue";
import SignUp from "../pages/Auth/Signup.vue";
import Profile from "../pages/Profile.vue";
import Authors from "../pages/Authors.vue";
import CotactUs from "../pages/ContactUs.vue";
import Activity from "../pages/Activity.vue";
import Auctions from "../pages/Auctions.vue";
import CreateItem from "../pages/CreateItem.vue";
import ItemDetails from "../pages/ItemDetails.vue";
import Discover from "../pages/Discover.vue";
import WalletConnect from "../pages/WalletConnect.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    mode: "history",
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: Home },

        {
            path: "/signup",
            component: SignUp,
        },
        { path: "/login", component: LogIn },
        { path: "/profile", component: Profile },
        { path: "/authors", component: Authors },
        { path: "/cotactus", component: CotactUs },
        { path: "/activity", component: Activity },
        { path: "/Auctions", component: Auctions },
        { path: "/createItem", component: CreateItem },
        { path: "/itemDetails", component: ItemDetails },
        { path: "/discover", component: Discover },
        { path: "/walletConnect", component: WalletConnect },

        { path: "/:notfound(.*)", component: NotFound, meta: { NotFound: true } },
    ],
});
router.beforeEach(function(_, _2, next) {
    setTimeout(() => {
        window.scrollTo(0, 0);
        next();
    }, 10);
});
export default router;
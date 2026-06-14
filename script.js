const loginPage = document.querySelector(".log_in");
const overviewPage = document.querySelector(".overview");
const chatbotPage = document.querySelector(".chatbot");
const couponPage = document.querySelector(".coupon");
const settingPage = document.querySelector(".setting");

const pages = [
    loginPage,
    overviewPage,
    chatbotPage,
    couponPage,
    settingPage
];

/* ===== HEADER ===== */

const headerOverview =
    document.querySelector(".header-overview");

const headerChatbot =
    document.querySelector(".header-chatbot");

const headerCoupon =
    document.querySelector(".header-coupon");

const headerSetting =
    document.querySelector(".header-setting");

const headers = [
    headerOverview,
    headerChatbot,
    headerCoupon,
    headerSetting
];

function hideAllHeaders() {
    headers.forEach(header => {
        header.classList.add("hidden");
    });
}

/* ===== PAGE ===== */

function showPage(page) {

    pages.forEach(p => {
        p.classList.add("hidden");
    });

    hideAllHeaders();

    page.classList.remove("hidden");

    if (page === overviewPage) {
        headerOverview.classList.remove("hidden");
    }

    if (page === chatbotPage) {
        headerChatbot.classList.remove("hidden");
    }

    if (page === couponPage) {
        headerCoupon.classList.remove("hidden");
    }

    if (page === settingPage) {
        headerSetting.classList.remove("hidden");
    }
}

/* ===== FOOTER ===== */

const footer =
    document.querySelector(".footer");

footer.classList.add("hidden");

/* ===== INITIAL ===== */

showPage(loginPage);

/* ===== LOGIN ===== */

const loginBtn =
    document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

    showPage(overviewPage);

    footer.classList.remove("hidden");
});

/* ===== NAV ===== */

const navItems =
    document.querySelectorAll(".nav__item");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        const page =
            item.dataset.page;

        if (page === "overview") {
            showPage(overviewPage);
        }

        if (page === "coupon") {
            showPage(couponPage);
        }

        if (page === "chatbot") {
            showPage(chatbotPage);
        }

        if (page === "setting") {
            showPage(settingPage);
        }
    });
});
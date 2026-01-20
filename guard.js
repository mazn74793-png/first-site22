// guard.js
(async function () {
  const sb = window.sb;
  if (!sb) return;

  const { data } = await sb.auth.getSession();
  const session = data?.session;

  const path = (location.pathname || "").toLowerCase();
  const isLogin = path.endsWith("/login.html");

  if (!session && !isLogin) {
    location.href = "./login.html";
    return;
  }

  if (session && isLogin) {
    location.href = "./products.html";
  }
})();

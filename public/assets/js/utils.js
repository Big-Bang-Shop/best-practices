function gotoHome() {
  const host = window.location.origin;
  const repository = window.location.pathname.split("/")[1];
  window.location.href = `${host}/${repository}/index.html`;
}

export default function register() {
  navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/swDev.js`).then(
    function (registration) {
      // Registration was successful
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    },
    function (err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    }
  );
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.addEventListener("click", () => {
    // alert("hi");
  
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification("Sample Javascript Notification", {
          body: Math.random(),
        });
      }
  
      notification.addEventListener("error", (e) => {});
    });
  });
});

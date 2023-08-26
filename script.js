const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.addEventListener("click", () => {
    // alert("hi");

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification(
          "Sample Javascript Notification",
          {
            body: Math.random(),
          }
        );
      }

      notification.addEventListener("error", (e) => {});
    });
  });
});

let outsideNotification;
let interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    let goneDate = new Date();
    interval = setInterval(() => {
      outsideNotification = new Notification("Please come back ! ", {
        body: `You have been gone for 
        ${Math.round((new Date() - goneDate) / 1000)} seconds`,
        tag: "Left the Page Tag",
      });
    }, 100);
  } else {
    if (interval) {
      clearInterval();
    }

    if (outsideNotification) {
      outsideNotification.close();
    }
  }
});

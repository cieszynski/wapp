self.addEventListener("install", (event) => {
    console.log("install sw");
})

self.addEventListener("activate", (event) => {
    console.log("activate sw");
})

self.addEventListener("fetch", (event) => {
    console.log("fetch sw");
    event.respondWith(new Response("Network  happened", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      }));
})
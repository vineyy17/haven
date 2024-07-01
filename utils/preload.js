export const preloadImages = (imageUrls) => {
  const promises = imageUrls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        console.log(`Image loaded: ${url}`);
        resolve();
      };
      img.onerror = () => {
        console.error(`Error loading image: ${url}`);
        reject();
      };
    });
  });

  return Promise.all(promises);
};

// const convertImageToDataUrl = (imageUrl) => {
//   return new Promise((resolve, reject) => {
//     // Fetch the image from the provided URL
//     fetch(imageUrl)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const imageFile = new File([blob], "image.png", { type: "image/png" });

//         const reader = new FileReader();

//         reader.onload = (event) => {
//           resolve(event.target.result);
//         };

//         reader.onerror = (event) => {
//           reject(event.error);
//         };

//         reader.readAsDataURL(imageFile);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// export default convertImageToDataUrl;

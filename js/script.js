// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     const captchaResponse = grecaptcha.getResponse();

//     if(captchaResponse.length > 0){ throw new Error('Captcha nie wypełniona popranie!'); }

//     const formData = new FormData(e.target);
//     const params = new URLSearchParams(formData);

//     fetch('https://formspree.io/f/mjvqgevn', {
//         method: 'POST',
//         body: params,
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// });

// window.onload = setTimeout(() => {

//     let alertCheck = localStorage.getItem("alert");

//     if (alertCheck == undefined) {

//         alertCheck = 0;

//         localStorage.setItem("alert", alertCheck);

//     } else {

//         if (alertCheck < 10) {

//             alertCheck++;

//             localStorage.setItem("alert", alertCheck);

//             console.log(alertCheck);

//         } else {

//             alert("Strona jeszcze nie skończona, mogą występować liczne błędy i niedociągnięcia:)");

//             alertCheck = 0;

//             localStorage.setItem("alert", 0);
//         }
//     }
// }, 1000);
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
// import { useState } from "react";
// export function useAuthSubmit(apiUrl, values) {
//     const [err, setErr] = useState(false);
//     const handleSubmit = () => {
//         console.log("making fetch to", apiUrl);
//         console.log("with payload:", values);
//         fetch(apiUrl, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//         })
//             .then((resp) => resp.json())
//             .then((data) =>
//                 data.success ? location.replace("/") : setErr(true)
//             );
//     };
//     return [err, handleSubmit];
// }
import { useState } from "react";
const App = () => {
    const defaultuser = {
        name: { first: "armeen", last: "" },
        dob: { age: 30 },
        gender: "female",
        location: { country: "USA" },
        cell: "123-456-7890",
        email: "armeen@gmail.com",
        picture: { large: "https://randomuser.me/api/portraits/women/76.jpg" }
    }
    const [users, setUsers] = useState([defaultuser])
    const handleClick = () => {
        async function getUser() {
            const response = await fetch("http://randomuser.me/api/");
            const data = await response.json()
            console.log(data.results)
            setUsers(data.results)
            const user = data.results[0];
            console.log(user.name.first, user.name.last);
            console.log(user.dob.age)
            console.log(user.gender);
            console.log(user.country);

        }
        getUser();
    }
    return (
        <>
            <h1>App Component</h1>
            <hr />
            {
                users.map((user, i) => {
                    return (
                        <div key={i}>
                            <img src={user.picture.large} alt="User profile" /> <br /> <hr />
                            Name: {user.name.first} <br />
                            Date of birth: {user.dob.age} <br />
                            Gender: {user.gender} <br />
                            Cell: {user.cell} <br />
                            Email: {user.email} <br />



                            <input type="button" value="fetch another user" onClick={handleClick} />

                        </div>
                    )
                }
                )
            }
        </>
    );
}
export default App;

import { useState } from "react";
import "./Ques3.css"
const Ques3 = () => {

    const [users, setUsers] = useState([])
    const handClick = () => {
        async function getuser() {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json()
            console.log(data.results)
            setUsers([...users, ...data.results])
            const user = data.results[0];
            console.log(user.name.first, user.name.last);
            console.log(user.dob.age);
            console.log(user.gender);
            console.log(user.location.country);
        }
        getuser();
    }
    return (
        <>
            <input type="button" value="fetch" onClick={handClick} />
            <hr />
            {
                users.map((user, i) => {
                    return (
                        <div key={i} className="box">
                            <p>
                                <img src={user.picture.large} /><br />
                                Name:{user.name.first}<br />
                                DOB:{user.dob.age}<br />
                                Gender:{user.gender}<br />
                                Cell:{user.cell}
                                Email:{user.email}
                            </p>
                        </div>
                    )

                }

                )

            }


        </>
    )
}
export default Ques3;
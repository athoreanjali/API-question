import { useState } from "react";
import "./Ques2.css"
const Ques2 = () => {

    const [users, setUsers] = useState([])
    const [n, setN] = useState();
    const handClick = () => {
        async function getuser() {
            const response = await fetch(`https://randomuser.me/api/?results=${n}`);
            const data = await response.json()
            console.log(data.results)
            setUsers(data.results)
            const user = data.results[`${n}`];

        }
        getuser();
    }
    return (
        <>

            Enter no of users:<input type="text" value={n} onChange={(e) => setN(e.target.value)} />
            <input type="button" value="fetch" onClick={handClick} />
            <hr />
            {
                users.map((user, i) => {
                    return (
                        <div key={i} className="box">

                            <p><img src={user.picture.large} /><br />
                                Name: {user.name.first}<br />
                                DOB: {user.dob.age}<br />
                                Gender: {user.gender}<br />
                                Cell: {user.cell}
                                Email: {user.email}
                            </p>
                        </div>
                    )
                }

                )

            }


        </>
    )
}
export default Ques2;
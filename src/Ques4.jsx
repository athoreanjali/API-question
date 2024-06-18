import { useState, useEffect } from "react";

import "./Ques4.css"
const Ques4 = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUser() {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json()
            console.log(data.results)
            setUsers(data.results)

        }

        const intervalId = setInterval(() => {
            console.log("Running....");
            getUser();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            {
                users.map((user, i) => {
                    return (
                        <div>
                            <div className="box">
                                <div>
                                    Name:{user.name.first}<br />
                                    Cell:{user.cell} <br />
                                    Email:{user.email} <br />
                                </div>
                                <div>
                                    <img src={user.picture.large} />
                                </div>


                            </div>
                            <div className="details">
                                <hr />
                                <h2 >Details</h2>
                                <h3>{user.gender}</h3> 
                                <h3>{user.dob.date}</h3>

                            </div>
                        </div>
                    )

                }

                )

            }


        </>
    )
}
export default Ques4;
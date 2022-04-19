import { useState, useEffect } from "react";

const FindFriends = () => {
    const [searchTerm, setSearchTerm] = useState();
    const [users, setUsers] = useState([]);
    const [error,setError] = useState(false);

    useEffect(() => {
        let abort = false;
        (async () => {
            if (!searchTerm) {
                try {
                    let lastUsers = await fetch("/lastUsers.json").then(
                        (resp) => {
                            return resp.json();
                        }
                    );
                    setUsers(lastUsers.users);
                } catch {
                    setError(true);
                }
            } else {
                try {
                    let searchedUsers = await fetch(
                        `/searchedUsers?search=${searchTerm}`
                    ).then((resp) => {
                        return resp.json();
                    });
                    if (!abort) {
                        setUsers(searchedUsers.users);
                    }
                } catch {
                    setError(true);
                }
            }

            return () => {
                abort = true;
            };
        })();
    }, [searchTerm]);

    return (
        <>
            <input
                type="text"
                name="searchTerm"
                onChange={({ target }) => setSearchTerm(target.value)}
            />
            <ul>
                {!users.length ? (
                    <p>Sorry, no user not match</p>
                ) : (
                    users.map((user) => {
                        return  <p key={user.id}> <img src={user.profile_pic } /> {user.first}  </p>;
                    })
                )}
            </ul>
        </>
    );
};

export default FindFriends;
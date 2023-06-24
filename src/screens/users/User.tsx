import {Link, Outlet, useParams} from "react-router-dom";
import styled from "styled-components";
import {users} from "../../db";

const Box = styled.div`
  
`

function User() {
    const { userId } = useParams();

    return (
        <Box>
            <h1>
                User with id {userId} is named : {users[Number(userId) - 1 ].name}
            </h1>
            <hr />
            <Link to="followers" >see followers</Link>
            <Outlet context={{
                nameOfMyUser : users[Number(userId) - 1 ].name
            }} />
        </Box>
    )
}

export default User;
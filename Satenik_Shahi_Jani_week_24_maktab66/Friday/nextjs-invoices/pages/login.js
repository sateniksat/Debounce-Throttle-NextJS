import React, { useEffect, useState } from 'react'


const Login = () => {
    const [user, setUser] = useState({})
    // const dispatch = useDispatch()
    // const storedUser = useSelector(state => state.user.value)

    const inputChangeHandler = (e) => {
        const _user = {...user, [e.target.name]: e.target.value}
        setUser(_user)
    }

    // useEffect(() => {
    //     console.log(storedUser)
    // }, [user])

    const submitAction = () => {
        console.log("submitted")
    }

    return (
        <div>
            <h2>Login</h2>
            <input style={{display: 'block'}} onChange={inputChangeHandler} name='username' type='text' placeholder='username' />
            <input style={{display: 'block'}} onChange={inputChangeHandler} name='password' type='password' placeholder='password' />
            <button onClick={submitAction} >submit</button>
        </div>
    )
}

export default Login

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import img6 from '../image/background4.png';

const UserDetail = () => {
  const { id } = useParams()
  const api = `https://to-dos-api.softclub.tj/api/to-dos/${id}`
  const [user, setUser] = useState(null)

  async function GetData() {
    try {
      const res = await axios.get(api)
      setUser(res.data.data || res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetData()
  }, [id])

  if (!user) return <div>Loading...</div>

  return (
    <div
      style={{
        background: `url(${img6}) no-repeat center center / cover`,
        minHeight: '104vh',
        width: '102%',
        marginTop: "-100px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:"-15px"
      }}
    >
      <div className="text-center p-10 w-[400px] h-[200px] rounded-[10px] bg-white flex flex-col justify-center items-center shadow-lg">
        <h1 className="text-2xl font-bold text-[#1E212C]">{user.name || `User ID: ${user.id}`}</h1>
        <p className="text-gray-600 mt-2">ID: {user.id}</p>
      </div>
    </div>
  )
}

export default UserDetail

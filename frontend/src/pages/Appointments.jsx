import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  if (!docInfo) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/*---------doctor details---------*/}
      <div>
        <div>
          <p>{docInfo.name}</p> {/* Display doctor's name */}
          <img src={docInfo.image} alt={docInfo.name} /> {/* Display doctor's image */}
        </div>
      </div>
    </div>
  )
}

export default Appointment
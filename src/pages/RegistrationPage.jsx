import React, { useState } from 'react'
import Controls from '../controls/Controls'

import RegistrationForm from '../components/forms/RegistrationForm'

import { Button, Container } from '@material-ui/core'




export default function RegistrationPage() {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <Container>

      <Button
        onClick={() => setOpenPopup(true)}
      >
        Register
      </Button>

      <Controls.Popup
        text='Register Account'
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <RegistrationForm setOpenPopup={setOpenPopup} />
      </Controls.Popup>
      
    </Container>




  )
}

import Axios from 'axios'
import { useState } from 'react'
//import styled from 'styled-components'
// import { Uploader } from '../../components/uploader/Uploader'

// const Container = styled.div`
//     width: 80%;
//     background: #fff;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     vertical-align: middle;
//     margin: 0 auto;
//`

export const UploadContainer = () => {

  const [state, setState] = useState<Blob | any>()

  const formData = new FormData()

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }


  const uploadAvatarLol = async () => {
    try {
      await Axios.post('http://localhost:3001/images', formData, config)
      alert('it worked Lol')
    } catch (error) {
      console.error(error)
    }
  }

  const onFormSubmit = (e: any) => {
    e.preventDefault()
    formData.append('images', state.file)
    uploadAvatarLol()
  }

  const onChange = (e: any) => {
    setState({ file: e.target.files[0] })
  }
  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <h1>File Upload</h1>
        <input type="file" name="lmao" onChange={(e) => onChange(e)} />
        <button type="submit">Upload</button>
      </form>
    </div>
    // <Container>
    //   <Uploader />
    // </Container>
  )
}

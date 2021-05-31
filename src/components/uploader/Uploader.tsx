import styled from 'styled-components'
import { Upload, message } from 'antd'
import unknownRed from './img/unknownRed.jpg'
import unknownGreen from './img/unknownGreen.jpg'
import { useState } from 'react'
import UploaderData from './data/UploaderData'

const { Dragger } = Upload

const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Uploader = (props: { name: any }) => {

  const [displayImg, setDisplayImg] = useState(unknownRed)
  const [displayText, setDisplayText] = useState(UploaderData.UploadNotDoneText)
  const [imgName, setImgName] = useState<string>('default')

  const toggleImgUploadOK = () => {
    setDisplayImg(unknownGreen)
    setDisplayText(UploaderData.UploadDoneText)
  }


  const changeMethod = (info: any) => {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
      toggleImgUploadOK()
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }


  return (
    <Container>
      <Dragger name={props.name}
        accept={'image/png, image/jpeg'}
        multiple={false}
        action={'http://localhost:3001/images'}
        onChange={(info) => changeMethod(info)}  >
        <div style={{ width: '100%' }} className="add-new-etolog-img">
          <img className="ant-upload-drag-icon" src={displayImg} alt="upload_image" />
          <p className="ant-upload-text">({displayText})</p><br />
          <p className="ant-upload-text">{UploaderData.infoText}</p>
        </div>
      </Dragger>
    </Container>
  )
}
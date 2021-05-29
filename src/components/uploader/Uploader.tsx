import styled from 'styled-components'
import { Upload, message } from 'antd'
import unknown from '../../components/etologBox/img/etologer/unknown.jpg'

const { Dragger } = Upload

const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Uploader = (props: { _id: any }) => {

  const props2 = {
    name: 'photo',
    multiple: false,
    _id: props._id,
    action: 'http://localhost:3001/photo',
    onChange(info: any) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  const showImage = () => {
    return unknown
  }
  return (
    <Container>
      <Dragger {...props2}>
        <div style={{ width: '100%' }} className="add-new-etolog-img">

          <img className="ant-upload-drag-icon" src={showImage()} alt="upload_image" />
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </div>
      </Dragger>
    </Container>
  )
}
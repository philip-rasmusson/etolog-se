import styled from 'styled-components'
import { Upload, message } from 'antd'

const { Dragger } = Upload

const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Uploader = () => {

  const props = {
    name: 'photo',
    multiple: false,
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
  return (
    <Container>
      <Dragger {...props}>
        <div style={{ width: '100%' }}>
          <p className="ant-upload-drag-icon">
            INBOX
                </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
        </div>
      </Dragger>
    </Container>
  )
}
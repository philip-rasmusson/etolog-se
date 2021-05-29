import styled from 'styled-components'
import { Uploader } from '../../components/uploader/Uploader'

const Container = styled.div`
    width: 80%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    margin: 0 auto;
`

export const UploadContainer = (props: { _id?: any }) => {
  return (
    <Container>
      <Uploader _id={props._id} />
    </Container>
  )
}

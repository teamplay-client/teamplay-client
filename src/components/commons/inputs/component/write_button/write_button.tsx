import styled from "@emotion/styled"
import { useRouter } from "next/router"

const WriteGoButtonStyle = styled.div`
    width:54px;
    height:54px;
    border-radius: 50%;
    background-color:#D8D7D7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
`

export default function WriteGoButton(){
    const router = useRouter()
    const onClickWritepage = () => {
        router.push('/project/new')
    }
    return (
        <WriteGoButtonStyle onClick={onClickWritepage}>
            <img src="../img/gowrite.svg" alt="go write page button" />
        </WriteGoButtonStyle>
    )
}
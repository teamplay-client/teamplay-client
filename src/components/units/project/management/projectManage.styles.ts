import styled from "@emotion/styled";

interface IPropsTodoWorker{
    align : string
}

interface IPropsProjectManageImg{
    bgImages : string
}


export const ProjectManageStyle = styled.div`
  
`

export const TodoInfos = styled.div`
    display: flex;
    padding-bottom: 10px;
    justify-content: space-between;
    & > div{
        display: flex;
    }
    & span{
        display: block;
        font-size: 10px;
        background-color: #ccc;
        border-radius: 5px;
        color: #fff;
        padding: 5px;
        margin-right: 10px;
    }
`

export const TodoLimitDescription = styled.div`
    font-size: 1.143rem;
    padding: 5px 0;
    margin-bottom: 10px;
`

export const TodoLimitTime = styled.div`
    font-size: 0.714rem;
    color: #ccc;
    margin-bottom: 10px;
`
export const DoneList = styled.div`
    font-size: 8px;
    color: #ccc;
    margin-bottom: 10px;
`

export const TodoList = styled.div`
    
`

export const ProjectDetail = styled.div`
    padding-top: 30px;
    font-size: 14px;
    color: #999;
    line-height: 1.4;
`

export const ProjectTodoNavTab = styled.ul`
    display: flex;
    padding: 5px 0;
    & >li{
        width: 50%;
        text-align: center;
        font-family:normal;
        cursor: pointer;
        padding: 10px 0;
        font-size: 1.286rem;
        &:first-child{
            border-right:1px solid #ccc;
        }
    }
`

export const TodoWorker = styled.ul`
    display: flex;
    justify-content: ${(props:IPropsTodoWorker) => props.align === "left" ? "flex-start" : "flex-end"};
    & > li{
        margin: ${(props:IPropsTodoWorker) => props.align === "left" ? "0 10px 0 0" : "0 0 0 10px"};
        font-size: 8px;
        background-color: #fff;
        width: 30px;
        height: 30px;
        color:#fff;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        & img{
            width: 100%;
        }
    }
`

export const Todo = styled.div`
    background-color: #F3F9FF;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 15px;
`

export const ProjectManageTop = styled.div`
    border-bottom:1px solid #ccc;
      & h3{
        font-size: 1.714rem;
        padding-bottom: 20px;
    }
    & h4{
        font-size: 0.929rem;
        line-height: 1.4rem;
        padding-bottom: 20px;
        color: #999;
    }
    & ul{
       display: flex;
    }
`

export const ProjectManageContentsTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:30px 0;
    & h3{
        font-size: 1.286rem;
    }
`


export const ProjectManaBoard = styled.ul`
    & > li{
        display: flex;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
        flex-direction: column;
        border-radius: 12px;
        padding:20px 13px;
        margin-bottom: 15px;
        font-size:12px;
        cursor: pointer;
        &:hover{
            & h4{
                text-decoration: underline;
            }
        }
        & > div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            & time{
                display: block;
                color: #999;
                margin-right: 10px;
            }
        }

        & > div > div{
            display: flex;
        }
    }
`



export const ProjectListInfo = styled.div`
    padding: 15px 0;
    & > li{
        display: flex;
        width: 100%;
        padding-bottom: 10px;
        align-items: center;
        font-size: 14px;
        &:last-child{
            padding-bottom: 0;
        }
    }
`

export const ProjectStatusBox = styled.div`
    width: 100%;
    background-color: #e9e9e9;
    border-radius: 30px;
`

export const ProjectStatus = styled.div`
    background-color: #3894FF;
    color: #fff;
    border-radius: 30px;
    font-size: 8px;
    width: 23%;
    padding:3px 5px;
`

export const ProjectInfoKey = styled.div`
    width: 30%;
    font-weight: 900;
`

export const ProjectInfoValue = styled.div`
    width: 70%;
    color: #999;
`

export const ProjectManageImg = styled.div`
    background: ${
        (props : IPropsProjectManageImg) => 
       `url(${props.bgImages}) no-repeat center/cover`
    };
    padding:60px 20px 250px;
    display: flex;
    justify-content: space-between;
`
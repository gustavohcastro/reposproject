import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Loading = styled.div`
    color : #fff;
    display : flex;
    justify-content : center;
    align-items : center;
    height: 100vh;
`;

export const Container = styled.div`
    max-width : 700px;
    background : #fff;
    border-radius : 4px;
    box-shadow : 0 0 20px rgba(0,0,0,0.2);
    padding : 30px;
    margin : 80px auto;

`;

export const Owner = styled.header`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding: 20px 0;
    
    img{
        width : 150px;
        border-radius : 50%;
        margin: 20px 0;
    }
    h1{
        font-size : 30px;
        color : #0d2636;

    }
    p{
        text-align : center;
        max-width : 400px;
    }

`;

export const BackButton = styled(Link) `
    border : 0;
    outline : 0;
    background : transparent;

`;

export const IssuesList = styled.ul`
    margin-top : 30px;
    padding-top : 30px;
    border-top : 1px solid #eee;
    list-style: none;

    li{
        display : flex;
        padding : 15px 10px;

        & + li{
            margin-top: 12px;
        }

        img{
            width : 36px;
            height : 36px;
            border-radius : 50%;
            border : 2px solid #0d2636;
            margin-right : 12px;
        }
        div{
            flex : 1;
            margin-left : 12;

            p{
                margin-top : 10px;
                font-size : 12px;
                color : #000;

            }
        }
        strong{
            font-size : 15px;

            a{
                text-decoration : none;
                color : #222;
                transform : 0.3s;

                &: hover {
                    color : #0071db;
                }
            }
            span{
                background : #222;
                color : #fff;
                border-radius : 4px;
                font-size : 12px;
                font-weight : 600;
                padding : 5px 7px;
                margin-left : 10px;
            }

        }
    }

`;

export const PageActions = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-top: 10px;
    border-top: 1px solid #ddd;
    padding-top : 10px;

    button{
        border : 0;
        outline : 0;
        background : #0d2636;
        padding : 10px 15px;
        color : #fff;
        border-radius : 4px;
    }

`;


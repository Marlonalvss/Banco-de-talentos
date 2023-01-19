import styled from 'styled-components';


export const StyledCardUl = styled.div`
    

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 2rem;
        row-gap: 1rem;
        width: 100%;
        align-items: center;
        justify-items: center;
        margin-bottom: 15px;
     }   

    li{
        display: flex;
        flex-direction: column;
        align-items: center;}

      

    .li__div{
            width: 180px;
            height: 250px;
            border-radius: 1rem;
            margin-bottom: 2rem;
            border: solid 3px lightblue;
            transition: box-shadow 0.1s;
            color: whitesmoke;
            background-color: #142374dc;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .li__div:hover{
            border: 3px solid #00d9ff;
            color: #00d9ff;
            box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
        }

        span{
            font-weight: bold;
            font-size: 120%;
            text-align: center;
            color: white
        }
        a{
            transition: all 0.3s;
            text-decoration: none;
        }
        a:hover{
            transform: scale(1.1);
            
        }

`

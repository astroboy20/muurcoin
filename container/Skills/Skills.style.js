import styled from "styled-components";

export const SkillContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding:  4%;
  display:flex ;
  justify-content:space-between ;
  gap:10px;
  /* justify-content:flex-start ; */
  /* align-items:center ; */
    .text{
        text-align:left ;
        width:50% ;
        display:flex ;
        flex-direction:column ;
        gap:20px;
    }
    .header {
        display:flex ;
        gap:5px;
        flex-direction :column ;
    }.body{
        display:flex ;
        align-items:center ;
        gap:5px;
    }
    p{
        font-size:12px ;
    }
    .image{
    }
  h1 {
    font-size: 30px;
  }

  @media screen and (max-width: 800px) {
    flex-direction:column-reverse ;
    text-align:center ;
    .text{
        width:100% ;
    }
   
    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
  
`;

export const Introduction = styled.div`
  /* padding: 5%; */
  display: flex;
  justify-content: space-between;
  gap:20px;
  /* background-color: rgba(11, 13, 62, 0.5); */
  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    width: 30%;
  }
  .information h2 {
    font-size: 18px;
  }
  .information p {
    font-size: 14px;
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 50px;
    padding: 6%;
    .information {
      width: 100%;
    }
  }
`;


import styled from "styled-components"

export const HeaderStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  font-family: 'Lato';
  background-color: #000;
  
  .header {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    margin: 0 auto;
    width: 1200px;
    display: flex;
  }

  .header > img {
    width: 10rem;
  }

  .navBar {
    display: flex;
    color: #fff;
  }

  .navBar ul{
    list-style: none;
    margin-right: 1rem;
    display: flex;
  }

  .navBar ul li {
    margin-left: 1rem;
  }

  .language {
    font-size: 14px;
  }

`

export const InputTextStyle = styled.div`
  padding-bottom: 2rem;
  margin: 0 auto;
  width: 1200px;

  .inputs {
    justify-content: center; 
    display: flex;
  }

  .textHeader p {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.85rem;
    color: #fff;
  }

  .seekInput {
    padding-left: 0.8rem;
    margin-right: 0.5rem;
    width: 29.9375rem;

    border-style: none;
    border-radius: 5px;
    font-size: 18px;
  }

  .searchInput {
    background-color: #FFC300;
    padding: 1rem 2rem;
    border-style: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 900;
    color: #fff;
  }

  .searchInput:active{
    transform: scale(.9);
  }

`
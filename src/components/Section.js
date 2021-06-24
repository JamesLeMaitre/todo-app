import * as U from '@iconscout/react-unicons';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../App.css';
import Form from './Form';


const Section = ({ addNewToDo }) => {

  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  useEffect(()=>{
    if(addNewToDo){
      setModal(false)
    }
  },[addNewToDo])

  return (
    <div className="main">
      <section className="section services" id="services">
        <h2 className="section__title">To Do
          <Button onClick={showModal}>
            <U.UilXAdd className="btn-icon" />
            Add New Task
          </Button>
        </h2>

        <span className="section__subtitle"></span>

        <div className="services__container container grid">

          <div className="services__content-notshow">

            <div className={`services__modal ${modal ? " active-modal" : ""}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Add New To Do</h4>
                <U.UilTimes className="uil uil-times services__modal-close" onClick={closeModal} />
                <Form addNewToDo={addNewToDo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color:  #1a73e8;
  padding: .9rem;
  color: #fff;
  font-size: .875rem;
  letter-spacing: .0107142857em;
  font-weight: 500;
  border: none;
  border-radius: 5px; 
  margin-left: 25px;
  text-align:center;
  height: 48px;
  cursor: pointer;
  text-transform: none;
  box-shadow: 0px 1px 8px rgba(0,0,42,0.5);
  transform: translateY(-10%);

  &:hover{
    background-color:  #0000c2;
    box-shadow: 0px 1px 8px rgba(0,0,42,0.3);
  }

  .btn-icon{
  
    font-size: .988rem;
    text-align: center;
    justify-content: center;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;


  }
`
export default Section

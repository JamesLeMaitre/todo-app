import * as U from '@iconscout/react-unicons';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import '../styles/TaskCard.css';

const TaskCard = ({ todos }) => {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    axios({
      url: 'http://127.0.0.1:8082/api/todolist',
      method: 'GET'
    })
      .then(res => setDatas(res.data))
  }, [])


  const handleClick = () => {
    alert("HoHa")
  }

  return (
    <section className="container gridtask">
      <div className="card__container gridtask">

        <article className="card__content gridtask">
          <div className="card__pricing">
            <div className="card__pricing-number">
              <span className="card__pricing-symbol"></span>
            </div>
            <span className="card__pricing-month">/all</span>
          </div>

          <header className="card__header">
            {/* <div className="card__header-circle gridtask">
              <img src="assets/img/free-coin.png" alt="" className="card__header-img" />
            </div>
            <span className="card__header-subtitle">Free plan</span> */}
            <h1 className="card__header-title">All Tasks</h1>
          </header>

          <ul className="card__list gridtask">
            {datas.map((todo, key) => (
              <Fragment key={todo.idTodo.toString()} >
                <li className="card__list-item" >
                  <U.UilTimesCircle className="card__list-icon" onClick={handleClick} />
                  <p className="card__list-description" >{todo.todoName}</p>
                  <U.UilTrashAlt className="card__list-icon-delete" onClick={handleClick} />
                </li>
                <hr />
              </Fragment>
            ))}
            {/* <li className="card__list-item">
              <U.UilTimesCircle className="card__list-icon" onClick={handleClick} />
              <p className="card__list-description">3 user requests</p>
            </li>
            <hr />

            <li className="card__list-item">
              <U.UilTimesCircle className="card__list-icon" />
              <p className="card__list-description">10 downloads per day</p>
            </li>
            <hr />

            <li className="card__list-item">
              <U.UilTimesCircle className="card__list-icon" />
              <p className="card__list-description">Daily content updates</p>
            </li>
            <hr />
            <li className="card__list-item">
              <U.UilTimesCircle className="card__list-icon" />
              <p className="card__list-description">Fully editable files</p>
            </li>
            <hr /> */}
          </ul>

        </article>

        <article className="card__content gridtask">
          <div className="card__pricing1">
            <div className="card__pricing-number">
              <span className="card__pricing-symbol"></span>
            </div>
            <span className="card__pricing-month">/current</span>
          </div>

          <header className="card__header">

            <h1 className="card__header-title">Current Tasks</h1>
          </header>

          <ul className="card__list gridtask">

            {datas.map((todo, key) => (
              (todo.current) ? <Fragment key={todo.idTodo.toString()} >
                <li className="card__list-item" >
                  <U.UilCheckSquare className="card__list-icon" onClick={handleClick} />
                  <p className="card__list-description" >{todo.todoName}</p>
                </li>
                <hr />
              </Fragment> : ""
            ))}

          </ul>

        </article>

        <article className="card__content gridtask">
          <div className="card__pricing2">
            <div className="card__pricing-number">
              <span className="card__pricing-symbol"></span>
            </div>
            <span className="card__pricing-month">/complete</span>
          </div>

          <header className="card__header">
            <h1 className="card__header-title">Task Complete</h1>
          </header>

          <ul className="card__list gridtask">

          {datas.map((todo, key) => (
              (todo.complete) ? <Fragment key={todo.idTodo.toString()} >
                <li className="card__list-item" >
                  <U.UilCheck className="card__list-icon" onClick={handleClick} />
                  <p className="card__list-description" >{todo.todoName}</p>
                </li>
                <hr />
              </Fragment> : ""
            ))}


          </ul>

        </article>


      </div>
    </section>
  )
}
export default TaskCard

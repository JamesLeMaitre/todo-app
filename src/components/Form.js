import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Form.css';

const Form = ({ addNewToDo }) => {

  const [data, setData] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const onSubmit = (data) => {
    // const headers = {
    //   'X-Requested-With': 'XMLHttpRequest',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   'Content-Type': 'json',
    //   'Authorization': 'Bearer my-token',
    //   'My-Custom-Header': 'foobar'
    // }
    if (data) {
      // setData(data)
      // axios.post('http://127.0.0.1:8082/api/', data, { headers })
      //   .then(res => setData(data))

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8082/',
        data: data,
        config: {
          headers: {
            'Content-Type': 'json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
        }
      })
        .then(res => setData(data))
        .catch(err => console.error(err));
    }


    reset({})
  }
  // console.log(data)
  useEffect(() => {
    addNewToDo(data)
  }, [data])



  return (
    <div className="l-form">
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__div">
          <h4 {...register('idTodo')}></h4>
          <input type="text" className="form__input"
            {...register('todoName', { required: true })} autoComplete="off" />
          {errors.todoName && <p className="form__label-error">Insert value</p>}
          <label htmlFor="" className="form__label">New Task</label>
        </div>

        <div className="form__div-hidden">
          <input type="checkbox" className="form__input"
            {...register('current')} autoComplete="off" />
          <label htmlFor="" className="form__label-hidden">IsCurrent</label>

        </div>
        <div className="form__div-hidden">
          <input type="checkbox" className="form__input"
            {...register('complete')} autoComplete="off" />
          <label htmlFor="" className="form__label-hidden">isComplete</label>
        </div>


        <input type="submit" className="form__button" value="Add To Do"
          onClick={() => {
            setValue('idTodo', Date.now())
          }}
        />
      </form>
    </div>
  )
}



export default Form

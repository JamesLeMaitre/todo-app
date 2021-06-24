import axios from 'axios'

const TODO_API_BASE_URL = "http://127.0.0.1:8082/api/todolist"

class ToDoService {
  getToDo() {
    return axios.get(TODO_API_BASE_URL)
  }

  addNewToDo(todo) {
    return axios.post(TODO_API_BASE_URL, todo)
  }

  updateToDo(id, todo) {
    return axios.put(TODO_API_BASE_URL + '/' + id, todo)
  }

  deleteToDo(id) {
    return axios.delete(TODO_API_BASE_URL + '/' + id)
  }
}

export default new ToDoService()
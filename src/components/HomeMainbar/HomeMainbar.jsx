import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const questionsList = useSelector((state) => (state.questionReducer));
  // console.log(questionsList);

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const CheckAuth = () => {
    if(user === null){
      alert("login or signup to ask a question.")
      navigate('/Auth')
    }else {
      navigate('/AskQuestions')
    }
  }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={CheckAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
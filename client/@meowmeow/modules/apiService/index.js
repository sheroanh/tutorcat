import { useEffect, useState } from 'react'
import { httpClient } from './config'
import toast from 'react-hot-toast'

const newPost = async (question, callbackFun) => {
  await httpClient
    .post('/question/add/', question)
    .then(({ data }) => {
      if (data.statusCode == "200") {
        return data.data;
      }
      else {
        return null;
      }
    })
    .catch(function (error) {
      return null;
    })
}


const getQuesByQuesId =  async (questionId) => {
  await httpClient
    .get(`/question/${questionId}/detail`)
    .then(res => {
      let data = res.data.data
      return data
    })
    .catch(() => {
      return null
    }
    )
}

const getAllQues = async () => {
  await httpClient
    .get(`/question/`)
    .then(res => {
      let data = res.data.data
      return data
    })
    .catch(() => {
      return null
    }
    )
}

const upVote = async () => {
  await httpClient
    .get(`/question/`)
    .then(res => {
      let data = res.data.data
      return data
    })
    .catch(() => {
      return null
    }
    )
}

export {
  newPost,
  getQuesByQuesId,
  getAllQues
}
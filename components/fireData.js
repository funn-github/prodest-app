import { app, database } from '../firebaseConfig'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useState } from 'react'


const databaseRef = collection(database, 'CRUD data')


export const addData = (name, age) => {

    addDoc(databaseRef, {
        name: name,
        age: age
    }).then(() => {
      alert('data sent')
      getData()
      setName('')
      setAge('')
    }).catch((err) => {
      console.error(err)
      console.log('uh oj')
    })

  }

  export const getData = async () => {
     await getDocs(databaseRef)
     .then((response) => {
       setFireData(response.docs.map((data) => {
         return {...data.data(), id: data.id}
       }))
     })
  }

  export const getID = (id, name, age) => {

    setID(id)
    setName(name)
    setAge(age)
    setIsUpdate(true)
  }

  export const updateFields = () => {
    let fieldToEdit = doc(database, 'CRUD data', ID)

    updateDoc(fieldToEdit, {
      name: name,
      age: age
    }).then(() => {
      alert('data updaed')
      getData()
      setName('')
      setAge('')
      setIsUpdate(false)
    }).catch((err) => {
      console.log(err)
    })


  }

  export const deleteDocument = (id) => {
    let fieldToEdit = doc(database, 'CRUD data', id)
    deleteDoc(fieldToEdit).then(() => {
      alert('data delted')
      getData()
    }).catch((err) => {
      alert('uh oh cant delte')
    })
  }
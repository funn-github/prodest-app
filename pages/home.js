import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { database } from '../firebaseConfig'
//import Quotes from '../components/zenQuotes'
import { doc, updateDoc, setDoc, getDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'



export default function Home() {
  const [name, setName] = useState('')
  const [grat, setGrat] = useState('')
  const [work, setWork] = useState('')
  const [age, setAge] = useState('')
  const [quotes, setQuotes] = useState(['Loading', '...'])

  const [work1, setWork1] = useState('')
  const [work2, setWork2] = useState('')
  const [work3, setWork3] = useState('')
  const [work4, setWork4] = useState('')
  const [work5, setWork5] = useState('')
  const [work6, setWork6] = useState('')
  const [work7, setWork7] = useState('')







  const [tokenData, setTokenData] = useState('')
  const [userTokenData, setUserTokenData] = useState('')
  const [userPhoto, setUserPhoto] = useState('')

  const [isMeditiation, setIsMeditation] = useState(true);
  




  let router = useRouter()

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    setTokenData(sessionStorage.getItem('userToken'))
    setUserTokenData(sessionStorage.getItem('userName'))
    setUserPhoto(sessionStorage.getItem('userPhoto'))




    
    

    if(token){
    getMain() 
    }
    if (!token){
        router.push('/')
    }
}, [])








  const addDataName = () => {

    setDoc(doc(database, tokenData, "mainGoal"), {token: [sessionStorage.getItem('userToken'), {
      name: name
    }]}).then(() => {
      alert('Submitted')
    {/*  getData() */}
    {/*  setName('') */}
    }).catch((err) => {
      console.error(err)
      console.log('uh oj')
    })

  }

  const addDataTodo = () => {

    setDoc(doc(database, tokenData, "todoList"), {token: [sessionStorage.getItem('userToken'), {
      todo: JSON.stringify(todoData)
    }]}).then(() => {
      alert('Submitted')
    {/*  getData() */}
    {/*  setName('') */}
    }).catch((err) => {
      console.error(err)
      console.log('uh oj')
    })

  }

  const addDataTask = () => {

    setDoc(doc(database, tokenData, "taskList"), {token: [sessionStorage.getItem('userToken'), {
      todo: JSON.stringify(taskData)
    }]}).then(() => {
      alert('Submitted')
    {/*  getData() */}
    {/*  setName('') */}
    }).catch((err) => {
      console.error(err)
      console.log('uh oj')
    })

  }



  const addDataGrat = () => {

    setDoc(doc(database, tokenData, "gratContent"), {token: [sessionStorage.getItem('userToken'), {
      grat: grat
    }]}).then(() => {
      alert('Submitted')
    {/*  getData() */}
    {/*  setName('') */}
    }).catch((err) => {
      console.error(err)
      console.log('uh oj')
    })

  }

  const addDataWork = () => {

    setDoc(doc(database, tokenData, "workSchedule"), {token: [sessionStorage.getItem('userToken'), {
      work: [work1, work2, work3, work4, work5, work6, work7]
    }]}).then(() => {
      alert('Submitted')
    {/*  getData() */}
    {/*  setName('') */}
    }).catch((err) => {
      console.error(err)
      console.log('uh oj')
    })

  }

  {/*}
  const getData = async () => {
     await getDocs(databaseRef)
     .then((response) => {
       setFireData(response.docs.map((data) => {
         return {...data.data(), id: data.id}
       }))
       
       console.log(data.data())

     })
  } */}

  

  const getMain = async () => {
    const docRef = doc(database, sessionStorage.getItem('userToken'), "mainGoal");
    const snapData = await getDoc(docRef)
  
    const mainGoalData = snapData.data()
    return mainGoalData  
  }

  const [mainState, setMainState] = useState([]);

  
  const testMainF = (propData) => {
    if (propData === false){
      setMainState('workout + code')
    }
    else{
      setMainState(JSON.parse(propData).token[1].name)
    }
  }

   
  const getMainData = async () => {
    const mainDataAwait = await getMain()
      const mainData = JSON.stringify(mainDataAwait)

      if (mainData){
        testMainF(mainData)

      }

      else{
        testMainF(false)
      }

      
    //  return(
    //    <div>{mainData}</div>
     // )
    }
   // const when = 'w'

   useEffect(() => {
    getMainData()

  }, []);




   //TODO

   
  const getMainTodo = async () => {
    const docRef = doc(database, sessionStorage.getItem('userToken'), "todoList");
    const snapData = await getDoc(docRef)
  
    const mainGoalTodoData = snapData.data()
    return mainGoalTodoData  
  }

  const [mainTodoState, setMainTodoState] = useState('["Go on a walk", "Talk to friends"]');

  
  const testMainTodo = (propData) => {
    if (propData === false){
    }
    else{
      setMainTodoState(JSON.parse(propData).token[1].todo)
      
    }
  }

   
  const getMainTodoData = async () => {
    const mainDataAwait = await getMainTodo()
      const mainData = JSON.stringify(mainDataAwait)

      if (mainData){
        testMainTodo(mainData)

      }

      else{
        testMainTodo(false)
      }

      
    //  return(
    //    <div>{mainData}</div>
     // )
    }
   // const when = 'w'


   useEffect(() => {
    getMainTodoData()

  }, []);




     //TASK

   
     const getMainTask = async () => {
      const docRef = doc(database, sessionStorage.getItem('userToken'), "taskList");
      const snapData = await getDoc(docRef)
    
      const mainGoalTodoData = snapData.data()
      return mainGoalTodoData  
    }
  
    const [mainTaskState, setMainTaskState] = useState('["Plan the day", "Schedule Meeting with team"]');
  
    
    const testMainTask = (propData) => {
      if (propData === false){
      }
      else{
        setMainTaskState(JSON.parse(propData).token[1].todo)
        
      }
    }
  
     
    const getMainTaskData = async () => {
      const mainDataAwait = await getMainTask()
        const mainData = JSON.stringify(mainDataAwait)
  
        if (mainData){
          testMainTask(mainData)
  
        }
  
        else{
          testMainTask(false)
        }
  
        
      //  return(
      //    <div>{mainData}</div>
       // )
      }
     // const when = 'w'
  
  
     useEffect(() => {
      getMainTaskData()
  
    }, []);
  



  

   //GRAT

   const getMainGrat = async () => {
    const docRef = doc(database, sessionStorage.getItem('userToken'), "gratContent");
    const snapData = await getDoc(docRef)
  
    const mainGoalData = snapData.data()
    return mainGoalData  
  }

  
  const testMainGrat = (propData) => {
    if (propData === false){
      setGrat('No Data')
    }
    else{
      testMainGrat2(propData)
    }
  }

  const testMainGrat2 = (propData) => {
      setGrat(JSON.parse(propData).token[1].grat)
     // alert('done')
    
  }

   
  const getMainGratData = async () => {
    const mainDataAwait = await getMainGrat()
      const mainData = JSON.stringify(mainDataAwait)

      if (mainData){
        
        testMainGrat(mainData)

      }

      else{
        
        testMainGrat(false)
      }

      
    //  return(
    //    <div>{mainData}</div>
     // )
    }
   // const when = 'w'


   //WORKOUT STUFF


      const getMainWork = async () => {
        const docRef = doc(database, sessionStorage.getItem('userToken'), "workSchedule");
        const snapData = await getDoc(docRef)
      
        const mainGoalData = snapData.data()
        return mainGoalData  
      }
    
      
      const testMainWork = (propData) => {
        if (propData === false){
          setWork1('No Data')
          setWork2('No Data')
          setWork3('No Data')
          setWork4('No Data')
          setWork5('No Data')
          setWork6('No Data')
          setWork7('No Data')
        }
        else{
          testMainWork2(propData)
        }
      }
    
      const testMainWork2 = (propData) => {
        setWork1(JSON.parse(propData).token[1].work[0])
        setWork2(JSON.parse(propData).token[1].work[1])
        setWork3(JSON.parse(propData).token[1].work[2])
        setWork4(JSON.parse(propData).token[1].work[3])
        setWork5(JSON.parse(propData).token[1].work[4])
        setWork6(JSON.parse(propData).token[1].work[5])
        setWork7(JSON.parse(propData).token[1].work[6])
        // alert('done')
        
      }
    
       
      const getMainWorkData = async () => {
        const mainDataAwait = await getMainWork()
          const mainData = JSON.stringify(mainDataAwait)
    
          if (mainData){
            
            testMainWork(mainData)
    
          }
    
          else{
            
            testMainWork(false)
          }
    
          
        //  return(
        //    <div>{mainData}</div>
         // )
        }


   useEffect(() => {
    getMainGratData()
    getMainWorkData()

       fetch("https://type.fit/api/quotes")
       .then(function(response) {
         return response.json();
       })
       .then(function(data) {
         var randData = data[Math.floor(Math.random() * data.length)];
     
         setQuotes([randData.text, randData.author])
       });

  }, []);
  

  
   
    

    

//  console.log(mainDataAwait)
  

  const getID = () => {

  //  setID(id)
  //  setName(name)
  //  setAge(age)
  //  setIsUpdate(true)

    let nameVal = prompt('Enter Main Goal')

    updateFields(nameVal)




  }

  const updateFields = (nameVal) => {
    let fieldToEdit = doc(database, tokenData, 'mainGoal')

    updateDoc(fieldToEdit, {token: [sessionStorage.getItem('userToken'), {
      name: nameVal
    }]}).then(() => {
      alert('data updaed')
    {/*   getData() */}
      setName('')
      setAge('')
      setIsUpdate(false)
    }).catch((err) => {
      console.log(err)
    })


  }

{/*  const deleteDocument = (id) => {
    let fieldToEdit = doc(database, tokenData, id)
    deleteDoc(fieldToEdit).then(() => {
      alert('data delted')
    }).catch((err) => {
      alert('uh oh cant delte')
    })
  }

*/}

let todoData = ['k', 'h', 'r', 'p', 'this is todo data']
let taskData = [["fr", "same", "star"], ["ok", "no", "man"]]

function removeItemOnce(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;

}





  todoData = JSON.parse(mainTodoState)
  console.log(todoData)


  if (mainTaskState === '["Plan the day", "Schedule Meeting with team"]'){

    taskData = [["Schedule meeting with team", "Discuss business model", "date"], ["Go eat dinner with parents", "Eat at the one indian place", "food"]]
   // alert(taskData)
    
  } else{
    taskData = JSON.parse(mainTaskState)

  }





  const isPlaying = false

  const play = () => {
    if (isPlaying === false){
      var audio = document.getElementById('a1');
      audio.play();
      isPlaying = true
    }

    else{
      var audio = document.getElementById('a1');
      audio.pause();
      isPlaying = false


    }

  }

  const isPlayingLofi = false

  const playLofi = () => {
    if (isPlayingLofi === false){
      var audio = document.getElementById('a2');
      audio.play();
      isPlayingLofi = true
    }

    else{
      var audio = document.getElementById('a2');
      audio.pause();
      isPlayingLofi = false


    }

  }

    
  const isPlayingBeach = false

  const playBeach = () => {
    if (isPlayingBeach === false){
      var audio = document.getElementById('a3');
      audio.play();
      isPlayingBeach = true
    }

    else{
      var audio = document.getElementById('a3');
      audio.pause();
      isPlayingBeach = false


    }

  }













  

  const logout = () => {
    sessionStorage.removeItem('Token')
    router.push('/')
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>very cool firebase next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />




      </Head>

      <div className="flex w-full items-center justify-between px-5 py-8 nav z-50 relative">
  <div className="mr-10 flex">
    <div className="mt-1 font-semibold"><img className='logo' src="https://logos.thefunnblog.repl.co/prodest.svg" /></div>
  </div>

  <div className="ml-10 flex flex-row">
    <a href='#guide'>
  <div>
      <div className="hover:bg-white bg-side flex h-10 items-center rounded-xl px-3 font-semibold duration-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
        A Guide On Happiness
      </div>
    </div>
    </a>
    <div>
      <div className="hover:bg-white bg-side flex h-10 items-center rounded-xl px-3 font-semibold duration-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
        Dashboard
      </div>
    </div>
    <div>
      <button onClick={logout} className="hover:bg-white ml-2 flex h-10 items-center rounded-xl px-3 font-semibold duration-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
        Logout
      </button>
    </div>
    <button className="ml-2 flex h-10 w-44 button1 transform flex-row-reverse items-center rounded-xl px-3 font-semibold text-white duration-100 hover:-translate-y-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
      </svg>
      Create Project
    </button>
    <div className="ml-2 flex h-10 w-40 items-center rounded-full bg-white px-1">
      <div className="flex h-8 w-8 items-center justify-center rounded-full text-xl font-bold bg-col1">
        <div id="pfp" className="text-xl font-extrabold text-white">
          <img className='w-full h-full rounded-full' src={userPhoto}></img>
        </div>
      </div>
      <div className="ml-2 flex font-semibold">
        @
        <div id="username">{userTokenData}</div>
      </div>
    </div>
  </div>
</div>

<div className="w-full p-1 bgimg">

  <div className="w-full relative z-50 flex h12">
    <div className="w-1/3 pt-4 pl-4 pr-2">
      <div className="bg-grey1 duration-100 w-full h-full p-5 rounded-xl">
        
        <div className="flex justify-evenly w-full font-2 font-extrabold text-3xl colDark"> {"Today's Big Goal"}</div>
        <div className="h-full  justify-center   ">
       {/*main goal of today, var name*/}           <input defaultValue={name} onChange={event => setName(event.target.value)} className="inputmain h-4/6 focus:outline-none underline-offset-4  bg-transparent   w-full text-center text-2xl" placeholder={mainState}/>

        </div>

        <div className="h-1/6 flex -mt-20 w-full justify-center">
                            <button onClick={addDataName} className="button1 w-full mr-1 transform flex-row-reverse items-center rounded-xl px-3 font-semibold text-white duration-100 hover:-translate-y-1">
                    Enter
                  </button>

                 



                              {/*      <button onClick={() => getID()} className="w-1/2 button2 ml-1 transform flex-row-reverse items-center rounded-xl px-3 font-semibold text-white duration-100 hover:-translate-y-1">
                    Update
                  </button> */}
        </div>
      </div>
    </div>
    <div className="w-1/3 pr-4 pt-4 pl-2">
    <div className="bg-grey1 h-full w-full rounded-xl p-5 duration-100">
        <div className="font-2 colDark flex w-full text-3xl font-extrabold flex">
          <div>Todo</div>
          <div>        <button className='h-7 w-7 flex ml-2 mt-1 rounded-lg text-white justify-center items-center bg-col1 border-col-1' onClick={() => {var todoVar = prompt('enter todo stuff'); todoData.push(todoVar); alert(todoData); addDataTodo()}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
        </button></div>
        </div>
        <div className="col1 flex w-full text-lg">Turn your potential into progress.</div>
      {/*  <textarea className="w-full bg-transparent h-5/6 col1 outline-none" name="todoList" id="todoList">
        </textarea> */}


{todoData.map((item) =>
                       <a key={Math.random() * 100} className='col1 hover:line-through flex' href="#" onClick={() => {removeItemOnce(todoData, item); alert(todoData); addDataTodo()}}>
                         <div><svg xmlns="http://www.w3.org/2000/svg" className="h-4 mt-1 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg></div>
                           <div>{item}</div>
                       </a>)}

                         
                         

                       


        
      </div>
    </div>

        <div className="w-1/3 pr-4 pt-4 pl-2">
      <div className="bg-grey1 duration-100 w-full h-full p-5 rounded-xl">
      <div className="colDark font-2 flex w-full text-3xl font-extrabold flex">
          <div>Gratitude Journal</div>
        </div>
        <div className="col1 flex w-full text-lg">Gratitude helps recognize positive emotions.</div>
        <div className="h-full  justify-center   ">
       <textarea value={grat} onChange={event => setGrat(event.target.value)} className="w-full bg-transparent h-5/6 col1 outline-none">
         
         

        </textarea>

        </div>

        <div className="h-1/6 flex -mt-28 w-full ">
                            <button onClick={addDataGrat} className="button2 w-20 mr-1 transform flex-row-reverse items-center rounded-xl px-3 font-semibold text-white duration-100 hover:-translate-y-1">
                    Enter
                  </button>

        </div>


      </div>
    </div>
  </div>

    <div className="w-full relative flex h12 z-50">
    <div className="w-1/2 py-4 pl-4 pr-2">
      <div className="colDark text-4xl font-black bg-grey1 duration-100 w-full h-full rounded-xl flex justify-center items-center">
      <button onClick={() => {setIsMeditation(false)}} className="font-2 text-4xl hover:underline font-extrabold flex">
      <div>Take a Break</div>
      <div className='mt-2 ml-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
      </div>
      </button>
      </div>
    </div>
    
    <div className="w-1/2 pr-4 py-4 pl-2">
    <div className="colDark text-4xl font-black bg-grey1 duration-100 w-full h-full rounded-xl flex justify-center items-center">
      <div className="text-center flex">
      <div><div className="font-2 text-2xl  font-extrabold">&quot;{quotes[0]}&quot;</div>
      <div className='col1 font-bold text-xl font-medium'>- {quotes[1]}</div></div>

      </div>
      </div>
      
     </div>
  </div>

  <div className="relative -mt-4 z-50 flex  w-full">
    <div className="w-full py-4 px-4">
      <div className="bg-grey1 h-full w-full rounded-xl duration-100 p-5">
      <div className="colDark font-2 flex w-full text-3xl font-extrabold flex">
          <div>Workout Schedule</div>
        </div>
        <div className="col1 flex w-full text-lg">Exercise reduces feelings of depression and improves your mood by releasing feel-good hormones. Check out <a className='colDark mx-1' href="https://musclewiki.com/" > MuscleWiki </a> for specific movements.</div>

        <div className='flex pt-5 w-full'>
          <div className='w-7th mr-3.5'>
            <div className='colDark w-full font-2 text-xl'>Sunday</div>
            <div className='h-52 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
              <textarea value={work1} onChange={event => setWork1(event.target.value)}  defaultValue={'2'} className='focus:outline-none h-full w-full bg-opacity-0 bg-white col1 p-3'></textarea>
            </div>
          </div>
          <div className='w-7th mr-3.5'>
            <div className='colDark w-full font-2 text-xl'>Monday</div>
            <div className='h-52 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
              <textarea value={work2} onChange={event => setWork2(event.target.value)}  defaultValue={'2'} className='focus:outline-none h-full w-full bg-opacity-0 bg-white col1 p-3'></textarea>
            </div>
          </div> <div className='w-7th mr-3.5'>
            <div className='colDark w-full font-2 text-xl'>Tuesday</div>
            <div className='h-52 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
              <textarea value={work3} onChange={event => setWork3(event.target.value)}  defaultValue={'2'} className='focus:outline-none h-full w-full bg-opacity-0 bg-white col1 p-3'></textarea>
            </div>
          </div> <div className='w-7th mr-3.5'>
            <div className='colDark w-full font-2 text-xl'>Wednesday</div>
            <div className='h-52 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
              <textarea value={work4} onChange={event => setWork4(event.target.value)}  defaultValue={'2'} className='focus:outline-none h-full w-full bg-opacity-0 bg-white col1 p-3'></textarea>
            </div>
          </div> <div className='w-7th mr-3.5'>
            <div className='colDark w-full font-2 text-xl'>Thursday</div>
            <div className='h-52 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
              <textarea value={work5} onChange={event => setWork5(event.target.value)}  defaultValue={'2'} className='focus:outline-none h-full w-full bg-opacity-0 bg-white col1 p-3'></textarea>
            </div>
          </div> <div className='w-7th mr-3.5'>
            <div className='colDark w-full font-2 text-xl'>Friday</div>
            <div className='h-52 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
              <textarea value={work6} onChange={event => setWork6(event.target.value)}  defaultValue={'2'} className='focus:outline-none h-full w-full bg-opacity-0 bg-white col1 p-3'></textarea>
            </div>
          </div> <div className='w-7th '>
            <div className='colDark w-full font-2 text-xl'>Saterday</div>
            <div className='h-52 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
              <textarea value={work7} onChange={event => setWork7(event.target.value)}  defaultValue={'2'} className='focus:outline-none h-full w-full bg-opacity-0 bg-white col1 p-3'></textarea>
            </div>
          </div>
        </div>

        <div className="h-12 mt-3 flex  w-full ">
                            <button onClick={addDataWork} className="button1 w-20 mr-1 transform flex-row-reverse items-center rounded-xl px-3 font-semibold text-white duration-100 hover:-translate-y-1">
                    Enter
                  </button>

        </div>
        
      </div>
    </div>
  </div>


  <div className="relative -mt-4 z-50 flex  w-full">
    <div className="w-full py-4 px-4">

    <div className="bg-grey1 h-full w-full rounded-xl p-5 duration-100">
        <div className="font-2 colDark flex w-full text-3xl font-extrabold flex">
          <div>Today&apos;s Big Tasks</div>
          <div>        <button className='h-7 w-7 flex ml-2 mt-1 rounded-lg text-white justify-center items-center bg-col1 border-col-1' onClick={() => {var todoVar = prompt('Enter Task Name:'); var todoVar2 = prompt('Enter Task Informatoin'); var todoVar3 = prompt('Enter Emoji (star, rainbow, cloud, bulb, hands, coffee, ship, book, date, ticket, gift, food, lightning, heart, tree, pen, brain, pensive, tomato, globe, trophy, alarm)'); taskData.push([todoVar, todoVar2, todoVar3]); alert(taskData); addDataTask()}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
        </button></div>
        </div>
        <div className="col1 flex w-full text-lg">Create small tasks to plan your day.</div>
      {/*  <textarea className="w-full bg-transparent h-5/6 col1 outline-none" name="todoList" id="todoList">
        </textarea> */}


{ taskData.map((item) =>


<a key={Math.random() * 200} className='col1 flex' href="#" onClick={() => {removeItemOnce(taskData, item); alert(taskData); addDataTask()}}>

<div className='w-full'>
<div className='p-5 w-full mt-2 rounded-xl bg-white bg-opacity-30'>
<div className='colDark w-full font-2 text-xl'>

  <span className='text-3xl mr-2'>{item[2] === 'star' ? ( <span>⭐</span> ) : ( <span></span> )} {item[2] === 'rainbow' ? ( <span>🌈</span> ) : ( <span></span> )} {item[2] === 'cloud' ? ( <span>☁️</span> ) : ( <span></span> )} {item[2] === 'bulb' ? ( <span>💡</span> ) : ( <span></span> )} {item[2] === 'hands' ? ( <span>🙌</span> ) : ( <span></span> )} {item[2] === 'coffee' ? ( <span>☕</span> ) : ( <span></span> )} {item[2] === 'ship' ? ( <span>🚀</span> ) : ( <span></span> )} {item[2] === 'book' ? ( <span>📙</span> ) : ( <span></span> )} {item[2] === 'date' ? ( <span>📆</span> ) : ( <span></span> )} {item[2] === 'ticket' ? ( <span>🎟️</span> ) : ( <span></span> )} {item[2] === 'gift' ? ( <span>🎁</span> ) : ( <span></span> )} {item[2] === 'food' ? ( <span>🌯</span> ) : ( <span></span> )} {item[2] === 'lightning' ? ( <span>⚡</span> ) : ( <span></span> )} {item[2] === 'heart' ? ( <span>❤️</span> ) : ( <span></span> )}{item[2] === 'tree' ? ( <span>🌲</span> ) : ( <span></span> )} {item[2] === 'pen' ? ( <span>🖊️</span> ) : ( <span></span> )} {item[2] === 'brain' ? ( <span>🧠</span> ) : ( <span></span> )} {item[2] === 'pensive' ? ( <span>😔</span> ) : ( <span></span> )} {item[2] === 'tomato' ? ( <span>🍅</span> ) : ( <span></span> )} {item[2] === 'globe' ? ( <span>🌎</span> ) : ( <span></span> )} {item[2] === 'trophy' ? ( <span>🏆</span> ) : ( <span></span> )} {item[2] === 'alarm' ? ( <span>⏰</span> ) : ( <span></span> )}</span>
  
  {item[0]} <span className='text-lg col1 font-1'>{item[1]}</span>

</div>

</div>
</div>
</a>



) }

                         
                         

                       


        
      </div>

    </div>
  </div>

  <div className="relative -mt-4 z-50 flex  w-full">
    <div className="w-full py-4 px-4">

    <div className="bg-grey1 h-full w-full rounded-xl p-5 duration-100">
        <div className="font-2 box colDark flex w-full text-3xl font-extrabold flex">
          <div id="guide">A Guide on how to be happy, adapted from <a href='https://www.pursuit-of-happiness.org/science-of-happiness/'>The Pursuit Of Happiness</a></div>

        </div>
        <div className="col1 box w-full text-lg mt-5">

        <p><b>Relationships:</b> Relationships in this case don’t only mean dating, but having close emotional relationships between family or friends. By utilizing these bonds and strengthening positive emotions, it is possible to share personal feelings with them and show genuine interest in what they say. Studies have shown that people with one or more close friends and a high level of social integration are proven to be happier and have lower levels of depression, anxiety, and suicidal thoughts. <a href='https://www.pursuit-of-happiness.org/science-of-happiness/relationships-and-happiness/'>Source 1</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/25863909/'>Source 2</a></p>

<p className='mt-4'><b>Acts of Kindness:</b> Prosocial spending (charity or giving aid to others) and volunteering (check out <a href="https://www.volunteermatch.org/">VolunteerMatch</a> to find places to participate at) instills people with a sense of happiness. On a smaller scale, caring for others, such as random acts of kindness, has the same effect. <a href='https://www.pursuit-of-happiness.org/science-of-happiness/caring/'>Source 1</a>, <a href='https://www.ableto.com/resources/mental-health-benefits-of-volunteering/'>Source 2</a>, <a href='https://psychcentral.com/blog/how-volunteering-can-help-your-mental-physical-health#1'>Source 3</a> </p>

<p className='mt-4'><b>Physical Wellbeing:</b> Physical wellbeing acts as an umbrella term for the overall benefits of eating well, exercising, and getting enough food. Multiple studies have shown exercise and healthy eating improve mood and reduce feelings of stress and depression. Equally important is sleeping well, as not enough sleep can lead one to become easily irritable and can lead to depression over extended periods. <a href='https://medlineplus.gov/healthysleep.html'>Source 1</a>, <a href='https://www.pursuit-of-happiness.org/science-of-happiness/exercise/'>Source 2</a>, <a href='https://www.aetna.com/health-guide/food-affects-mental-health.html'>Source 3</a>, <a href='https://medlineplus.gov/exerciseandphysicalfitness.html'>Source 4</a></p>

<p className='mt-4'><b>Developing a sense of meaning in life:</b> This can be done by learning new skills, working on your hobbies/job, or even exploring your spirituality. Not only do hobbies that you’re interested in provide physical enjoyment, but they are also shown to improve mental health and wellbeing. Relaxational activities reduce stress levels, which has a positive mental and physical effect on the body. Physical activities (i.e. sports and weightlifting) can also improve mood. Doing creative hobbies can make you feel better the next day, according to a 13-day daily diary study, and pursuing your interest with others often leads  to  stronger connections. <a href='https://www.headtohealth.gov.au/meaningful-life/purposeful-activity/hobbies'>Source 1</a>, <a href='https://www.tandfonline.com/doi/full/10.1080/01490400.2015.1120168'>Source 2</a>, <a href='https://www.tandfonline.com/doi/abs/10.1080/01490400.2022.2058657'>Source 3</a>, <a href='https://www.tandfonline.com/doi/abs/10.1080/17439760.2016.1257049'>Source 4</a>, <a href='https://www.pursuit-of-happiness.org/science-of-happiness/getting-in-the-flow/'>Source 5</a> </p>

<p className='mt-4'><b>Discovering and using your strengths:</b> This path may seem a little vague, so to specify it means to find your talents and qualities (critical thinking, empathy, diligence, teamwork, leadership, etc) and use them in your life. Research has shown that using your strengths in new ways and scenarios, instead of worrying about your weaknesses, can lead to long-term happiness. Not only this, but people who use their strengths are more likely to reach their goals, which leads to self-fulfillment and better mental health. <a href='https://www.pursuit-of-happiness.org/science-of-happiness/strengths-and-virtues/'>Source 1</a>, <a href='https://psycnet.apa.org/record/2010-09774-001'>Source 2</a>, <a href='https://www.weforum.org/agenda/2022/01/fullfillment-mental-health-study-ageing/'>Source 3</a> </p>

<p className='mt-4'><b>Positive Mindset:</b> A positive mindset can be summed down to optimism, gratitude, and general happiness. Optimism has been proven to help people deal with grief, improve the immune system, and even prevent chronic disease. Optimistic people are also better at moving on from negative experiences, being persistent with their goals, having better emotional health, and solving problems. Gratitude, which is associated with optimism, makes people happier, more likely to receive support from others, and lowers depression and anxiety. In order to be more optimistic, you can remember a few important tips, such as analyzing important events to give yourself credit and find your strengths, think of how your strengths can improve your life and help you find your goals, what positive events can happen in the future, and to minimize the negative, don’t blame yourself, move on from whatever happened, and try to find out what went wrong and learn from it. You can also practice positive affirmations, keep a gratitude diary, find a role model, surround yourself with positivity and more importantly positive people, and focus on your success. <a href='https://www.verywellmind.com/become-more-of-an-optimist-3144818'>Source 1</a>, <a href='https://www.pursuit-of-happiness.org/science-of-happiness/positive-thinking/'>Source 2</a>, <a href='https://www.verywellmind.com/how-positive-affirmations-help-manage-stress-3144814'>Source 3</a>, <a href='https://www.realbuzz.com/articles-interests/health/article/11-ways-to-become-an-optimist/'>Source 4</a>, <a href='https://kidshealth.org/en/teens/optimism.html'>Source 5</a></p>


        </div>
      {/*  <textarea className="w-full bg-transparent h-5/6 col1 outline-none" name="todoList" id="todoList">
        </textarea> */}


                         
                         

                       


        
      </div>

    </div>
  </div>


</div>
    <img className="z-0 absolute w-screen opacity-90 bottom-0 top-0 left-0 bgimg" src="https://logos.thefunnblog.repl.co/blur-grad.svg"></img>


    {/* popup for meditation */}


    
   



{isMeditiation ? (
                  <div></div>

        ) : (
          <div id="todoPop" className="absolute bg-glass z-50 flex col1 justify-center items-center top-0 w-full h-full">
          <div className="overflow-hidden rounded-xl styleWidget bg-white bg-opacity-80">
            <div className="w-full rounded-t-xl flex justify-between px-5 items-center styleWidget2">
              <div className="font-medium flex mt-1 z-50">
                
                <div>Guided Breathing/Meditation</div>
        
                <div className='ml-2'><button onClick={play}>
        
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
                  
                </button></div>
          <audio loop id='a1' src='https://rainsoundschill.funnwebsite.repl.co/no.mp3'></audio>
        
          <div className='ml-2'><button onClick={playLofi}>
        
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
          
        </button></div>
        <audio loop id='a2' src='https://musicchill.funnwebsite.repl.co/no.mp3'></audio>
        
        <div className='ml-2'><button onClick={playBeach}>
        
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        </button></div>
        <audio loop id='a3' src='https://beachsoundschill.funnwebsite.repl.co/no.mp3'></audio>
        
        
              
              </div>
              <button onClick={() => {setIsMeditation(true)}} className="font-medium focus:outline-none outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
              </button>
            </div>
         <div className="w-full relative h-full rounded-b-xl p-4 flex justify-center items-center">
        
         <span className="flex h-96 w-96 relative z-40">
          <span className="animateping absolute inline-flex h-full w-full rounded-full bg-col2 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-96 w-96 bg-col1 flex justify-center items-center text-white font-black text-4xl font-2 ">
          <div className="meditationTitle"><span> </span></div>
          
          </span>
        </span>
        
        
          </div>
            
          </div>
        </div> 
        

        )}

               


 {/*     <main className={styles.main}>
        <input placeholder='name' value={name} className={styles.inputBox} onChange={event => setName(event.target.value)} />
        <input placeholder='age' value={age} className={styles.inputBox} onChange={event => setAge(event.target.value)} />

        {isUpdate ? (
                  <button className={styles.button} onClick={updateFields}>update</button>

        ) : (
          <button className={styles.button} onClick={addData}>add</button>

        )}


        <div>
          {

            fireData.map((data) => {
              var ok = data
             // console.log(ok.token[0])
              if (ok.token[0] === sessionStorage.getItem('userToken')){
              //  console.log('1')

                return(
                  <div className={styles.flex}>
                    <h1>{data.token[1].name}</h1>
                    <h1>{data.token[1].age}</h1>
                    <button className={styles.button} onClick={() => getID(data.id, data.name, data.age)}>update</button>
                    <button className={styles.button} onClick={() => deleteDocument(data.id)}>delete</button>
                  </div>
                )
              }

              else{
              //  console.log('2')
              //  console.log(sessionStorage.getItem('userToken'))
              }
            })
          
          
}
        </div>
      </main> */}


    </div>
  )
}

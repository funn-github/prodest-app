import { useState } from 'react'

const ok = () => {
  const [data2, setData2] = useState('')
}
ok()

export const getStaticProps = async () => {
  const res = await fetch('https://zenquotes.io/api/quotes')
  const data = await res.json()

  setData2(data)

  return{
    props: { quotes: data }
  }
}

const Quotes = ({ quotes }) => {
  return(
    <div>
      same
      {(data2 || []).map(quote => {
        <div>{ quote.q }</div>
      })}
    </div>
  )
}

export default Quotes
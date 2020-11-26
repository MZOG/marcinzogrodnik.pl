import React, { useEffect, useState } from "react"

const CookieAlert = () => {

  const [cookie, setCookie] = useState(false)

  const handleCookieSet = () => {
    localStorage.setItem("cookieAlert", true)
    setCookie(true)
    console.log('elo')
  }

  useState(() => {
    if (localStorage.getItem("cookieAlert")) {
      setCookie(true)
    }
  }, [cookie])

  return(
    <div className={`cookies ${cookie ? 'hide' : ''}`}>
      <p>
        Ta strona korzysta z ciasteczek. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
      </p>
      <div className="cookies__btn">
        <button onClick={handleCookieSet}>Ok 🍪</button>
      </div>
    </div>
  )
}

export default CookieAlert
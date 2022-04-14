import { useEffect, useRef, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { dark, light } from '../../theme/index'

export default function useTheme ():[DefaultTheme, () => void] {
  const [theme, setTheme] = useState(light)
  const flag = useRef(false)

  function checkTheme () {
    const mode = localStorage.getItem('theme')
    setTheme(mode === dark.title ? dark : light)
  }

  useEffect(() => {
    if (flag.current) {
      localStorage.setItem('theme', theme.title)
    } else {
      checkTheme()
      flag.current = true
    }
  }, [theme])

  const toogle = () => setTheme(theme.title === 'light' ? dark : light)

  return [theme, toogle]
}

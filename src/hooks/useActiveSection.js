import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const navOffset = 120

    const handleScroll = () => {
      let current = null
      let closestTop = -Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top - navOffset
        if (top <= 0 && top > closestTop) {
          closestTop = top
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids])

  return activeId
}

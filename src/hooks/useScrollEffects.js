import { useEffect } from 'react'

export function useScrollEffects() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()

    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-card')
      const x = (e.clientX - window.innerWidth / 2) / 50
      const y = (e.clientY - window.innerHeight / 2) / 50
      cards.forEach((card) => {
        card.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', revealOnScroll)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
}

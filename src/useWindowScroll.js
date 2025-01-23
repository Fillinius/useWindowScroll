import { useState, useEffect } from 'react'

export function useWindowScroll() {
  // Состояние для хранения позиции прокрутки
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })

  useEffect(() => {
    // Функция для обновления состояния при прокрутке
    const handleScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY })
    }

    // Подписка на событие прокрутки
    window.addEventListener('scroll', handleScroll)

    // Очистка подписки при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Функция для прокрутки к заданной позиции
  const scrollTo = ({ x = scroll.x, y = scroll.y }) => {
    window.scrollTo(x, y)
  }

  return [scroll, scrollTo]
}

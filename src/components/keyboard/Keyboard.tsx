import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= '0' && key <= '9') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key width={50} value="1" onClick={onClick} status={charStatuses['1']} />
        <Key width={50} value="2" onClick={onClick} status={charStatuses['2']} />
        <Key width={50} value="3" onClick={onClick} status={charStatuses['3']} />
        <Key width={50} value="4" onClick={onClick} status={charStatuses['4']} />
        <Key width={50} value="5" onClick={onClick} status={charStatuses['5']} />
        <Key width={50} value="6" onClick={onClick} status={charStatuses['6']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key width={50} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key width={50} value="7" onClick={onClick} status={charStatuses['7']} />
        <Key width={50} value="8" onClick={onClick} status={charStatuses['8']} />
        <Key width={50} value="9" onClick={onClick} status={charStatuses['9']} />
        <Key width={50} value="0" onClick={onClick} status={charStatuses['0']} />
        <Key width={50} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}

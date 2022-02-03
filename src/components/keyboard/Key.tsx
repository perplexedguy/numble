import { ReactNode } from 'react'
import classnames from 'classnames'
import { KeyValue } from '../../lib/keyboard'
import { CharStatus } from '../../lib/statuses'

type Props = {
  children?: ReactNode
  value: KeyValue
  width?: number
  status?: CharStatus
  onClick: (value: KeyValue) => void
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
}: Props) => {
  const classes = classnames('flex border-solid border-2 items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white', {
      'bg-white border-slate-200 hover:bg-slate-200 dark:bg-black dark:border-gray-800': !status,
      'bg-gray-800 border-gray-800 text-white': status === 'absent',
      'bg-blue-500 border-blue-500 hover:bg-blue-600 text-white': status === 'correct',
      'bg-slate-300 border-slate-300 hover:bg-slate-400 text-white': status === 'present',
    }
  )

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button
      style={{ width: `${width}px`, height: '58px' }}
      className={classes}
      onClick={handleClick}
    >
      {children || value}
    </button>
  )
}

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
      'bg-gray-500 border-gray-500 text-white': status === 'absent',
      'bg-green-500 border-green-500 hover:bg-green-600 text-white': status === 'correct',
      'bg-yellow-500 border-yellow-500 hover:bg-yellow-600 text-white': status === 'present',
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

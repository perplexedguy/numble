import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status?: CharStatus
}

export const Cell = ({ value, status }: Props) => {
  const classes = classnames('w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded dark:text-white', {
      'bg-white border-slate-200 dark:bg-black dark:border-gray-800': !status,
      'border-slate-200 dark:border-gray-800': value && !status,
      'bg-gray-800 text-white border-gray-800': status === 'absent',
      'bg-blue-500 text-white border-blue-500': status === 'correct',
      'bg-slate-300 text-white border-slate-300': status === 'present',
      'cell-animation': !!value,
    }
  )

  return <div className={classes}>{value}</div>
}

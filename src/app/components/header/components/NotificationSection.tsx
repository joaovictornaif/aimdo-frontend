import { ArrowRight, Bell, Mail } from 'lucide-react'
import { useState } from 'react'
import { Notification } from './Notification'

export interface NotificationEntity {
  id: number
  title: string
  content: string
}

const notifications: NotificationEntity[] = [
  {
    id: 1,
    title: 'Você tem uma nova notificação',
    content: 'Carlos te convidou para um novo objetivo',
  },
  {
    id: 2,
    title: 'Você tem uma nova notificação',
    content: 'Carlos te convidou para um novo objetivo',
  },
]

export function NotificationSection() {
  const [layoutNotification, setLayoutNotification] = useState(0)

  return (
    <ul className="flex items-center gap-3">
      <li>
        <button
          onClick={() => setLayoutNotification(1)}
          className="relative rounded-full p-1 text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:text-white hover:dark:bg-white hover:dark:text-slate-800"
        >
          <Bell className="h-7 w-7" />
          {notifications.length > 0 && (
            <span className="absolute right-[-8px] top-[-8px] rounded-full bg-rose-500 px-2 py-1 text-xs font-bold">
              2
            </span>
          )}
        </button>
      </li>
      <li>
        <button
          onClick={() => setLayoutNotification(2)}
          className="relative rounded-full p-1 text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white dark:text-white hover:dark:bg-white hover:dark:text-slate-800"
        >
          <Mail className="h-7 w-7" />
          {notifications.length > 0 && (
            <span className="absolute right-[-8px] top-[-8px] rounded-full bg-rose-500 px-2 py-1 text-xs font-bold">
              2
            </span>
          )}
        </button>
      </li>

      <div
        className={`fixed top-0 z-10 flex h-full w-1/3 flex-col gap-3 border-l bg-white shadow-sm shadow-white transition-all duration-300 ease-linear dark:bg-slate-900 ${layoutNotification !== 0 ? 'right-0' : 'right-[-35%]'}`}
      >
        <header className="flex items-center justify-between px-10 py-5 dark:text-white">
          <h3 className="text-2xl font-bold">Notificações</h3>
          <div
            onClick={() => setLayoutNotification(0)}
            className="cursor-pointer p-2"
          >
            <ArrowRight />
          </div>
        </header>
        <nav className="flex text-center text-slate-900 dark:text-white">
          <li
            onClick={() => setLayoutNotification(1)}
            className={`flex-1 cursor-pointer border-b ${layoutNotification === 1 ? 'border-orange-500 text-orange-500' : 'border-slate-900 dark:border-white'}`}
          >
            Alertas
          </li>
          <li
            onClick={() => setLayoutNotification(2)}
            className={`flex-1 cursor-pointer border-b ${layoutNotification === 2 ? 'border-orange-500 text-orange-500' : 'border-slate-900 dark:border-white'}`}
          >
            Convites
          </li>
        </nav>
        <ul className="flex flex-col gap-5 p-4">
          {notifications.map((item) => (
            <Notification key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </ul>
  )
}

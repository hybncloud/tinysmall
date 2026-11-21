export interface Emitter {
  /** 触发事件，按注册顺序同步调用所有监听器，once 监听器触发后自动移除 */
  emit(event: string, ...args: any[]): void
  /** 注册事件监听器 */
  on(event: string, callback: (...args: any[]) => void): void
  /** 注册仅触发一次的监听器 */
  once(event: string, callback: (...args: any[]) => void): void
  /** 清空全部监听器 */
  off(): void
  /** 移除监听器：传 event 清空该事件； */
  off(event: string): void
  /** 移除监听器：传 callback 移除指定监听；*/
  off(event: string, callback: (...args: any[]) => void): void
}

export const emitter = (): Emitter => {
  let listeners: Record<string, ((...args: any[]) => void)[]> = {}

  const on = (event: string, callback: (...args: any[]) => void, once = false) => {
    const callbacks = listeners[event] || []
    listeners[event] = callbacks
    if (once) Object.defineProperty(callback, 'once', { value: true })
    callbacks.push(callback)
  }

  const emitter: Emitter = {
    emit(event: string, ...args: any[]) {
      const callbacks = listeners[event]
      if (callbacks) {
        callbacks.forEach((callback) => callback(...args))
        listeners[event] = callbacks.filter((callback) => !('once' in callback && callback.once))
      }
    },
    on(event, callback) {
      on(event, callback)
    },
    once(event, callback) {
      on(event, callback, true)
    },
    off() {
      if (arguments.length === 0) {
        listeners = {}
      } else if (arguments.length === 1) {
        delete listeners[arguments[0]]
      } else {
        listeners[arguments[0]] = listeners[arguments[0]].filter((cb) => cb !== arguments[1])
      }
    }
  }

  return emitter
}

import { Message } from 'element-ui'

const showTime = 1500
const timeout = (duration = showTime) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration)
  })

export default class {
  error(tip) {
    let text
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || showTime
    } else {
      text = tip
      time = showTime
    }
    Message.error(text)
    return timeout(time)
  }

  success(tip) {
    let text
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || showTime
    } else {
      text = tip || '操作成功'
      time = showTime
    }
    Message.success(text)
    return timeout(time)
  }

  info(tip) {
    let text
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || showTime
    } else {
      text = tip || '操作成功'
      time = showTime
    }
    Message.info(text)
    return timeout(time)
  }
}

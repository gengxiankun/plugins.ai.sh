execute = async function(args, context) {
  var role = ''
  try { role = JSON.parse(args).role || 'friend' } catch(e) { role = args || 'friend' }
  var greetings = {
    friend: 'Hey! 很高兴见到你！今天过得怎么样？需要我帮你做点什么吗？',
    mentor: '你好，年轻的学习者。准备好接受新的知识了吗？',
    stranger: '你好！我是 ai.sh 的问候助手，有什么可以帮你的？',
    default: '你好！欢迎来到 ai.sh！'
  }
  return greetings[role] || greetings['default']
}

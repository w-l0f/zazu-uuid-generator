const { v4: uuidv4 } = require('uuid')

module.exports = (pluginContext) => {
  return (name, env = {}) => {
    return new Promise((resolve, reject) => {
      const uuid = uuidv4()
      resolve([
        {
          icon: 'fa-fingerprint',
          title: `UUID: ${uuid}`,
          subtitle: 'Select item to copy the value to the clipboard.',
          value: uuid,
        },
      ])
    })
  }
}

export const apis = import.meta.glob('../../../site/demos/apis/*.js', { eager: false })

export const getPath = (path) => {
  return path
}

export const getApisConfig = async (component, mode) => {
  const apisModule = apis[`../../../site/demos/apis/${component}.js`]
  if (apisModule) {
    const apisConfig = (await apisModule()).default
    const demoKey = mode === 'mobile-first' ? 'mfDemo' : `${mode}Demo`
    const apis = apisConfig.apis.map((item) => {
      Object.keys(item).forEach((key) => {
        const apiItem = item[key]
        if (Array.isArray(apiItem)) {
          item[key] = apiItem
            .filter((i) => !i.mode || i.mode.includes(mode))
            .map((filterItem) => ({ ...filterItem, demoId: filterItem[demoKey] }))
        }
      })
      return item
    })
    return { ...apisConfig, apis }
  }
  return {}
}

export const getDemosConfig = async (module) => {
  if (module) {
    const demosModule = await module()
    const demosConfig = demosModule.default
    return demosConfig
  }
  return { demos: [] }
}

export const apis = import.meta.glob('../../site/demos/apis/*.js', { eager: false })

export const getApisConfig = async (component) => {
  const apisModule = apis[`../../site/demos/apis/${component}.js`]
  return (await apisModule()).default
}

export const getDemosConfig = async (module) => {
  const demosModule = await module()
  const demosConfig = demosModule.default
  return demosConfig
}

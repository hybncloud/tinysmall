import { defineRoutes } from 'vitepress'
import fs from 'node:fs'
import matter from 'gray-matter'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { EOL } from 'node:os'

const nl2br = (str: string) => (str ? str.replaceAll('\n', '<br />') : str)

const html = (str: string) => {
  if (str && str.length) {
    const encodedStr = encodeURIComponent(str)
    return `<div v-html="decodeURIComponent(\`${encodedStr}\`)" />`
  }
  return str
}

export default defineRoutes({
  watch: ['../demos/pc/app/*/webdoc/*.cn.md', '../demos/pc/app/*/webdoc/*.js'],
  async paths(watchedFiles) {
    const mdFiles = watchedFiles.filter((file) => file.endsWith('.cn.md'))
    return await Promise.all(
      mdFiles.map(async (mdFile) => {
        const webdoc = path.dirname(mdFile)
        const cmp = path.resolve(webdoc, '../')
        const app = path.resolve(cmp, '../')
        const apis = path.resolve(app, '../../apis')
        const cmpName = path.relative(app, cmp)
        const demoDefFile = path.resolve(webdoc, `./${cmpName}.js`)
        const demoDefUrl = pathToFileURL(demoDefFile).toString()
        const { default: demoDef } = await import(demoDefUrl)
        const apiDefFile = path.resolve(apis, `./${cmpName}.js`)
        const apiDefUrl = pathToFileURL(apiDefFile).toString()
        const { default: apiDef } = await import(apiDefUrl)
        const md = fs.readFileSync(mdFile, 'utf-8')
        const matteredMd = matter(md)
        const importedCodeFiles = new Set<string>()
        return {
          params: {
            cmpName,
            ...matteredMd.data
          },
          content: [
            matteredMd.content,
            EOL,
            '<script setup>',
            EOL,
            "import { defineClientComponent } from 'vitepress';",
            EOL,
            ...demoDef.demos.map((demo: any) => {
              if (importedCodeFiles.has(demo.codeFiles[0])) return ''
              importedCodeFiles.add(demo.codeFiles[0])
              const codeImportName = demo.codeFiles[0].replaceAll('.', '_').replaceAll('-', '_')
              return `const ${codeImportName} = defineClientComponent(() => import("../demos/pc/app/${cmpName}/${demo.codeFiles[0]}"));`
            }),
            EOL,
            '</script>',
            EOL,
            ...demoDef.demos.map((demo: any) => {
              const encodedDesc = encodeURIComponent(demo.desc['zh-CN'])
              const codeImportName = demo.codeFiles[0].replaceAll('.', '_').replaceAll('-', '_')
              return [
                `<h3 id="${demo.demoId}">${demo.name['zh-CN']}</h3>`,
                EOL,
                EOL,
                `<p v-html="decodeURIComponent(\`${encodedDesc}\`)" />`,
                EOL,
                EOL,
                '::: raw',
                EOL,
                '<DemoBlock>',
                EOL,
                '<ClientOnly>',
                EOL,
                `<${codeImportName} />`,
                EOL,
                '</ClientOnly>',
                EOL,
                '</DemoBlock>',
                EOL,
                ':::',
                EOL,
                EOL,
                ...demo.codeFiles.map((codeFileName: string) => {
                  const codeFile = path.resolve(cmp, codeFileName)
                  if (fs.existsSync(codeFile)) {
                    return [
                      ':::: details 查看代码',
                      EOL,
                      '::: code-group',
                      EOL,
                      `<<< ../demos/pc/app/${cmpName}/${codeFileName}`,
                      EOL,
                      ':::',
                      EOL,
                      EOL,
                      '::::',
                      EOL
                    ].join('')
                  } else console.warn(`no such codeFile ${codeFile}`)
                  return ''
                }),
                EOL
              ].join('')
            }),
            EOL,
            `## API`,
            EOL,
            ...apiDef.apis.map((api: any) => {
              return [
                ...(api.props && api.props.length
                  ? [
                      `### ${api.name} 参数`,
                      EOL,
                      `| 名称 | 类型 | 默认值 | 说明 |`,
                      EOL,
                      `| ------- | ------- | ------- | ------- |`,
                      EOL,
                      api.props
                        .map((prop: any) => {
                          return `| ${html(prop.name)} | ${html(prop.type)} | ${html(prop.defaultValue)} | ${html(prop.desc['zh-CN'])} |`
                        })
                        .join(EOL),
                      EOL
                    ]
                  : []),
                ...(api.events && api.events.length
                  ? [
                      `### ${api.name} 事件`,
                      EOL,
                      `| 名称 | 类型 | 说明 |`,
                      EOL,
                      `| ------- | ------- | ------- |`,
                      EOL,
                      api.events
                        .map((event: any) => {
                          return `| ${html(event.name)} | ${html(event.type)} | ${html(event.desc['zh-CN'])} |`
                        })
                        .join(EOL),
                      EOL
                    ]
                  : []),
                ...(api.slots && api.slots.length
                  ? [
                      `### ${api.name} 插槽`,
                      EOL,
                      `| 名称 | 说明 |`,
                      EOL,
                      `| ------- | ------- |`,
                      EOL,
                      api.slots
                        .map((slot: any) => {
                          return `| ${html(slot.name)} | ${html(slot.desc['zh-CN'])} |`
                        })
                        .join(EOL),
                      EOL
                    ]
                  : []),
                ...(api.methods && api.methods.length
                  ? [
                      `### ${api.name} 方法`,
                      EOL,
                      `| 名称 | 类型 | 说明 |`,
                      EOL,
                      `| ------- | ------- | ------- |`,
                      EOL,
                      api.methods
                        .map((method: any) => {
                          return `| ${html(method.name)} | ${html(method.type)} | ${html(method.desc['zh-CN'])} |`
                        })
                        .join(EOL),
                      EOL
                    ]
                  : [])
              ].join('')
            }),
            EOL,
            ...(apiDef.types && apiDef.types.length
              ? [
                  `## 类型`,
                  EOL,
                  ...apiDef.types.map((type: any) => {
                    return [`### ${type.name}`, EOL, '```ts', EOL, type.code.trim(), EOL, '```', EOL].join('')
                  })
                ]
              : [])
          ].join('')
        }
      })
    )
  }
})

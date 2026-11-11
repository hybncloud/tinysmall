<template>
  <div class="wp100 hp100 f-r of-hidden">
    <div class="w330 of-auto sm-hidden b-r bg-white" :class="{ 'fixed-menu': showFixedMenu }">
      <tiny-tree
        class="!w313"
        :data="menuData"
        :filter-node-method="fn.searchMenu"
        defaultExpandAll
        @current-change="fn.clickMenu"
      ></tiny-tree>
    </div>
    <div class="fi-1 f-c px20 pb30 f-c pr200 of-auto">
      <!-- 标题 -->
      <div class="py20 f24 fw-bold text-center">
        <component :is="state.currMd" class="component-md"></component>
      </div>
      <div id="preview" class="bg-white f-c">
        <!-- 标题 + 组件说明  -->
        <div class="mb20 py10 pl16 child<code>p4 child<code>bg-lightless">
          <div class="mr20 fw-bold">
            {{ state.currDemo?.name['zh-CN'] }}
            (<span class="allselect">{{ state.currDemo?.codeFiles[0] }}</span
            >):
          </div>
          <div v-html="state.currDemo?.desc['zh-CN']"></div>
        </div>
        <!-- 预览  -->
        <div class="rel px20 py60 b-a bs-dotted" :id="state.currDemo?.demoId">
          <div class="abs top10 right10">
            <span title="点击在vscode中打开">
              <IconOpeninVscode @click="fn.openInVscode(state.currDemo)" class="ml12 cur-hand" />
            </span>
          </div>
          <component :is="state.comp" v-loading="state.demoLoading"></component>
        </div>
      </div>
      <!-- API表格 -->
      <div v-if="state.currApi?.length" class="mt20 f24 fw-bold">组件API</div>
      <div v-for="(oneGroup, idx) in state.currApi" :key="idx">
        <div class="mt20 f-r f-pos-start fw-bold">
          <div :id="oneGroup.name" class="f18">
            {{ oneGroup.name }}
          </div>
          <div class="ml12 b-a-primary c-primary px8 py4">
            {{ oneGroup.type }}
          </div>
        </div>
        <div v-for="(oneApiArr, key) in oneGroup" :key="key">
          <div v-if="key !== 'name' && key !== 'type' && oneApiArr.length > 0">
            <div class="f18 py28">
              {{ key }}
            </div>
            <table class="api-table">
              <thead>
                <tr>
                  <th width="20%">名称</th>
                  <th width="15%">类型</th>
                  <th width="20%">默认值</th>
                  <th width="55%">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in oneApiArr" :key="row.name">
                  <td>
                    <a v-if="row.demoId" class="c-primary h:c-error cur-hand" @click="fn.selectDemo(row.demoId)">{{
                      row.name
                    }}</a>
                    <span v-else>{{ row.name }}</span>
                  </td>
                  <td>{{ row.type }}</td>
                  <td v-html="typeof row.defaultValue === 'string' ? row.defaultValue || '--' : row.defaultValue"></td>
                  <td v-html="row.desc['zh-CN']"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边浮动所有的demos -->
    <div v-if="state.demos.length > 0" class="fixed !top120 !z1 !right25">
      <div class="f12 ofy-auto" style="max-height: calc(100vh - 240px)">
        <div
          v-for="demo in state.demos"
          :key="demo.demoId"
          @click="fn.selectDemo(demo.demoId)"
          class="w130 px10 py4 bg-light f-r f-pos-between"
          :class="{ 'c-error': state.currDemo === demo }"
        >
          <div class="link-primary h:c-error h:td-under ellipsis">
            {{ demo.name['zh-CN'] }}
            <Icon-star-icon v-if="state.currDemo === demo" style="fill: #ee343f" />
          </div>
          <IconOpeninVscode @click.stop="fn.openInVscode(demo)" class="f18 cur-hand" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hooks } from '@opentiny/vue-common'
import { Tree, Button, Tooltip, Dropdown, DropdownMenu, DropdownItem, ConfigProvider } from '@opentiny/vue'
import { iconStarActive, iconSelect } from '@opentiny/vue-icon'
import Loading from '@opentiny/vue-loading'
import { menuData, demoVue, mds, demos } from './resourcePc.js'
import { getDemosConfig, getApisConfig } from './componentsDoc.js'
import { modeState } from './useModeCtx.js'
import router from './router.js'
import { cmpMenus } from '../../site/demos/pc/menus.js'
import { watch } from 'vue'

export default {
  props: {
    showFixedMenu: Boolean
  },
  components: {
    TinyTree: Tree,
    TinyButton: Button,
    TinyTooltip: Tooltip,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    IconStarIcon: iconStarActive(),
    IconOpeninVscode: iconSelect(),
    ConfigProvider
  },
  directives: {
    loading: Loading.directive
  },
  setup() {
    const _componentName = () => modeState.pathName ?? cmpMenus[0].children[0].key

    const state = hooks.reactive({
      demos: [], // 组件的所有示例  {component,content,demoId,findIntroStr,link,title}[]
      currDemo: null, // 选中的demo
      currApi: [], // 当前path下的api
      comp: null, // 当前示例的组件实例
      currMd: hooks.computed(
        () => mds[`../../site/demos/pc/app/${_componentName()}/webdoc/${_componentName()}.cn.md`].default
      ),
      demoLoading: false
    })

    const fn = {
      // 菜单搜索：忽略大小写
      searchMenu: (value, data) => {
        if (!value) return true
        return data.label.toLowerCase().includes(value.toLowerCase())
      },
      // 点击菜单：如果是二级菜单，根据path 刷新整个页面内容
      clickMenu: async (menu) => {
        if (menu.nameCn) {
          router.push(`/${menu.key}`)
        }
      },
      // 点击示例
      selectDemo: async (demoId) => {
        router.push({ name: 'demo', params: { cmpName: _componentName(), codeFile: demoId } })
        router.push(`/${_componentName()}/${demoId}`)
      },
      openInVscode: (demo) => {
        fetch(`/__open-in-editor?file=../../sites/demos/pc/app/${_componentName()}/${demo.codeFiles[0]}`)
      }
    }

    watch(
      modeState,
      () => {
        _switchPath()
      },
      {
        deep: true,
        immediate: true
      }
    )

    // 以下私有方法，无须传递给vue模板的。
    async function _switchPath() {
      state.demoLoading = true
      const componentName = _componentName()
      // 查找demos配置
      const demosModule = componentName
        ? demos[`../../site/demos/pc/app/${componentName}/webdoc/${componentName}.js`]
        : demos[0]
      const demosConfig = await getDemosConfig(demosModule)
      state.demos = demosConfig.demos
      state.currDemo = state.demos.find((d) => d.demoId === modeState.demoId) || state.demos[0]
      state.currApi = (await getApisConfig(componentName)).apis
      await _switchDemo()
    }

    async function _switchDemo() {
      const componentName = _componentName()
      const path = `../../site/demos/pc/app/${componentName}/${state.currDemo.codeFiles[0]}`
      const comp = await demoVue[path]()
      state.demoLoading = false
      state.comp = hooks.markRaw(comp.default)
    }

    return {
      menuData,
      state,
      fn,
      modeState
    }
  }
}
</script>

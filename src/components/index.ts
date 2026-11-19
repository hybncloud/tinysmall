import ActionMenu from './action-menu'
import Alert from './alert'
import Anchor from './anchor'
import Autocomplete from './autocomplete'
import Badge from './badge'
import BaseSelect from './base-select'
import Breadcrumb from './breadcrumb'
import BreadcrumbItem from './breadcrumb-item'
import Button from './button'
import ButtonGroup from './button-group'
import Calendar from './calendar'
import CalendarView from './calendar-view'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Cascader from './cascader'
import CascaderMenu from './cascader-menu'
import CascaderNode from './cascader-node'
import CascaderPanel from './cascader-panel'
import Checkbox from './checkbox'
import CheckboxButton from './checkbox-button'
import CheckboxGroup from './checkbox-group'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import CollapseTransition from './collapse-transition'
import ConfigProvider from './config-provider'
import DatePanel from './date-panel'
import DatePicker from './date-picker'
import DateRange from './date-range'
import DateTable from './date-table'
import DialogBox from './dialog-box'
import Divider from './divider'
import DropTimes from './drop-times'
import Dropdown from './dropdown'
import DropdownItem from './dropdown-item'
import DropdownMenu from './dropdown-menu'
import Exception from './exception'
import FileUpload from './file-upload'
import Form from './form'
import FormItem from './form-item'
import Guide from './guide'
import Image from './image'
import ImageViewer from './image-viewer'
import Input from './input'
import Layout from './layout'
import Link from './link'
import Loading from './loading'
import Message from './message'
import Modal from './modal'
import MonthRange from './month-range'
import MonthTable from './month-table'
import Notify from './notify'
import Numeric from './numeric'
import Option from './option'
import OptionGroup from './option-group'
import Pager from './pager'
import PagerItem from './pager-item'
import Panel from './panel'
import Picker from './picker'
import PopUpload from './pop-upload'
import Popconfirm from './popconfirm'
import Popover from './popover'
import Popup from './popup'
import Progress from './progress'
import QrCode from './qr-code'
import QuarterPanel from './quarter-panel'
import Radio from './radio'
import RadioButton from './radio-button'
import RadioGroup from './radio-group'
import Rate from './rate'
import RecycleScroller from './recycle-scroller'
import Row from './row'
import ScrollText from './scroll-text'
import Scrollbar from './scrollbar'
import Search from './search'
import SelectDropdown from './select-dropdown'
import Skeleton from './skeleton'
import SkeletonItem from './skeleton-item'
import Slider from './slider'
import Space from './space'
import Statistic from './statistic'
import Steps from './steps'
import Switch from './switch'
import TabItem from './tab-item'
import Tabs from './tabs'
import Tag from './tag'
import Time from './time'
import TimeLine from './time-line'
import TimePanel from './time-panel'
import TimePicker from './time-picker'
import TimeRange from './time-range'
import TimeSelect from './time-select'
import TimeSpinner from './time-spinner'
import TimelineItem from './timeline-item'
import Tooltip from './tooltip'
import Transfer from './transfer'
import TransferPanel from './transfer-panel'
import Tree from './tree'
import TreeSelect from './tree-select'
import Upload from './upload'
import UploadDragger from './upload-dragger'
import UploadList from './upload-list'
import UserHead from './user-head'
import VirtualScrollBox from './virtual-scroll-box'
import VirtualTree from './virtual-tree'
import Watermark from './watermark'
import YearRange from './year-range'
import YearTable from './year-table'
import { version } from 'package.json'
import type { Plugin } from 'vue'

const components = [
  ActionMenu,
  Alert,
  Anchor,
  Autocomplete,
  Badge,
  BaseSelect,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  CalendarView,
  Carousel,
  CarouselItem,
  Cascader,
  CascaderMenu,
  CascaderNode,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  CollapseTransition,
  ConfigProvider,
  DatePanel,
  DatePicker,
  DateRange,
  DateTable,
  DialogBox,
  Divider,
  DropTimes,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Exception,
  FileUpload,
  Form,
  FormItem,
  Guide,
  Image,
  ImageViewer,
  Input,
  Layout,
  Link,
  Loading,
  Message,
  Modal,
  MonthRange,
  MonthTable,
  Notify,
  Numeric,
  Option,
  OptionGroup,
  Pager,
  PagerItem,
  Panel,
  Picker,
  PopUpload,
  Popconfirm,
  Popover,
  Popup,
  Progress,
  QrCode,
  QuarterPanel,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  RecycleScroller,
  Row,
  ScrollText,
  Scrollbar,
  Search,
  SelectDropdown,
  Skeleton,
  SkeletonItem,
  Slider,
  Space,
  Statistic,
  Steps,
  Switch,
  TabItem,
  Tabs,
  Tag,
  Time,
  TimeLine,
  TimePanel,
  TimePicker,
  TimeRange,
  TimeSelect,
  TimeSpinner,
  TimelineItem,
  Tooltip,
  Transfer,
  TransferPanel,
  Tree,
  TreeSelect,
  Upload,
  UploadDragger,
  UploadList,
  UserHead,
  VirtualScrollBox,
  VirtualTree,
  Watermark,
  YearRange,
  YearTable
]

const install: Plugin = (app) => {
  components.forEach((component) => {
    if (typeof component.install !== 'function') return
    component.install(app)
  })
}

export default {
  TinyActionMenu: ActionMenu,
  TinyAlert: Alert,
  TinyAnchor: Anchor,
  TinyAutocomplete: Autocomplete,
  TinyBadge: Badge,
  TinyBaseSelect: BaseSelect,
  TinyBreadcrumb: Breadcrumb,
  TinyBreadcrumbItem: BreadcrumbItem,
  TinyButton: Button,
  TinyButtonGroup: ButtonGroup,
  TinyCalendar: Calendar,
  TinyCalendarView: CalendarView,
  TinyCarousel: Carousel,
  TinyCarouselItem: CarouselItem,
  TinyCascader: Cascader,
  TinyCascaderMenu: CascaderMenu,
  TinyCascaderNode: CascaderNode,
  TinyCascaderPanel: CascaderPanel,
  TinyCheckbox: Checkbox,
  TinyCheckboxButton: CheckboxButton,
  TinyCheckboxGroup: CheckboxGroup,
  TinyCol: Col,
  TinyCollapse: Collapse,
  TinyCollapseItem: CollapseItem,
  TinyCollapseTransition: CollapseTransition,
  TinyConfigProvider: ConfigProvider,
  TinyDatePanel: DatePanel,
  TinyDatePicker: DatePicker,
  TinyDateRange: DateRange,
  TinyDateTable: DateTable,
  TinyDialogBox: DialogBox,
  TinyDivider: Divider,
  TinyDropTimes: DropTimes,
  TinyDropdown: Dropdown,
  TinyDropdownItem: DropdownItem,
  TinyDropdownMenu: DropdownMenu,
  TinyException: Exception,
  TinyFileUpload: FileUpload,
  TinyForm: Form,
  TinyFormItem: FormItem,
  TinyGuide: Guide,
  TinyImage: Image,
  TinyImageViewer: ImageViewer,
  TinyInput: Input,
  TinyLayout: Layout,
  TinyLink: Link,
  TinyLoading: Loading,
  TinyMessage: Message,
  TinyModal: Modal,
  TinyMonthRange: MonthRange,
  TinyMonthTable: MonthTable,
  TinyNotify: Notify,
  TinyNumeric: Numeric,
  TinyOption: Option,
  TinyOptionGroup: OptionGroup,
  TinyPager: Pager,
  TinyPagerItem: PagerItem,
  TinyPanel: Panel,
  TinyPicker: Picker,
  TinyPopUpload: PopUpload,
  TinyPopconfirm: Popconfirm,
  TinyPopover: Popover,
  TinyPopup: Popup,
  TinyProgress: Progress,
  TinyQrCode: QrCode,
  TinyQuarterPanel: QuarterPanel,
  TinyRadio: Radio,
  TinyRadioButton: RadioButton,
  TinyRadioGroup: RadioGroup,
  TinyRate: Rate,
  TinyRecycleScroller: RecycleScroller,
  TinyRow: Row,
  TinyScrollText: ScrollText,
  TinyScrollbar: Scrollbar,
  TinySearch: Search,
  TinySelectDropdown: SelectDropdown,
  TinySkeleton: Skeleton,
  TinySkeletonItem: SkeletonItem,
  TinySlider: Slider,
  TinySpace: Space,
  TinyStatistic: Statistic,
  TinySteps: Steps,
  TinySwitch: Switch,
  TinyTabItem: TabItem,
  TinyTabs: Tabs,
  TinyTag: Tag,
  TinyTime: Time,
  TinyTimeLine: TimeLine,
  TinyTimePanel: TimePanel,
  TinyTimePicker: TimePicker,
  TinyTimeRange: TimeRange,
  TinyTimeSelect: TimeSelect,
  TinyTimeSpinner: TimeSpinner,
  TinyTimelineItem: TimelineItem,
  TinyTooltip: Tooltip,
  TinyTransfer: Transfer,
  TinyTransferPanel: TransferPanel,
  TinyTree: Tree,
  TinyTreeSelect: TreeSelect,
  TinyUpload: Upload,
  TinyUploadDragger: UploadDragger,
  TinyUploadList: UploadList,
  TinyUserHead: UserHead,
  TinyVirtualScrollBox: VirtualScrollBox,
  TinyVirtualTree: VirtualTree,
  TinyWatermark: Watermark,
  TinyYearRange: YearRange,
  TinyYearTable: YearTable,
  version,
  install
}

import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Menu,
  Submenu,
  MenuItem,
  Carousel,
  CarouselItem,
  Input,
  Link,
  Form,
  FormItem,
  Button,
  Checkbox,
  Upload,
  Timeline,
  TimelineItem,
  Icon,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Row,
  Col,
  Select,
  Option,
  Dialog,
  Pagination,
  MessageBox
} from 'element-ui'
import '@/components/ElementUI'

Vue.use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(Carousel)
  .use(CarouselItem)
  .use(Input)
  .use(Link)
  .use(Form)
  .use(FormItem)
  .use(Button)
  .use(Checkbox)
  .use(Upload)
  .use(Timeline)
  .use(TimelineItem)
  .use(Icon)
  .use(Table)
  .use(TableColumn)
  .use(Tabs)
  .use(TabPane)
  .use(Row)
  .use(Col)
  .use(Select)
  .use(Option)
  .use(Dialog)
  .use(Pagination)
  .use(MessageBox)

Vue.prototype.$confirm = MessageBox.confirm

import {
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Checkbox,
  Select,
  Option,
  Button,
  Timeline,
  TimelineItem,
  Table,
  TableColumn,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Icon,
  Row,
  Col,
  Upload,
  Carousel,
  CarouselItem,
  Link,
  MessageBox,
  Message
} from 'element-ui'
const CustomElement = {
  install: function(Vue) {
    Vue.use(Pagination)
      .use(Dialog)
      .use(Menu)
      .use(Submenu)
      .use(MenuItem)
      .use(Input)
      .use(Checkbox)
      .use(Select)
      .use(Option)
      .use(Button)
      .use(Table)
      .use(TableColumn)
      .use(Form)
      .use(FormItem)
      .use(Tabs)
      .use(TabPane)
      .use(Icon)
      .use(Row)
      .use(Col)
      .use(Upload)
      .use(Carousel)
      .use(CarouselItem)
      .use(Link)
      .use(Timeline)
      .use(TimelineItem)
    Vue.prototype.$message = Message
    Vue.prototype.$confirm = MessageBox.confirm
  }
}

export default CustomElement


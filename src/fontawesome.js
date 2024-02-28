//Khởi tạo thư viện icon của riêng bạn
import { library } from "@fortawesome/fontawesome-svg-core";
//Import các icon muốn sử dụng trong từng gói
import {
  faRotateRight,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";

//Add các icon đã được import vào trong thư viện
library.add(faRotateRight, faHighlighter);

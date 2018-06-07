import {Layout,Icon} from 'antd';
import Link from 'umi/link';
import styles from './header.less'
const {Header} = Layout
function MyHeader({ location,collapsed,toggle }) {
  return (
    <Header className={styles.header} >
      <Icon
        className={styles.trigger}
        type={collapsed? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
    </Header>
  );
}

export default MyHeader;

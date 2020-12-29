import React from "react";
import { Row, Col, Input, Button } from "antd";
import styles from "./Signin.module.css";


class Signin extends React.Component {
  state = {
    email: '기본값',
  }
  render() {
    const isEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.state.email,);
    return (
      <form>
        <Row align="middle" className={styles.signin_row}>
          <Col span={24}>
            <Row className={styles.signin_contents}>
              <Col span={12} >
                <img src="/img/bg_signin.jpeg"
                alt="Signin" className={styles.signin_bg}/>
              </Col>
              <Col span={12}>
                <h1 className={styles.signin_title}>My Books</h1>
                <p className={styles.signin_subtitle}>Please Note Your Opinion</p>
                <label className={styles.email_title}>Email<span className={styles.required}> *</span></label>
                <div className={styles.input_area}>
                  {/* <Input name="email" autoComplete="email" placeholder="email" className={styles.input} /> */}
                  <input type="text" value={this.state.email} onChange={this.change}/>
                  {isEmail ? '이메일 맞음' : '이메일 아님'}
                </div>
                <label className={styles.email_title}>Password<span className={styles.required}> *</span></label>
                <div className={styles.input_area}>
                  <Input type="password" autoComplete="current-password" placeholder="email" className={styles.input} />
                </div>
                <div className={styles.button_area}>
                <Button
                  size="large"
                  loading={false}
                  onClick={this.click}
                  className={styles.button}
                >Sign In</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    );
  }

  click = () => {
    console.log('clicked');
  }
  change = (e) => {
    this.setState({email: e.target.value});
  }
};
 
export default Signin;
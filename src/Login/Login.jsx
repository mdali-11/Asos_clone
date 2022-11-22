import { Radio, RadioGroup, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import styles from './login.module.css'
import './login.css'
import LoginForm from './Loginform'
import SignupForm from './SignupForm'

const Login = () => {
        return (
            <>
            <div className={styles.box} >
                <div className={styles.logo} >
                    <img src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png" alt="ASOS Logo" loading="lazy" />
                </div>
                <div className={styles.container} >
                    <Tabs isFitted variant='enclosed' backgroundColor="white" >
                        <TabList mb='1em'>
                            <Tab>JOIN</Tab>
                            <Tab>SIGN IN</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <h1>SIGN UP WITH...</h1>
                                <div className={styles.signUpBox}>
                                    <div className={styles.socialJoin}><img className={styles.socialLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" alt="" />GOOGLE</div>
                                    <div className={styles.socialJoin}><img className={styles.socialLogo} src="https://img.icons8.com/fluency/25/000000/facebook.png" alt="" />FACEBOOK</div>
                                    <div className={styles.socialJoin}><img className={styles.socialLogo} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />APPLE</div>
                                </div>
                                <p>Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil</p>
                                <br></br>
                                <br></br>
                                <h1>OR SIGN UP WITH EMAIL</h1>
                                <br></br>
                                <br></br>
                                <div className={styles.formOuter}>

                                        <SignupForm/>

                                    <p>Forgot Password ?</p>
                                </div>
                                <br></br>
                                <br></br>
                                <h1>OR SIGN IN WITH...</h1>
                            </TabPanel>
                            <TabPanel>
                                <div className={styles.formOuter}>


                                    <LoginForm/>


                                    <p>Forgot Password ?</p>
                                </div>
                                <br></br>
                                <br></br>
                                <h1>OR SIGN IN WITH...</h1>
                                <div className={styles.signInBox}>
                                    <div className={styles.social}><img className={styles.socialLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" alt="" />GOOGLE</div>
                                    <div className={styles.social}><img className={styles.socialLogo} src="https://img.icons8.com/fluency/25/000000/facebook.png" alt="" />FACEBOOK</div>
                                    <div className={styles.social}><img className={styles.socialLogo} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />APPLE</div>
                                    <div className={styles.social}><img className={styles.socialLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="" />TWITTER</div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
                <br></br>
                <br></br>
                <a href='/'>Privacy |</a>
                <a href='/'> Terms and Conditions</a>
                <br></br>
                <br></br>
            </div>
            </>
        )
    }

export default Login
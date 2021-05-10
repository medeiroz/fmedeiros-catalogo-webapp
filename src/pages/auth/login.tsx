import Head from 'next/head';

import React from 'react'
import {
  withAuthUser,
  AuthAction,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import FirebaseAuth from '../../components/FireBaseAuth'

const styles = {
  content: {
    padding: `8px 32px`,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 16,
  },
}

const Auth: React.FC = () => {

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Login | Catálogo</title>
      </Head>

      <main>
        <div style={styles.content}>
          <h3>Sign in</h3>
          <div style={styles.textContainer}>
            <p>
              This auth page is <b>not</b> static. It will server-side redirect to the
              app if the user is already authenticated.
            </p>
          </div>
          <div>
            <FirebaseAuth />
          </div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Auth)

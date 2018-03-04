import React from 'react'
import { Grid } from 'semantic-ui-react'
import LoginModal from './LoginModal'
import NewAccountModal from './NewAccountModal'

const LoginButtons = (props) => (

  <div>
      <Grid>
          <Grid.Row>

              <Grid.Column width={8}>
              </Grid.Column>

              <Grid.Column width={3}>
                    <LoginModal />
              </Grid.Column>

                <Grid.Column width={3}>
                    <NewAccountModal />
              </Grid.Column>

          </Grid.Row>
    </Grid>

 </div>

)

export default LoginButtons
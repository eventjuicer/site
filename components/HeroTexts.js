import React from 'react';
import { withStyles } from 'material-ui/styles';

import ResponsiveText from './ResponsiveText';

const styles = {
  texts: {
    marginLeft: 20,
    marginRight: 20
  }
};

class HeroTexts extends React.Component {
  state = {
    stage: 1
  };

  setStage = stage => {
    this.setState({ stage: stage });
  };

  isStage(stage) {
    return stage === this.state.stage;
  }

  roleSelect = () => {};

  render() {
    const { classes } = this.props;
    const { stage } = this.state;

    return (
      <div className={classes.texts}>
        <ResponsiveText
          visible={true}
          text="A Ty?"
          onShow={() => this.setStage(2)}
        />
        <ResponsiveText
          visible={stage > 1}
          text="Będziesz na Targach?"
          onShow={() => this.setStage(3)}
        />
        {/* <Animate visible={ stage > 2 } >
        <RoleSelector roles={["exhibitor", "visitor"]} />
        </Animate> */}
      </div>
    );
  }
}

HeroTexts.defaultProps = {};

export default withStyles(styles)(HeroTexts);

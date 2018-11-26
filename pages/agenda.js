import {
  connect,
  MyHead as Head,
  LayoutMain as Layout,
  WidgetVisitor,
  WidgetPresenters,
} from 'eventjuicer-site-components';

class PageAgenda extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'presenters'],
    };
  }

  render() {
    const { router } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetPresenters />

        <WidgetVisitor label="visitors.register_alt" />
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageAgenda);

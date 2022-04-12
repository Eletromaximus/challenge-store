import WebSitePageWrapper from '..'
import WebSiteGlobalProvider from '../provider'

export default function websitePageHoc (PageComponent: any,
  { pageWrapperProps } = { pageWrapperProps: {} }
) {
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    <WebSiteGlobalProvider>
      <WebSitePageWrapper
        {...pageWrapperProps}
        {...props.pageWrapperProps}
      >
        <PageComponent {...props} />
      </WebSitePageWrapper>
    </WebSiteGlobalProvider>
  )
}

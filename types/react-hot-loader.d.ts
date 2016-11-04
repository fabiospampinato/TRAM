declare module 'react-hot-loader' {
  import React = __React

  interface AppContainerProps {
    children?: React.ReactElement<any>
  }

  export class AppContainer extends React.Component<AppContainerProps, {}> {}
}
import { Button, NavigationBar } from '@my-page/design-system';

function App() {

  return (
    <>
      <NavigationBar
        pages={['Template', 'Dashboard', 'About']}
        settings={['Dashboard', 'Settings']}
        profile={{
          avatarUrl: '',
          name: ''
        }}
      />
    </>
  );
}

export default App;

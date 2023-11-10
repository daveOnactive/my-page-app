import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Button, Link, Text, Menu } from ".";
import { Icon, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";

type IProps = {
  projectName: string;
  projectUrl: string;
  goToProject?: () => void;
};

export const ProjectItem = (props: IProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        minHeight: 50,
        height: 150,
        display: 'flex',
      }}
    >
      <Box sx={{
        height: '100%',
        width: 300,
        background: grey[400]
      }}></Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Box pb={2}>
          <Text variant="h6" fontWeight={500}>
            {props.projectName}
          </Text>
          <Link href={props.projectUrl}>
            {props.projectUrl}
          </Link>
        </Box>
        
        <Box>
          <Button variant="contained" color='secondary' onClick={props.goToProject}>
            Go to project
          </Button>
        </Box>
        
      </Box>


      <Menu
        component={
          <IconButton sx={{mt: 2}}>
            <Icon>more_horiz</Icon>
          </IconButton>
        }
        options={[
          'Settings',
          'Delete',
        ]}
      />
    </Card>
  );
};
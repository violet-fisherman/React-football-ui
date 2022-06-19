import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      color: 'lime',
      backgroundColor: 'white'
    }
  });

const Categories = () => {
    const classes = useStyles();
    return (
        <div>
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Button className={classes.button}>Schedule</Button>
                <Button className={classes.button}>Leagues</Button>
                <Button className={classes.button}>International</Button>
                <Button className={classes.button}>Column</Button>
                <Button className={classes.button}>Account</Button>
            </ButtonGroup>
        </div>
    );
};

export default Categories;
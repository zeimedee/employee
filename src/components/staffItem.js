import React,{ useState } from 'react'
import PropTypes from "prop-types"

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import DetailsModal from './detailsModal'

function StaffItem({name, id, names,age, salary}) {
    const [dense, setDense] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose=(e)=>{
        e.preventDefault();
        setOpen(false);
        console.log(`close button fired ${open}`)
    }
    const handleOpen=(e)=>{
        e.preventDefault();
        setOpen(true);
    }
    
    return (
        <List dense={dense}>
        <ListItem>
        <ListItemAvatar>
            <Avatar>
            <AccountCircleIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText>{name}</ListItemText>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
            <FolderIcon onClick={handleOpen} />
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
        <DetailsModal id={id} name={names} age={age} salary={salary} open={open} handleClose={handleClose} />
    </List>
    )
}

StaffItem.propTypes ={
    name: PropTypes.string
}

export default StaffItem

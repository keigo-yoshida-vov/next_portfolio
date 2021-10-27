import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { Menu } from '@mui/icons-material'
import scss from './full-screen-dialog.module.scss'
import { ActionAreaCard } from '@/components/atoms/Cards/ActionAreaCard/ActionAreaCard'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />
})

export const FullScreenDialog = () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const onClickCard = () => {
        alert('click')
    }
    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} className={`${scss.menu_size}`}>
                <Menu />
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className={`${scss.gray}`}
            >
                <AppBar sx={{ position: 'relative' }} color='default'>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            MENU
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={`${scss.card_flex}`}>
                    <ActionAreaCard image='cat.jpg' color='gray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                    <ActionAreaCard image='cat.jpg' color='lightgray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                    <ActionAreaCard image='cat.jpg' color='gray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                    <ActionAreaCard image='cat.jpg' color='lightgray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                    <ActionAreaCard image='cat.jpg' color='gray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                    <ActionAreaCard image='cat.jpg' color='lightgray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                    <ActionAreaCard image='cat.jpg' color='gray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                    <ActionAreaCard image='cat.jpg' color='lightgray' size={300} onClick={onClickCard}>
                        <p>title</p>
                    </ActionAreaCard>
                </div>
            </Dialog>
        </div>
    )
}
